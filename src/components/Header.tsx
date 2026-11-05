import React, { useState } from 'react';
import { 
  Languages, 
  BookOpen, 
  GraduationCap, 
  Download, 
  Megaphone, 
  Newspaper, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Layers,
  Sparkles,
  ExternalLink,
  Code
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, subParam?: string) => void;
  onOpenWpSpec: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenWpSpec,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (view: string, subParam?: string) => {
    onNavigate(view, subParam);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5dfd5] transition-all">
      {/* Top Institutional Notification Bar */}
      <div className="bg-[#5B0404] text-[#FBEAEA] text-xs px-4 py-1.5 border-b border-[#480303]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#f59e0b] tracking-wider uppercase text-[10px]">UNESCO IDIL 2022–2032</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-white/80">Supporting the International Decade of Indigenous Languages</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden md:inline text-white/70">Islamabad, Pakistan: +92 (0)51 225 0068</span>
            <button
              onClick={() => handleNav('contact')}
              className="text-[#f59e0b] hover:text-white transition-colors underline decoration-[#f59e0b]/40 underline-offset-2"
            >
              Contact Secretariat
            </button>
            <button
              onClick={onOpenWpSpec}
              className="inline-flex items-center gap-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#5B0404] px-2.5 py-0.5 rounded font-bold text-[11px] transition-colors shadow-xs"
              title="View WordPress Theme & CPT Architecture Specification"
            >
              <Code className="w-3.5 h-3.5" />
              <span>WordPress Spec</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single Brand Wordmark & Emblem */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 text-left group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B0404] rounded-md"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#5B0404] to-[#730707] flex items-center justify-center text-white shadow-md shadow-[#5B0404]/15 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <span className="font-serif-display text-base sm:text-lg font-bold tracking-tight text-[#f59e0b]">FLI</span>
            </div>
            <div className="shrink-0">
              <span className="text-sm sm:text-base lg:text-lg font-bold font-serif-display text-[#5B0404] tracking-tight group-hover:text-[#730707] transition-colors whitespace-nowrap block">
                Forum for Language Initiatives
              </span>
              <p className="text-[11px] text-[#6E5D57] hidden 2xl:block font-medium whitespace-nowrap">
                Preserving regional cultures & languages of Pakistan
              </p>
            </div>
          </button>

          {/* Zone 2: Navigation Links with Mega-menus */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-[#382B27]">
            
            {/* Home */}
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'home' 
                  ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                  : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('about')}
                className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
                  currentView === 'about' 
                    ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                    : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#e5dfd5] py-2 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('about', 'overview')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Who We Are & History</div>
                    <div className="text-[11px] text-[#6b7280]">Pioneering mother-tongue development since 2003</div>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'values')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Vision, Mission & Core Values</div>
                    <div className="text-[11px] text-[#6b7280]">Our foundational charter and ethical principles</div>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'objectives')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Our Strategic Objectives</div>
                    <div className="text-[11px] text-[#6b7280]">5 institutional goals and policy milestones</div>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'board')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">FLI Executive Board</div>
                    <div className="text-[11px] text-[#6b7280]">Leadership, scholars, and community champions</div>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'methodology')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Our 4-Pillar Methodology</div>
                    <div className="text-[11px] text-[#6b7280]">Survey, orthography, MLE pedagogy & literature</div>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'governance')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Legal Status & Compliance</div>
                    <div className="text-[11px] text-[#6b7280]">Societies Registration Act 1860, FBR & audits</div>
                  </button>
                </div>
              )}
            </div>

            {/* Target Languages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('languages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('languages')}
                className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  currentView === 'languages' 
                    ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                    : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
                }`}
              >
                <Languages className="w-4 h-4 text-[#C59B27]" />
                <span>Target Languages</span>
                <span className="text-[10px] font-bold bg-[#C59B27]/15 text-[#5B0404] px-1.5 py-0.2 rounded-full">29</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'languages' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#e5dfd5] py-2 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('languages', 'directory')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">All 29 Target Languages</div>
                    <div className="text-[11px] text-[#6b7280]">Profiles, phonology, vitality & orthographies</div>
                  </button>
                  <button
                    onClick={() => handleNav('languages', 'map')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Language Map of Northern Pakistan</div>
                    <div className="text-[11px] text-[#6b7280]">Geographic distribution across mountain valleys</div>
                  </button>
                  <button
                    onClick={() => handleNav('languages', 'tree')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Genealogical Language Tree</div>
                    <div className="text-[11px] text-[#6b7280]">Dardic, Iranian, Sino-Tibetan & Burushaski Isolate</div>
                  </button>
                  <button
                    onClick={() => handleNav('languages', 'relatedness')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FAF2F2] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Language Relatedness Matrix</div>
                    <div className="text-[11px] text-[#6b7280]">Lexicostatistical overlap & dialect continuum</div>
                  </button>
                </div>
              )}
            </div>

            {/* Programs & Training Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('programs')}
                className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
                  currentView === 'programs' 
                    ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                    : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
                }`}
              >
                <span>Programs & Training</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'programs' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#e5dfd5] py-2 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('programs', 'equipping')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Equipping the Communities</div>
                    <div className="text-[11px] text-[#6b7280]">Grassroots capacity building for mother-tongue speakers</div>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'discovery')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Discovery Course Offering</div>
                    <div className="text-[11px] text-[#6b7280]">Linguistics & orthography introductory intensive</div>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'mle')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">MLE Committee Training (LCT)</div>
                    <div className="text-[11px] text-[#6b7280]">Mother Tongue-Based Multilingual Education governance</div>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'curriculum')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Curriculum & Materials (LMD)</div>
                    <div className="text-[11px] text-[#6b7280]">Workshop reports LMD-1 through LMD-6</div>
                  </button>
                </div>
              )}
            </div>

            {/* Publications Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('publications')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('publications')}
                className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
                  currentView === 'publications' || currentView === 'newsletters'
                    ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                    : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#5B0404]" />
                <span>Publications</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'publications' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#e5dfd5] py-2 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNav('publications', 'vernacular')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">FLI’s Vernacular Series (29 Books)</div>
                    <div className="text-[11px] text-[#6b7280]">Local language literature, proverbs & poetry</div>
                  </button>
                  <button
                    onClick={() => handleNav('publications', 'culture-series')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Language & Culture Series (25 Works)</div>
                    <div className="text-[11px] text-[#6b7280]">Academic sociolinguistic surveys & grammars</div>
                  </button>
                  <button
                    onClick={() => handleNav('publications', 'other-books')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Other Books (31 Primers & Alphabets)</div>
                    <div className="text-[11px] text-[#6b7280]">Community primers for Gawri, Torwali, Palula, etc.</div>
                  </button>
                  <button
                    onClick={() => handleNav('newsletters')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Newsletters & Annual Reports</div>
                    <div className="text-[11px] text-[#6b7280]">Official archive from 2012 to 2026</div>
                  </button>
                  <button
                    onClick={() => handleNav('publications', 'translations')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f7f5f0] text-sm text-[#1F1414] transition-colors"
                  >
                    <div className="font-semibold text-xs text-[#5B0404]">Materials Translated into Local Tongues</div>
                    <div className="text-[11px] text-[#6b7280]">Universal Human Rights & UNESCO Declarations</div>
                  </button>
                </div>
              )}
            </div>

            {/* Digital Resources */}
            <button
              onClick={() => handleNav('digital-resources')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentView === 'digital-resources' 
                  ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                  : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
              }`}
            >
              <Download className="w-4 h-4 text-[#5B0404]" />
              <span>Digital Resources</span>
            </button>

            {/* Advocacy & Conferences */}
            <button
              onClick={() => handleNav('advocacy')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentView === 'advocacy' 
                  ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                  : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
              }`}
            >
              <Megaphone className="w-4 h-4 text-[#5B0404]" />
              <span>Advocacy & FEL 2024</span>
            </button>

            {/* News & Media */}
            <button
              onClick={() => handleNav('news-media')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'news-media' 
                  ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                  : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
              }`}
            >
              News & Media
            </button>

            {/* Success Stories */}
            <button
              onClick={() => handleNav('success-stories')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentView === 'success-stories' 
                  ? 'text-[#5B0404] font-bold bg-[#5B0404]/8' 
                  : 'hover:text-[#5B0404] hover:bg-[#5B0404]/5'
              }`}
            >
              Impact
            </button>
          </nav>

          {/* Zone 3: Actions (Search, WP Spec & Contact Button) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-[#4b5563] hover:text-[#5B0404] hover:bg-[#5B0404]/5 rounded-lg transition-colors"
              title="Search languages, publications, newsletters..."
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="hidden md:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#5B0404] rounded-lg hover:bg-[#480303] transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Contact Us
            </button>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#382B27] hover:bg-[#5B0404]/5 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#e5dfd5] bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#e5dfd5]">
            <button
              onClick={() => handleNav('home')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FAF2F2]"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#FAF2F2] text-[#5B0404] font-semibold"
            >
              About FLI
            </button>
          </div>

          <div className="space-y-1 py-1">
            <div className="text-[11px] font-bold text-[#5B0404] uppercase tracking-wider px-3">About FLI</div>
            <button onClick={() => handleNav('about', 'overview')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Who We Are & History
            </button>
            <button onClick={() => handleNav('about', 'values')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Vision, Mission & Core Values
            </button>
            <button onClick={() => handleNav('about', 'objectives')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Strategic Objectives (5 Goals)
            </button>
            <button onClick={() => handleNav('about', 'board')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              FLI Executive Board Members
            </button>
            <button onClick={() => handleNav('about', 'methodology')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Our 4-Pillar Model
            </button>
            <button onClick={() => handleNav('about', 'governance')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Legal Status & Compliance
            </button>
          </div>

          <div className="space-y-1 py-1 border-t border-[#e5dfd5]">
            <div className="text-[11px] font-bold text-[#5B0404] uppercase tracking-wider px-3 pt-2">Target Languages (29)</div>
            <button onClick={() => handleNav('languages', 'directory')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded flex items-center justify-between">
              <span>All 29 Language Profiles</span>
              <span className="text-[10px] font-bold bg-[#C59B27]/15 text-[#5B0404] px-1.5 py-0.5 rounded-full">29</span>
            </button>
            <button onClick={() => handleNav('languages', 'map')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Language Map of Northern Pakistan
            </button>
            <button onClick={() => handleNav('languages', 'tree')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Genealogical Language Tree
            </button>
            <button onClick={() => handleNav('languages', 'relatedness')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#FAF2F2] rounded">
              Language Relatedness Matrix
            </button>
          </div>

          <div className="space-y-1 py-1">
            <div className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider px-3">Programs & Training</div>
            <button onClick={() => handleNav('programs', 'equipping')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Equipping the Communities
            </button>
            <button onClick={() => handleNav('programs', 'discovery')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Discovery Course Offering
            </button>
            <button onClick={() => handleNav('programs', 'mle')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              MLE Committee Training
            </button>
            <button onClick={() => handleNav('programs', 'curriculum')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Curriculum & Materials (LMD 1–6)
            </button>
          </div>

          <div className="space-y-1 py-1 border-t border-[#e5dfd5]">
            <div className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider px-3 pt-2">Publications & Archive</div>
            <button onClick={() => handleNav('publications', 'vernacular')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              FLI’s Vernacular Series (29 Books)
            </button>
            <button onClick={() => handleNav('publications', 'culture-series')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Language & Culture Series (25 Works)
            </button>
            <button onClick={() => handleNav('publications', 'other-books')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Other Books (31 Primers)
            </button>
            <button onClick={() => handleNav('newsletters')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Newsletters & Annual Reports (2012–2026)
            </button>
            <button onClick={() => handleNav('publications', 'translations')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Materials Translated into Local Tongues
            </button>
          </div>

          <div className="space-y-1 py-1 border-t border-[#e5dfd5]">
            <div className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider px-3 pt-2">Resources & Community</div>
            <button onClick={() => handleNav('digital-resources')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Digital Resources (Fonts, Keyboards, Tools)
            </button>
            <button onClick={() => handleNav('advocacy')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Advocacy & FEL 2024 Conference
            </button>
            <button onClick={() => handleNav('news-media')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              News & Media Coverage
            </button>
            <button onClick={() => handleNav('success-stories')} className="w-full text-left px-3 py-1.5 text-sm text-[#382B27] hover:bg-[#f7f5f0] rounded">
              Community Success Stories
            </button>
            <button onClick={() => handleNav('contact')} className="w-full text-left px-3 py-1.5 text-sm font-semibold text-[#5B0404] hover:bg-[#f7f5f0] rounded">
              Contact Secretariat
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWpSpec();
              }}
              className="w-full py-2.5 px-3 bg-[#f59e0b] text-[#5B0404] rounded-lg font-bold text-xs flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4" />
              <span>Open WordPress Redesign Specification</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
