import React, { useState } from 'react';
import { 
  Megaphone, 
  Users, 
  Globe, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const AdvocacyView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'peshawar' | 'fel' | 'policy'>('campaigns');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
          <Megaphone className="w-4 h-4" />
          <span>Advocacy & Global Solidarity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
          Amplifying Voices, Building Bridges, Advancing Change
        </h1>
        <p className="text-sm text-[#4b5563] leading-relaxed">
          At FLI, advocacy is rooted in dignity, community wisdom, and cultural continuity. 
          We work alongside elders, youth, artists, scholars, and policymakers to defend the linguistic 
          human rights of Pakistan’s minoritized peoples.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#e5dfd5] overflow-x-auto pb-1 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('campaigns')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'campaigns'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          Advocacy Campaigns
        </button>
        <button
          onClick={() => setActiveTab('peshawar')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'peshawar'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          Regional Partners Summit (Peshawar)
        </button>
        <button
          onClick={() => setActiveTab('fel')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'fel'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          FEL XXVIII 2024 Conference (Islamabad)
        </button>
        <button
          onClick={() => setActiveTab('policy')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'policy'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          Policy & Legislative Engagement
        </button>
      </div>

      {/* TAB 1: CAMPAIGNS */}
      {activeTab === 'campaigns' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white rounded-2xl border border-[#e5dfd5] space-y-4 hover:border-[#5B0404] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FAF2F2] text-[#5B0404] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-[#5B0404]">
                Reviving Indigenous Poetry
              </h3>
              <p className="text-xs text-[#544540] leading-relaxed">
                A community-led initiative to document, celebrate, and share the poetic traditions of Northern Pakistan. 
                Through mushairas (poetic symposiums), audio recordings, and bilingual publications, we honor the power 
                of verse to preserve archaic vocabulary and transmit moral philosophy.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#c26d38]">
                Recent Milestone: Ormuri Mushaira in Kanigram
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#e5dfd5] space-y-4 hover:border-[#5B0404] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FAF2F2] text-[#5B0404] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-[#5B0404]">
                Youth for Cultural Sustainability
              </h3>
              <p className="text-xs text-[#544540] leading-relaxed">
                Empowering young mountain leaders to become custodians of their heritage through digital storytelling, 
                social media content creation in mother tongues, and community archiving. Bridging the gap between 
                elder storytellers and the smartphone generation.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#c26d38]">
                Key Output: Mobile Keyman Keyboards Training
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#e5dfd5] space-y-4 hover:border-[#5B0404] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FAF2F2] text-[#5B0404] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-[#5B0404]">
                Gendered Voices in Oral Tradition
              </h3>
              <p className="text-xs text-[#544540] leading-relaxed">
                Encouraging and documenting the pivotal role of women in lullabies, wedding songs, weaving chants, 
                and domestic storytelling. Ensuring women participate as equal authors and educators in community 
                literacy committees.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#c26d38]">
                Key Focus: Lullabies of Chitral & Swat
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 2: PESHAWAR SUMMIT */}
      {activeTab === 'peshawar' && (
        <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5dfd5] pb-4">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Grassroots Milestone</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404]">
                FLI Hosts Regional Partners’ Meeting in Peshawar
              </h2>
            </div>
            <span className="text-xs text-[#6b7280]">September 4, 2025 · Peshawar, KP</span>
          </div>

          <p className="text-sm text-[#4b5563] leading-relaxed">
            The Forum for Language Initiatives (FLI) convened leaders from <strong>14 Community-Based Organizations (CBOs)</strong> 
            across Khyber Pakhtunkhwa. The gathering served as a historic platform for reflection, mutual solidarity, 
            and renewed commitment to indigenous language empowerment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-2">
              <div className="font-bold text-xs text-[#5B0404]">Nasir Mansur (Kateviri Language)</div>
              <p className="text-xs text-[#6b7280]">
                Commended for training school children to deliver official speeches in native Kateviri during Independence Day celebrations.
              </p>
            </div>

            <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-2">
              <div className="font-bold text-xs text-[#5B0404]">Alauddin (Yadgha Language)</div>
              <p className="text-xs text-[#6b7280]">
                Reported on writers’ workshops held inside private and government schools across the remote Lutkho Valley in Chitral.
              </p>
            </div>

            <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-2">
              <div className="font-bold text-xs text-[#5B0404]">Aurangzeb (Mankiyali Language)</div>
              <p className="text-xs text-[#6b7280]">
                Presented on Mankiyali, spoken by fewer than 500 people in Mansehra district, achieving its first formal advocacy visibility.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF2F2] rounded-xl border border-[#EEDADA] text-xs text-[#5B0404] space-y-1">
            <strong>Summit Resolution:</strong>
            <p className="text-[#821111]">
              The 14 CBOs formally established a unified provincial network across KP and announced regional delegations 
              to engage members of the Provincial Assembly of Khyber Pakhtunkhwa to push forward a legislative resolution 
              mandating state support for indigenous mother tongues.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: FEL 2024 */}
      {activeTab === 'fel' && (
        <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5dfd5] pb-4">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Global Linguistics Congress</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404]">
                28th Conference of the Foundation for Endangered Languages (FEL XXVIII)
              </h2>
            </div>
            <span className="text-xs text-[#6b7280]">November 2024 · Islamabad</span>
          </div>

          <p className="text-sm text-[#4b5563] leading-relaxed">
            The world’s premier endangered language organization, the <strong>Foundation for Endangered Languages (FEL UK)</strong>, 
            held its 28th annual international conference in Pakistan, organized jointly with <strong>FLI</strong> and 
            <strong>Allama Iqbal Open University (AIOU)</strong> at the Main Academic Complex in Sector H-8/2, Islamabad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-3">
              <h3 className="font-bold text-xs text-[#5B0404] uppercase tracking-wider">
                Conference Leadership & Organizing Committee
              </h3>
              <ul className="text-xs text-[#4b5563] space-y-1.5">
                <li>• <strong>Conference Chair:</strong> Dr. Muhammad Kamal Khan (Chair, Department of English, AIOU)</li>
                <li>• <strong>Co-Chairs:</strong> Nicholas Ostler (FEL UK President), Fakhruddin Akhunzada (FLI Director)</li>
                <li>• <strong>International Delegates:</strong> Researchers from the UK, USA, Sweden, Norway, Germany, Nepal, and India.</li>
              </ul>
            </div>

            <div className="p-5 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-3">
              <h3 className="font-bold text-xs text-[#5B0404] uppercase tracking-wider">
                Core Themes & Impact
              </h3>
              <ul className="text-xs text-[#4b5563] space-y-1.5">
                <li>• UN International Decade of Indigenous Languages (2022–2032) alignment.</li>
                <li>• Digital tools, corpus building, and AI implications for minoritized scripts.</li>
                <li>• Testimonies and presentations by native community scholars from Chitral, Gilgit, and Kohistan.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: POLICY */}
      {activeTab === 'policy' && (
        <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
          <h2 className="text-2xl font-bold font-serif-display text-[#5B0404]">
            Policy Engagement & Institutional Advocacy
          </h2>

          <p className="text-sm text-[#4b5563] leading-relaxed">
            FLI engages with legislators, federal curriculum boards, UNESCO, and provincial education departments 
            to advocate for institutional policy changes:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex items-start gap-3 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <div>
                <strong>Mother Tongue as Early Medium of Instruction:</strong> Constitutional operationalization of Article 251(3), empowering provincial assemblies to legislate the teaching of regional languages in elementary schools.
              </div>
            </div>

            <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex items-start gap-3 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <div>
                <strong>National Census Linguistic Precision:</strong> Advocating with the Pakistan Bureau of Statistics (PBS) to accurately enumerate all 70+ languages of Pakistan on national census questionnaires rather than subsuming minoritized tongues under &ldquo;Others&rdquo;.
              </div>
            </div>

            <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex items-start gap-3 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
              <div>
                <strong>Broadcast Quotas for Minoritized Languages:</strong> Working with Pakistan Broadcasting Corporation (Radio Pakistan) to air daily cultural programming in Gawri, Torwali, Palula, and Khowar.
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
