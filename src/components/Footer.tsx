import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp, Code, CheckCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, subParam?: string) => void;
  onOpenWpSpec: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWpSpec }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2E0202] text-[#EEDADA] border-t border-[#690606] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#690606]">
          
          {/* Col 1 & 2: Organization Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#730707] flex items-center justify-center text-[#f59e0b] font-serif-display font-bold text-lg">
                FLI
              </div>
              <div>
                <span className="text-lg font-bold font-serif-display text-white tracking-wide block">
                  Forum for Language Initiatives
                </span>
                <span className="text-xs text-[#CBB8B8]">
                  Non-profit Resource Center for Northern Pakistan
                </span>
              </div>
            </div>

            <p className="text-sm text-[#DDD0D0] leading-relaxed max-w-md">
              Established in 2002 to preserve, document, and revitalize the minoritized languages 
              and oral folklore of Northern Pakistan. We place mother-tongue speakers in the driving seat 
              of language documentation and community-based multilingual education (MLE).
            </p>

            <div className="space-y-2 text-xs text-[#C5AFA5] pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <span>P.O. Box No. 763, Islamabad, Federal Capital Territory, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span>+92 (0)51 225 0068</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span>info@fli-online.org / secretarial.fli@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: About & Linguistic Atlas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">About & Atlas</h4>
            <ul className="space-y-2 text-xs text-[#DDD0D0]">
              <li>
                <button onClick={() => onNavigate('about', 'overview')} className="hover:text-white transition-colors">
                  Who We Are & History
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about', 'values')} className="hover:text-white transition-colors">
                  Our Vision, Mission & Values
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about', 'objectives')} className="hover:text-white transition-colors">
                  Strategic Objectives (5 Goals)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about', 'board')} className="hover:text-white transition-colors">
                  FLI Executive Board Members
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('languages', 'directory')} className="hover:text-white transition-colors">
                  29 Target Languages Atlas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('languages', 'map')} className="hover:text-white transition-colors">
                  Language Map of Northern Pakistan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('languages', 'tree')} className="hover:text-white transition-colors">
                  Genealogical Language Tree
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Publications & Digital */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Publications & Tools</h4>
            <ul className="space-y-2 text-xs text-[#DDD0D0]">
              <li>
                <button onClick={() => onNavigate('publications', 'vernacular')} className="hover:text-white transition-colors">
                  Vernacular Series (29 Books)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('publications', 'culture-series')} className="hover:text-white transition-colors">
                  Language & Culture Series (25)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('publications', 'other-books')} className="hover:text-white transition-colors">
                  Primers & Orthography Guides (31)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('newsletters')} className="hover:text-white transition-colors">
                  Newsletters Archive (2012–2026)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('digital-resources')} className="hover:text-white transition-colors">
                  Nastaliq & SIL Phonetic Fonts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('digital-resources')} className="hover:text-white transition-colors">
                  Keyman PC & Mobile Keyboards
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Advocacy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Stay Informed</h4>
            <p className="text-xs text-[#CBB8B8]">
              Receive quarterly newsletters, research publications, and conference notifications.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-[#3D0303] border border-[#730707] rounded-lg px-3 py-2 text-xs text-white placeholder-[#8F7D77] focus:outline-none focus:ring-1 focus:ring-[#f59e0b]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#2E0202] font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Subscribe Here</span>
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-1.5 text-[11px] text-[#C59B27] pt-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Thank you! You are subscribed to FLI updates.</span>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenWpSpec}
                className="w-full border border-[#f59e0b]/40 hover:border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/10 rounded-lg p-2 text-left text-xs transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#f59e0b]" />
                  <span className="font-semibold">WordPress Blueprint</span>
                </div>
                <span className="text-[10px] bg-[#f59e0b]/20 px-1.5 py-0.5 rounded text-[#f59e0b]">CPTs & Schema</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9E8C85]">
          <div className="space-y-1 text-center md:text-left">
            <p>
              Copyright © 2002–2026 Forum for Language Initiatives (FLI). All rights reserved.
            </p>
            <p className="text-[11px] text-[#7D6B65]">
              The information on this website is for educational and cultural documentation purposes. 
              FLI is a registered non-profit working for the promotion of Pakistani regional languages.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => onNavigate('contact')} 
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
            <span>·</span>
            <button 
              onClick={onOpenWpSpec} 
              className="text-[#f59e0b] hover:underline transition-colors flex items-center gap-1"
            >
              <span>WP Migration Spec</span>
            </button>
            <span>·</span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
