import React, { useState } from 'react';
import { 
  Download, 
  Type, 
  Keyboard, 
  Cpu, 
  Sliders, 
  Monitor, 
  Video, 
  CheckCircle2, 
  ExternalLink,
  ShieldAlert,
  Play
} from 'lucide-react';
import { DIGITAL_RESOURCES } from '../data/fliData';

export const DigitalResourcesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fonts' | 'keyboards' | 'software' | 'windows' | 'covid'>('fonts');
  
  // Interactive Font Tester State
  const [specimenText, setSpecimenText] = useState('شمالی پاکستان کی تمام مادری زبانیں پھلیں اور پھولیں');
  const [specimenSize, setSpecimenSize] = useState(28);
  const [specimenFont, setSpecimenFont] = useState<'nastaliq' | 'amiri' | 'serif'>('nastaliq');

  const samplePhrases = [
    { label: 'Urdu/Nastaliq Motto', text: 'شمالی پاکستان کی تمام مادری زبانیں پھلیں اور پھولیں' },
    { label: 'Palula Proverb', text: 'پالُولا متلی: ہَر کَسے دی ویش پانُوں سُورُو' },
    { label: 'Gawri Greeting', text: 'گاؤری بول چال: سلامت باشی، تی کی حال است' },
    { label: 'Khowar Verse', text: 'کھوار کلام: چترالئے شوانی دیوانہ دل' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
          <Download className="w-4 h-4" />
          <span>Digital Vitality & Linguistic Software</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
          Digital Resources, Fonts & Keyboards
        </h1>
        <p className="text-sm text-[#4b5563] leading-relaxed">
          Free digital tools engineered to enable native speakers of Northern Pakistan’s languages 
          to type, publish, and archive on modern computers, smartphones, and the web.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#e5dfd5] overflow-x-auto pb-1 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('fonts')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'fonts'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          <Type className="w-4 h-4" />
          <span>Nastaliq & SIL Fonts</span>
        </button>
        <button
          onClick={() => setActiveTab('keyboards')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'keyboards'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          <Keyboard className="w-4 h-4" />
          <span>Keyboards & Keyman</span>
        </button>
        <button
          onClick={() => setActiveTab('software')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'software'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>Linguistic Software</span>
        </button>
        <button
          onClick={() => setActiveTab('windows')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'windows'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span>Windows Settings Guide</span>
        </button>
        <button
          onClick={() => setActiveTab('covid')}
          className={`py-2.5 px-4 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'covid'
              ? 'bg-[#5B0404] text-white shadow-xs'
              : 'text-[#6E5D57] hover:text-[#5B0404] hover:bg-[#faf8f5]'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>COVID-19 Awareness Videos</span>
        </button>
      </div>

      {/* TAB 1: FONTS & INTERACTIVE SPECIMEN TESTER */}
      {activeTab === 'fonts' && (
        <div className="space-y-8">
          
          {/* Interactive Live Type Tester */}
          <div className="bg-white rounded-2xl border-2 border-[#5B0404]/20 p-6 lg:p-8 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e5dfd5]">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#c26d38] uppercase tracking-wider">Live Type Tester</span>
                <h3 className="text-lg font-bold text-[#5B0404] font-serif-display">
                  Interactive Nastaliq & Regional Script Previewer
                </h3>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#6b7280]">Font:</span>
                  <select
                    value={specimenFont}
                    onChange={(e) => setSpecimenFont(e.target.value as any)}
                    className="bg-[#faf8f5] border border-[#d5cfc5] rounded-lg px-2.5 py-1 text-xs font-medium text-[#5B0404]"
                  >
                    <option value="nastaliq">Noto Nastaliq Urdu (Ligatures)</option>
                    <option value="amiri">Amiri (Naskh Arabic)</option>
                    <option value="serif">System Serif</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#6b7280]">Size: {specimenSize}px</span>
                  <input
                    type="range"
                    min="18"
                    max="56"
                    value={specimenSize}
                    onChange={(e) => setSpecimenSize(Number(e.target.value))}
                    className="w-24 accent-[#5B0404]"
                  />
                </div>
              </div>
            </div>

            {/* Quick Sample Phrase Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-[#6b7280] font-semibold">Load Sample:</span>
              {samplePhrases.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setSpecimenText(p.text)}
                  className="text-xs bg-[#f4f1eb] hover:bg-[#e7e2d8] text-[#5B0404] px-2.5 py-1 rounded-md transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Live Editable Text Area */}
            <div className="relative">
              <textarea
                value={specimenText}
                onChange={(e) => setSpecimenText(e.target.value)}
                rows={3}
                dir="rtl"
                style={{
                  fontSize: `${specimenSize}px`,
                  fontFamily: specimenFont === 'nastaliq' ? 'Noto Nastaliq Urdu, serif' : specimenFont === 'amiri' ? 'Amiri, serif' : 'serif'
                }}
                className="w-full p-6 bg-[#faf8f5] border border-[#d5cfc5] rounded-xl text-[#5B0404] leading-[2.2] focus:outline-none focus:ring-2 focus:ring-[#5B0404] resize-none"
                placeholder="Type in Urdu, Khowar, Shina, Gawri..."
              />
              <span className="absolute bottom-3 left-3 text-[10px] text-[#9ca3af] pointer-events-none">
                Editable specimen canvas · RTL mode
              </span>
            </div>
          </div>

          {/* Fonts Download Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIGITAL_RESOURCES.fonts.map((f) => (
              <div key={f.name} className="bg-white rounded-2xl p-6 border border-[#e5dfd5] hover:border-[#5B0404] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#6b7280]">
                    <span className="font-semibold text-[#5B0404]">{f.developer}</span>
                    <span className="font-mono text-[11px] bg-[#faf8f5] px-2 py-0.5 rounded border border-[#e5dfd5]">{f.format}</span>
                  </div>
                  <h3 className="font-bold text-base text-[#5B0404]">{f.name}</h3>
                  <div className="text-xs font-semibold text-[#c26d38]">{f.script}</div>
                  <p className="text-xs text-[#544540] leading-relaxed">{f.description}</p>
                </div>
                <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between">
                  <span className="text-xs text-[#6b7280]">Free Open-Source Font</span>
                  <a
                    href={f.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#5B0404] hover:bg-[#480303] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>Download Font Package</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TAB 2: KEYBOARDS */}
      {activeTab === 'keyboards' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Type in Your Mother Tongue</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                Standardized Computer & Mobile Keyboards
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              Before FLI’s keyboard initiatives, native speakers could not easily type characters like 
              <code className="bg-[#faf8f5] px-1.5 py-0.5 rounded text-[#5B0404] font-bold mx-1">ݯ</code>, 
              <code className="bg-[#faf8f5] px-1.5 py-0.5 rounded text-[#5B0404] font-bold mx-1">ݮ</code>, 
              <code className="bg-[#faf8f5] px-1.5 py-0.5 rounded text-[#5B0404] font-bold mx-1">ݱ</code>, or 
              <code className="bg-[#faf8f5] px-1.5 py-0.5 rounded text-[#5B0404] font-bold mx-1">ݲ</code> on ordinary keyboards. 
              FLI partnered with Keyman and SIL to release full keyboard packages for Windows, macOS, Android, and iOS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {DIGITAL_RESOURCES.keyboards.map((kb) => (
                <div key={kb.name} className="p-5 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold bg-white text-[#5B0404] px-2 py-0.5 rounded border border-[#e5dfd5]">
                      {kb.os}
                    </span>
                    <h3 className="font-bold text-sm text-[#5B0404]">{kb.name}</h3>
                    <p className="text-xs text-[#544540] leading-relaxed">{kb.description}</p>
                    <div className="text-xs text-[#6b7280]">
                      <strong>Supported:</strong> {kb.languages}
                    </div>
                  </div>
                  <a
                    href={kb.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-[#5B0404] hover:bg-[#480303] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>Download Keyman Package</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SOFTWARE */}
      {activeTab === 'software' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Academic Linguistics & Lexicography</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                Linguistic Research Software & Corpus Tools
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              FLI recommends and trains community linguists in standardized, international software platforms 
              for dictionary construction, grammar interlinear glossing, and text concordance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {DIGITAL_RESOURCES.software.map((s) => (
                <div key={s.name} className="p-5 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-3">
                  <div className="text-[10px] font-bold text-[#c26d38] uppercase">{s.type}</div>
                  <h3 className="font-bold text-base text-[#5B0404]">{s.name}</h3>
                  <div className="text-xs text-[#6b7280]">Developer: {s.developer}</div>
                  <p className="text-xs text-[#544540] leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: WINDOWS SETTINGS */}
      {activeTab === 'windows' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Step-by-Step Configuration Guide</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                Windows Configuration Settings for Pakistani Languages
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              Follow these instructions to configure Windows 10/11 for smooth Arabic script ligature shaping, 
              Urdu language packs, and keyboard switching for northern languages.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#5B0404] text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-xs text-[#5B0404]">Install the Urdu (Pakistan) Language Pack</h4>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    Open Settings &gt; Time & Language &gt; Language &gt; Add a language &gt; Search for &ldquo;Urdu (Pakistan)&rdquo; and install.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#5B0404] text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-xs text-[#5B0404]">Install Awami Nastaliq or Nafees Nastaleeq Font</h4>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    Download the .ttf font package from the Fonts tab above, right-click, and select &ldquo;Install for all users&rdquo;.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#5B0404] text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-xs text-[#5B0404]">Install Keyman Desktop for Northern Pakistan Languages</h4>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    Run the Keyman installer. This maps Windows Alt+Shift to toggle seamlessly between English, Urdu, and your mother tongue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: COVID-19 AWARENESS VIDEOS */}
      {activeTab === 'covid' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 lg:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#c26d38] uppercase">Public Health Linguistic Response</span>
              <h2 className="text-2xl font-bold font-serif-display text-[#5B0404] mt-1">
                Coronavirus (COVID-19) Mother-Tongue Awareness Campaign
              </h2>
            </div>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              During the pandemic, official health guidelines in English or formal Urdu failed to reach elderly, 
              non-literate women and shepherds in isolated mountain valleys. FLI stepped forward to translate and record 
              WHO life-saving hygiene and prevention guidelines into 12 indigenous languages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {['Kalasha', 'Gawri (Kalam)', 'Khowar (Chitral)', 'Shina (Gilgit)', 'Balti (Skardu)', 'Torwali (Swat)'].map((langName) => (
                <div key={langName} className="p-5 bg-[#faf8f5] rounded-xl border border-[#e5dfd5] space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#c26d38] uppercase">WHO Video Message</span>
                      <Play className="w-4 h-4 text-[#5B0404]" />
                    </div>
                    <h3 className="font-bold text-sm text-[#5B0404]">{langName} Language</h3>
                    <p className="text-xs text-[#6b7280]">
                      Community-recorded audio & video broadcasted via local radio, social media, and village mosques.
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/@FLIPakistan"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-[#5B0404] hover:bg-[#480303] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>Watch on YouTube</span>
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
