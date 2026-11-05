import React, { useState } from 'react';
import { 
  FLI_ABOUT, 
  LANGUAGE_TREE_DATA,
  GEOGRAPHIC_REGIONS
} from '../data/fliData';
import { 
  Building2, 
  Target, 
  Compass, 
  Award, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Globe2, 
  HeartHandshake, 
  Languages, 
  Share2, 
  Sparkles, 
  FileCheck2, 
  ArrowRight,
  MapPin,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface AboutViewProps {
  initialTab?: string;
  onNavigate: (view: string, subParam?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ initialTab = 'overview', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // Icon mapping for core values
  const getIcon = (name: string) => {
    switch (name) {
      case 'Languages': return <Languages className="w-6 h-6 text-[#5B0404]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#5B0404]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#5B0404]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#5B0404]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#5B0404]" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-[#5B0404]" />;
      default: return <Award className="w-6 h-6 text-[#5B0404]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Editorial Banner */}
      <section className="bg-gradient-to-b from-[#5B0404] via-[#480303] to-[#360202] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#C59B27] relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C59B27]/20 text-[#f5d98b] border border-[#C59B27]/40 tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
              Institutional Profile
            </span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/80 text-xs font-mono">Founded 2003 • Islamabad</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/80 text-xs">Societies Registration Act XXI of 1860</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-display font-bold tracking-tight text-white mb-4 leading-tight">
            About Forum for Language Initiatives
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed font-light">
            Empowering minoritized ethnolinguistic communities of northern Pakistan to revitalize, document, and celebrate their mother tongues through community ownership, literacy, and policy advocacy.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#f5d98b]">29+</div>
              <div className="text-xs text-white/80 mt-1 uppercase tracking-wider">Target Languages</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#f5d98b]">80+</div>
              <div className="text-xs text-white/80 mt-1 uppercase tracking-wider">Books Published</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#f5d98b]">20+ Yrs</div>
              <div className="text-xs text-white/80 mt-1 uppercase tracking-wider">Grassroots Fieldwork</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#f5d98b]">14 CBOs</div>
              <div className="text-xs text-white/80 mt-1 uppercase tracking-wider">Provincial Coalition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sub-Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-[#e5dfd5] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto py-3 no-scrollbar" aria-label="About Sub-sections">
            {[
              { id: 'overview', label: 'Overview & History', icon: Building2 },
              { id: 'values', label: 'Vision, Mission & Values', icon: Target },
              { id: 'objectives', label: 'Strategic Objectives', icon: Compass },
              { id: 'board', label: 'Executive Board', icon: Users },
              { id: 'methodology', label: '4-Pillar Model', icon: Layers },
              { id: 'governance', label: 'Legal & Governance', icon: ShieldCheck }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#5B0404] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#5B0404] hover:bg-[#FAF2F2]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#f5d98b]' : 'text-stone-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Contents */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TAB 1: OVERVIEW & HISTORY */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-xl border border-[#e5dfd5] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5B0404] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#5B0404]"></span>
                  Who We Are
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mb-6">
                  Preserving Northern Pakistan’s Living Heritage
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                  <p className="text-base sm:text-lg text-stone-800 font-medium">
                    The Forum for Language Initiatives (FLI) is a pioneer non-governmental linguistic resource center established in 2003 and headquartered in Islamabad, Pakistan.
                  </p>
                  <p>
                    Pakistan is one of the world’s most linguistically diverse regions, home to over 70 living languages. Yet more than 30 minoritized mountain idioms spoken across Khyber Pakhtunkhwa (Chitral, Swat, Kohistan, Dir), Gilgit-Baltistan (Hunza, Gilgit, Baltistan), Azad Jammu & Kashmir, and South Waziristan are classified as severely or critically endangered by UNESCO.
                  </p>
                  <p>
                    For decades, these communities lacked written scripts, mother-tongue schooling, and institutional recognition. When children enter primary schools where their mother tongue is banned or ridiculed, high dropout rates and profound loss of cultural self-esteem inevitably follow.
                  </p>
                  <p>
                    FLI was formed by indigenous scholars, elders, and educators to reverse this trajectory. Rather than treating languages as passive academic specimens, FLI works hand-in-hand with native speakers to establish Community-Based Organizations (CBOs), standardize writing orthographies, develop multilingual pre-primary education (MTB-MLE), publish vernacular folk literature, and engineer digital Nastaliq fonts and mobile keyboards.
                  </p>
                </div>

                {/* Key Milestones Timeline */}
                <div className="mt-10 pt-8 border-t border-[#e5dfd5]">
                  <h3 className="text-lg font-serif-display font-bold text-stone-900 mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#5B0404]" />
                    Key Milestones Across Two Decades
                  </h3>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#eedada]">
                    {[
                      {
                        year: '2003',
                        title: 'Founding of FLI in Islamabad',
                        desc: 'Formed by northern mountain community activists and linguists following initial field research in Kohistan, Swat, and Chitral.'
                      },
                      {
                        year: '2006',
                        title: 'Launch of the Discovery Course',
                        desc: 'Pioneered the flagship 5-day linguistic self-assessment workshop, training native speakers to diagnose endangerment and organize local language committees.'
                      },
                      {
                        year: '2008–2014',
                        title: 'Language & Materials Development (LMD 1–6)',
                        desc: 'Systematized orthography development workshops; published the first standardized alphabet charts and primers for Gawri, Torwali, Palula, and Ormuri.'
                      },
                      {
                        year: '2016–2020',
                        title: 'Digital Fonts, Keyman & COVID-19 Awareness',
                        desc: 'Partnered with SIL International to release specialized Nastaliq fonts with retroflex diacritics; broadcasted life-saving COVID-19 health messages in 12 minoritized tongues.'
                      },
                      {
                        year: '2022–2026',
                        title: 'UNESCO IDIL & FEL XXVIII International Conference',
                        desc: 'Elected Pakistani coordinating civil society focal body for the UNESCO International Decade of Indigenous Languages (IDIL 2022–2032); hosted the 28th Foundation for Endangered Languages conference.'
                      }
                    ].map((m, i) => (
                      <div key={i} className="relative pl-8">
                        <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#5B0404] ring-4 ring-white" />
                        <div className="text-xs font-mono font-bold text-[#5B0404] tracking-wider">{m.year}</div>
                        <h4 className="text-base font-semibold text-stone-900 mt-0.5">{m.title}</h4>
                        <p className="text-sm text-stone-600 mt-1 leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#FAF2F2] p-6 rounded-xl border border-[#eedada]">
                  <div className="text-xs font-bold text-[#5B0404] uppercase tracking-wider mb-2">Official Mandate</div>
                  <h3 className="text-lg font-serif-display font-bold text-stone-900 mb-3">Our Core Promise</h3>
                  <blockquote className="border-l-3 border-[#5B0404] pl-4 italic text-sm text-stone-700 leading-relaxed">
                    “To empower ethno-linguistic communities of Pakistan to strengthen their linguistic and cultural heritages so that every child can learn in their mother tongue.”
                  </blockquote>
                  <div className="mt-4 pt-4 border-t border-[#eedada] text-xs text-stone-500 space-y-2">
                    <div><strong>Headquarters:</strong> P.O. Box 763, Islamabad, Pakistan</div>
                    <div><strong>Telephone:</strong> +92 51 225 0068</div>
                    <div><strong>Official Domain:</strong> fli-online.org</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e5dfd5] shadow-xs">
                  <h3 className="text-base font-serif-display font-bold text-stone-900 mb-3">Geographic Reach</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    FLI active initiatives span five distinct administrative zones across the high mountain valleys of northern Pakistan:
                  </p>
                  <ul className="space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#5B0404]" />
                      <strong>Khyber Pakhtunkhwa:</strong> Chitral, Swat, Kohistan, Dir, Mansehra
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#5B0404]" />
                      <strong>Gilgit-Baltistan:</strong> Hunza, Nagar, Gilgit, Skardu, Ghizer
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#5B0404]" />
                      <strong>Azad Jammu & Kashmir:</strong> Neelum Valley, Leepa
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#5B0404]" />
                      <strong>South Waziristan:</strong> Kaniguram (Ormuri enclave)
                    </li>
                  </ul>
                  <button
                    onClick={() => onNavigate('languages')}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#5B0404] bg-[#FAF2F2] hover:bg-[#5B0404] hover:text-white rounded-md transition-colors"
                  >
                    <span>View All 29 Target Languages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VISION, MISSION & VALUES */}
        {activeTab === 'values' && (
          <div className="space-y-12">
            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border-t-4 border-[#5B0404] shadow-xs border-x border-b border-[#e5dfd5]">
                <div className="w-12 h-12 rounded-lg bg-[#FAF2F2] text-[#5B0404] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#5B0404] uppercase tracking-wider mb-1">Our North Star</div>
                <h3 className="text-2xl font-serif-display font-bold text-stone-900 mb-3">Our Vision</h3>
                <p className="text-stone-700 text-lg leading-relaxed font-light">
                  “To see all ethnolinguistic communities in Pakistan flourishing culturally and economically.”
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 nastaliq-text text-stone-600 text-right text-base">
                  پاکستان کی تمام نسلی و لسانی برادریوں کو ثقافتی اور اقتصادی طور پر پھلتا پھولتا دیکھنا۔
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border-t-4 border-[#C59B27] shadow-xs border-x border-b border-[#e5dfd5]">
                <div className="w-12 h-12 rounded-lg bg-[#FAF2F2] text-[#C59B27] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-[#5B0404]" />
                </div>
                <div className="text-xs font-bold text-[#C59B27] uppercase tracking-wider mb-1">Our Mandate</div>
                <h3 className="text-2xl font-serif-display font-bold text-stone-900 mb-3">Our Mission</h3>
                <p className="text-stone-700 text-lg leading-relaxed font-light">
                  “To empower ethno-linguistic communities of Pakistan to strengthen their linguistic and cultural heritages.”
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 nastaliq-text text-stone-600 text-right text-base">
                  پاکستان کی نسلی و لسانی برادریوں کو ان کے لسانی اور ثقافتی ورثے کو مضبوط بنانے کے لیے بااختیار بنانا۔
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">Foundational Principles</span>
                <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mt-1">Our Six Core Values</h3>
                <p className="text-stone-600 text-sm mt-2">
                  Ethical commitments that guide every community workshop, linguistic survey, and policy initiative.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FLI_ABOUT.coreValues.map((v) => (
                  <div key={v.id} className="bg-white p-6 rounded-xl border border-[#e5dfd5] hover:border-[#5B0404] shadow-xs hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-[#FAF2F2] flex items-center justify-center">
                        {getIcon(v.iconName)}
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                        VALUE
                      </span>
                    </div>
                    <h4 className="text-base font-serif-display font-bold text-stone-900 mb-1 leading-snug">
                      {v.title}
                    </h4>
                    <div className="nastaliq-text text-stone-500 text-xs mb-3 text-right">
                      {v.urduTitle}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STRATEGIC OBJECTIVES */}
        {activeTab === 'objectives' && (
          <div className="space-y-10">
            <div className="bg-[#5B0404] text-white p-8 rounded-xl shadow-md border border-[#480303] relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-10 text-white pointer-events-none">
                <Target className="w-64 h-64" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f5d98b]">Institutional Goal</span>
                <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-white mt-1 mb-3">
                  {FLI_ABOUT.goal}
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  FLI’s multi-year strategic framework is designed to move endangered idioms from passive oral preservation into active public, digital, and educational vitality across Pakistan.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-serif-display font-bold text-stone-900">
                Five Strategic Objectives (Exact FLI Charter)
              </h3>
              
              <div className="space-y-6">
                {FLI_ABOUT.strategicObjectives.map((obj) => (
                  <div key={obj.number} className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#5B0404] text-white font-bold font-serif-display text-sm flex items-center justify-center">
                          {obj.number}
                        </span>
                        <h4 className="text-lg font-bold text-stone-900">
                          {obj.title}
                        </h4>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF2F2] text-[#5B0404] border border-[#eedada]">
                        {obj.targetMetric}
                      </span>
                    </div>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed pl-11 mb-4">
                      {obj.description}
                    </p>

                    <div className="pl-11 pt-4 border-t border-stone-100">
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Key Implementation Pillars:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {obj.keyActions.map((action, ai) => (
                          <div key={ai} className="flex items-start gap-2 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B0404] shrink-0 mt-0.5" />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EXECUTIVE BOARD */}
        {activeTab === 'board' && (
          <div className="space-y-10">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5B0404] uppercase tracking-wider mb-2">
                <Users className="w-4 h-4 text-[#5B0404]" />
                Governance & Fiduciary Oversight
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mb-4">
                FLI Executive Board Members
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
                The Forum for Language Initiatives is governed by an independent Executive Board comprising renowned linguists, anthropologists, community leaders from minoritized language communities, and development professionals. The Board provides strategic direction, statutory oversight, and ethical accountability.
              </p>
            </div>

            {/* Executive Director Feature Card */}
            <div className="bg-gradient-to-br from-[#FAF2F2] to-white p-6 sm:p-8 rounded-xl border-2 border-[#5B0404]/30 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-[#5B0404] text-white flex items-center justify-center font-serif-display font-bold text-2xl shadow-md shrink-0">
                  FA
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#5B0404] text-white">
                      Executive Leadership
                    </span>
                    <span className="text-xs text-stone-500 font-mono">Secretary to the Board</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-stone-900">
                    {FLI_ABOUT.executiveDirector.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#5B0404]">
                    {FLI_ABOUT.executiveDirector.role} • {FLI_ABOUT.executiveDirector.affiliation}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-2">
                    {FLI_ABOUT.executiveDirector.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Board Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FLI_ABOUT.boardMembers.map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-[#e5dfd5] hover:border-[#5B0404] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#FAF2F2] text-[#5B0404] font-serif-display font-bold text-sm flex items-center justify-center border border-[#eedada]">
                        {member.name.split(' ').slice(1, 3).map(n => n[0]).join('') || 'BM'}
                      </div>
                      <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {member.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-stone-900 mb-1">
                      {member.name}
                    </h4>
                    <div className="text-xs font-medium text-[#5B0404] mb-2">
                      {member.role}
                    </div>
                    <div className="text-xs text-stone-500 mb-3 italic">
                      {member.affiliation}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
                    Governance Status: Active
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: METHODOLOGY */}
        {activeTab === 'methodology' && (
          <div className="space-y-10">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
              <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">Grassroots Science</span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mt-1 mb-3">
                The FLI 4-Pillar Revitalization Model
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
                Language revitalization requires an integrated pipeline—from initial sociolinguistic diagnosis to orthography consensus, pedagogical curriculum, and literature publishing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FLI_ABOUT.methodologyPillars.map((pillar) => (
                <div key={pillar.number} className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs relative">
                  <div className="text-3xl font-bold font-serif-display text-[#5B0404]/20 mb-2">
                    {pillar.number}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#5B0404] mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <div className="pt-4 border-t border-stone-100">
                    <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">Key Outcomes:</div>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {pillar.outcomes.map((out, oi) => (
                        <li key={oi} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B0404]" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Link to Training Programs */}
            <div className="bg-[#FAF2F2] p-6 rounded-xl border border-[#eedada] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#5B0404]">Explore FLI’s Specialized Training Courses</h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Read documentation on the Discovery Course, MLE Committee Training, and LMD 1–6 workshops.
                </p>
              </div>
              <button
                onClick={() => onNavigate('programs')}
                className="px-5 py-2.5 rounded-lg bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-semibold tracking-wider transition-colors shrink-0"
              >
                Go to Programs & Training
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: LEGAL & GOVERNANCE */}
        {activeTab === 'governance' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e5dfd5] shadow-xs">
              <span className="text-xs font-bold text-[#5B0404] uppercase tracking-wider">Statutory Standing</span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-stone-900 mt-1 mb-4">
                Legal Registration & Compliance
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700">
                <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                  <div className="text-xs font-bold text-stone-500 uppercase mb-1">Registration Entity</div>
                  <div className="font-semibold text-stone-900 mb-2">Societies Registration Act XXI of 1860</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    FLI is formally incorporated as an autonomous, non-profit, non-political research and development society under the Societies Registration Act XXI of 1860 with Registration No. 3672, Islamabad.
                  </p>
                </div>

                <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                  <div className="text-xs font-bold text-stone-500 uppercase mb-1">National Tax & Audits</div>
                  <div className="font-semibold text-stone-900 mb-2">Federal Board of Revenue (FBR) Compliant</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Subject to annual statutory audits by chartered accountants adhering to International Financial Reporting Standards (IFRS). All audited statements are submitted to regulatory authorities and board scrutiny.
                  </p>
                </div>

                <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                  <div className="text-xs font-bold text-stone-500 uppercase mb-1">Ethical Field Research</div>
                  <div className="font-semibold text-stone-900 mb-2">Community Informed Consent</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Strict adherence to indigenous intellectual property rights. All oral folklore, folktales, proverbs, and lexical data documented remain the communal heritage of the native speakers.
                  </p>
                </div>

                <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                  <div className="text-xs font-bold text-stone-500 uppercase mb-1">International Affiliations</div>
                  <div className="font-semibold text-stone-900 mb-2">UNESCO IDIL & FEL Partner</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Official participant and coordinating partner for the UNESCO International Decade of Indigenous Languages (2022–2032) and institutional affiliate of the Foundation for Endangered Languages (UK).
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white p-6 rounded-xl border border-[#e5dfd5] text-center max-w-xl mx-auto">
              <h3 className="text-lg font-serif-display font-bold text-stone-900 mb-2">Need Institutional Verification or Research Collaboration?</h3>
              <p className="text-xs text-stone-600 mb-4">
                Our Secretariat in Islamabad is open to researchers, government delegations, and community leaders.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-semibold tracking-wider transition-colors"
              >
                <span>Contact FLI Secretariat</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
