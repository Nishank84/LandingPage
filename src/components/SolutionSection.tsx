import React from 'react';
import { SOLUTION_CONTENT } from '../data/content';
import { ArrowRight, Check, Sparkles, Layers, ShieldCheck, Heart, UserCheck } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const stakeholderIconList = [Sparkles, Layers, ShieldCheck, Heart];

  return (
    <section
      id="solution"
      className="section-wrapper"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--line-light)'
      }}
    >
      <div className="container">
        {/* New Section Hero Header: The Solution */}
        <div style={{ maxWidth: '820px', marginBottom: 'clamp(2.5rem, 4.5vw, 3.5rem)' }}>
          <div className="eyebrow-container" style={{ marginBottom: '0.75rem' }}>
            <span className="eyebrow-text eyebrow-text-slate">THE SOLUTION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--section-title-size)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--nebula)',
              marginBottom: '1rem'
            }}
          >
            Serious tech. <span className="text-gradient">Playful experience.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: 1.65,
              color: 'var(--slate)',
              maxWidth: '680px'
            }}
          >
            Connecting classrooms, administration, and parents into one unified, engaging ecosystem.
          </p>
        </div>

        {/* Traditional vs GameUp Comparison Matrix (3 Cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '2rem'
          }}
        >
          {SOLUTION_CONTENT.comparisons.map((c, i) => (
            <div
              key={i}
              className="card-base"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: 'var(--slate)'
                }}
              >
                {c.category}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--nebula)',
                  lineHeight: 1.2
                }}
              >
                {c.oldTitle}
              </h3>

              <p style={{ fontSize: '0.9375rem', color: 'var(--slate)', lineHeight: 1.6, flexGrow: 1 }}>
                {c.oldDesc}
              </p>

              <div style={{ height: '1px', backgroundColor: 'var(--line-light)', margin: '4px 0' }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 107, 77, 0.15)',
                    color: 'var(--coral)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <ArrowRight size={14} />
                </div>
                <div
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: 'var(--nebula)',
                    lineHeight: 1.45
                  }}
                >
                  {c.newSolution}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Badges / Modular Products Pills below the comparison cards */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '10px',
            padding: '1.25rem 1.75rem',
            backgroundColor: 'var(--cloud)',
            borderRadius: '18px',
            border: '1px solid var(--line-light)',
            marginBottom: 'clamp(4rem, 7vw, 6rem)'
          }}
        >
          {SOLUTION_CONTENT.pills.map((pill) => (
            <span
              key={pill}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '999px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--line-light)',
                fontFamily: 'var(--font-text)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--nebula)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Check size={14} color="var(--mint)" />
              {pill}
            </span>
          ))}
        </div>

        {/* Four Stakeholder Cards: Same people. Bigger possibilities. */}
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <div className="eyebrow-container" style={{ marginBottom: '0.5rem' }}>
                <span className="eyebrow-text eyebrow-text-slate">WHO WE SERVE</span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--subsection-title-size)',
                  fontWeight: 800,
                  color: 'var(--nebula)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}
              >
                Same people.<br />Bigger possibilities.
              </h3>
            </div>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--slate)',
                maxWidth: '480px',
                lineHeight: 1.6
              }}
            >
              One platform, four people who all want the same thing: a child who is learning and growing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {SOLUTION_CONTENT.stakeholders.map((s, idx) => {
              const IconComp = stakeholderIconList[idx] || UserCheck;
              return (
                <div
                  key={s.role}
                  className="card-cloud"
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.borderColor = s.accent;
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = 'var(--cloud)';
                    e.currentTarget.style.borderColor = 'rgba(227, 231, 238, 0.6)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: s.bgTint,
                      color: s.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={26} />
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--nebula)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {s.role}
                  </h4>

                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--nebula)',
                      lineHeight: 1.4
                    }}
                  >
                    {s.quote}
                  </p>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--slate)', lineHeight: 1.6, flexGrow: 1 }}>
                    {s.description}
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
