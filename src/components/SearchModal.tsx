import React, { useState, useMemo } from 'react';
import { Search, X, Languages, BookOpen, Newspaper, FileText, ArrowRight } from 'lucide-react';
import { FLI_LANGUAGES, NEWSLETTERS_ARCHIVE, NEWS_ARTICLES, FLI_ABOUT } from '../data/fliData';
import { getAllPublications } from '../utils/fliHelpers';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (view: string, subParam?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');
  const allBooks = useMemo(() => getAllPublications(), []);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q || q.length < 2) return null;

    // Search About section items
    const aboutItems: { title: string; desc: string; tab: string }[] = [];
    if ('vision'.includes(q) || 'mission'.includes(q) || 'values'.includes(q)) {
      aboutItems.push({ title: 'Vision, Mission & Core Values', desc: FLI_ABOUT.vision, tab: 'values' });
    }
    if ('objective'.includes(q) || 'goal'.includes(q) || 'policy'.includes(q)) {
      aboutItems.push({ title: 'Our Strategic Objectives', desc: FLI_ABOUT.goal, tab: 'objectives' });
    }
    if ('board'.includes(q) || 'director'.includes(q) || 'burki'.includes(q) || 'akhunzada'.includes(q) || 'executive'.includes(q) || 'kohistani'.includes(q)) {
      aboutItems.push({ title: 'FLI Executive Board Members', desc: 'Leadership, scholars, and community champions', tab: 'board' });
    }
    if ('history'.includes(q) || 'founded'.includes(q) || 'about'.includes(q) || 'overview'.includes(q)) {
      aboutItems.push({ title: 'Who We Are & History', desc: 'Non-profit language resource center founded in 2003', tab: 'overview' });
    }

    const matchedLanguages = FLI_LANGUAGES.filter(
      l => l.name.toLowerCase().includes(q) || 
           l.nativeName.includes(q) || 
           l.region.toLowerCase().includes(q) ||
           l.family.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedBooks = allBooks.filter(
      b => b.title.toLowerCase().includes(q) || 
           b.nativeTitle.includes(q) || 
           b.author.toLowerCase().includes(q) ||
           b.language.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedNews = NEWS_ARTICLES.filter(
      n => n.title.toLowerCase().includes(q) || 
           n.summary.toLowerCase().includes(q) ||
           n.location.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedNewsletters = NEWSLETTERS_ARCHIVE.filter(
      nl => nl.title.toLowerCase().includes(q) || 
           nl.year.includes(q) || 
           nl.description.toLowerCase().includes(q)
    ).slice(0, 3);

    return {
      about: aboutItems,
      languages: matchedLanguages,
      books: matchedBooks,
      news: matchedNews,
      newsletters: matchedNewsletters,
      total: aboutItems.length + matchedLanguages.length + matchedBooks.length + matchedNews.length + matchedNewsletters.length
    };
  }, [query, allBooks]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-[#e5dfd5] overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#e5dfd5] flex items-center gap-3 bg-[#faf8f5]">
          <Search className="w-5 h-5 text-[#6b7280] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 29 languages, books, authors, reports, or news..."
            className="w-full bg-transparent text-sm text-[#1F1414] placeholder-[#9ca3af] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#9ca3af] hover:text-[#1F1414]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 text-[#6b7280] hover:text-[#1F1414] bg-white border border-[#e5dfd5] rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results Box */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {!query.trim() && (
            <div className="py-8 text-center text-xs text-[#6b7280] space-y-2">
              <p>Type to search across FLI’s digital repository.</p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                <span className="text-[11px] text-[#9ca3af]">Suggestions:</span>
                {['Palula', 'Gawri', 'Khowar', 'Ormuri', 'Torwali', 'Balti', 'FEL 2024', 'Henrik Liljegren'].map(s => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="text-xs bg-[#f4f1eb] hover:bg-[#e7e2d8] text-[#5B0404] px-2.5 py-1 rounded-md transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.total === 0 && (
            <div className="py-8 text-center text-xs text-[#6b7280]">
              No results found for &ldquo;{query}&rdquo;. Try another search term.
            </div>
          )}

          {results && results.total > 0 && (
            <div className="space-y-4 text-xs">
              
              {/* About Sections */}
              {results.about && results.about.length > 0 && (
                <div className="space-y-1.5">
                  <div className="font-bold text-[11px] uppercase tracking-wider text-[#5B0404] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>About FLI ({results.about.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.about.map((ab, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onSelectResult('about', ab.tab);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#FAF2F2] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-bold text-sm text-[#5B0404] group-hover:text-[#730707] transition-colors">
                            {ab.title}
                          </div>
                          <div className="text-[11px] text-[#6b7280] line-clamp-1">
                            {ab.desc}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#5B0404] transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {results.languages.length > 0 && (
                <div className="space-y-1.5">
                  <div className="font-bold text-[11px] uppercase tracking-wider text-[#5B0404] flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Target Languages ({results.languages.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.languages.map(l => (
                      <button
                        key={l.id}
                        onClick={() => {
                          onSelectResult('languages', l.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#f4f1eb] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-bold text-sm text-[#5B0404] group-hover:text-[#c26d38] transition-colors flex items-center gap-2">
                            <span>{l.name}</span>
                            <span className="font-nastaliq text-xs text-[#6b7280]">({l.nativeName})</span>
                          </div>
                          <div className="text-[11px] text-[#6b7280]">
                            {l.family} · {l.region} · Code: <code className="font-mono">{l.code}</code>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#5B0404] transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Books */}
              {results.books.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-[#e5dfd5]">
                  <div className="font-bold text-[11px] uppercase tracking-wider text-[#5B0404] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#5B0404]" />
                    <span>Publications & Books ({results.books.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.books.map(b => (
                      <button
                        key={b.id}
                        onClick={() => {
                          onSelectResult('publications', b.category);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#f4f1eb] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-xs text-[#5B0404] group-hover:text-[#c26d38] transition-colors">
                            {b.title}
                          </div>
                          <div className="text-[11px] text-[#6b7280]">
                            {b.author} · {b.language} ({b.year})
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#5B0404]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {results.news.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-[#e5dfd5]">
                  <div className="font-bold text-[11px] uppercase tracking-wider text-[#5B0404] flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-[#5B0404]" />
                    <span>News & Articles ({results.news.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.news.map(n => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onSelectResult('news-media', n.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#f4f1eb] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-xs text-[#5B0404]">
                            {n.title}
                          </div>
                          <div className="text-[11px] text-[#6b7280]">
                            {n.date} · {n.location}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#5B0404]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletters */}
              {results.newsletters.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-[#e5dfd5]">
                  <div className="font-bold text-[11px] uppercase tracking-wider text-[#5B0404] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#5B0404]" />
                    <span>Newsletters & Reports ({results.newsletters.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.newsletters.map(nl => (
                      <button
                        key={nl.id}
                        onClick={() => {
                          onSelectResult('newsletters');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-[#f4f1eb] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-xs text-[#5B0404]">
                            {nl.title}
                          </div>
                          <div className="text-[11px] text-[#6b7280]">
                            {nl.period} ({nl.year}) · PDF
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#5B0404]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#faf8f5] border-t border-[#e5dfd5] text-[11px] text-[#6b7280] flex items-center justify-between">
          <span>Search instant index</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
};
