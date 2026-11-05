import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WordPressSpecModal } from './components/WordPressSpecModal';
import { SearchModal } from './components/SearchModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { LanguagesView } from './views/LanguagesView';
import { ProgramsView } from './views/ProgramsView';
import { PublicationsView } from './views/PublicationsView';
import { NewslettersView } from './views/NewslettersView';
import { DigitalResourcesView } from './views/DigitalResourcesView';
import { AdvocacyView } from './views/AdvocacyView';
import { NewsMediaView } from './views/NewsMediaView';
import { SuccessStoriesView } from './views/SuccessStoriesView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [subParam, setSubParam] = useState<string | undefined>(undefined);
  const [wpSpecOpen, setWpSpecOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Check URL query param on mount if provided (e.g. ?view=about&tab=values or ?view=languages or ?wp=1)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    const tabParam = params.get('tab');
    const wpParam = params.get('wp');
    if (viewParam) {
      setCurrentView(viewParam);
    }
    if (tabParam) {
      setSubParam(tabParam);
    }
    if (wpParam === '1') {
      setWpSpecOpen(true);
    }
  }, []);

  const handleNavigate = (view: string, param?: string) => {
    setCurrentView(view);
    setSubParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1F1414]">
      {/* Universal Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenWpSpec={() => setWpSpecOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenWpSpec={() => setWpSpecOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            initialTab={subParam || 'overview'}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'languages' && (
          <LanguagesView
            initialTab={['map', 'tree', 'relatedness', 'directory'].includes(subParam || '') ? subParam : 'directory'}
            initialLanguageId={!['map', 'tree', 'relatedness', 'directory'].includes(subParam || '') ? subParam : undefined}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'programs' && (
          <ProgramsView
            initialTab={subParam || 'equipping'}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'publications' && (
          <PublicationsView
            initialCategory={subParam || 'all'}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'newsletters' && (
          <NewslettersView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'digital-resources' && (
          <DigitalResourcesView />
        )}

        {currentView === 'advocacy' && (
          <AdvocacyView />
        )}

        {currentView === 'news-media' && (
          <NewsMediaView
            initialArticleId={subParam}
          />
        )}

        {currentView === 'success-stories' && (
          <SuccessStoriesView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWpSpec={() => setWpSpecOpen(true)}
      />

      {/* Interactive WordPress Redesign Blueprint Drawer */}
      <WordPressSpecModal
        isOpen={wpSpecOpen}
        onClose={() => setWpSpecOpen(false)}
      />

      {/* Global Real-Time Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={handleNavigate}
      />
    </div>
  );
}
