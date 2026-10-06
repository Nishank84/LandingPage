import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FinalCTAProps {
  onOpenDemo: (topic?: string) => void;
  onExplorePlatform: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo, onExplorePlatform }) => {
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
      {/* Background Cosmic Vectors from Brand System */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '70%',
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: 0.85
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 700 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', right: '-10%', bottom: 0 }}
        >
          <defs>
            <linearGradient id="final-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B4D" />
              <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <radialGradient id="final-glow" cx="35%" cy="100%" r="80%">
              <stop offset="0%" stopColor="#FF6B4D" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="700" height="500" fill="url(#final-glow)" />
          <path d="M115 520 L620 60" stroke="url(#final-grad)" strokeWidth="48" strokeLinecap="round" opacity="0.65" />
          <path d="M300 540 L720 160" stroke="url(#final-grad)" strokeWidth="26" strokeLinecap="round" opacity="0.5" />
          <path d="M12 480 L420 90" stroke="url(#final-grad)" strokeWidth="14" strokeLinecap="round" opacity="0.35" />
          <circle cx="90" cy="460" r="80" fill="#3A4386" opacity="0.3" />
          <circle cx="30" cy="420" r="60" fill="#565EA6" opacity="0.25" />
          <circle cx="170" cy="470" r="70" fill="#29316A" opacity="0.35" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '780px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="eyebrow-container" style={{ marginBottom: '0' }}>
            <span className="eyebrow-bar" />
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

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() => onOpenDemo('Final CTA Booking')}
              className="btn-primary"
              style={{ height: '54px', padding: '0 32px', fontSize: '1rem' }}
            >
              Book a demo
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onExplorePlatform}
              className="btn-secondary"
              style={{ height: '54px', padding: '0 28px', fontSize: '1rem' }}
            >
              See the platform
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Sign-off banner from Brand Guidelines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--line)',
              marginTop: '1.5rem',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <BrandLogo variant="dark" size="sm" />
            <div
              style={{
                fontFamily: 'var(--font-text)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--mist)'
              }}
            >
              INDIA → A BRIGHTER TOMORROW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
