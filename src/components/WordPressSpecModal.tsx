import React, { useState } from 'react';
import { X, Code, Copy, Check, FileText, Database, Layout, Sparkles, BookOpen } from 'lucide-react';

interface WordPressSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressSpecModal: React.FC<WordPressSpecModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'cpt' | 'taxonomies' | 'acf' | 'rtl'>('architecture');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 3000);
  };

  const cptCodeSnippet = `<?php
/**
 * Register Custom Post Types for Forum for Language Initiatives (FLI)
 * Add to your theme's functions.php or a custom plugin 'fli-core.php'
 */

function fli_register_custom_post_types() {
    
    // 1. Target Languages CPT
    register_post_type('fli_language', [
        'labels' => [
            'name' => 'Target Languages',
            'singular_name' => 'Language',
            'add_new_item' => 'Add New Indigenous Language',
            'edit_item' => 'Edit Language Profile'
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'languages'],
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true, // Gutenberg enabled
        'menu_icon' => 'dashicons-translation'
    ]);

    // 2. Publications & Books CPT
    register_post_type('fli_publication', [
        'labels' => [
            'name' => 'Publications & Literature',
            'singular_name' => 'Publication',
            'add_new_item' => 'Add New Book / Monograph'
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'publications'],
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-book-alt'
    ]);

    // 3. Digital Resources CPT (Fonts, Keyboards, Tools)
    register_post_type('fli_resource', [
        'labels' => [
            'name' => 'Digital Resources',
            'singular_name' => 'Resource',
            'add_new_item' => 'Add New Font or Keyboard Package'
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'digital-resources'],
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-download'
    ]);

    // 4. Training & Workshops CPT (LMD, LCT, Discovery)
    register_post_type('fli_training', [
        'labels' => [
            'name' => 'Training & Capacity',
            'singular_name' => 'Training Program',
            'add_new_item' => 'Add Workshop Report'
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'programs'],
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-groups'
    ]);

    // 5. Executive Board Members CPT
    register_post_type('fli_board_member', [
        'labels' => [
            'name' => 'Board Members',
            'singular_name' => 'Board Member',
            'add_new_item' => 'Add Executive Board Member'
        ],
        'public' => true,
        'has_archive' => false,
        'rewrite' => ['slug' => 'board-members'],
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-businessperson'
    ]);
}
add_action('init', 'fli_register_custom_post_types');
`;

  const taxonomyCodeSnippet = `<?php
/**
 * Register Taxonomies for FLI Content Classification
 */
function fli_register_taxonomies() {
    
    // Linguistic Phylum / Family Taxonomy
    register_taxonomy('language_family', ['fli_language'], [
        'labels' => ['name' => 'Language Families', 'singular_name' => 'Family'],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'family']
    ]);

    // Endangerment Level (UNESCO Scale)
    register_taxonomy('endangerment_status', ['fli_language'], [
        'labels' => ['name' => 'Endangerment Status', 'singular_name' => 'Status'],
        'hierarchical' => false,
        'show_in_rest' => true
    ]);

    // Geographic Valley / District
    register_taxonomy('geographic_region', ['fli_language', 'fli_publication', 'fli_training'], [
        'labels' => ['name' => 'Geographic Regions', 'singular_name' => 'Region'],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'region']
    ]);

    // Publication Series (Vernacular, Culture Series, Primers, Newsletters)
    register_taxonomy('publication_series', ['fli_publication'], [
        'labels' => ['name' => 'Publication Series', 'singular_name' => 'Series'],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'series']
    ]);
}
add_action('init', 'fli_register_taxonomies');
`;

  const acfSchemaSnippet = `{
  "key": "group_fli_language_fields",
  "title": "FLI Linguistic Profile Fields",
  "fields": [
    {
      "key": "field_native_script_name",
      "label": "Native Language Name (Nastaliq / Urdu Script)",
      "name": "native_script_name",
      "type": "text",
      "instructions": "e.g. پالُولا, بروشسکی, توروالی, گوَرباتی"
    },
    {
      "key": "field_iso_code",
      "label": "ISO 639-3 Code",
      "name": "iso_639_3",
      "type": "text",
      "instructions": "3-letter standard code e.g. phl, bsk, trw, gwt"
    },
    {
      "key": "field_speaker_count",
      "label": "Estimated Speakers Population",
      "name": "estimated_speakers",
      "type": "text"
    },
    {
      "key": "field_phonology_summary",
      "label": "Phonology & Tonal Notes",
      "name": "phonology_notes",
      "type": "textarea"
    },
    {
      "key": "field_community_partner_cbo",
      "label": "Partner Community-Based Organization (CBO)",
      "name": "partner_cbo",
      "type": "text"
    },
    {
      "key": "field_audio_pronunciation",
      "label": "Audio Greeting / Sample",
      "name": "audio_sample",
      "type": "file",
      "mime_types": "mp3,wav,m4a"
    }
  ],
  "location": [
    [
      { "param": "post_type", "operator": "==", "value": "fli_language" }
    ]
  ]
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-[#e5dfd5]">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#5B0404] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#f59e0b] rounded-lg text-[#5B0404]">
              <Code className="w-5 h-5 font-bold" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif-display tracking-tight text-white">
                WordPress Redesign Architecture Specification
              </h3>
              <p className="text-xs text-[#CBB8B8]">
                Technical Blueprint & Code Deliverables for Porting fli-online.org into Modern WordPress
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-[#e5dfd5] bg-[#faf8f5] overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-2.5 px-3 rounded-t-lg border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-[#5B0404] text-[#5B0404] bg-white'
                : 'border-transparent text-[#6E5D57] hover:text-[#5B0404]'
            }`}
          >
            1. Theme Architecture
          </button>
          <button
            onClick={() => setActiveTab('cpt')}
            className={`py-2.5 px-3 rounded-t-lg border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'cpt'
                ? 'border-[#5B0404] text-[#5B0404] bg-white'
                : 'border-transparent text-[#6E5D57] hover:text-[#5B0404]'
            }`}
          >
            2. Custom Post Types (PHP)
          </button>
          <button
            onClick={() => setActiveTab('taxonomies')}
            className={`py-2.5 px-3 rounded-t-lg border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'taxonomies'
                ? 'border-[#5B0404] text-[#5B0404] bg-white'
                : 'border-transparent text-[#6E5D57] hover:text-[#5B0404]'
            }`}
          >
            3. Taxonomies
          </button>
          <button
            onClick={() => setActiveTab('acf')}
            className={`py-2.5 px-3 rounded-t-lg border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'acf'
                ? 'border-[#5B0404] text-[#5B0404] bg-white'
                : 'border-transparent text-[#6E5D57] hover:text-[#5B0404]'
            }`}
          >
            4. ACF Schema
          </button>
          <button
            onClick={() => setActiveTab('rtl')}
            className={`py-2.5 px-3 rounded-t-lg border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'rtl'
                ? 'border-[#5B0404] text-[#5B0404] bg-white'
                : 'border-transparent text-[#6E5D57] hover:text-[#5B0404]'
            }`}
          >
            5. Bilingual & Nastaliq Typography
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 text-[#1F1414]">
          
          {/* TAB 1: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 text-sm">
              <div className="bg-[#FAF2F2] border border-[#EEDADA] p-4 rounded-xl space-y-2">
                <div className="font-bold text-[#5B0404] text-base flex items-center gap-2">
                  <Layout className="w-5 h-5 text-[#5B0404]" />
                  <span>Recommended WordPress Stack for FLI</span>
                </div>
                <p className="text-xs text-[#7A0808] leading-relaxed">
                  The original <code className="bg-white px-1.5 py-0.5 rounded text-[#5B0404]">fli-online.org</code> was built on an old Enfold theme with rigid page builder shortcodes that broke mobile responsiveness, slowed page speeds to &gt;5s, and cluttered bilingual Nastaliq text. Our redesign blueprint establishes a modern, high-performance architecture.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-[#e5dfd5] p-4 rounded-xl space-y-2 bg-[#faf8f5]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#5B0404]">Core Theme Choice</h4>
                  <ul className="text-xs space-y-1.5 text-[#4b5563]">
                    <li>• <strong>Option A (Recommended)</strong>: WordPress 6.7+ Full Site Editing (FSE) block theme using <code className="bg-white px-1 rounded">theme.json</code> for global token control.</li>
                    <li>• <strong>Option B (Classic Child Theme)</strong>: Kadence or Astra child theme with Gutenberg Block Extensions (GenerateBlocks / Kadence Blocks).</li>
                    <li>• <strong>Color Tokens</strong>: Forest Emerald (<code className="text-[#5B0404]">#5B0404</code>), Terracotta (<code className="text-[#c26d38]">#c26d38</code>), Amber (<code className="text-[#d97706]">#f59e0b</code>), Parchment Neutral (<code className="text-[#4b5563]">#faf8f5</code>).</li>
                  </ul>
                </div>

                <div className="border border-[#e5dfd5] p-4 rounded-xl space-y-2 bg-[#faf8f5]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#5B0404]">Essential Plugins (Minimal & Lean)</h4>
                  <ul className="text-xs space-y-1.5 text-[#4b5563]">
                    <li>• <strong>Advanced Custom Fields PRO</strong>: Linguistic metadata, orthography charts, and book attributes.</li>
                    <li>• <strong>SearchWP / Relevanssi</strong>: Full-text search across Urdu/Nastaliq and English language names.</li>
                    <li>• <strong>WP Super Cache / LiteSpeed</strong>: High performance static caching on Hostinger.</li>
                    <li>• <strong>Rank Math SEO</strong>: Automated Schema.org markup for Book, Organization, and Dataset.</li>
                  </ul>
                </div>
              </div>

              <div className="border border-[#e5dfd5] p-4 rounded-xl space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#5B0404]">Accessibility & WCAG 2.1 AA Compliance</h4>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  All typography pairings maintain &ge; 4.5:1 contrast against background surfaces. Native HTML tags (<code className="bg-[#FAF2F2] px-1 rounded">&lt;nav&gt;</code>, <code className="bg-[#FAF2F2] px-1 rounded">&lt;article&gt;</code>, <code className="bg-[#FAF2F2] px-1 rounded">&lt;main&gt;</code>) and proper ARIA landmarks replace generic unsemantic divs. Touch targets are strictly &ge; 44px on mobile devices.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CPT Code */}
          {activeTab === 'cpt' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6b7280]">
                  Add to <code className="text-[#5B0404] font-bold">functions.php</code> or create a must-use plugin <code className="text-[#5B0404] font-bold">wp-content/mu-plugins/fli-cpts.php</code>
                </span>
                <button
                  onClick={() => copyToClipboard(cptCodeSnippet, 'cpt')}
                  className="px-3 py-1.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  {copiedSection === 'cpt' ? <Check className="w-3.5 h-3.5 text-[#C59B27]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'cpt' ? 'Copied!' : 'Copy PHP Code'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#1F1414] text-[#FBEAEA] rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-[#7A0808]">
                {cptCodeSnippet}
              </pre>
            </div>
          )}

          {/* TAB 3: Taxonomies Code */}
          {activeTab === 'taxonomies' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6b7280]">
                  Taxonomies for filtering Languages by Family, Region, Endangerment, and Publications by Series
                </span>
                <button
                  onClick={() => copyToClipboard(taxonomyCodeSnippet, 'tax')}
                  className="px-3 py-1.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  {copiedSection === 'tax' ? <Check className="w-3.5 h-3.5 text-[#C59B27]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'tax' ? 'Copied!' : 'Copy Taxonomies'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#1F1414] text-[#FBEAEA] rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-[#7A0808]">
                {taxonomyCodeSnippet}
              </pre>
            </div>
          )}

          {/* TAB 4: ACF JSON */}
          {activeTab === 'acf' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6b7280]">
                  ACF Field Group JSON Export (Import via Custom Fields &gt; Tools &gt; Import JSON)
                </span>
                <button
                  onClick={() => copyToClipboard(acfSchemaSnippet, 'acf')}
                  className="px-3 py-1.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  {copiedSection === 'acf' ? <Check className="w-3.5 h-3.5 text-[#C59B27]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'acf' ? 'Copied!' : 'Copy ACF JSON'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#1F1414] text-[#FBEAEA] rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-[#7A0808]">
                {acfSchemaSnippet}
              </pre>
            </div>
          )}

          {/* TAB 5: Typography & RTL */}
          {activeTab === 'rtl' && (
            <div className="space-y-4 text-xs">
              <div className="border border-[#e5dfd5] p-4 rounded-xl space-y-3 bg-[#faf8f5]">
                <h4 className="font-bold text-sm text-[#5B0404]">Nastaliq & Bilingual Font Integration</h4>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  In regional Pakistani languages (Khowar, Shina, Gawri, Torwali, Palula, Ormuri, Balti), standard computer Arabic fonts distort retroflex diacritics and ligatures. Add these font declarations in your child theme stylesheet <code className="bg-white px-1 rounded">style.css</code>:
                </p>
                <pre className="p-3 bg-[#1F1414] text-[#FBEAEA] rounded-lg text-xs font-mono overflow-x-auto leading-relaxed">
{`/* Google Fonts Enqueue in functions.php */
function fli_enqueue_bilingual_fonts() {
    wp_enqueue_style(
        'fli-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Noto+Nastaliq+Urdu:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
        [],
        null
    );
}
add_action('wp_enqueue_scripts', 'fli_enqueue_bilingual_fonts');

/* Nastaliq Utility Class */
.nastaliq-text,
.urdu-title,
[lang="ur"] {
    font-family: 'Noto Nastaliq Urdu', 'Awami Nastaliq', serif;
    line-height: 2.1;
    direction: rtl;
    text-align: right;
}`}
                </pre>
              </div>

              <div className="border border-[#e5dfd5] p-4 rounded-xl space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#5B0404]">RTL Language Switching (WPML or Polylang)</h4>
                <p className="text-xs text-[#4b5563]">
                  If providing complete Urdu/English mirroring, configure Polylang or WPML with automatic <code className="bg-[#FAF2F2] px-1 rounded">dir="rtl"</code> attribute injection on the root <code className="bg-[#FAF2F2] px-1 rounded">&lt;html&gt;</code> element when viewing the Urdu locale.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#faf8f5] border-t border-[#e5dfd5] flex items-center justify-between text-xs">
          <span className="text-[#6b7280]">
            Use these specifications to build the WordPress theme or custom blocks.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#5B0404] hover:bg-[#480303] text-white font-medium rounded-lg transition-colors"
          >
            Close Specification
          </button>
        </div>

      </div>
    </div>
  );
};
