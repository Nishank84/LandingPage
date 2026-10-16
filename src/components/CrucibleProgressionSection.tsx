import React from 'react';
import { CRUCIBLE_HERO } from '../data/content';

export const CrucibleProgressionSection: React.FC = () => {
  return (
    <section
      id="crucible-progression"
      aria-label="The 5-Stage Crucible Progression"
      style={{
        backgroundColor: 'var(--nebula)',
        color: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'calc(var(--nav-height) + 1rem)',
        paddingBottom: 'clamp(2rem, 4vh, 3.5rem)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        boxSizing: 'border-box'
      }}
    >
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
          <div className="eyebrow-container" style={{ marginBottom: '0.75rem' }}>
            <span className="eyebrow-text">5-STAGE PROGRESSION</span>
          </div>

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
