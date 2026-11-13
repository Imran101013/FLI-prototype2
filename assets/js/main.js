/*
 * Forum for Language Initiatives (FLI) — HTML prototype interactions.
 * Plain JavaScript, no dependencies. Content for search and the language
 * profiles comes from assets/js/data.js (window.FLI_DATA).
 *
 * Every feature is wired through data-* attributes, so a block can be removed
 * from a page without breaking the others.
 */
(function () {
  'use strict';

  var DATA = window.FLI_DATA || { languages: [], pages: [], pubs: [], news: [], newsletters: [] };
  var BASE = document.body.getAttribute('data-base') || '';
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var params = new URLSearchParams(window.location.search);
  // Swap one set of classes for another (used for active/inactive tabs).
  var swap = function (el, add, remove) {
    remove.forEach(function (c) { el.classList.remove(c); });
    add.forEach(function (c) { el.classList.add(c); });
  };
  // A plain left click; modified clicks keep their "open in new tab" behaviour.
  var plainClick = function (e) { return !(e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0); };
  // Update a query parameter in the address bar without reloading (null removes it).
  var setParam = function (name, value) {
    if (!window.history || !history.replaceState) return;
    var u = new URL(window.location.href);
    if (value == null) u.searchParams.delete(name); else u.searchParams.set(name, value);
    history.replaceState(null, '', u.pathname + u.search + u.hash);
  };

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function storage(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* ------------------------------------------------------------------ *
   * Modal helper: open/close, ESC, backdrop click, focus return.
   * ------------------------------------------------------------------ */
  var openModal = null;
  var lastFocus = null;
  function showModal(el, focusEl) {
    if (openModal && openModal !== el) hideModal(openModal);
    lastFocus = document.activeElement;
    el.classList.remove('hidden');
    el.classList.add('flex');
    document.documentElement.classList.add('overflow-hidden');
    openModal = el;
    window.setTimeout(function () { (focusEl || el.querySelector('button, a, input')).focus(); }, 20);
  }
  function hideModal(el) {
    el.classList.add('hidden');
    el.classList.remove('flex');
    document.documentElement.classList.remove('overflow-hidden');
    if (openModal === el) openModal = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openModal) { e.preventDefault(); hideModal(openModal); }
    if (e.key === 'Tab' && openModal) {
      var f = $$('a[href], button:not([disabled]), input, select, textarea', openModal).filter(function (x) { return x.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  function bindBackdrop(el) {
    el.addEventListener('click', function (e) { if (e.target === el) hideModal(el); });
  }

  /* ------------------------------------------------------------------ *
   * Header: height variable for sticky sub-navigation, mobile drawer,
   * dropdown aria-expanded state.
   * ------------------------------------------------------------------ */
  var header = $('[data-site-header]');
  function setHeaderHeight() {
    if (header) document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
  }
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);

  var toggle = $('[data-mobile-toggle]');
  var drawer = $('#mobile-nav');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = drawer.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      $('[data-icon-open]', toggle).classList.toggle('hidden', open);
      $('[data-icon-close]', toggle).classList.toggle('hidden', !open);
      setHeaderHeight();
    });
  }

  $$('[data-dropdown]').forEach(function (dd) {
    var trigger = dd.querySelector('[aria-haspopup]');
    var set = function (v) { trigger.setAttribute('aria-expanded', String(v)); };
    dd.addEventListener('mouseenter', function () { set(true); });
    dd.addEventListener('mouseleave', function () { set(false); });
    dd.addEventListener('focusin', function () { set(true); });
    dd.addEventListener('focusout', function (e) { if (!dd.contains(e.relatedTarget)) set(false); });
    dd.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { set(false); trigger.focus(); dd.classList.add('dropdown-closed'); }
    });
    dd.addEventListener('mouseleave', function () { dd.classList.remove('dropdown-closed'); });
    trigger.addEventListener('focus', function () { dd.classList.remove('dropdown-closed'); });
  });

  /* ------------------------------------------------------------------ *
   * Global search
   * ------------------------------------------------------------------ */
  var searchModal = $('[data-search-modal]');
  var searchInput = $('[data-search-input]');
  var searchResults = $('[data-search-results]');
  var SUGGESTIONS = ['Palula', 'Gawri', 'Khowar', 'Ormuri', 'Torwali', 'Balti', 'FEL 2024', 'Henrik Liljegren', 'Newsletter', 'Keyboards'];

  function icon(name) {
    var paths = {
      file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
      lang: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
      book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
      news: '<path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/>',
      arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
    };
    return '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths[name] + '</svg>';
  }

  function resultGroup(title, ic, items, render) {
    if (!items.length) return '';
    return '<div class="space-y-1.5 pt-2 first:pt-0">' +
      '<div class="font-bold text-[11px] uppercase tracking-wider text-[#5B0404] flex items-center gap-1.5"><span class="text-[#084A79]">' + icon(ic) + '</span><span>' + title + ' (' + items.length + ')</span></div>' +
      '<ul class="space-y-1">' + items.map(render).join('') + '</ul></div>';
  }
  function resultItem(href, title, meta) {
    return '<li><a href="' + href + '" class="w-full text-left p-2.5 rounded-lg hover:bg-[#FAF2F2] focus:bg-[#FAF2F2] focus:outline-none transition-colors flex items-center justify-between gap-3 group">' +
      '<span><span class="block font-semibold text-xs text-[#5B0404]">' + title + '</span><span class="block text-[11px] text-[#6b7280]">' + meta + '</span></span>' +
      '<span class="text-[#9ca3af] group-hover:text-[#5B0404] shrink-0">' + icon('arrow') + '</span></a></li>';
  }

  function renderSearch() {
    if (!searchResults) return;
    var raw = searchInput.value.trim();
    var q = raw.toLowerCase();
    $('[data-search-clear]').classList.toggle('hidden', !raw);
    if (q.length < 2) {
      searchResults.innerHTML = '<div class="py-8 text-center text-xs text-[#6b7280] space-y-2"><p>Type at least two letters to search FLI’s languages, publications, newsletters, news and pages.</p>' +
        '<div class="flex flex-wrap items-center justify-center gap-1.5 pt-2"><span class="text-[11px] text-[#9ca3af]">Try:</span>' +
        SUGGESTIONS.map(function (s) { return '<button type="button" data-suggest="' + escapeHtml(s) + '" class="text-xs bg-[#f4f1eb] hover:bg-[#e7e2d8] text-[#5B0404] px-2.5 py-1 rounded-md transition-colors">' + escapeHtml(s) + '</button>'; }).join('') +
        '</div></div>';
      return;
    }
    var has = function (s) { return String(s || '').toLowerCase().indexOf(q) !== -1; };
    var pages = DATA.pages.filter(function (p) { return has(p.title) || has(p.desc) || has(p.keywords); }).slice(0, 5);
    var langs = DATA.languages.filter(function (l) { return has(l.name) || l.native.indexOf(raw) !== -1 || has(l.region) || has(l.family) || has(l.code); }).slice(0, 6);
    var pubs = DATA.pubs.filter(function (p) { return has(p.title) || (p.native && p.native.indexOf(raw) !== -1) || has(p.author) || has(p.lang) || p.year === raw; }).slice(0, 6);
    var news = DATA.news.filter(function (n) { return has(n.title) || has(n.summary) || has(n.location); }).slice(0, 4);
    var nls = DATA.newsletters.filter(function (n) { return has(n.title) || has(n.period) || n.year === raw; }).slice(0, 4);
    var total = pages.length + langs.length + pubs.length + news.length + nls.length;
    if (!total) {
      searchResults.innerHTML = '<div class="py-8 text-center text-xs text-[#6b7280]">No results for “' + escapeHtml(raw) + '”. Try another search term.</div>';
      return;
    }
    searchResults.innerHTML =
      resultGroup('Pages', 'file', pages, function (p) { return resultItem(BASE + p.href, escapeHtml(p.title), escapeHtml(p.desc)); }) +
      resultGroup('Target Languages', 'lang', langs, function (l) {
        return resultItem(BASE + (l.page ? 'languages/' + l.id + '.html' : 'languages.html#' + l.id), escapeHtml(l.name) + ' <span class="font-nastaliq text-[#6b7280] font-normal">(' + l.native + ')</span>', escapeHtml(l.family + ' · ' + l.status + ' · ISO ' + l.code));
      }) +
      resultGroup('Publications', 'book', pubs, function (p) {
        return resultItem(BASE + p.page + '?q=' + encodeURIComponent(p.title), escapeHtml(p.title), escapeHtml([p.author, p.lang, p.year].filter(Boolean).join(' · ')));
      }) +
      resultGroup('News', 'news', news, function (n) { return resultItem(BASE + 'news/' + n.slug + '.html', escapeHtml(n.title), escapeHtml(n.date + ' · ' + n.location)); }) +
      resultGroup('Newsletters', 'file', nls, function (n) { return resultItem(BASE + 'newsletters.html?q=' + encodeURIComponent(n.title), escapeHtml(n.title), escapeHtml(n.period + ' · ' + n.format)); });
  }

  if (searchModal) {
    bindBackdrop(searchModal);
    $$('[data-search-open]').forEach(function (b) {
      b.addEventListener('click', function () { showModal(searchModal, searchInput); renderSearch(); });
    });
    $('[data-search-close]').addEventListener('click', function () { hideModal(searchModal); });
    $('[data-search-clear]').addEventListener('click', function () { searchInput.value = ''; renderSearch(); searchInput.focus(); });
    searchInput.addEventListener('input', renderSearch);
    searchResults.addEventListener('click', function (e) {
      var s = e.target.closest('[data-suggest]');
      if (s) { searchInput.value = s.getAttribute('data-suggest'); renderSearch(); searchInput.focus(); }
    });
    document.addEventListener('keydown', function (e) {
      var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
      if ((e.key === '/' && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault(); showModal(searchModal, searchInput); renderSearch();
      }
    });
  }

  /* ------------------------------------------------------------------ *
   * Target Languages directory filters
   * ------------------------------------------------------------------ */
  var lf = $('[data-lang-filters]');
  if (lf) {
    var q = $('[data-filter-q]', lf), fam = $('[data-filter-family]', lf), st = $('[data-filter-status]', lf), reset = $('[data-filter-reset]', lf);
    var cards = $$('[data-lang-card]');
    var applyLang = function () {
      var term = q.value.trim().toLowerCase(), n = 0;
      cards.forEach(function (c) {
        var ok = (!term || c.getAttribute('data-search').indexOf(term) !== -1) &&
          (fam.value === 'all' || c.getAttribute('data-family') === fam.value) &&
          (st.value === 'all' || c.getAttribute('data-status') === st.value);
        c.classList.toggle('hidden', !ok);
        if (ok) n++;
      });
      $('[data-filter-count]').textContent = n;
      $('[data-filter-empty]').classList.toggle('hidden', n > 0);
      reset.classList.toggle('hidden', !(term || fam.value !== 'all' || st.value !== 'all'));
    };
    [q, fam, st].forEach(function (el) { el.addEventListener('input', applyLang); el.addEventListener('change', applyLang); });
    reset.addEventListener('click', function () { q.value = ''; fam.value = 'all'; st.value = 'all'; applyLang(); q.focus(); });
    if (params.get('q')) { q.value = params.get('q'); applyLang(); }
  }

  /* ------------------------------------------------------------------ *
   * Language map: region explorer
   * ------------------------------------------------------------------ */
  var explorer = $('[data-region-explorer]');
  if (explorer) {
    explorer.addEventListener('click', function (e) {
      var tab = e.target.closest('[data-region-tab]');
      if (!tab) return;
      var i = tab.getAttribute('data-region-tab');
      $$('[data-region-tab]', explorer).forEach(function (t) { t.setAttribute('aria-pressed', String(t === tab)); });
      $$('[data-region-panel]', explorer).forEach(function (p) { p.classList.toggle('hidden', p.getAttribute('data-region-panel') !== i); });
    });
  }

  /* ------------------------------------------------------------------ *
   * Publications library: series tabs + search + cards/table view
   * ------------------------------------------------------------------ */
  var lib = $('[data-pub-library]');
  if (lib) {
    var pq = $('[data-pub-q]', lib);
    var cardsWrap = $('[data-pub-cards]', lib), tableWrap = $('[data-pub-table]', lib);
    var seriesTabs = $$('[data-pub-series]', lib);
    var series = 'all';
    var TAB_ON = ['bg-[#5B0404]', 'text-white', 'shadow-xs'];
    var TAB_OFF = ['bg-white', 'text-[#4b5563]', 'border', 'border-[#d5cfc5]', 'hover:bg-[#f0ece3]'];
    var BADGE_ON = ['bg-white/20', 'text-white'];
    var BADGE_OFF = ['bg-[#e5dfd5]', 'text-[#1F1414]'];
    var matches = function (el, term) {
      return (series === 'all' || el.getAttribute('data-series') === series) &&
        (!term || el.getAttribute('data-search').indexOf(term) !== -1);
    };
    // Tab badges reflect the actual number of items in each series.
    seriesTabs.forEach(function (tab) {
      var key = tab.getAttribute('data-pub-series');
      var badge = $('[data-pub-series-count]', tab);
      if (badge) badge.textContent = $$('[data-pub-cards] [data-pub-item]' + (key === 'all' ? '' : '[data-series="' + key + '"]'), lib).length;
    });
    var setSeries = function (key) {
      var tab = seriesTabs.filter(function (t) { return t.getAttribute('data-pub-series') === key; })[0];
      if (!tab) key = 'all';
      series = key;
      seriesTabs.forEach(function (t) {
        var on = t.getAttribute('data-pub-series') === key;
        swap(t, on ? TAB_ON : TAB_OFF, on ? TAB_OFF : TAB_ON);
        var badge = $('[data-pub-series-count]', t);
        if (badge) swap(badge, on ? BADGE_ON : BADGE_OFF, on ? BADGE_OFF : BADGE_ON);
        if (on) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
      });
      $$('[data-pub-series-desc]', lib).forEach(function (d) { d.classList.toggle('hidden', d.getAttribute('data-pub-series-desc') !== key); });
    };
    var applyPubs = function () {
      var term = pq.value.trim().toLowerCase();
      var shown = 0, row = 0;
      $$('[data-pub-cards] [data-pub-item]', lib).forEach(function (el) {
        var ok = matches(el, term);
        el.classList.toggle('hidden', !ok);
        if (ok) shown++;
      });
      $$('[data-pub-table] [data-pub-item]', lib).forEach(function (el) {
        var ok = matches(el, term);
        el.classList.toggle('hidden', !ok);
        // Keep the "#" column sequential for whatever is currently visible.
        if (ok && seriesTabs.length && el.cells[0]) el.cells[0].textContent = ++row;
      });
      $('[data-pub-count]', lib).textContent = shown;
      $('[data-pub-empty]', lib).classList.toggle('hidden', shown > 0);
      var view = $('[data-pub-view][aria-pressed="true"]', lib).getAttribute('data-pub-view');
      cardsWrap.classList.toggle('hidden', view !== 'cards' || !shown);
      tableWrap.classList.toggle('hidden', view !== 'table' || !shown);
    };
    var setView = function (v) {
      $$('[data-pub-view]', lib).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-pub-view') === v)); });
      storage('fli-pub-view', v);
      applyPubs();
    };
    $$('[data-pub-view]', lib).forEach(function (b) { b.addEventListener('click', function () { setView(b.getAttribute('data-pub-view')); }); });
    seriesTabs.forEach(function (t) {
      t.addEventListener('click', function (e) {
        if (!plainClick(e)) return;
        e.preventDefault();
        setSeries(t.getAttribute('data-pub-series'));
        applyPubs();
        setParam('series', series === 'all' ? null : series);
      });
    });
    pq.addEventListener('input', applyPubs);
    if (params.get('q')) pq.value = params.get('q');
    if (seriesTabs.length) setSeries(params.get('series') || 'all');
    setView(storage('fli-pub-view') === 'table' ? 'table' : 'cards');
  }

  /* ------------------------------------------------------------------ *
   * Digital Resources: "All Resources" shows every section, other tabs one
   * ------------------------------------------------------------------ */
  var resNav = $('[data-res-tabs]');
  if (resNav) {
    var resTabs = $$('[data-res-tab]', resNav);
    var RES_ON = ['bg-[#5B0404]', 'text-white', 'shadow-xs'];
    var RES_OFF = ['text-[#6E5D57]', 'hover:text-[#5B0404]', 'hover:bg-[#f0ece3]'];
    var showRes = function (key) {
      if (!resTabs.some(function (t) { return t.getAttribute('data-res-tab') === key; })) key = 'all';
      resTabs.forEach(function (t) {
        var on = t.getAttribute('data-res-tab') === key;
        swap(t, on ? RES_ON : RES_OFF, on ? RES_OFF : RES_ON);
        if (on) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
      });
      $$('[data-res-panel]').forEach(function (p) {
        p.classList.toggle('hidden', key !== 'all' && p.getAttribute('data-res-panel') !== key);
      });
      return key;
    };
    resTabs.forEach(function (t) {
      t.addEventListener('click', function (e) {
        if (!plainClick(e)) return;
        e.preventDefault();
        var key = showRes(t.getAttribute('data-res-tab'));
        setParam('tab', key === 'all' ? null : key);
      });
    });
    showRes(params.get('tab') || 'all');
  }

  /* ------------------------------------------------------------------ *
   * Newsletters: search + year filter
   * ------------------------------------------------------------------ */
  var nl = $('[data-nl-library]');
  if (nl) {
    var nq = $('[data-nl-q]', nl);
    var year = 'all';
    var applyNl = function () {
      var term = nq.value.trim().toLowerCase(), n = 0;
      $$('[data-nl-item]', nl).forEach(function (el) {
        var ok = (year === 'all' || el.getAttribute('data-year') === year) && (!term || el.getAttribute('data-search').indexOf(term) !== -1);
        el.classList.toggle('hidden', !ok);
        if (ok) n++;
      });
      $('[data-nl-count]', nl).textContent = n;
      $('[data-nl-empty]', nl).classList.toggle('hidden', n > 0);
    };
    $$('[data-nl-year]', nl).forEach(function (b) {
      b.addEventListener('click', function () {
        year = b.getAttribute('data-nl-year');
        $$('[data-nl-year]', nl).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        applyNl();
      });
    });
    nq.addEventListener('input', applyNl);
    if (params.get('q')) { nq.value = params.get('q'); applyNl(); }
  }

  /* ------------------------------------------------------------------ *
   * Fonts: live type tester
   * ------------------------------------------------------------------ */
  var tt = $('[data-type-tester]');
  if (tt) {
    var area = $('[data-tt-text]', tt), size = $('[data-tt-size]', tt), font = $('[data-tt-font]', tt);
    size.addEventListener('input', function () { area.style.fontSize = size.value + 'px'; $('[data-tt-size-label]', tt).textContent = size.value; });
    font.addEventListener('change', function () { area.style.fontFamily = font.value; });
    $$('[data-tt-sample]', tt).forEach(function (b) { b.addEventListener('click', function () { area.value = b.getAttribute('data-tt-sample'); area.focus(); }); });
  }

  /* ------------------------------------------------------------------ *
   * Forms (prototype only — nothing is sent anywhere)
   * ------------------------------------------------------------------ */
  $$('[data-subscribe-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = $('[data-subscribe-success]', form.parentNode);
      form.reset();
      if (ok) { ok.classList.remove('hidden'); ok.classList.add('flex'); window.setTimeout(function () { ok.classList.add('hidden'); ok.classList.remove('flex'); }, 5000); }
    });
  });

  var cform = $('[data-contact-form]');
  if (cform) {
    var success = $('[data-contact-success]'), err = $('[data-contact-error]');
    cform.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!cform.checkValidity()) {
        err.classList.remove('hidden');
        var bad = cform.querySelector(':invalid');
        if (bad) bad.focus();
        return;
      }
      err.classList.add('hidden');
      cform.classList.add('hidden');
      success.classList.remove('hidden');
      success.setAttribute('tabindex', '-1');
      success.focus();
    });
    $('[data-contact-reset]').addEventListener('click', function () {
      cform.reset();
      success.classList.add('hidden');
      cform.classList.remove('hidden');
      $('input', cform).focus();
    });
    var lang = params.get('language');
    if (lang) $('#c-lang').value = lang;
  }

  /* ------------------------------------------------------------------ *
   * Lightbox for maps and charts
   * ------------------------------------------------------------------ */
  var lb = $('[data-lightbox]');
  if (lb) {
    bindBackdrop(lb);
    $('[data-lightbox-close]', lb).addEventListener('click', function () { hideModal(lb); });
    $$('[data-lightbox-open]').forEach(function (b) {
      b.addEventListener('click', function () {
        var img = $('[data-lightbox-img]', lb);
        img.src = b.getAttribute('data-lightbox-open');
        img.alt = b.getAttribute('data-lightbox-alt') || '';
        showModal(lb, $('[data-lightbox-close]', lb));
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * Motion: entrance animations and number counters. Both copy free
   * Elementor features (Motion Effects › Entrance Animation; Counter widget).
   * Only runs on pages whose <head> adds .fli-anim to <html>.
   * ------------------------------------------------------------------ */
  var root = document.documentElement;
  if (root.classList.contains('fli-anim')) {
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      root.classList.remove('fli-anim');
    } else {
      root.classList.add('fli-anim-ready');

      // Counters: "2,000+" counts 0 → 2,000 keeping its prefix, suffix and separator.
      // Screen readers get the final figure; the moving number is aria-hidden.
      var formatCount = function (c, n) {
        var s = String(n);
        if (c.comma) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return c.pre + s + c.post;
      };
      var counters = [];
      $$('[data-counter]').forEach(function (el) {
        var text = el.textContent.trim();
        var m = text.match(/^(\D*)(\d[\d,]*)(.*)$/);
        if (!m) return;
        var c = { el: el, pre: m[1], to: parseInt(m[2].replace(/,/g, ''), 10), comma: m[2].indexOf(',') !== -1, post: m[3] };
        c.num = document.createElement('span');
        c.num.setAttribute('aria-hidden', 'true');
        c.num.textContent = formatCount(c, 0);
        var sr = document.createElement('span');
        sr.className = 'sr-only';
        sr.textContent = text;
        el.textContent = '';
        el.appendChild(c.num);
        el.appendChild(sr);
        counters.push(c);
      });
      var countUp = function (c) {
        var start = null, duration = 1800;
        var step = function (t) {
          if (start === null) start = t;
          var p = Math.min((t - start) / duration, 1);
          c.num.textContent = formatCount(c, Math.round(c.to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
      };

      var reveal = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          reveal.unobserve(en.target);
          if (en.target.hasAttribute('data-animate')) en.target.classList.add('is-animated');
          var c = counters.filter(function (x) { return x.el === en.target; })[0];
          if (c) countUp(c);
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      $$('[data-animate]').forEach(function (el) {
        var delay = el.getAttribute('data-animate-delay');
        if (delay) el.style.animationDelay = delay + 'ms';
        reveal.observe(el);
      });
      counters.forEach(function (c) { if (!c.el.hasAttribute('data-animate')) reveal.observe(c.el); });
    }
  }

  /* ------------------------------------------------------------------ *
   * Back to top
   * ------------------------------------------------------------------ */
  $$('[data-scroll-top]').forEach(function (b) {
    b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  });
})();
