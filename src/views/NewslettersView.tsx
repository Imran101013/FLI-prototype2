import React, { useState } from 'react';
import { FileText, Download, Calendar, Search, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { NEWSLETTERS_ARCHIVE } from '../data/fliData';

interface NewslettersViewProps {
  onNavigate: (view: string, subParam?: string) => void;
}

export const NewslettersView: React.FC<NewslettersViewProps> = ({ onNavigate }) => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [search, setSearch] = useState('');

  const years = ['all', '2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

  const filteredReports = NEWSLETTERS_ARCHIVE.filter(nl => {
    if (selectedYear !== 'all' && nl.year !== selectedYear) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return nl.title.toLowerCase().includes(q) || nl.description.toLowerCase().includes(q) || nl.period.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Institutional Reporting Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
          Newsletters & Annual Activity Reports
        </h1>
        <p className="text-sm text-[#4b5563] leading-relaxed">
          Access the complete chronological documentation of FLI’s field activities, community workshops, 
          governance proceedings, financial accountability, and research achievements dating from 2012 through 2026.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd5] space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-[#6b7280] absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter reports by keyword or topic..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#d5cfc5] rounded-xl text-xs sm:text-sm text-[#1F1414] placeholder-[#A69690] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
            />
          </div>
          <div className="text-xs text-[#6b7280] font-medium">
            Showing <strong className="text-[#5B0404]">{filteredReports.length}</strong> reports
          </div>
        </div>

        {/* Year Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#e5dfd5]">
          <span className="text-xs font-semibold text-[#5B0404] mr-2">Filter Year:</span>
          {years.map(y => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                selectedYear === y
                  ? 'bg-[#5B0404] text-white shadow-xs'
                  : 'bg-white text-[#4b5563] border border-[#d5cfc5] hover:bg-[#f0ece3]'
              }`}
            >
              {y === 'all' ? 'All Years' : y}
            </button>
          ))}
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-2xl p-6 border border-[#e5dfd5] hover:border-[#5B0404] hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#6b7280]">
                <span className="font-semibold text-[#c26d38] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{report.period}</span>
                </span>
                <span className="font-mono text-[11px] bg-[#faf8f5] px-2 py-0.5 rounded border border-[#e5dfd5]">
                  {report.fileSize || 'PDF'}
                </span>
              </div>

              <h3 className="font-bold text-base text-[#5B0404] group-hover:text-[#c26d38] transition-colors leading-snug">
                {report.title}
              </h3>

              <p className="text-xs text-[#544540] leading-relaxed line-clamp-3">
                {report.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between">
              <span className="text-xs font-bold text-[#5B0404]">Official Publication</span>
              <a
                href={report.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-[#e5dfd5] space-y-2">
          <h4 className="text-base font-bold text-[#5B0404]">No reports found</h4>
          <p className="text-xs text-[#6b7280]">
            Try clearing your search query or choosing another year.
          </p>
        </div>
      )}

    </div>
  );
};
