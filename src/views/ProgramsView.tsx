import React, { useState } from 'react';
import { 
  GraduationCap, 
  Download, 
  FileText, 
  CheckCircle2, 
  Users, 
  Compass, 
  Layers, 
  ArrowRight,
  BookOpen,
  Calendar,
  ExternalLink
} from 'lucide-react';

interface ProgramsViewProps {
  initialTab?: string;
  onNavigate: (view: string, subParam?: string) => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({ initialTab = 'equipping', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const lmdReports = [
    { id: 'lmd-6', title: 'LMD-6 Workshop Report', date: 'Language Materials Development Stage 6', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2015/02/LMD-6-Workshop-Report.pdf' },
    { id: 'lmd-5', title: 'LMD-5 Workshop Report', date: 'Language Materials Development Stage 5', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2015/02/LMD-4-Workshop-Report.pdf' },
    { id: 'lmd-4', title: 'LMD-4 Workshop Report', date: 'Language Materials Development Stage 4', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2015/02/LMD-4-Workshop-Report.pdf' },
    { id: 'lmd-3', title: 'LMD-3 Workshop Report', date: 'Language Materials Development Stage 3', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2015/02/LMD-3-Workshop-Report.pdf' },
    { id: 'lmd-2', title: 'LMD-2 Workshop Report', date: 'Language Materials Development Stage 2', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2015/02/LMD-2-Workshop-Report.pdf' },
    { id: 'lmd-1', title: 'LMD-1 Workshop Report', date: 'Language Materials Development Stage 1', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2015/02/LMD-1-Workshop-Report.pdf' }
  ];

  const lctReports = [
    { id: 'lct-3', title: 'MLE Committee Training III', desc: 'Advanced committee governance, school oversight, and community financing for mother-tongue schools.', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2016/09/LCT-3-Workshop-Report.pdf' },
    { id: 'lct-2', title: 'MLE Committee Training II', desc: 'Teacher mentoring, orthography pedagogical training, and student assessment frameworks.', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2016/09/LCT-2-Workshop-Report.pdf' },
    { id: 'lct-1', title: 'MLE Committee Training I', desc: 'Foundational community mobilization, parent engagement, and mother-tongue literacy committees.', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2016/09/1st-Report-on-MLE-Committee-Training.pdf' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Programs & Field Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
          Equipping Mountain Communities for Language Vitality
        </h1>
        <p className="text-sm text-[#4b5563] leading-relaxed">
          FLI provides practical, grassroots linguistic training, committee management frameworks, 
          and curriculum workshops that place mother-tongue speakers at the center of their own cultural future.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#e5dfd5] overflow-x-auto pb-1 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('equipping')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'equipping'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          Equipping the Communities
        </button>
        <button
          onClick={() => setActiveTab('discovery')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'discovery'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          Discovery Course Offering
        </button>
        <button
          onClick={() => setActiveTab('mle')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'mle'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          MLE Committee Training (LCT)
        </button>
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'curriculum'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          Curriculum & Materials (LMD 1–6)
        </button>
      </div>

      {/* TAB CONTENT */}

      {/* 1. Equipping Communities */}
      {activeTab === 'equipping' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <h2 className="text-2xl font-bold font-serif-display text-[#5B0404]">
              Community-Led Language Development Strategy
            </h2>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              Minoritized language communities face intense socio-economic pressure to abandon their mother tongues 
              in favor of national and international dominant tongues. FLI counteracts this attrition by strengthening 
              the capacity of local community leaders, writers, and educators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#faf8f5] border border-[#e5dfd5] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#5B0404] text-[#f59e0b] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-bold text-sm text-[#5B0404]">
                  Community Mobilization & Awareness
                </h3>
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  Facilitating dialogues with village elders, youth, and women to instill pride in the cultural and intellectual worth of their ancestors’ words.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#faf8f5] border border-[#e5dfd5] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#5B0404] text-[#f59e0b] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-bold text-sm text-[#5B0404]">
                  Linguistic Tools & Orthography
                </h3>
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  Providing standardized writing systems based on the Perso-Arabic alphabet with specialized characters for complex retroflex consonants and tones.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#faf8f5] border border-[#e5dfd5] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#5B0404] text-[#f59e0b] flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-bold text-sm text-[#5B0404]">
                  Literature & School Curricula
                </h3>
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  Supporting local writers to draft storybooks, poetry collections, proverbs, and graded primers for early childhood multilingual classrooms.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF2F2] rounded-xl border border-[#EEDADA] text-xs text-[#5B0404] space-y-1">
              <strong>Partnership with Grassroots CBOs:</strong>
              <p className="text-[#821111]">
                FLI works through registered community-based organizations such as Idara Baraye Taleem-o-Taraqi (IBT Swat), 
                Gawri Community Development Program (GCDP Kalam), Anjuman-e-Taraqqi-e-Palula (Ashret Chitral), 
                Al-Qalam Gawarbati Forum (Arandu), and Pir Roshan Literary Tolana (Waziristan).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Discovery Course */}
      {activeTab === 'discovery' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#c26d38] uppercase">Flagship Training Course</span>
                <h2 className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                  FLI Discovery Course Offering
                </h2>
              </div>
              <a
                href="https://fli-online.org/site/wp-content/uploads/2018/06/Discovery-Invitation-Latter-edted.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-semibold rounded-xl flex items-center gap-2 self-start sm:self-auto transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-[#f59e0b]" />
                <span>Download Discovery Course Invitation (PDF)</span>
              </a>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              The <strong>Discovery Course</strong> is an intensive training seminar offered by FLI for community leaders, 
              native speakers, and prospective linguistic researchers. It demystifies the scientific foundations of language 
              documentation, articulatory phonetics, and orthography design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-2">
                <h3 className="font-bold text-xs text-[#5B0404] uppercase tracking-wider">
                  Course Modules & Syllabus
                </h3>
                <ul className="text-xs text-[#4b5563] space-y-1.5">
                  <li>• <strong>Introduction to Descriptive Linguistics</strong>: Language families of Pakistan, phonetics, and acoustic analysis.</li>
                  <li>• <strong>Orthography Design</strong>: Adapting the Urdu/Perso-Arabic script for minority language phonemes and tone markers.</li>
                  <li>• <strong>Lexicography & Wordlists</strong>: Systematic elicitation using 1,000-word and 2,000-word comparative templates.</li>
                  <li>• <strong>Sociolinguistics & Vitality Assessment</strong>: Measuring intergenerational transmission, domains of use, and language attitudes.</li>
                </ul>
              </div>

              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-2">
                <h3 className="font-bold text-xs text-[#5B0404] uppercase tracking-wider">
                  Who Should Attend?
                </h3>
                <ul className="text-xs text-[#4b5563] space-y-1.5">
                  <li>• Native speakers of endangered Pakistani languages passionate about cultural preservation.</li>
                  <li>• Schoolteachers and educators in mother-tongue communities.</li>
                  <li>• University students of linguistics, anthropology, and literature.</li>
                  <li>• Community organizers and members of cultural welfare societies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. MLE Committee Training (LCT) */}
      {activeTab === 'mle' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Governance & Sustainability</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                Mother Tongue-Based Multilingual Education (MLE) Committee Training
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              Sustainable mother-tongue schools cannot depend solely on external donors; they require robust 
              community ownership. FLI conducted a multi-stage <strong>Language Committee Training (LCT)</strong> 
              series to teach village committees how to manage school finances, supervise teachers, and mobilize local parents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {lctReports.map((r) => (
                <div key={r.id} className="p-5 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#c26d38] uppercase">Official Workshop Report</span>
                    <h3 className="font-bold text-sm text-[#5B0404]">{r.title}</h3>
                    <p className="text-xs text-[#6b7280] leading-relaxed">{r.desc}</p>
                  </div>
                  <a
                    href={r.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-white hover:bg-[#5B0404] text-[#5B0404] hover:text-white border border-[#5B0404] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Report (PDF)</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Curriculum & Materials Development (LMD) */}
      {activeTab === 'curriculum' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Pedagogical Workshop Series</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                Curriculum and Materials Development (LMD 1–6)
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              Producing high-quality textbooks, primers, and storybooks requires iterative drafting, testing, 
              and pedagogical review. FLI carried out six successive stages of <strong>Language Materials Development (LMD)</strong> 
              workshops with native language teams across Chitral, Swat, and Kohistan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {lmdReports.map((report) => (
                <div key={report.id} className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-xs text-[#5B0404]">{report.title}</h3>
                    <div className="text-[11px] text-[#6b7280]">{report.date}</div>
                  </div>
                  <a
                    href={report.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white text-[#5B0404] hover:bg-[#5B0404] hover:text-white border border-[#d5cfc5] rounded-lg transition-colors"
                    title="Download PDF Report"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
