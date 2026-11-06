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
  function resultItem(href, title, meta, extraAttr) {
    return '<li><a href="' + href + '"' + (extraAttr || '') + ' class="w-full text-left p-2.5 rounded-lg hover:bg-[#FAF2F2] focus:bg-[#FAF2F2] focus:outline-none transition-colors flex items-center justify-between gap-3 group">' +
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
        return resultItem(BASE + 'languages.html?lang=' + l.id, escapeHtml(l.name) + ' <span class="font-nastaliq text-[#6b7280] font-normal">(' + l.native + ')</span>', escapeHtml(l.family + ' · ' + l.status + ' · ISO ' + l.code), ' data-search-lang="' + l.id + '"');
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
      if (s) { searchInput.value = s.getAttribute('data-suggest'); renderSearch(); searchInput.focus(); return; }
      var l = e.target.closest('[data-search-lang]');
      if (l && $('[data-lang-modal]')) { e.preventDefault(); hideModal(searchModal); openLanguage(l.getAttribute('data-search-lang')); }
    });
    document.addEventListener('keydown', function (e) {
      var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
      if ((e.key === '/' && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault(); showModal(searchModal, searchInput); renderSearch();
      }
    });
  }

  /* ------------------------------------------------------------------ *
   * Language profile modal
   * ------------------------------------------------------------------ */
  var langModal = $('[data-lang-modal]');
  function openLanguage(id) {
    var l = DATA.languages.filter(function (x) { return x.id === id; })[0];
    if (!l || !langModal) return;
    var set = function (k, v) { var el = $('[data-lm="' + k + '"]', langModal); if (el) el.textContent = v; };
    set('code', l.code); set('family', l.family); set('name', l.name); set('native', l.native);
    set('status', l.status); set('speakers', l.speakers); set('script', l.script); set('region', l.region);
    set('short', l.name.split(' ')[0]);
    $('[data-lm="desc"]', langModal).innerHTML = l.desc.map(function (p) { return '<p>' + escapeHtml(p) + '</p>'; }).join('');
    var res = $('[data-lm="resources"]', langModal);
    res.innerHTML = l.resources.map(function (r) {
      var href = r.internal ? BASE + r.href : r.href;
      return '<li><a class="text-[#5B0404] font-semibold hover:underline" href="' + href + '"' + (r.internal ? '' : ' target="_blank" rel="noopener"') + '>' + escapeHtml(r.label) + '</a></li>';
    }).join('');
    $('[data-lm="resources-wrap"]', langModal).classList.toggle('hidden', !l.resources.length);
    $('[data-lm="pubs"]', langModal).setAttribute('href', BASE + 'publications.html?q=' + encodeURIComponent(l.name.split(' ')[0]));
    var pageLink = $('[data-lm="page"]', langModal);
    pageLink.setAttribute('href', BASE + 'languages/' + l.id + '.html');
    pageLink.classList.toggle('hidden', !l.page);
    showModal(langModal, $('[data-lang-close]', langModal));
  }
  if (langModal) {
    bindBackdrop(langModal);
    $('[data-lang-close]', langModal).addEventListener('click', function () { hideModal(langModal); });
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-lang-open]');
      if (t) { e.preventDefault(); openLanguage(t.getAttribute('data-lang-open')); }
    });
    if (params.get('lang')) openLanguage(params.get('lang'));
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
   * Publications library: search + cards/table view
   * ------------------------------------------------------------------ */
  var lib = $('[data-pub-library]');
  if (lib) {
    var pq = $('[data-pub-q]', lib);
    var cardsWrap = $('[data-pub-cards]', lib), tableWrap = $('[data-pub-table]', lib);
    var applyPubs = function () {
      var term = pq.value.trim().toLowerCase();
      var shown = 0;
      $$('[data-pub-cards] [data-pub-item]', lib).forEach(function (el) {
        var ok = !term || el.getAttribute('data-search').indexOf(term) !== -1;
        el.classList.toggle('hidden', !ok);
        if (ok) shown++;
      });
      $$('[data-pub-table] [data-pub-item]', lib).forEach(function (el) {
        el.classList.toggle('hidden', !(!term || el.getAttribute('data-search').indexOf(term) !== -1));
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
    pq.addEventListener('input', applyPubs);
    if (params.get('q')) pq.value = params.get('q');
    setView(storage('fli-pub-view') === 'table' ? 'table' : 'cards');
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
   * Back to top
   * ------------------------------------------------------------------ */
  $$('[data-scroll-top]').forEach(function (b) {
    b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  });
})();
