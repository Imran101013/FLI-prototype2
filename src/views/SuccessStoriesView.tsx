import React from 'react';
import { Sparkles, CheckCircle2, Users, GraduationCap, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES } from '../data/fliData';

interface SuccessStoriesViewProps {
  onNavigate: (view: string, subParam?: string) => void;
}

export const SuccessStoriesView: React.FC<SuccessStoriesViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Real Community Impact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
          Two Decades of Tangible Achievements in Language Revitalization
        </h1>
        <p className="text-sm text-[#4b5563] leading-relaxed">
          Through persistence, trust, and mutual respect, FLI has helped mountain communities 
          reclaim their heritage. Explore four core impact case studies demonstrating how mother-tongue 
          empowerment transforms lives.
        </p>
      </div>

      {/* Featured Photo Story Banner */}
      <div className="rounded-3xl overflow-hidden bg-[#5B0404] text-white shadow-xl border border-[#690606] grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 p-8 lg:p-12 space-y-4">
          <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider">
            Flagship Educational Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-white">
            From Marginalization to Pride in the Classroom
          </h2>
          <p className="text-sm text-[#EEDADA] leading-relaxed">
            In Swat Kohistan and Chitral, children previously entered school with zero comprehension 
            of Urdu or English. By helping local CBOs develop native-language primers and training 
            local village women as teachers, FLI reversed dropout rates and created thriving community schools.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('programs', 'mle')}
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#5B0404] text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Learn About Our MLE Framework</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 h-full min-h-[300px]">
          <img
            src="/src/assets/images/fli_children_storytelling_1793853099534.jpg"
            alt="Children in classroom reading mother tongue illustrated readers"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Impact Stories Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SUCCESS_STORIES.map((story, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 border border-[#e5dfd5] hover:border-[#5B0404] hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#c26d38]">{story.community}</span>
                <span className="font-bold bg-[#FAF2F2] text-[#5B0404] px-2.5 py-1 rounded-full border border-[#EEDADA]">
                  {story.metric}
                </span>
              </div>

              <h3 className="font-bold text-lg text-[#5B0404] font-serif-display leading-snug">
                {story.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                {story.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#f0ece3] flex items-center justify-between text-xs text-[#6b7280]">
              <span className="flex items-center gap-1.5 text-[#5B0404] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Verified Field Outcome</span>
              </span>
              <button
                onClick={() => onNavigate('languages')}
                className="font-bold text-[#5B0404] hover:text-[#c26d38] transition-colors"
              >
                View Community Language →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Core Achievements Summary */}
      <div className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e5dfd5] space-y-6">
        <h3 className="font-bold text-lg font-serif-display text-[#5B0404]">
          Summary of Institutional Achievements (2002–2026)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#4b5563]">
          <div className="space-y-2">
            <h4 className="font-bold text-[#5B0404] flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#c26d38]" />
              <span>Community Awareness</span>
            </h4>
            <p className="leading-relaxed text-[#6b7280]">
              Overcome historical stigmatization by fostering deep linguistic pride among youth and elders.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#5B0404] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#c26d38]" />
              <span>State & Civil Capacity</span>
            </h4>
            <p className="leading-relaxed text-[#6b7280]">
              Trained government teachers and CBO leaders in orthography and mother-tongue curriculum development.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#5B0404] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#c26d38]" />
              <span>Standardized Scripts</span>
            </h4>
            <p className="leading-relaxed text-[#6b7280]">
              Standardized writing systems for previously unwritten tongues including Palula, Gawri, Torwali, and Dameli.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#5B0404] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c26d38]" />
              <span>Digital Sovereignty</span>
            </h4>
            <p className="leading-relaxed text-[#6b7280]">
              Created free OpenType fonts and mobile Keyman layouts enabling seamless typing on WhatsApp and computers.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
