import React from 'react';
import { CRUCIBLE_HERO } from '../data/content';

export const CrucibleProgressionSection: React.FC = () => {
  return (
    <section
      id="crucible-progression"
      aria-label="The 5-Stage Crucible Progression"
      style={{
        backgroundColor: '#0D1333',
        color: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'calc(var(--nav-height) + 1rem)',
        paddingBottom: 'clamp(2rem, 4vh, 3.5rem)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxSizing: 'border-box'
      }}
    >
      {/* Background Crucible Flare Vectors */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1
        }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="prog-capsule-coral" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8A2E26" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#C44B3E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E25C47" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="prog-capsule-purple" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#4C1D95" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#7C3AED" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Primary Coral Diagonal Stripe - fully completed across section */}
          <line
            x1="150"
            y1="1250"
            x2="1650"
            y2="-250"
            stroke="url(#prog-capsule-coral)"
            strokeWidth="110"
            opacity="0.85"
          />

          {/* Secondary Purple Diagonal Stripe */}
          <line
            x1="450"
            y1="1250"
            x2="1950"
            y2="-250"
            stroke="url(#prog-capsule-purple)"
            strokeWidth="75"
            opacity="0.65"
          />

          {/* Tertiary Subtle Accent Stripe */}
          <line
            x1="-80"
            y1="1250"
            x2="1420"
            y2="-250"
            stroke="url(#prog-capsule-coral)"
            strokeWidth="28"
            opacity="0.35"
          />
        </svg>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '1480px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1.25rem, 3.5vw, 3rem)',
          paddingRight: 'clamp(1.25rem, 3.5vw, 3rem)',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Section Header */}
        <div style={{ maxWidth: '900px', marginBottom: 'clamp(1.5rem, 3.2vh, 2.75rem)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 2.8vw, 2.6rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '0.625rem'
            }}
          >
            The 5-Stage Crucible Progression
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              color: 'var(--mist)',
              lineHeight: 1.6,
              maxWidth: '750px'
            }}
          >
            Every Crucible workshop is structured as an immersive 5-stage sprint—taking students from first principles to deploying and sharing real-world creations.
          </p>
        </div>

        {/* 5 Progression Cards */}
        <div className="crucible-progression-grid">
          {CRUCIBLE_HERO.journeySteps.map((step) => (
            <div
              key={step.step}
              className="crucible-progression-card"
            >
              <div className="crucible-progression-stage-badge">
                STAGE {step.step}
              </div>

              <h3 className="crucible-progression-title">
                {step.name}
              </h3>

              <p className="crucible-progression-desc">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
