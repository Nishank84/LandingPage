import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { CruciblePage } from './pages/CruciblePage';
import { ThoughtPage } from './pages/ThoughtPage';
import { openCalendly, initCalendlyBadge, closeCalendly } from './utils/calendly';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoTopic, setDemoTopic] = useState('Game Up AcademicOS');

  // Initialize Calendly floating badge widget and global Escape key listener
  useEffect(() => {
    initCalendlyBadge();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCalendly();
        setIsDemoModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenDemo = useCallback((topic = 'Game Up AcademicOS') => {
    setDemoTopic(topic);
    openCalendly(topic);
  }, []);

  const handleCloseDemo = useCallback(() => {
    closeCalendly();
    setIsDemoModalOpen(false);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="landing-page-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Sticky / Floating Navigation */}
        <Navbar onOpenDemo={handleOpenDemo} />

        {/* Routed Pages */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenDemo={handleOpenDemo} />} />
            <Route path="/platform" element={<PlatformPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/crucible" element={<CruciblePage onOpenDemo={handleOpenDemo} />} />
            <Route path="/thought" element={<ThoughtPage onOpenDemo={handleOpenDemo} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenDemo={handleOpenDemo} />

        {/* Interactive Booking Modal Bridge */}
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={handleCloseDemo}
          defaultTopic={demoTopic}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
