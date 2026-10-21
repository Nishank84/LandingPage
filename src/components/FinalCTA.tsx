import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: (topic?: string) => void;
  onExplorePlatform?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo }) => {
  return (
    <section
      id="demo"
      style={{
        position: 'relative',
        backgroundColor: 'var(--nebula)',
        color: '#FFFFFF',
        overflow: 'hidden',
        padding: 'clamp(5rem, 9vw, 8rem) 0'
      }}
    >
      {/* Background Cosmic Vectors from Brand System (Accurate 45° Parallel Speed Rays) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '65%',
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: 0.95
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="final-brand-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B4D" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="final-brand-glow" cx="65%" cy="55%" r="65%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#131A3D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <rect width="800" height="600" fill="url(#final-brand-glow)" />

          {/* Official GameUp Triple Speed Rays (Parallel 45° angle from Brand System) */}
          <path
            d="M 160 660 L 760 60"
            stroke="url(#final-brand-grad)"
            strokeWidth="42"
            strokeLinecap="round"
            opacity="0.95"
          />
          <path
            d="M 290 710 L 830 170"
            stroke="url(#final-brand-grad)"
            strokeWidth="22"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 60 540 L 540 60"
            stroke="url(#final-brand-grad)"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '780px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="eyebrow-container" style={{ marginBottom: '0' }}>
            <span className="eyebrow-text">LIFT-OFF</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#FFFFFF'
            }}
          >
            Ready for{' '}
            <span className="text-gradient">lift-off?</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
              lineHeight: 1.65,
              color: 'var(--mist)',
              maxWidth: '620px'
            }}
          >
            Bring modular academic tools, gamified missions, and hands-on digital workshops to your school.
          </p>

          <div>
            <button
              onClick={() => onOpenDemo('Final CTA Booking')}
              className="btn-primary"
            >
              Book a Demo
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
