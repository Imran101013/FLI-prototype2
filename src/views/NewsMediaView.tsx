import React, { useState } from 'react';
import { Newspaper, Calendar, MapPin, ExternalLink, Radio, Tv, FileText, ArrowLeft, Share2 } from 'lucide-react';
import { NEWS_ARTICLES, NewsArticle } from '../data/fliData';

interface NewsMediaViewProps {
  initialArticleId?: string;
}

export const NewsMediaView: React.FC<NewsMediaViewProps> = ({ initialArticleId }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(() => {
    if (initialArticleId) {
      return NEWS_ARTICLES.find(a => a.id === initialArticleId) || null;
    }
    return null;
  });

  const mediaCoverage = [
    {
      outlet: 'BBC Urdu',
      title: 'پاکستان کی قومی زبانیں اور معدومی کے خطرے سے دوچار مادری بولیاں',
      type: 'Feature Analysis',
      desc: 'In-depth investigative report highlighting FLI’s pioneering documentation of endangered Dardic and Pamir languages.'
    },
    {
      outlet: 'Daily Dawn, Islamabad',
      title: 'How Many Languages are Spoken in Pakistan? Preserving the Living Heritage',
      type: 'National Broadsheet',
      desc: 'Extensive front-page special report analyzing FLI’s survey of Northern Pakistan languages and the call for mother-tongue schooling.'
    },
    {
      outlet: 'Daily Mashriq, Peshawar',
      title: 'شمالی علاقہ جات کی مادری زبانوں کے تحفظ کے لیے ایف ایل آئی کی کوششیں قابل فخر ہیں',
      type: 'Provincial Editorial',
      desc: 'Coverage of FLI’s community writers workshops across Swat, Dir, and Chitral.'
    },
    {
      outlet: 'The News International',
      title: 'Linguistic Diversity in the High Valleys: The Struggle to Save Oral Epics',
      type: 'English National',
      desc: 'Profiling Henrik Liljegren and FLI’s work on Palula and Gawri dictionary compilations.'
    },
    {
      outlet: 'Rose News TV',
      title: 'Televised Special Report: International Mother Language Day at FLI Secretariat',
      type: 'Television Broadcast',
      desc: 'Interviews with community elders, poets from Chitral and Kohistan, and linguistic researchers.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* If article detail is selected */}
      {selectedArticle ? (
        <div className="space-y-6 max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-[#e5dfd5] shadow-xs">
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-xs font-semibold text-[#5B0404] hover:text-[#c26d38] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All News & Media</span>
          </button>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#6b7280]">
              <span className="font-semibold text-[#c26d38] uppercase tracking-wider">{selectedArticle.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedArticle.date}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedArticle.location}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#5B0404] leading-tight">
              {selectedArticle.title}
            </h1>
          </div>

          <div className="pt-4 border-t border-[#e5dfd5] space-y-4 text-sm text-[#374151] leading-relaxed">
            {selectedArticle.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] text-xs text-[#6b7280]">
            Official dispatch issued by the Forum for Language Initiatives Secretariat, Islamabad, Pakistan.
          </div>
        </div>
      ) : (
        <>
          {/* Main List View */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
              <Newspaper className="w-4 h-4" />
              <span>Newsroom & Press Bureau</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
              News, Field Dispatches & Media Coverage
            </h1>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              Stay up to date with FLI’s community workshops, conferences, executive board announcements, 
              and coverage across national and international press outlets.
            </p>
          </div>

          {/* Recent Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl p-6 border border-[#e5dfd5] hover:border-[#5B0404] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#6b7280]">
                    <span className="font-semibold text-[#c26d38] uppercase tracking-wider text-[11px]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#5B0404] group-hover:text-[#c26d38] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#544540] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-[#6b7280]">
                    <MapPin className="w-3.5 h-3.5 text-[#5B0404]" />
                    <span>{article.location}</span>
                  </span>
                  <span className="font-bold text-[#5B0404] group-hover:underline">
                    Read Full Story →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* FLI in National and International Media */}
          <div className="pt-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Press Clippings</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404]">
                FLI in National & International Media
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaCoverage.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[#e5dfd5] hover:border-[#5B0404] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#5B0404]">{item.outlet}</span>
                      <span className="text-[10px] font-mono bg-[#faf8f5] text-[#6b7280] px-2 py-0.5 rounded border border-[#e5dfd5]">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-[#5B0404] leading-snug">{item.title}</h3>
                    <p className="text-xs text-[#544540] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-[#c26d38] flex items-center gap-1">
                    <span>Press Archive Record</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
};
