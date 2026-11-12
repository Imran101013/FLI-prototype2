# Forum for Language Initiatives (FLI) — HTML Prototype

A static HTML/CSS/JS prototype of the redesigned **fli-online.org**, intended as the reference for rebuilding the site in WordPress with **Elementor (free)**. It contains only pages that exist on the live site, populated with the live site's content.

Long lists are cut to a sample, since this is a prototype: 3 publications per series, the 3 latest newsletters and the 3 latest news posts. The full lists are in git history (commit `152e163` and earlier).

No build step, server or Node.js is needed. Open `index.html` in a browser (double-click works). Every page shares the same header, footer and search.

```
index.html                 Home
*.html                     One file per WordPress page (see the page map below)
languages/<language>.html  The 28 individual language pages
news/<post>.html           The 3 latest news posts
assets/css/styles.css      Compiled stylesheet (all pages use this)
assets/css/tailwind-source.css   Source for styles.css (only needed to regenerate it)
assets/js/main.js          Interactions: menus, search, filters, forms
assets/js/data.js          Site search index
assets/img/                Images (logo/favicon, photos from fli-online.org, hero images)
```

## Page map (prototype → live site)

| Prototype file | Live page |
|---|---|
| `index.html` | `/` |
| **About** | |
| `about-us.html` (Who We Are / Quick About FLI) | `/about-us/` (menu label on live site: "Our Success Stories") |
| `our-values.html` | `/our-values/` |
| `our-objectives.html` | `/our-objectives/` |
| `fli-executive-board.html` | `/fli-executive-board/` (+ the individual bio pages, shown as expandable profiles) |
| `success-stories.html` | `/success-stories/` |
| `impact-stories.html` | `/xxxx-2/` ("Impact Stories") |
| **Target Languages** | |
| `languages.html` | `/languages/` |
| `languages/<id>.html` (28 pages) | `/site/<language>/` (Gawarbati's live link points to `/site/domaaki/`; Domaaki is at `/domaaki-2/`) |
| `language-map.html` | `/language-map-2/` |
| `language-tree.html` | `/language-tree/` |
| `language-relatedness.html` | `/language-relatedness/` |
| **Programs & Training** | |
| `equipping-the-communities.html` | `/equipping-the-communities/` |
| `discovery-course.html` | `/discovery/` |
| `mle-committee-training.html` | `/mle-committee-training/` |
| `curriculum-and-materials-development.html` | `/curriculum-and-materials-development/` |
| **Publications** | |
| `publications.html` | `/flis-publications/` |
| `publications.html?series=vernacular` | `/publication-series-of-local-language-literature/` |
| `publications.html?series=language-culture` | `/language-culture-series/` |
| `publications.html?series=other` | `/other-books-published-by-fli/` |
| `publications.html?series=translated` | `/materials-translated-by-fli-into-urdu/` |
| `newsletters.html` | `/newsletters/` |
| **Resources** | |
| `digital-resources.html` | `/digital-resources/` (all sections) |
| `digital-resources.html?tab=fonts` | `/fonts/` |
| `digital-resources.html?tab=keyboards` | `/fli-pc-keyboards-2/` |
| `digital-resources.html?tab=software` | `/software/` (also covers `/research-tools/`, whose three tools are all listed here) |
| `digital-resources.html?tab=covid-19` | `/covid-19/` |
| `digital-resources.html?tab=windows` | `/windows-configuration-settings-for-pakistani-languages/` |
| **Advocacy & Networking** | |
| `advocacy-awareness.html` | `/advocacy-awareness/` |
| `partners-meetings.html` | `/writers-worships/` |
| `networking.html` | `/networking/` |
| `fel-conference-2024.html` | `/conference-of-the-foundation-for-endangered-languages/` |
| `ihcc4.html` | `/ihcc4/` |
| **News & Media** | |
| `news.html` | `/news/` |
| `news/<post>.html` | the 3 latest posts on `/news/` |
| `fli-in-the-media.html` | `/fli-in-the-media/` |
| `contact.html` | `/contact/` |

Pages with a section tab bar (About, Languages, Programs, Publications, Resources, Advocacy, News) are separate pages; each tab is a link to its sibling page. The exceptions are Publications and Resources: their tabs stay on one page. On `publications.html` the series tabs filter the one list; on `digital-resources.html` "All Resources" shows every section and each other tab shows one.

## Interactive features

- **Site search** (search icon, `/` or `Ctrl+K`): languages, publications, news, newsletters and pages.
- **Target languages**: search, family and vitality filters, and each card links to that language's page in `languages/`. Madaklashti Persian has no page on the live site, so its card shows its full description and doesn't link anywhere (`languages.html#madaklashti` jumps to it).
- **Publications**: search, card/table view toggle, series tabs. `publications.html?q=Palula` pre-fills the search; `publications.html?series=vernacular` (or `language-culture`, `other`, `translated`) opens a series tab.
- **Newsletters**: keyword search and year filter.
- **Language Map**: region explorer and full-size map viewer.
- **Digital Resources**: tabs for Fonts, Keyboards, Software, COVID-19 and Windows Settings; `digital-resources.html?tab=fonts` (or `keyboards`, `software`, `covid-19`, `windows`) opens one directly.
- **Fonts**: live Nastaliq/Naskh type tester.
- **Contact and subscribe forms**: validation and a thank-you state. They don't send anything; in WordPress, connect them to a form plugin.

## Rebuilding in Elementor (free)

**Global Colors** (Site Settings › Global Colors). The tokens are also listed at the top of `assets/css/tailwind-source.css`.

The site uses three brand colours, each with one job, following how fli-online.org uses them. The live site has blue in its top bar, hero overlay and feature boxes, uses yellow as the theme's main accent, and uses maroon for the menu and logo.

| Elementor slot | Name | Hex | Used for |
|---|---|---|---|
| Primary | Maroon | `#5B0404` | Logo colour, menu, headings, primary buttons on light backgrounds, active tabs, page-title banners (hover `#480303`) |
| Secondary | Blue | `#084A79` | Top bar, home hero overlay, dark feature panels inside pages, small uppercase labels, check icons, hover text |
| Accent | Yellow | `#F1C236` | Buttons and figures on dark backgrounds, the rule under page banners, badges, subscribe button, text selection (hover `#D9AB28`) |
| Text | Ink | `#1F1414` | Body text (secondary `#6B7280`) |

Supporting shades:

| Name | Hex | Used for |
|---|---|---|
| Deep blue | `#072F4C` | Home hero background; blue panels are a gradient from this to `#084A79` |
| Light blue text | `#DCE8F2` | Paragraph text on blue panels |
| Footer | `#2E0202` | Footer background |
| Page background | `#FAF8F5` | Body |
| Border | `#E5DFD5` | Card borders |
| Rose tint | `#FAF2F2` | Tinted panels, hover backgrounds |

Yellow is only used as a fill (with maroon text on it) or on dark backgrounds, never as text on white: it would fail contrast. All text on the site meets WCAG AA contrast (4.5:1).

**Logo** (Site Settings › Site Identity):
- `assets/img/fli-logo.png` is FLI's logo (`for-web-300x169.webp`) with the empty padding trimmed off (232×124 px). Nothing else is changed.
- It's shown at 64 px tall in the header. In the dark-maroon footer it sits on a white rounded tile, because the maroon logo wouldn't show on that background.
- The source file is only 300×169, so the logo looks slightly soft on high-resolution screens. For the WordPress site, use an SVG or a PNG at least 600 px wide if FLI has one.
- `favicon.png` (the FLI + quill mark, without the tagline) and `apple-touch-icon.png` are cut from the same file.

**Global Fonts** (all Google Fonts, available in Elementor free):
- Headings: **Cinzel** 600–700
- Body: **Metrophobic** (one weight only, Regular 400; the browser synthesizes bold where the design uses bold)
- Urdu / Nastaliq text: **Noto Nastaliq Urdu** (fallback **Amiri**), right-to-left, line height ≈ 2.1

**Widget mapping.** Most sections map to free widgets: Heading, Text Editor, Button, Image, Icon Box / Image Box (cards), Icon List (check lists, contact details), Counter (number strips), Tabs/Accordion/Toggle (FEL practical info, board bios), Testimonial (Impact Stories), Video (COVID-19), Social Icons.

A few features need more than Elementor free provides:
- **Header and footer**: the Theme Builder and Nav Menu widget are Elementor Pro. On free, use a free header/footer add-on or the theme's header and menu.
- **Contact and subscribe forms**: the Form widget is Pro. Use a form plugin (e.g. Contact Form 7, WPForms Lite) and a newsletter plugin.
- **Searchable lists** (languages, publications, newsletters): use a table plugin with built-in search, or paste the relevant markup plus `main.js` into an HTML widget.
- **Single news posts**: Elementor free can't template single posts. Style them through the theme, or use the WordPress block editor for posts.

## Content to verify with FLI before launch

Most text comes directly from fli-online.org. These items don't, and need checking:

- **English titles of Urdu-only publications.** Other Publications are listed only in Urdu on the live site (as are Vernacular Series #10–28, which the prototype no longer shows). Their English titles and the authors' names in Latin script are transliterations made for this prototype.
- **Language metadata.** Vitality status, writing-system notes and some speaker figures aren't on the live language pages. Balti, Gojri, Khowar, Madaklashti, Palula and Shina speaker figures come from the earlier prototype. Gawri shows "1,200,000+" exactly as the live page states; this may be a typo for 120,000. The Nastaliq spellings of language names also come from the earlier prototype.
- **Language Relatedness word table.** These sample words come from the earlier prototype and need a linguist's check. The chart image and PDF are FLI's own.
- **Core value descriptions** and the **Urdu translations of the vision and mission** (`our-values.html`) are prototype copy. The value titles are FLI's.
- **Strategic objectives.** The objective statements are FLI's exact wording. The "in practice" examples and badges were matched to activities described elsewhere on the site.
- **Pages that are empty or title-only on the live site**, written for the prototype: Equipping the Communities, Discovery Course (topics and audience), Digital Resources, Keyboards, Windows Configuration Settings, Networking (built from the Advocacy page's alliances text).
- **Missing items.** M K Khan has no bio on the live site. IHCC 4 returns a database error on the live site, so only its one-line description is used. LMD-5 has no report link.
- **Images.** The home hero, workshop, manuscript and classroom images are AI-generated and came from the earlier prototype. Replace them with real FLI photos. The other photos come from fli-online.org.

## Regenerating `styles.css` (only if you add new classes)

The pages use Tailwind CSS utility classes, compiled into `assets/css/styles.css`. If you edit the HTML and use classes that aren't compiled yet, run this from the project folder (requires Node.js):

```
npm install --no-save tailwindcss@4.1.11 @tailwindcss/cli@4.1.11
npx tailwindcss -i assets/css/tailwind-source.css -o assets/css/styles.css
```

You can delete the `node_modules` folder afterwards; the site doesn't need it.
