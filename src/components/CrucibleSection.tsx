import React, { useState, useEffect } from 'react';
import {
  CRUCIBLE_HERO,
  CRUCIBLE_WORKSHOPS,
  PROGRAM_EXPERIENCE,
  WHY_CRUCIBLE,
  CRUCIBLE_OUTCOME
} from '../data/content';
import { CrucibleProgressionSection } from './CrucibleProgressionSection';
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
  onOpenDemo?: (topic?: string) => void;
}

const workshopIcons = [Code2, Smartphone, Sparkles, Cpu, Palette, Cloud];
const experienceIcons = [Zap, Hammer, Trophy, Cpu, Palette, Compass];

const TypewriterRhythm: React.FC = () => {
  const items = CRUCIBLE_OUTCOME.rhythm;
  const [itemIndex, setItemIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = items[itemIndex];
    const typingSpeed = isDeleting ? 28 : 60;

    if (!isDeleting && displayText === currentFullText) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setItemIndex((prev) => (prev + 1) % items.length);
      }, 400);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentFullText.substring(0, prev.length - 1);
        } else {
          return currentFullText.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, itemIndex, items]);

  const isFinalItem = itemIndex === items.length - 1;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1.25rem',
        borderLeft: '4px solid var(--coral)',
        minHeight: '3.75rem',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.25rem, 2.6vw, 2.125rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginTop: '1.5rem',
        marginBottom: '0.5rem'
      }}
    >
      <span style={{ color: isFinalItem ? 'var(--sun)' : '#FFFFFF' }}>
        {displayText}
      </span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </div>
  );
};

export const CrucibleSection: React.FC<CrucibleSectionProps> = () => {
  return (
    <section id="crucible" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      {/* ========================================================
          19. THE CRUCIBLE CHAPTER HERO
          ======================================================== */}
      <div
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
        {/* Background Crucible Flare Vectors */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
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
              <linearGradient id="crucible-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF6B4D" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Primary thick diagonal stripe - fully completed across entire section */}
            <line
              x1="-150"
              y1="1250"
              x2="1550"
              y2="-250"
              stroke="url(#crucible-grad)"
              strokeWidth="68"
              opacity="0.65"
            />

            {/* Parallel secondary stripe to the right */}
            <line
              x1="90"
              y1="1250"
              x2="1790"
              y2="-250"
              stroke="url(#crucible-grad)"
              strokeWidth="38"
              opacity="0.45"
            />

            {/* Accent stripe to the left */}
            <line
              x1="-350"
              y1="1250"
              x2="1350"
              y2="-250"
              stroke="url(#crucible-grad)"
              strokeWidth="18"
              opacity="0.3"
            />

            {/* Far right accent stripe */}
            <line
              x1="320"
              y1="1250"
              x2="2020"
              y2="-250"
              stroke="url(#crucible-grad)"
              strokeWidth="24"
              opacity="0.25"
            />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-bar" style={{ backgroundColor: 'var(--coral)' }} />
              <span className="eyebrow-text eyebrow-text-coral">{CRUCIBLE_HERO.tagline}</span>
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
                marginBottom: 0,
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
          </div>
        </div>
      </div>

      {/* ========================================================
          19b. THE 5-STAGE CRUCIBLE PROGRESSION (Dedicated Section)
          ======================================================== */}
      <CrucibleProgressionSection />

      {/* ========================================================
          20. THE CRUCIBLE WORKSHOPS (3x2 Desktop Grid)
          ======================================================== */}
      <div className="section-wrapper" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--line-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
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
          <div className="grid-3col">
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
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
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
                      lineHeight: 1.3,
                      minHeight: '3.25rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px'
                    }}
                  >
                    {workshop.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.65,
                      color: 'var(--slate)',
                      flexGrow: 1,
                      minHeight: '4.5rem',
                      marginBottom: '16px'
                    }}
                  >
                    {workshop.description}
                  </p>

                  <div style={{ height: '1px', backgroundColor: 'var(--line-light)', marginBottom: '16px' }} />

                  {/* Learn & Build Blocks (Pinned to bottom with equal heights) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        minHeight: '2.8rem',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span>
                        <strong style={{ color: 'var(--nebula)' }}>Learn: </strong>
                        <span style={{ color: 'var(--slate)' }}>{workshop.learn}</span>
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        backgroundColor: 'var(--cloud)',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        borderLeft: `3px solid ${workshop.accent}`,
                        minHeight: '59px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <span>
                        <strong style={{ color: 'var(--nebula)' }}>Build: </strong>
                        <span style={{ color: 'var(--nebula)', fontWeight: 600 }}>{workshop.build}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          21a. STUDENT ENGAGEMENT CHAPTER HERO
          ======================================================== */}
      <div
        id="student-engagement"
        style={{
          backgroundColor: '#FFFFFF',
          color: 'var(--nebula)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'calc(var(--nav-height) + 2rem)',
          paddingBottom: 'clamp(3rem, 6vh, 5rem)',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '920px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                color: 'var(--nebula)',
                marginBottom: '1.75rem'
              }}
            >
              {PROGRAM_EXPERIENCE.title}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                fontWeight: 600,
                color: 'var(--purple)',
                lineHeight: 1.4,
                maxWidth: '820px'
              }}
            >
              {PROGRAM_EXPERIENCE.lead}
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          21b. THE 6 ENGAGEMENT PILLARS (3x2 Desktop Grid)
          ======================================================== */}
      <div
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--cloud)',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div className="grid-3col">
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
                    gap: '14px',
                    height: '100%'
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
                      lineHeight: 1.25,
                      minHeight: '2.8rem',
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    {pillar.title}
                  </h4>

                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--slate)', flexGrow: 1 }}>
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

              {/* Rhythm Progression with Typewriter Effect */}
              <TypewriterRhythm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
