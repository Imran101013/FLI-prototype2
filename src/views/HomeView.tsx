import React from 'react';
import { 
  Languages, 
  BookOpen, 
  GraduationCap, 
  Users, 
  ArrowRight, 
  Compass, 
  FileText, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Calendar, 
  MapPin, 
  HeartHandshake,
  Layers,
  Code
} from 'lucide-react';
import { FLI_LANGUAGES, VERNACULAR_BOOKS, NEWS_ARTICLES } from '../data/fliData';

interface HomeViewProps {
  onNavigate: (view: string, subParam?: string) => void;
  onOpenWpSpec: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenWpSpec }) => {
  const featuredLanguages = FLI_LANGUAGES.slice(0, 6);
  const recentArticles = NEWS_ARTICLES.slice(0, 3);
  const featuredBooks = VERNACULAR_BOOKS.slice(0, 4);

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative overflow-hidden bg-[#360202] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/fli_hero_mountain_culture_1793853097478.jpg"
            alt="Karakoram mountains and traditional community school in Northern Pakistan"
            className="w-full h-full object-cover object-center opacity-35 scale-102 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#360202] via-[#360202]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#360202] via-[#360202]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#f59e0b] tracking-wide">
              <span>National Resource Center for Pakistan’s Linguistic Heritage</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2002</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-display leading-tight tracking-tight text-white balance">
              To See all Ethnolinguistic Communities in Pakistan Flourishing Culturally and Economically
            </h1>

            <p className="text-base sm:text-lg text-[#EEDADA] leading-relaxed max-w-2xl">
              We put the mother-tongue speakers in the driving seat of language development, 
              cultural documentation, and mother-tongue education. Equipping local communities 
              across the Hindukush, Karakoram, and Himalayas with orthographies, digital keyboards, 
              curricula, and published literature.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('languages')}
                className="px-6 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#360202] font-bold text-sm rounded-xl shadow-lg shadow-black/20 transition-all flex items-center gap-2 group"
              >
                <Languages className="w-4 h-4 text-[#360202]" />
                <span>Explore 29 Target Languages</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('publications')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Publications & Vernacular Series</span>
              </button>

              <button
                onClick={onOpenWpSpec}
                className="px-4 py-3.5 border border-[#f59e0b]/40 hover:border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/10 text-xs font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                <span>WordPress Spec</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional KPI & Impact Metrics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-[#e5dfd5] p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#e5dfd5]">
          
          <div className="pt-4 lg:pt-0 lg:px-4 text-center lg:text-left">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#5B0404] font-serif-display tabular-nums">
              29+
            </div>
            <div className="text-xs font-bold text-[#1F1414] uppercase tracking-wider mt-1">
              Target Indigenous Languages
            </div>
            <p className="text-xs text-[#6b7280] mt-1">
              Across Hindukush, Karakoram, Pamir, and Indus Kohistan valleys.
            </p>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-4 text-center lg:text-left">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#5B0404] font-serif-display tabular-nums">
              2,500+
            </div>
            <div className="text-xs font-bold text-[#1F1414] uppercase tracking-wider mt-1">
              Researchers & Educators Trained
            </div>
            <p className="text-xs text-[#6b7280] mt-1">
              Community writers, schoolteachers, poets, and linguists empowered.
            </p>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-4 text-center lg:text-left">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#5B0404] font-serif-display tabular-nums">
              85+
            </div>
            <div className="text-xs font-bold text-[#1F1414] uppercase tracking-wider mt-1">
              Scholarly Volumes & Primers
            </div>
            <p className="text-xs text-[#6b7280] mt-1">
              Vernacular series, grammar sketches, dictionaries, and folklore collections.
            </p>
          </div>

          <div className="pt-4 lg:pt-0 lg:px-4 text-center lg:text-left">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#5B0404] font-serif-display tabular-nums">
              20+ Years
            </div>
            <div className="text-xs font-bold text-[#1F1414] uppercase tracking-wider mt-1">
              Fieldwork & Advocacy
            </div>
            <p className="text-xs text-[#6b7280] mt-1">
              Steadfast service since 2002 alongside grassroots Community-Based Organizations.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Quick About FLI & Strategic Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Institutional Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#5B0404]">
                We are at the Forefront of Indigenous Language Preservation in Pakistan
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              The <strong>Forum for Language Initiatives (FLI)</strong> is a non-governmental organization 
              established to assist minoritized language communities of Pakistan—especially those inhabiting 
              the northern mountainous areas—in preserving and developing their mother tongues.
            </p>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              Our core philosophy is simple yet revolutionary: rather than outside scholars treating 
              indigenous languages merely as extraction subjects, we train the native speakers themselves. 
              We equip community writers, village schoolteachers, and cultural custodians with linguistic 
              tools, digital fonts, standard alphabets, and institutional support to ensure sustainable vitality.
            </p>

            {/* Strategic Objectives List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-[#e5dfd5] space-y-1">
                <div className="font-bold text-xs text-[#5B0404] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Capacity & Field Research</span>
                </div>
                <p className="text-[11px] text-[#6b7280]">
                  Conduct Discovery courses and training in phonology, orthography, and grammar documentation.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#e5dfd5] space-y-1">
                <div className="font-bold text-xs text-[#5B0404] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Mother-Tongue Education (MLE)</span>
                </div>
                <p className="text-[11px] text-[#6b7280]">
                  Establish early-childhood classrooms and local language primers for cognitive enrichment.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#e5dfd5] space-y-1">
                <div className="font-bold text-xs text-[#5B0404] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Digital Vitality & Keyboards</span>
                </div>
                <p className="text-[11px] text-[#6b7280]">
                  Distribute Nastaliq fonts, PC Keyman packages, and mobile keyboards for all minoritized scripts.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#e5dfd5] space-y-1">
                <div className="font-bold text-xs text-[#5B0404] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Policy & Human Rights</span>
                </div>
                <p className="text-[11px] text-[#6b7280]">
                  Advocate with provincial and national assemblies for constitutional recognition of linguistic diversity.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-4 py-2.5 rounded-lg bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Read Full About FLI, Vision & Board</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('about', 'values')}
                className="text-xs font-bold text-[#5B0404] hover:text-[#730707] flex items-center gap-1.5 transition-colors underline decoration-[#5B0404]/30"
              >
                <span>Our 6 Core Values</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e5dfd5] bg-white group">
              <img
                src="/src/assets/images/fli_language_workshop_1793853098968.jpg"
                alt="Community language documentation workshop in Northern Pakistan with village elders and youth"
                className="w-full h-72 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 space-y-2">
                <div className="text-xs font-bold text-[#5B0404]">
                  Community-Led Linguistic Documentation
                </div>
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  Elders, poets, and young university students collaborate during an FLI workshop 
                  to transcribe oral folklore, compile proverbs, and establish consensus on orthography.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Target Languages Atlas Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#f5f1ea] to-[#e7e1d5] rounded-3xl p-8 lg:p-10 border border-[#dfd7c7] space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Interactive Linguistic Atlas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#5B0404]">
                The Wealth of Northern Pakistan’s Languages
              </h2>
              <p className="text-xs sm:text-sm text-[#5E4E49]">
                Northern Pakistan is one of the world’s most extraordinary linguistic biodiversity hotspots, 
                home to nearly thirty distinct languages belonging to four major phyla.
              </p>
            </div>

            <button
              onClick={() => onNavigate('languages')}
              className="px-5 py-2.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-sm flex items-center gap-2 self-start md:self-auto"
            >
              <span>View Full 29-Language Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Featured Languages Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredLanguages.map((lang) => (
              <div
                key={lang.id}
                onClick={() => onNavigate('languages', lang.id)}
                className="bg-white rounded-xl p-5 border border-[#dfd7c7] hover:border-[#5B0404] transition-all hover:shadow-md cursor-pointer group space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#5B0404] group-hover:text-[#c26d38] transition-colors">
                      {lang.name}
                    </h3>
                    <div className="text-xs font-nastaliq text-[#6b7280] font-medium">
                      {lang.nativeName}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#faf8f5] text-[#5B0404] px-2 py-0.5 rounded border border-[#e5dfd5]">
                    {lang.code}
                  </span>
                </div>

                <div className="text-xs text-[#544540] line-clamp-2 leading-relaxed">
                  {lang.description}
                </div>

                <div className="pt-2 border-t border-[#f0ece3] flex items-center justify-between text-[11px] text-[#6b7280]">
                  <span>{lang.family}</span>
                  <span className="font-medium text-[#c26d38]">{lang.endangerment}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Publications & Vernacular Series Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e5dfd5] bg-white group">
              <img
                src="/src/assets/images/fli_manuscript_heritage_1793853099142.jpg"
                alt="Antique manuscripts of regional poetry and folklore on textured paper"
                className="w-full h-80 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#faf8f5] border-t border-[#e5dfd5] flex items-center justify-between text-xs text-[#6b7280]">
                <span>FLI Cultural Archives</span>
                <span className="font-semibold text-[#5B0404]">Over 85 Books Published</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Preserving Oral Traditions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#5B0404]">
                Vernacular Literature & Research Publications
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              FLI has published over 85 distinct titles spanning <strong>Vernacular Literature</strong> (proverbs, 
              epic poetry, folk stories translated between local languages and Urdu/English), 
              <strong>Language & Culture Series</strong> (monographs by international linguists such as Joan Baart and Henrik Liljegren), 
              and <strong>Community Primers</strong> (alphabet readers for children and adult literacy learners).
            </p>

            <div className="space-y-3 pt-2">
              {featuredBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => onNavigate('publications', 'vernacular')}
                  className="p-3.5 bg-white rounded-xl border border-[#e5dfd5] hover:border-[#5B0404] transition-all cursor-pointer flex items-center justify-between gap-4 group"
                >
                  <div>
                    <div className="font-bold text-xs text-[#5B0404] group-hover:text-[#c26d38] transition-colors">
                      {book.title}
                    </div>
                    <div className="text-[11px] text-[#6b7280]">
                      {book.author} · {book.language} ({book.year})
                    </div>
                  </div>
                  <div className="font-nastaliq text-xs text-[#5B0404] font-bold shrink-0">
                    {book.nativeTitle}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('publications')}
                className="px-5 py-2.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Browse Full Publications Library</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Success Stories & Mother-Tongue Education */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5B0404] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#f59e0b] tracking-wide">
                <span>Mother Tongue-Based Multilingual Education</span>
                <span aria-hidden="true">·</span>
                <span>Swat & Chitral</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-white">
                Transforming Children’s Education through Native Mother Tongues
              </h2>

              <p className="text-sm text-[#EEDADA] leading-relaxed">
                When children enter early schooling taught solely in unfamiliar languages, cognitive confidence falters. 
                Through FLI’s partnership with community organizations like <strong>Idara Baraye Taleem-o-Taraqi (IBT)</strong> in Swat 
                and <strong>GCDP</strong> in Kalam, hundreds of mountain children are learning to read, count, and sing in their 
                mother tongues (Torwali, Gawri, Palula) before transitioning into Urdu and English.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('success-stories')}
                  className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#5B0404] text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>Read Full Impact Stories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('programs', 'mle')}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
                >
                  MLE Committee Framework
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/src/assets/images/fli_children_storytelling_1793853099534.jpg"
                  alt="Northern Pakistan school children reading illustrated mother tongue storybooks"
                  className="w-full h-72 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Latest Dispatches, Events & News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              News & Field Reports
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#5B0404]">
              Recent Events from the Communities
            </h2>
          </div>
          <button
            onClick={() => onNavigate('news-media')}
            className="text-xs font-bold text-[#5B0404] hover:text-[#c26d38] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>View All News & Press Coverage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => onNavigate('news-media', art.id)}
              className="bg-white rounded-2xl p-6 border border-[#e5dfd5] hover:border-[#5B0404] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#6b7280]">
                  <span className="font-semibold text-[#c26d38]">{art.category}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="font-bold text-sm text-[#5B0404] group-hover:text-[#c26d38] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#544540] leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between text-[11px] text-[#6b7280]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#5B0404]" />
                  <span>{art.location}</span>
                </span>
                <span className="font-semibold text-[#5B0404] group-hover:underline">Read article →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. WordPress Redesign Spec Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF2F2] border-2 border-dashed border-[#E5C158] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Code className="w-5 h-5 text-[#5B0404]" />
              <span className="text-sm font-bold text-[#5B0404] font-mono">
                WordPress Theme & Data Migration Blueprint
              </span>
            </div>
            <p className="text-xs text-[#4b5563] max-w-xl">
              This prototype organizes all 29 languages, 85+ books, and newsletters into structured 
              Custom Post Types (CPTs), ACF field groups, and Gutenberg Block template architectures. 
              Open the live developer drawer to inspect PHP and JSON deliverables.
            </p>
          </div>
          <button
            onClick={onOpenWpSpec}
            className="px-5 py-3 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-bold rounded-xl shadow-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Code className="w-4 h-4 text-[#f59e0b]" />
            <span>Open WordPress Architecture Specs</span>
          </button>
        </div>
      </section>

    </div>
  );
};
