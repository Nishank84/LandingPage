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
  BrainCircuit,
  Palette,
  Cloud,
  Zap,
  Hammer,
  Gamepad2,
  Blocks,
  Trophy,
  CheckCircle2
} from 'lucide-react';

interface CrucibleSectionProps {
  onOpenDemo?: (topic?: string) => void;
}

const workshopIcons = [Code2, Smartphone, Sparkles, BrainCircuit, Palette, Cloud];
const experienceIcons = [Zap, Hammer, Gamepad2, Blocks, Palette, Trophy];

const pillarConfigs = [
  {
    tileClass: 'icon-tile-blue',
    accentColor: 'var(--blue)',
    badgeBg: '#E7F0FE',
    tag: 'Problem Solving',
    highlight: 'Replaces theory lectures with goal-driven missions'
  },
  {
    tileClass: 'icon-tile-coral',
    accentColor: 'var(--coral)',
    badgeBg: '#FFEDEA',
    tag: 'Hands-on Practice',
    highlight: 'Every concept followed by live experimentation'
  },
  {
    tileClass: 'icon-tile-sun',
    accentColor: 'var(--ink-sun)',
    badgeBg: '#FFF8E7',
    tag: 'XP & Milestones',
    highlight: 'Real-time recognition, badges, and peer achievements'
  },
  {
    tileClass: 'icon-tile-mint',
    accentColor: 'var(--mint)',
    badgeBg: '#E2F8F4',
    tag: 'Tangible Creation',
    highlight: 'Functional software, models, and interactive tools'
  },
  {
    tileClass: 'icon-tile-purple',
    accentColor: 'var(--purple)',
    badgeBg: '#F3EAFD',
    tag: 'Student Agency',
    highlight: 'Students choose their themes, ideas, and aesthetics'
  },
  {
    tileClass: 'icon-tile-coral',
    accentColor: 'var(--coral)',
    badgeBg: '#FFEDEA',
    tag: 'Portfolio Proof',
    highlight: 'A verified digital project to share with parents and peers'
  }
];

const engagementProofPoints = [
  {
    stat: '100% Hands-On',
    label: 'Live Creation',
    description: 'Students build directly in interactive environments from hour one',
    accent: 'var(--blue)',
    tileClass: 'icon-tile-blue'
  },
  {
    stat: '0 Worksheets',
    label: 'Active Learning',
    description: 'Zero passive rote fill-in-the-blank handouts or slide lectures',
    accent: 'var(--coral)',
    tileClass: 'icon-tile-coral'
  },
  {
    stat: '1 Real Project',
    label: 'Tangible Delivery',
    description: 'A fully functional app, model, or prototype by end of day',
    accent: 'var(--mint)',
    tileClass: 'icon-tile-mint'
  },
  {
    stat: 'Verified Showcase',
    label: 'Student Portfolio',
    description: 'Proof of capability students keep and share permanently',
    accent: 'var(--ink-sun)',
    tileClass: 'icon-tile-sun'
  }
];

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
          21. STUDENT ENGAGEMENT CHAPTER & THE 6 PILLARS
          ======================================================== */}
      <div
        id="student-engagement"
        className="section-wrapper"
        style={{
          backgroundColor: 'var(--cloud)',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          {/* Header block with rich editorial hierarchy */}
          <div style={{ maxWidth: '840px', marginBottom: 'clamp(2.5rem, 4.5vw, 3.5rem)' }}>
            <div className="eyebrow-container" style={{ marginBottom: '1rem' }}>
              <span className="eyebrow-text eyebrow-text-coral">PROGRAM EXPERIENCE</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--section-title-size)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                color: 'var(--nebula)',
                marginBottom: '1rem'
              }}
            >
              {PROGRAM_EXPERIENCE.title}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                fontWeight: 700,
                color: 'var(--purple)',
                lineHeight: 1.45,
                marginBottom: '1rem'
              }}
            >
              {PROGRAM_EXPERIENCE.lead}
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: 'var(--slate)',
                maxWidth: '780px'
              }}
            >
              Traditional computer labs often reduce technology to passive slide decks and rote worksheets.
              The Crucible flips the classroom dynamic entirely: from the opening minute, students step into
              the role of builders, engineers, and designers through an interactive, mission-based journey.
            </p>
          </div>

          {/* 6 Engagement Pillars (3x2 Desktop Grid) */}
          <div className="grid-3col" style={{ marginBottom: 'clamp(2.5rem, 4.5vw, 3.5rem)' }}>
            {PROGRAM_EXPERIENCE.pillars.map((pillar, idx) => {
              const IconC = experienceIcons[idx] || Zap;
              const config = pillarConfigs[idx] || pillarConfigs[0];
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
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className={`icon-tile ${config.tileClass}`}>
                      <IconC size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        color: config.accentColor,
                        backgroundColor: config.badgeBg,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {config.tag}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--nebula)',
                      lineHeight: 1.25,
                      marginTop: '4px'
                    }}
                  >
                    {pillar.title}
                  </h4>

                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--slate)', flexGrow: 1 }}>
                    {pillar.description}
                  </p>

                  <div
                    style={{
                      borderTop: '1px solid var(--line-light)',
                      paddingTop: '12px',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--charcoal)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: config.accentColor, flexShrink: 0 }} />
                    <span>{config.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outcome & Proof Strip */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid var(--line-light)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              boxShadow: 'var(--shadow-sm)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {engagementProofPoints.map((item) => (
              <div
                key={item.stat}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <div className={`icon-tile-sm ${item.tileClass}`} style={{ marginTop: '2px' }}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 800,
                      color: 'var(--nebula)',
                      lineHeight: 1.2,
                      marginBottom: '2px'
                    }}
                  >
                    {item.stat}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: item.accent,
                      marginBottom: '4px'
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
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
