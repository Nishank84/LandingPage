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
            <radialGradient id="hero-glow" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
              <stop offset="45%" stopColor="#3B82F6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#131A3D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Glow centered on content */}
          <rect width="1440" height="900" fill="url(#hero-glow)" />

          {/* Energy Vector Streaks flowing diagonally */}
          <path d="M180 920 L1180 0" stroke="url(#hero-stream)" strokeWidth="44" strokeLinecap="round" opacity="0.4" />
          <path d="M480 940 L1340 100" stroke="url(#hero-stream)" strokeWidth="24" strokeLinecap="round" opacity="0.3" />
          <path d="M30 780 L790 60" stroke="url(#hero-stream)" strokeWidth="16" strokeLinecap="round" opacity="0.2" />
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
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--hero-title-size)',
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              marginBottom: '1rem',
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

          {/* Carousel Interactive Indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '1.75rem',
              flexWrap: 'wrap'
            }}
          >
            {CAROUSEL_WORDS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Highlight ${item.label}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    padding: '5px 14px',
                    borderRadius: '999px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive
                      ? 'rgba(255, 107, 77, 0.2)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: isActive
                      ? '1px solid var(--coral)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    color: isActive ? '#FFFFFF' : 'var(--mist)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: isActive ? '0 0 14px rgba(255, 107, 77, 0.25)' : 'none'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--coral)' : 'rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      boxShadow: isActive ? '0 0 6px var(--coral)' : 'none'
                    }}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

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
              style={{ height: '54px', padding: '0 36px', fontSize: '1rem' }}
            >
              {HERO_CONTENT.primaryCta}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
