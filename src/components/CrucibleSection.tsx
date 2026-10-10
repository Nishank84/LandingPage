import React from 'react';
import {
  CRUCIBLE_HERO,
  CRUCIBLE_WORKSHOPS,
  PROGRAM_EXPERIENCE,
  WHY_CRUCIBLE,
  CRUCIBLE_OUTCOME
} from '../data/content';
import {
  Flame,
  ArrowRight,
  Code2,
  Smartphone,
  Sparkles,
  Cpu,
  Palette,
  Cloud,
  Zap,
  Hammer,
  Trophy,
  Compass
} from 'lucide-react';

interface CrucibleSectionProps {
  onOpenDemo: (topic?: string) => void;
}

const workshopIcons = [Code2, Smartphone, Sparkles, Cpu, Palette, Cloud];
const experienceIcons = [Zap, Hammer, Trophy, Cpu, Palette, Compass];

export const CrucibleSection: React.FC<CrucibleSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="crucible" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      {/* ========================================================
          19. THE CRUCIBLE CHAPTER HERO
          ======================================================== */}
      <div
        style={{
          backgroundColor: 'var(--nebula)',
          color: '#FFFFFF',
          paddingTop: 'clamp(5rem, 9vw, 8rem)',
          paddingBottom: 'clamp(5rem, 9vw, 7.5rem)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Crucible Flare Vectors */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '65%',
            pointerEvents: 'none',
            overflow: 'hidden',
            opacity: 0.8
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', right: '-15%', top: 0 }}
          >
            <defs>
              <linearGradient id="crucible-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF6B4D" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M100 720 L740 80" stroke="url(#crucible-grad)" strokeWidth="48" strokeLinecap="round" opacity="0.5" />
            <path d="M260 760 L800 220" stroke="url(#crucible-grad)" strokeWidth="26" strokeLinecap="round" opacity="0.4" />
            <path d="M20 620 L480 160" stroke="url(#crucible-grad)" strokeWidth="14" strokeLinecap="round" opacity="0.25" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-bar" style={{ backgroundColor: 'var(--coral)' }} />
              <span className="eyebrow-text eyebrow-text-coral">{CRUCIBLE_HERO.sectionLabel}</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--section-title-size)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: '#FFFFFF',
                marginBottom: '1rem'
              }}
            >
              The Crucible.
              <br />
              <span className="text-gradient">{CRUCIBLE_HERO.tagline}</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)',
                fontWeight: 600,
                color: 'var(--sun)',
                marginBottom: '1.5rem',
                lineHeight: 1.35
              }}
            >
              {CRUCIBLE_HERO.statement}
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                color: 'var(--mist)',
                marginBottom: '2.5rem'
              }}
            >
              {CRUCIBLE_HERO.description}
            </p>

            {/* Dominant Banner: One Day -> One Skill -> One Real Project */}
            <div
              style={{
                backgroundColor: 'rgba(29, 37, 82, 0.9)',
                borderRadius: '20px',
                padding: '1.5rem 2rem',
                border: '1px solid var(--line)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
                marginBottom: '3rem',
                flexWrap: 'wrap'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--coral)',
                  color: 'var(--nebula)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Flame size={24} />
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--mist)', textTransform: 'uppercase' }}>
                  THE CORE FORMULA
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF'
                  }}
                >
                  {CRUCIBLE_HERO.coreIdea}
                </div>
              </div>
            </div>

            {/* Horizontal Journey Progression: Explore -> Experiment -> Solve -> Create -> Share */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--mist)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                The 5-Stage Crucible Progression
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '12px'
                }}
              >
                {CRUCIBLE_HERO.journeySteps.map((step) => (
                  <div
                    key={step.step}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '14px',
                      padding: '14px 16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--sun)', marginBottom: '4px' }}>
                      STAGE {step.step}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '4px'
                      }}
                    >
                      {step.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--mist)', lineHeight: 1.4 }}>
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          20. THE CRUCIBLE WORKSHOPS (3x2 Desktop Grid)
          ======================================================== */}
      <div className="section-wrapper" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--line-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-bar eyebrow-bar-slate" />
              <span className="eyebrow-text eyebrow-text-slate">HANDS-ON IMMERSION</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--section-title-size)',
                fontWeight: 800,
                color: 'var(--nebula)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              The Workshops
            </h3>

            <p style={{ fontSize: '1.0625rem', color: 'var(--slate)', lineHeight: 1.65 }}>
              Six intensive one-day workshops designed around student agency, modern industry toolchains,
              and genuine project delivery.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {CRUCIBLE_WORKSHOPS.map((workshop, idx) => {
              const IconComp = workshopIcons[idx] || Code2;
              return (
                <div
                  key={workshop.id}
                  className="card-base"
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        backgroundColor: workshop.badgeBg,
                        color: workshop.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComp size={24} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: 'var(--slate)',
                        opacity: 0.5
                      }}
                    >
                      {workshop.number}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--nebula)',
                      lineHeight: 1.3
                    }}
                  >
                    {workshop.title}
                  </h4>

                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--slate)', flexGrow: 1 }}>
                    {workshop.description}
                  </p>

                  <div style={{ height: '1px', backgroundColor: 'var(--line-light)' }} />

                  {/* Learn & Build Blocks */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}>
                      <strong style={{ color: 'var(--nebula)' }}>Learn: </strong>
                      <span style={{ color: 'var(--slate)' }}>{workshop.learn}</span>
                    </div>

                    <div
                      style={{
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        backgroundColor: 'var(--cloud)',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        borderLeft: `3px solid ${workshop.accent}`
                      }}
                    >
                      <strong style={{ color: 'var(--nebula)' }}>Build: </strong>
                      <span style={{ color: 'var(--nebula)', fontWeight: 600 }}>{workshop.build}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          21. PROGRAM EXPERIENCE: 6 Concepts
          ======================================================== */}
      <div
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--cloud)',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-bar eyebrow-bar-slate" />
              <span className="eyebrow-text eyebrow-text-slate">ENGAGEMENT ARCHITECTURE</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--section-title-size)',
                fontWeight: 800,
                color: 'var(--nebula)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              {PROGRAM_EXPERIENCE.title}
            </h3>

            <p style={{ fontSize: '1.125rem', color: 'var(--purple)', fontWeight: 600, lineHeight: 1.6 }}>
              {PROGRAM_EXPERIENCE.lead}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}
          >
            {PROGRAM_EXPERIENCE.pillars.map((pillar, idx) => {
              const IconC = experienceIcons[idx] || Zap;
              return (
                <div
                  key={pillar.title}
                  className="card-base"
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--cloud)',
                      color: 'var(--purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconC size={22} />
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1875rem',
                      fontWeight: 800,
                      color: 'var(--nebula)',
                      lineHeight: 1.25
                    }}
                  >
                    {pillar.title}
                  </h4>

                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--slate)' }}>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          22. WHY THE CRUCIBLE? & 23. THE OUTCOME
          ======================================================== */}
      <div
        className="section-wrapper"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          {/* Why The Crucible Narrative */}
          <div style={{ maxWidth: '840px', marginBottom: 'clamp(4rem, 6vw, 6rem)' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-bar eyebrow-bar-slate" />
              <span className="eyebrow-text eyebrow-text-slate">{WHY_CRUCIBLE.title.toUpperCase()}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--section-title-size)',
                fontWeight: 800,
                color: 'var(--nebula)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem'
              }}
            >
              {WHY_CRUCIBLE.headline}
            </h3>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--slate)', marginBottom: '2rem' }}>
              {WHY_CRUCIBLE.copy}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                backgroundColor: 'var(--cloud)',
                padding: '14px 24px',
                borderRadius: '999px',
                border: '1px solid var(--line-light)'
              }}
            >
              {['Explore', 'Experiment', 'Solve', 'Create', 'Share'].map((word, idx) => (
                <React.Fragment key={word}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 800, color: 'var(--nebula)' }}>
                    {word}
                  </span>
                  {idx < 4 && <ArrowRight size={14} color="var(--coral)" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* The Outcome Statement Banner */}
          <div
            style={{
              backgroundColor: 'var(--nebula)',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: 'clamp(2.5rem, 6vw, 5rem)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '820px' }}>
              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  color: 'var(--sun)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}
              >
                THE OUTCOME
              </div>

              {/* Oversized Quote */}
              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  marginBottom: '1.5rem'
                }}
              >
                {CRUCIBLE_OUTCOME.quote}
              </blockquote>

              <p style={{ fontSize: '1.125rem', color: 'var(--mist)', marginBottom: '2rem' }}>
                {CRUCIBLE_OUTCOME.lead}
              </p>

              {/* Rhythm Progression */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '2.5rem',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid var(--coral)'
                }}
              >
                {CRUCIBLE_OUTCOME.rhythm.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      fontWeight: 700,
                      color: i === 4 ? 'var(--sun)' : '#FFFFFF'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenDemo('Crucible Workshop Booking')}
                className="btn-primary"
                style={{ height: '54px', padding: '0 32px', fontSize: '1rem' }}
              >
                {CRUCIBLE_OUTCOME.ctaText}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
