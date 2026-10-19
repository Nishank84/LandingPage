import React from 'react';
import { ThoughtSection } from '../components/ThoughtSection';
import { FinalCTA } from '../components/FinalCTA';
interface ThoughtPageProps {
  onOpenDemo: (topic?: string) => void;
}

export const ThoughtPage: React.FC<ThoughtPageProps> = ({ onOpenDemo }) => {

  return (
    <>
      {/* Dedicated Thought Hero Chapter Banner */}
      <section
        style={{
          backgroundColor: 'var(--nebula)',
          color: '#FFFFFF',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'calc(var(--nav-height) + 1.5rem)',
          paddingBottom: 'clamp(3rem, 5vh, 5rem)',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        {/* Background Vectors */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            opacity: 0.85
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            <defs>
              <linearGradient id="thought-hero-stream" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF6B4D" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="thought-glow" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#131A3D" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="600" fill="url(#thought-glow)" />
            <path d="M100 640 L1020 0" stroke="url(#thought-hero-stream)" strokeWidth="36" strokeLinecap="round" opacity="0.4" />
            <path d="M380 660 L1180 50" stroke="url(#thought-hero-stream)" strokeWidth="20" strokeLinecap="round" opacity="0.3" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ maxWidth: '880px' }}>
            <div className="eyebrow-container" style={{ marginBottom: '1.25rem' }}>
              <span className="eyebrow-text">
                THE PHILOSOPHY
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--hero-title-size)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: '#FFFFFF',
                marginBottom: '1.5rem'
              }}
            >
              The Thought Behind <span className="text-gradient">Game Up.</span>
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--mist)',
                lineHeight: 1.6,
                maxWidth: '740px',
                marginBottom: 0
              }}
            >
              Education is the single most transformative experience of a child’s life. We believe schooling can be a journey of curiosity, creativity, and belonging—for every learner, teacher, and school.
            </p>
          </div>
        </div>
      </section>

      {/* The Thought: Lift-off Progression, Vision, Mission, Team, and 5 Beliefs */}
      <ThoughtSection />

      {/* Final CTA */}
      <FinalCTA onOpenDemo={onOpenDemo} />
    </>
  );
};
