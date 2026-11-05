import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  User, 
  Languages, 
  Table as TableIcon, 
  Grid, 
  FileText,
  ExternalLink
} from 'lucide-react';
import { VERNACULAR_BOOKS, CULTURE_SERIES_BOOKS, OTHER_FLI_BOOKS, PublicationItem } from '../data/fliData';
import { filterPublications, getAllPublications } from '../utils/fliHelpers';

interface PublicationsViewProps {
  initialCategory?: string;
  onNavigate: (view: string, subParam?: string) => void;
}

export const PublicationsView: React.FC<PublicationsViewProps> = ({ initialCategory = 'all', onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const allBooks = useMemo(() => getAllPublications(), []);

  const filteredBooks = useMemo(() => {
    return filterPublications(allBooks, searchQuery, selectedCategory);
  }, [allBooks, searchQuery, selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Publications', count: allBooks.length },
    { id: 'vernacular', label: 'Vernacular Literature', count: VERNACULAR_BOOKS.length },
    { id: 'culture-series', label: 'Language & Culture Series', count: CULTURE_SERIES_BOOKS.length },
    { id: 'primers-orthography', label: 'Primers & Orthography Guides', count: OTHER_FLI_BOOKS.length },
    { id: 'translations', label: 'Translated Declarations', count: 5 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>FLI Publishing Repository</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
          Publications, Dictionaries & Vernacular Literature
        </h1>
        <p className="text-sm text-[#4b5563] leading-relaxed">
          Explore FLI’s complete catalog of indigenous language literature, academic sociolinguistic 
          surveys, community primers, and translations. Over 85 published titles documented 
          in collaboration with native speakers, poets, and linguists.
        </p>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="space-y-4 bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd5]">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-[#6b7280] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by book title, author, language, or year..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#d5cfc5] rounded-xl text-xs sm:text-sm text-[#1F1414] placeholder-[#A69690] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-xs text-[#9ca3af] hover:text-[#1F1414]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Table / Grid view switcher */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-[#6b7280] mr-2">
              Showing <strong className="text-[#5B0404]">{filteredBooks.length}</strong> works
            </span>
            <div className="flex items-center bg-white border border-[#d5cfc5] rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-md ${viewMode === 'cards' ? 'bg-[#5B0404] text-white' : 'text-[#6b7280]'}`}
                title="Cards view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md ${viewMode === 'table' ? 'bg-[#5B0404] text-white' : 'text-[#6b7280]'}`}
                title="Table view"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#e5dfd5]">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                selectedCategory === c.id
                  ? 'bg-[#5B0404] text-white shadow-xs'
                  : 'bg-white text-[#4b5563] border border-[#d5cfc5] hover:bg-[#f0ece3]'
              }`}
            >
              <span>{c.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === c.id ? 'bg-white/20 text-white' : 'bg-[#e5dfd5] text-[#1F1414]'
              }`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Translations Callout if translations selected */}
      {selectedCategory === 'translations' && (
        <div className="bg-[#FAF2F2] border border-[#EEDADA] p-5 rounded-2xl space-y-3">
          <h3 className="font-bold text-sm text-[#5B0404]">
            Materials Translated by FLI into Local Pakistani Languages
          </h3>
          <p className="text-xs text-[#730707] leading-relaxed">
            FLI translates essential human rights charters, children’s rights declarations, and international 
            UNESCO educational guidelines into indigenous languages to ensure legal empowerment and educational access.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-white rounded-xl border border-[#EEDADA] text-xs">
              <strong>UNESCO Booklet:</strong> Translated into Indus-Kohistani by Talib Jan
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EEDADA] text-xs">
              <strong>UNESCO Booklet:</strong> Translated into Gawri by Muhammad Zaman Sagar
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EEDADA] text-xs">
              <strong>UNESCO Booklet:</strong> Translated into Khowar by Farid Ahmad Raza
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EEDADA] text-xs">
              <strong>Universal Declaration of Human Rights:</strong> Multilingual vernacular adaptation
            </div>
          </div>
        </div>
      )}

      {/* CARDS VIEW */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={`${book.category}-${book.id}`}
              className="bg-white rounded-2xl p-6 border border-[#e5dfd5] hover:border-[#5B0404] hover:shadow-lg transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#6b7280]">
                  <span className="font-mono text-[11px] bg-[#faf8f5] px-2 py-0.5 rounded border border-[#e5dfd5]">
                    #{book.number}
                  </span>
                  <span className="font-semibold text-[#c26d38]">{book.year}</span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-[#5B0404] group-hover:text-[#c26d38] transition-colors leading-snug">
                    {book.title}
                  </h3>
                  {book.nativeTitle && (
                    <div className="text-sm font-nastaliq text-[#544540] font-medium pt-1">
                      {book.nativeTitle}
                    </div>
                  )}
                </div>

                <div className="space-y-1 text-xs text-[#544540] pt-1">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#5B0404] shrink-0" />
                    <span>{book.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-[#c26d38] shrink-0" />
                    <span>Language(s): <strong>{book.language}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#6b7280] uppercase tracking-wider font-semibold">
                  {book.category.replace('-', ' ')}
                </span>
                <span className="text-[#5B0404] font-bold group-hover:underline flex items-center gap-1">
                  <span>FLI Archive</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-2xl border border-[#e5dfd5] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#faf8f5] text-[#5B0404] font-bold uppercase tracking-wider border-b border-[#e5dfd5]">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4">Title / Native Script</th>
                  <th className="py-3 px-4">Language(s)</th>
                  <th className="py-3 px-4">Author / Compiler</th>
                  <th className="py-3 px-4 w-20 text-center">Year</th>
                  <th className="py-3 px-4 w-32">Series</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5dfd5] text-[#1F1414]">
                {filteredBooks.map((book) => (
                  <tr key={`${book.category}-${book.id}`} className="hover:bg-[#f7f5f0] transition-colors">
                    <td className="py-3 px-4 text-center font-mono text-[#6b7280]">
                      {book.number}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#5B0404]">{book.title}</div>
                      {book.nativeTitle && (
                        <div className="font-nastaliq text-xs text-[#544540] pt-0.5">{book.nativeTitle}</div>
                      )}
                    </td>
                    <td className="py-3 px-4 font-medium text-[#4b5563]">
                      {book.language}
                    </td>
                    <td className="py-3 px-4 text-[#4b5563]">
                      {book.author}
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-semibold text-[#c26d38]">
                      {book.year}
                    </td>
                    <td className="py-3 px-4 text-[11px] text-[#6b7280] capitalize">
                      {book.category.replace('-', ' ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredBooks.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-[#e5dfd5] space-y-2">
          <h4 className="text-base font-bold text-[#5B0404]">No publications found</h4>
          <p className="text-xs text-[#6b7280]">
            Try clearing your search query or switching categories.
          </p>
        </div>
      )}

      {/* Cross-Link to Newsletters */}
      <div className="p-6 bg-[#FAF2F2] rounded-2xl border border-[#EEDADA] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-[#5B0404]">Looking for Official Activity Reports & Newsletters?</h4>
          <p className="text-xs text-[#4b5563] mt-0.5">
            Access FLI’s complete repository of annual reports and quarterly newsletters with direct PDF downloads.
          </p>
        </div>
        <button
          onClick={() => onNavigate('newsletters')}
          className="px-5 py-2.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-semibold rounded-xl transition-colors shrink-0"
        >
          View Newsletters Archive →
        </button>
      </div>

    </div>
  );
};
