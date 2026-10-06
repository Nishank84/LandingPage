import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GoalSection } from './components/GoalSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { PlatformModules } from './components/PlatformModules';
import { FeatureDeepDives } from './components/FeatureDeepDives';
import { CrucibleSection } from './components/CrucibleSection';
import { ThoughtSection } from './components/ThoughtSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoTopic, setDemoTopic] = useState('GameUp AcademicOS');

  const handleOpenDemo = useCallback((topic = 'GameUp AcademicOS') => {
    setDemoTopic(topic);
    setIsDemoModalOpen(true);
  }, []);

  const handleCloseDemo = useCallback(() => {
    setIsDemoModalOpen(false);
  }, []);

  const handleExplorePlatform = useCallback(() => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectModule = useCallback((moduleId: string) => {
    const el = document.getElementById(moduleId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="landing-page-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 3. Sticky / Floating Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Narrative Flow */}
      <main style={{ flexGrow: 1 }}>
        {/* 4. Hero Section */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onExplorePlatform={handleExplorePlatform}
        />

        {/* 5. The Goal: A brighter tomorrow */}
        <GoalSection />

        {/* 6. The Problem: 70% Anxiety / 65% Overworked */}
        <ProblemSection />

        {/* 7. The Solution: GameUp AcademicOS & Stakeholder possibilities */}
        <SolutionSection />

        {/* 8. Platform Modules: Everything schools need in one connected platform */}
        <PlatformModules
          onSelectModule={handleSelectModule}
          onOpenDemo={handleOpenDemo}
        />

        {/* 9-18. Dedicated Feature Showcases (Exam, Task, AI Assistant, Library, Training, Behaviour, Analytics, Admin, WhatsApp, Communities) */}
        <FeatureDeepDives />

        {/* 19-23. The Crucible: One Day -> One Skill -> One Real Project & Workshops */}
        <CrucibleSection onOpenDemo={handleOpenDemo} />

        {/* 24-26. The Thought: Lift-off Progression, Vision, Mission, Team, and 5 Beliefs */}
        <ThoughtSection />

        {/* 27. Final CTA: Ready for lift-off? */}
        <FinalCTA
          onOpenDemo={handleOpenDemo}
          onExplorePlatform={handleExplorePlatform}
        />
      </main>

      {/* 28. Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Accessible Booking Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        defaultTopic={demoTopic}
      />
    </div>
  );
}

export default App;
