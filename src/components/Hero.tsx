import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

interface HeroProps {
  onOpenDemo: (topic?: string) => void;
}

const CAROUSEL_WORDS = [
  { text: 'Exciting.', label: 'Exciting' },
  { text: 'Effortless.', label: 'Effortless' },
  { text: 'Efficient.', label: 'Efficient' },
  { text: 'Easy.', label: 'Easy' }
];

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_WORDS.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [isPaused]);
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--nebula)',
        color: '#FFFFFF',
        overflow: 'hidden',
        paddingTop: 'calc(var(--nav-height) + 50px)',
        paddingBottom: '5rem',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Decorative Vector Rays & Gradient Mesh from Brand System */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: 0.95
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="hero-stream" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B4D" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="hero-corner-glow" cx="20%" cy="85%" r="75%">
              <stop offset="0%" stopColor="#FF6B4D" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#131A3D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Launch Corner Glow */}
          <rect width="1440" height="900" fill="url(#hero-corner-glow)" />

          {/* Authentic 45° Launch Streak per Brand System */}
          <path d="M180 940 L1100 20" stroke="url(#hero-stream)" strokeWidth="58" strokeLinecap="round" opacity="0.95" />
          <path d="M460 960 L1320 100" stroke="url(#hero-stream)" strokeWidth="32" strokeLinecap="round" opacity="0.8" />
          <path d="M40 860 L780 120" stroke="url(#hero-stream)" strokeWidth="18" strokeLinecap="round" opacity="0.55" />

          {/* Planetary Orbs Cluster at Launch Base */}
          <circle cx="160" cy="880" r="90" fill="#3A4386" opacity="0.4" />
          <circle cx="60" cy="830" r="65" fill="#565EA6" opacity="0.35" />
          <circle cx="280" cy="910" r="80" fill="#29316A" opacity="0.4" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Tracked Eyebrow */}
          <div className="eyebrow-container" style={{ marginBottom: '1.25rem' }}>
            <span className="eyebrow-text">{HERO_CONTENT.eyebrow}</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--hero-title-size)',
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              marginBottom: '1.75rem',
              textAlign: 'center',
              width: '100%'
            }}
          >
            Make Education
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                height: '1.18em',
                overflow: 'hidden',
                position: 'relative',
                display: 'block',
                marginTop: '0.08em',
                width: '100%'
              }}
              aria-live="polite"
            >
              <div
                style={{
                  transform: `translateY(-${activeIndex * 25}%)`,
                  transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {CAROUSEL_WORDS.map((item, idx) => (
                  <div
                    key={item.text}
                    style={{
                      height: '1.18em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: idx === activeIndex ? 1 : 0.2,
                      filter: idx === activeIndex ? 'blur(0px)' : 'blur(2px)',
                      transform: idx === activeIndex ? 'scale(1)' : 'scale(0.97)',
                      transformOrigin: 'center center',
                      transition: 'opacity 0.45s ease, filter 0.45s ease, transform 0.45s ease'
                    }}
                  >
                    <span className="text-gradient">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
              lineHeight: 1.65,
              color: 'var(--mist)',
              maxWidth: '720px',
              margin: '0 auto 2.5rem',
              textAlign: 'center'
            }}
          >
            {HERO_CONTENT.supporting}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={() => onOpenDemo('Hero Demo Booking')}
              className="btn-primary"
            >
              {HERO_CONTENT.primaryCta}
              <ArrowRight size={18} />
            </button>

            <a
              href="#platform"
              className="btn-secondary"
            >
              {HERO_CONTENT.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
