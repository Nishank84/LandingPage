import React from 'react';
import {
  THOUGHT_CONTENT,
  VISION_MISSION_TEAM,
  BELIEFS_CONTENT
} from '../data/content';
import {
  Lightbulb,
  BookOpen,
  Sprout,
  Rocket,
  Compass,
  Heart,
  TrendingUp,
  Sparkles,
  Users2,
  Eye,
  Target,
  Smile
} from 'lucide-react';

const levelIcons = [Lightbulb, BookOpen, Sprout, Rocket];
const beliefIcons = [Compass, Heart, TrendingUp, Sparkles, Users2];

export const ThoughtSection: React.FC = () => {
  return (
    <section id="thought" style={{ backgroundColor: '#FFFFFF' }}>
      {/* ========================================================
          24. THE THOUGHT / THE BIG IDEA: LIFT-OFF.
          ======================================================== */}
      <div
        className="section-wrapper"
        style={{
          borderBottom: '1px solid var(--line-light)',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(3rem, 6vw, 5.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Thought Narrative Left */}
            <div style={{ maxWidth: '620px' }}>
              <div className="eyebrow-container">
                <span className="eyebrow-text eyebrow-text-slate">{THOUGHT_CONTENT.eyebrow}</span>
              </div>

              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--slate)',
                  marginBottom: '8px'
                }}
              >
                {THOUGHT_CONTENT.sectionLabel}
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--section-title-size)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--nebula)',
                  marginBottom: '1.25rem'
                }}
              >
                {THOUGHT_CONTENT.headline}
              </h2>

              <p
                style={{
                  fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
                  lineHeight: 1.7,
                  color: 'var(--nebula)',
                  fontWeight: 600,
                  marginBottom: '1.25rem'
                }}
              >
                {THOUGHT_CONTENT.description}
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--slate)'
                }}
              >
                {THOUGHT_CONTENT.supporting}
              </p>
            </div>

            {/* Stepped Learner Progression Staircase (Right) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {THOUGHT_CONTENT.levels.map((lvl, idx) => {
                const IconComponent = levelIcons[idx] || Rocket;
                // Stepped visual offset on desktop
                const indent = `${idx * 28}px`;

                return (
                  <div
                    key={lvl.level}
                    className="card-cloud"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '18px',
                      padding: '1.25rem 1.75rem',
                      borderRadius: '18px',
                      marginLeft: idx > 0 ? indent : '0',
                      transition: 'all 0.3s ease',
                      borderLeft: `4px solid ${lvl.accent}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--cloud)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        backgroundColor: lvl.bgTint,
                        color: lvl.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          letterSpacing: '0.15em',
                          color: 'var(--slate)',
                          textTransform: 'uppercase'
                        }}
                      >
                        {lvl.level}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'var(--nebula)',
                          lineHeight: 1.2
                        }}
                      >
                        {lvl.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          25. VISION / MISSION / TEAM (Layout from page 14)
          ======================================================== */}
      <div
        className="section-wrapper"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {/* OUR VISION */}
            <div
              className="card-cloud"
              style={{
                padding: 'clamp(2rem, 4vw, 2.75rem)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: VISION_MISSION_TEAM.vision.bgTint,
                  color: VISION_MISSION_TEAM.vision.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Eye size={28} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0' }}>
                <span className="eyebrow-text eyebrow-text-slate">{VISION_MISSION_TEAM.vision.label}</span>
              </div>

              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: 'var(--nebula)',
                  fontWeight: 600
                }}
              >
                {VISION_MISSION_TEAM.vision.text}
              </p>
            </div>

            {/* OUR MISSION */}
            <div
              className="card-cloud"
              style={{
                padding: 'clamp(2rem, 4vw, 2.75rem)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: VISION_MISSION_TEAM.mission.bgTint,
                  color: VISION_MISSION_TEAM.mission.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Target size={28} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0' }}>
                <span className="eyebrow-text eyebrow-text-slate">{VISION_MISSION_TEAM.mission.label}</span>
              </div>

              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: 'var(--nebula)',
                  fontWeight: 600
                }}
              >
                {VISION_MISSION_TEAM.mission.text}
              </p>
            </div>

            {/* OUR TEAM */}
            <div
              className="card-cloud"
              style={{
                padding: 'clamp(2rem, 4vw, 2.75rem)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: VISION_MISSION_TEAM.team.bgTint,
                  color: VISION_MISSION_TEAM.team.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Smile size={28} />
              </div>

              <div className="eyebrow-container" style={{ marginBottom: '0' }}>
                <span className="eyebrow-text eyebrow-text-slate">{VISION_MISSION_TEAM.team.label}</span>
              </div>

              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: 'var(--nebula)',
                  fontWeight: 600
                }}
              >
                {VISION_MISSION_TEAM.team.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          26. BELIEFS: FIVE BELIEFS BEHIND EVERY FEATURE
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
              <span className="eyebrow-text eyebrow-text-slate">WHAT WE BELIEVE</span>
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
              Five beliefs behind every feature.
            </h3>

            <p style={{ fontSize: '1.0625rem', color: 'var(--slate)', lineHeight: 1.65 }}>
              How we build and why we build it: principles guiding every tool in GameUp AcademicOS.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px'
            }}
          >
            {BELIEFS_CONTENT.map((belief, idx) => {
              const IconComp = beliefIcons[idx] || Sparkles;
              return (
                <div
                  key={belief.title}
                  className="card-base"
                  style={{
                    padding: '1.75rem',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: belief.bgTint,
                      color: belief.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'var(--nebula)',
                      lineHeight: 1.3
                    }}
                  >
                    {belief.title}
                  </h4>

                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                    {belief.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
