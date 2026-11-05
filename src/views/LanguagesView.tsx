import React, { useState, useMemo, useEffect } from 'react';
import { 
  Languages, 
  Search, 
  Filter, 
  Info, 
  MapPin, 
  Volume2, 
  BookOpen, 
  X, 
  CheckCircle2, 
  AlertTriangle,
  Globe,
  Share2,
  GitBranch,
  Network,
  Compass,
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { 
  FLI_LANGUAGES, 
  LanguageInfo, 
  LANGUAGE_TREE_DATA, 
  GEOGRAPHIC_REGIONS 
} from '../data/fliData';
import { filterLanguages, computeLanguageStats } from '../utils/fliHelpers';

interface LanguagesViewProps {
  initialLanguageId?: string;
  initialTab?: string;
  onNavigate: (view: string, subParam?: string) => void;
}

export const LanguagesView: React.FC<LanguagesViewProps> = ({ 
  initialLanguageId, 
  initialTab = 'directory',
  onNavigate 
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [selectedEndangerment, setSelectedEndangerment] = useState<string>('all');
  const [selectedRegionIndex, setSelectedRegionIndex] = useState<number>(0);
  
  const [activeLanguage, setActiveLanguage] = useState<LanguageInfo | null>(() => {
    if (initialLanguageId) {
      return FLI_LANGUAGES.find(l => l.id === initialLanguageId) || null;
    }
    return null;
  });

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const stats = useMemo(() => computeLanguageStats(FLI_LANGUAGES), []);

  const filteredLanguages = useMemo(() => {
    return filterLanguages(FLI_LANGUAGES, {
      query: searchQuery,
      family: selectedFamily,
      endangerment: selectedEndangerment
    });
  }, [searchQuery, selectedFamily, selectedEndangerment]);

  const families = ['all', 'Dardic', 'Iranian', 'Burushaski', 'Tibeto-Burman', 'Nuristani'];
  const endangerments = ['all', 'Critically Endangered', 'Severely Endangered', 'Definitely Endangered', 'Vulnerable', 'Threatened'];

  const getEndangermentBadge = (status: string) => {
    switch (status) {
      case 'Critically Endangered':
        return 'bg-red-100 text-red-900 border-red-200';
      case 'Severely Endangered':
        return 'bg-amber-100 text-amber-900 border-amber-200';
      case 'Definitely Endangered':
        return 'bg-orange-100 text-orange-900 border-orange-200';
      case 'Vulnerable':
        return 'bg-[#FAF2F2] text-[#5B0404] border-[#eedada]';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  // Comparative lexicon data for Language Relatedness matrix
  const comparativeWords = [
    { gloss: 'Water (ماء)', gawri: 'wīr (ویر)', torwali: 'šin (شن)', palula: 'wíl (ول)', khowar: 'uġ (اوغ)', shina: 'wí (وی)', burushaski: 'tsil (تسِل)' },
    { gloss: 'Fire (آگ)', gawri: 'aṅgār (انگار)', torwali: 'āñgār (آنگار)', palula: 'aṅgár (انگار)', khowar: 'angār (انگار)', shina: 'agār (اگھار)', burushaski: 'phu (پھُو)' },
    { gloss: 'Hand (ہاتھ)', gawri: 'hāt (ہات)', torwali: 'kand (کینڈ)', palula: 'hāt (ہات)', khowar: 'hast (ہست)', shina: 'hăt (ہتھ)', burushaski: 'ren (رین)' },
    { gloss: 'Eye (آنکھ)', gawri: 'īč (ایچ)', torwali: 'ačh (اچھ)', palula: 'áči (اچی)', khowar: 'ačhi (اچھی)', shina: 'ačhī (اچھی)', burushaski: 'ilčhi (الچھی)' },
    { gloss: 'Sun (سورج)', gawri: 'sūr (سُور)', torwali: 'sūr (سُور)', palula: 'sūrí (سوری)', khowar: 'yirmun (یرمون)', shina: 'sūri (سوری)', burushaski: 'sa (سا)' },
    { gloss: 'One (ایک)', gawri: 'yēk (یک)', torwali: 'ek (ایک)', palula: 'akh (اکھ)', khowar: 'i (ای)', shina: 'ek (ایک)', burushaski: 'hin / han (ہِن)' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#5B0404] uppercase tracking-wider">
          <Languages className="w-4 h-4 text-[#5B0404]" />
          <span>Interactive Linguistic Atlas & Classification</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-stone-900 tracking-tight">
          Target Languages of Northern Pakistan
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          The mountainous highlands of northern Pakistan form one of the world’s most extraordinary linguistic laboratories. Explore the 29 minoritized languages supported by FLI, their geographic distribution, genealogical family trees, and lexicostatistical relatedness.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="border-b border-[#e5dfd5]">
        <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto py-2 no-scrollbar" aria-label="Languages Sub-sections">
          {[
            { id: 'directory', label: 'All 29 Target Languages', icon: Languages, badge: '29' },
            { id: 'map', label: 'Language Map of Northern Pakistan', icon: Compass },
            { id: 'tree', label: 'Genealogical Language Tree', icon: GitBranch },
            { id: 'relatedness', label: 'Language Relatedness Matrix', icon: Network }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-3.5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-all ${
                  isActive
                    ? 'border-[#5B0404] text-[#5B0404] font-bold bg-[#FAF2F2]'
                    : 'border-transparent text-stone-600 hover:text-[#5B0404] hover:bg-stone-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#5B0404]' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#5B0404] text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* SUB-VIEW 1: DIRECTORY (ALL 29 LANGUAGES) */}
      {activeTab === 'directory' && (
        <div className="space-y-8">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#e5dfd5] shadow-xs">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Total Languages</span>
              <div className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">{stats.total}</div>
              <span className="text-[11px] text-stone-500">Across KP, GB, AJK & Waziristan</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#e5dfd5] shadow-xs">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Language Families</span>
              <div className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">5 Families</div>
              <span className="text-[11px] text-stone-500">Including isolate Burushaski</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#e5dfd5] shadow-xs">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Endangered Status</span>
              <div className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                {stats.criticallyEndangered + stats.severelyEndangered} Critical
              </div>
              <span className="text-[11px] text-stone-500">Requiring immediate revival</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#e5dfd5] shadow-xs">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">CBO Coalitions</span>
              <div className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">14+ CBOs</div>
              <span className="text-[11px] text-stone-500">Community partners in the field</span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-xl border border-[#e5dfd5] shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, region, script, or ISO..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-[#e5dfd5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B0404] focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Filter controls */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                {/* Family selector */}
                <div className="flex items-center gap-1.5 text-xs text-stone-600">
                  <Filter className="w-3.5 h-3.5 text-stone-400" />
                  <span>Family:</span>
                  <select
                    value={selectedFamily}
                    onChange={(e) => setSelectedFamily(e.target.value)}
                    className="bg-stone-50 border border-[#e5dfd5] rounded-md px-2.5 py-1.5 text-xs font-medium focus:ring-1 focus:ring-[#5B0404] focus:outline-none"
                  >
                    {families.map(f => (
                      <option key={f} value={f}>
                        {f === 'all' ? 'All Families' : f}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Endangerment selector */}
                <div className="flex items-center gap-1.5 text-xs text-stone-600">
                  <span>Status:</span>
                  <select
                    value={selectedEndangerment}
                    onChange={(e) => setSelectedEndangerment(e.target.value)}
                    className="bg-stone-50 border border-[#e5dfd5] rounded-md px-2.5 py-1.5 text-xs font-medium focus:ring-1 focus:ring-[#5B0404] focus:outline-none"
                  >
                    {endangerments.map(e => (
                      <option key={e} value={e}>
                        {e === 'all' ? 'All Vitality Statuses' : e}
                      </option>
                    ))}
                  </select>
                </div>

                {(selectedFamily !== 'all' || selectedEndangerment !== 'all' || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedFamily('all');
                      setSelectedEndangerment('all');
                      setSearchQuery('');
                    }}
                    className="text-xs text-[#5B0404] hover:underline font-semibold ml-2"
                  >
                    Reset
                  </button>
                )}
              </div>

            </div>

            <div className="text-xs text-stone-500 pt-2 border-t border-stone-100 flex items-center justify-between">
              <span>Showing <strong>{filteredLanguages.length}</strong> of {FLI_LANGUAGES.length} minoritized languages</span>
              <span className="hidden sm:inline">Click any language card for phonology, orthography, and published materials</span>
            </div>
          </div>

          {/* Languages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLanguages.map((lang) => (
              <div 
                key={lang.id}
                onClick={() => setActiveLanguage(lang)}
                className="bg-white rounded-xl border border-[#e5dfd5] hover:border-[#5B0404] hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif-display font-bold text-lg text-stone-900 group-hover:text-[#5B0404] transition-colors">
                          {lang.name}
                        </h3>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-bold uppercase">
                          {lang.code}
                        </span>
                      </div>
                      <span className="text-xs text-stone-500 italic block mt-0.5">
                        {lang.script}
                      </span>
                    </div>

                    <div className="nastaliq-text text-xl text-[#5B0404] font-semibold text-right leading-relaxed shrink-0">
                      {lang.nativeName}
                    </div>
                  </div>

                  <div className="space-y-2.5 my-4">
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="line-clamp-1">{lang.region}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <Globe className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{lang.family} &bull; {lang.estimatedSpeakers}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {lang.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getEndangermentBadge(lang.endangerment)}`}>
                    {lang.endangerment}
                  </span>

                  <span className="text-xs font-semibold text-[#5B0404] group-hover:underline flex items-center gap-1">
                    <span>View Profile</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 2: LANGUAGE MAP OF NORTHERN PAKISTAN */}
      {activeTab === 'map' && (
        <div className="space-y-10">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
            <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">Geographic Cartography</span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mt-1 mb-3">
              Linguistic Valleys & Mountain Enclaves
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
              Due to the towering barriers of the Hindu Kush, Karakoram, and Western Himalayan ranges, languages in northern Pakistan developed in deep geographic isolation. Select a region below to inspect its unique linguistic ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Region Selector Pills */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
                Select Administrative Region:
              </h3>
              {GEOGRAPHIC_REGIONS.map((reg, idx) => {
                const isSelected = selectedRegionIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedRegionIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#5B0404] text-white border-[#5B0404] shadow-md'
                        : 'bg-white text-stone-800 border-[#e5dfd5] hover:border-[#5B0404] hover:bg-[#FAF2F2]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-sm font-serif-display">
                        {reg.region}
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/20 text-[#f5d98b]' : 'bg-stone-100 text-stone-600'
                      }`}>
                        {reg.languages.length} Languages
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${
                      isSelected ? 'text-white/80' : 'text-stone-500'
                    }`}>
                      {reg.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Region Detail Card */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs space-y-6">
              <div className="border-b border-[#e5dfd5] pb-4">
                <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">Region Focus</span>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-stone-900 mt-1">
                  {GEOGRAPHIC_REGIONS[selectedRegionIndex].region}
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  {GEOGRAPHIC_REGIONS[selectedRegionIndex].description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">
                  Languages Spoken in this Region:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GEOGRAPHIC_REGIONS[selectedRegionIndex].languages.map((langName, li) => {
                    const match = FLI_LANGUAGES.find(l => l.name.toLowerCase().includes(langName.toLowerCase()) || langName.toLowerCase().includes(l.name.toLowerCase()));
                    return (
                      <div 
                        key={li}
                        onClick={() => match && setActiveLanguage(match)}
                        className="p-3.5 rounded-lg border border-[#e5dfd5] hover:border-[#5B0404] hover:bg-[#FAF2F2] cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-bold text-stone-900 group-hover:text-[#5B0404]">
                            {langName}
                          </div>
                          <div className="text-[11px] text-stone-500">
                            {match ? `${match.family} • ${match.estimatedSpeakers}` : 'Minoritized idiom'}
                          </div>
                        </div>
                        {match && (
                          <div className="nastaliq-text text-base text-[#5B0404] text-right">
                            {match.nativeName}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map Illustration Note */}
              <div className="bg-[#FAF2F2] p-4 rounded-lg border border-[#eedada] text-xs text-stone-700 space-y-1">
                <div className="font-bold text-[#5B0404] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Cartographic Archive Reference</span>
                </div>
                <p className="leading-relaxed">
                  FLI publishes high-resolution wall charts and cartographic publications detailing dialect transition zones between Swat Kohistani, Indus Kohistani, and Shina. Downloadable GIS maps are available for academic researchers upon request to the secretariat.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 3: GENEALOGICAL LANGUAGE TREE */}
      {activeTab === 'tree' && (
        <div className="space-y-10">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
            <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">Phylogenetic Classification</span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mt-1 mb-3">
              Pakistan Language Tree (Genealogy & Branches)
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
              Languages of northern Pakistan stem from diverse linguistic ancestral stocks. While most belong to the Indo-Aryan (Dardic) and Iranian branches of Indo-European, the region also features Sino-Tibetan (Balti) and the enigmatic language isolate Burushaski.
            </p>
          </div>

          <div className="space-y-6">
            {LANGUAGE_TREE_DATA.map((node, ni) => (
              <div key={ni} className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">
                      Family: {node.family}
                    </span>
                    <h3 className="text-xl font-serif-display font-bold text-stone-900 mt-0.5">
                      Subfamily: {node.subfamily}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF2F2] text-[#5B0404] border border-[#eedada]">
                    {node.languages.length} Documented Tongues
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {node.description}
                </p>

                <div className="pt-4 border-t border-stone-100">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                    Languages in this Phylogenetic Branch:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {node.languages.map((lName, li) => {
                      const match = FLI_LANGUAGES.find(l => l.name.toLowerCase().includes(lName.toLowerCase()) || lName.toLowerCase().includes(l.name.toLowerCase()));
                      return (
                        <button
                          key={li}
                          onClick={() => match && setActiveLanguage(match)}
                          className="px-3 py-1.5 rounded-lg bg-stone-50 hover:bg-[#FAF2F2] border border-stone-200 hover:border-[#5B0404] text-xs font-medium text-stone-800 hover:text-[#5B0404] transition-colors flex items-center gap-1.5"
                        >
                          <span>{lName}</span>
                          {match && <span className="text-[10px] text-stone-400 font-mono">({match.estimatedSpeakers})</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 4: LANGUAGE RELATEDNESS MATRIX */}
      {activeTab === 'relatedness' && (
        <div className="space-y-10">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
            <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">Comparative Linguistics</span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mt-1 mb-3">
              Language Relatedness & Dialect Continuum
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
              Linguists at FLI and collaborating universities analyze word lists to calculate lexicostatistical similarity percentages between adjacent valley idioms. Compare basic cognates across six major mountain tongues below.
            </p>
          </div>

          {/* Comparative Lexicon Table */}
          <div className="bg-white rounded-xl border border-[#e5dfd5] shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-[#e5dfd5] bg-stone-50/70">
              <h3 className="font-bold text-base text-stone-900">
                Comparative Swadesh Core Lexicon
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Notice shared Indo-Aryan roots between Gawri, Torwali, Palula, and Shina, contrasted with Burushaski’s unique isolate vocabulary.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#5B0404] text-white text-xs font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Concept (Gloss)</th>
                    <th className="px-4 py-3">Gawri (Swat)</th>
                    <th className="px-4 py-3">Torwali (Swat)</th>
                    <th className="px-4 py-3">Palula (Chitral)</th>
                    <th className="px-4 py-3">Khowar (Chitral)</th>
                    <th className="px-4 py-3">Shina (Gilgit)</th>
                    <th className="px-4 py-3 text-[#f5d98b]">Burushaski (Isolate)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5dfd5]">
                  {comparativeWords.map((row, ri) => (
                    <tr key={ri} className="hover:bg-[#FAF2F2]/60 transition-colors">
                      <td className="px-4 py-3 font-semibold text-stone-900">{row.gloss}</td>
                      <td className="px-4 py-3 font-mono text-stone-700">{row.gawri}</td>
                      <td className="px-4 py-3 font-mono text-stone-700">{row.torwali}</td>
                      <td className="px-4 py-3 font-mono text-stone-700">{row.palula}</td>
                      <td className="px-4 py-3 font-mono text-stone-700">{row.khowar}</td>
                      <td className="px-4 py-3 font-mono text-stone-700">{row.shina}</td>
                      <td className="px-4 py-3 font-mono text-[#5B0404] font-semibold bg-[#FAF2F2]/40">{row.burushaski}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Phonological Distinctiveness Card */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs space-y-4">
            <h3 className="font-bold text-base text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              Specialized Retroflex Consonants in Pakistani Orthographies
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Standard Arabic and Urdu alphabets lack letters for the complex retroflex affricates and fricatives distinctive to Dardic languages. FLI facilitated community consensus to introduce these standardized Unicode glyphs across northern Pakistani writing systems:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-center">
                <div className="nastaliq-text text-3xl text-[#5B0404] font-bold">ݯ</div>
                <div className="text-xs font-mono font-bold mt-1">U+076F</div>
                <div className="text-[11px] text-stone-500">Retroflex /ʈʂ/ (Tshe)</div>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-center">
                <div className="nastaliq-text text-3xl text-[#5B0404] font-bold">ݮ</div>
                <div className="text-xs font-mono font-bold mt-1">U+076E</div>
                <div className="text-[11px] text-stone-500">Retroflex /ɖʐ/ (Dzhe)</div>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-center">
                <div className="nastaliq-text text-3xl text-[#5B0404] font-bold">ݱ</div>
                <div className="text-xs font-mono font-bold mt-1">U+0771</div>
                <div className="text-[11px] text-stone-500">Retroflex /ʂ/ (She)</div>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-center">
                <div className="nastaliq-text text-3xl text-[#5B0404] font-bold">ݲ</div>
                <div className="text-xs font-mono font-bold mt-1">U+0772</div>
                <div className="text-[11px] text-stone-500">Retroflex /ʐ/ (Zhe)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Language Profile Modal (Drawer) */}
      {activeLanguage && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#e5dfd5] shadow-2xl animate-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#5B0404] text-white p-6 border-b border-[#480303] flex items-start justify-between z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/20 text-[#f5d98b] font-bold">
                    ISO 639-3: {activeLanguage.code}
                  </span>
                  <span className="text-xs text-white/70">
                    {activeLanguage.family}
                  </span>
                </div>
                <h3 className="text-2xl font-serif-display font-bold text-white">
                  {activeLanguage.name}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="nastaliq-text text-3xl text-[#f5d98b] text-right font-bold">
                  {activeLanguage.nativeName}
                </div>
                <button
                  onClick={() => setActiveLanguage(null)}
                  className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Vitality & Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#FAF2F2] rounded-xl border border-[#eedada]">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Vitality Status</div>
                  <div className="text-xs font-bold text-[#5B0404] mt-0.5">
                    {activeLanguage.endangerment}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Estimated Speakers</div>
                  <div className="text-xs font-bold text-stone-800 mt-0.5">
                    {activeLanguage.estimatedSpeakers}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Writing Script</div>
                  <div className="text-xs font-bold text-stone-800 mt-0.5">
                    {activeLanguage.script}
                  </div>
                </div>
              </div>

              {/* Geographic Region */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-1">
                  Geographic Location & Habitat
                </h4>
                <p className="text-sm text-stone-800 font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#5B0404]" />
                  <span>{activeLanguage.region}</span>
                </p>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-1">
                  Linguistic Background & Features
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeLanguage.description}
                </p>
              </div>

              {/* Phonology Notes */}
              {activeLanguage.phonologyNotes && (
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase text-stone-500 tracking-wider">
                      Phonology & Orthography Notes
                    </span>
                    <span className="text-[10px] text-stone-400">Linguistic Fieldwork</span>
                  </div>
                  <div className="text-xs text-stone-700 leading-relaxed">
                    {activeLanguage.phonologyNotes}
                  </div>
                </div>
              )}

              {/* Community Partner */}
              {activeLanguage.communityPartners && (
                <div className="p-3.5 bg-[#FAF2F2] rounded-lg border border-[#eedada]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#5B0404]">
                    Grassroots Community-Based Organization (CBO)
                  </h4>
                  <p className="text-xs font-semibold text-[#5B0404] flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                    <span>{activeLanguage.communityPartners}</span>
                  </p>
                </div>
              )}

              {/* Cross-link to publications */}
              <div className="pt-4 border-t border-[#e5dfd5] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveLanguage(null);
                    onNavigate('publications', activeLanguage.name);
                  }}
                  className="px-4 py-2.5 bg-[#5B0404] text-white rounded-lg hover:bg-[#480303] transition-colors flex items-center gap-1.5 font-semibold text-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Search Publications in {activeLanguage.name}</span>
                </button>

                <button
                  onClick={() => {
                    setActiveLanguage(null);
                    onNavigate('digital-resources');
                  }}
                  className="px-4 py-2.5 bg-stone-100 text-[#5B0404] border border-[#e5dfd5] rounded-lg hover:bg-[#FAF2F2] transition-colors font-semibold text-xs"
                >
                  Download Keyboards & Fonts
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
