import React from 'react';
import { PlatformModules } from '../components/PlatformModules';
import { FinalCTA } from '../components/FinalCTA';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface PlatformPageProps {
  onOpenDemo: (topic?: string) => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onOpenDemo }) => {
  const handleScrollToModules = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Platform Chapter Hero Banner */}
      <section
        style={{
          backgroundColor: 'var(--nebula)',
          color: '#FFFFFF',
          paddingTop: 'calc(var(--nav-height) + clamp(3.5rem, 7vw, 6rem))',
          paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--line)'
        }}
      >
        {/* Decorative Background Rays */}
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
              <linearGradient id="platform-hero-stream" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF6B4D" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="platform-glow" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#131A3D" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="600" fill="url(#platform-glow)" />
            <path d="M120 650 L1080 0" stroke="url(#platform-hero-stream)" strokeWidth="36" strokeLinecap="round" opacity="0.4" />
            <path d="M420 670 L1240 60" stroke="url(#platform-hero-stream)" strokeWidth="20" strokeLinecap="round" opacity="0.3" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '880px' }}>
            <div className="eyebrow-container" style={{ marginBottom: '1.25rem' }}>
              <span className="eyebrow-text">
                GAME UP · ACADEMICOS
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
              The Connected Academic <span className="text-gradient">Ecosystem.</span>
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--mist)',
                lineHeight: 1.6,
                maxWidth: '740px',
                marginBottom: '2.5rem'
              }}
            >
              Ten seamlessly integrated modules designed to lift the administrative burden off teachers, turn daily schoolwork into joyful quests, and keep parents closely connected.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenDemo('Platform Demo Booking')}
                className="btn-primary"
                style={{ height: '52px', padding: '0 32px', fontSize: '1rem' }}
              >
                Book a demo
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={handleScrollToModules}
                className="btn-secondary"
                style={{
                  height: '52px',
                  padding: '0 28px',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                Explore Modules
                <ArrowDown size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Interactive Platform Modules */}
      <PlatformModules onOpenDemo={onOpenDemo} />

      {/* Final CTA */}
      <FinalCTA
        onOpenDemo={onOpenDemo}
        onExplorePlatform={handleScrollToModules}
      />
    </>
  );
};
