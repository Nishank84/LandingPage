import React from 'react';
import { GOAL_CONTENT } from '../data/content';
import { Sparkles, Heart, Users, Building2 } from 'lucide-react';

const stakeholderIcons = [Sparkles, Heart, Users, Building2];

const stakeholderMeta = [
  {
    tileClass: 'icon-tile-blue',
    accent: 'var(--blue)',
    badgeBg: '#E7F0FE',
    detail: 'Gamified missions, agency & joy in discovery'
  },
  {
    tileClass: 'icon-tile-coral',
    accent: 'var(--coral)',
    badgeBg: '#FFEDEA',
    detail: 'Reclaiming prep hours with AI tools & lesson plans'
  },
  {
    tileClass: 'icon-tile-sun',
    accent: 'var(--ink-sun)',
    badgeBg: '#FFF8E7',
    detail: 'Transparent daily progress without academic friction'
  },
  {
    tileClass: 'icon-tile-mint',
    accent: 'var(--mint)',
    badgeBg: '#E2F8F4',
    detail: 'One synchronized operating system across campus'
  }
];

export const GoalSection: React.FC = () => {
  return (
    <section
      id="purpose"
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
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Header Block */}
        <div style={{ maxWidth: '880px', marginBottom: 'clamp(2rem, 4.5vh, 3.5rem)' }}>
          {/* Eyebrow Label (Without hyphens/bars per brand direction) */}
          <div className="eyebrow-container" style={{ marginBottom: '1rem' }}>
            <span className="eyebrow-text eyebrow-text-slate">
              {GOAL_CONTENT.eyebrow}
            </span>
          </div>

          {/* Heading in solid Nebula (no gradient on white ground) */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: 'var(--nebula)',
              marginBottom: '1.25rem'
            }}
          >
            {GOAL_CONTENT.headline}
          </h2>

          {/* Subheadline in Purple */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 2.4vw, 1.85rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--purple)',
              lineHeight: 1.35,
              marginBottom: '1.25rem',
              maxWidth: '820px'
            }}
          >
            {GOAL_CONTENT.subheadline}
          </p>

          {/* Body Description in Slate */}
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
              lineHeight: 1.75,
              color: 'var(--slate)',
              maxWidth: '760px',
              margin: 0
            }}
          >
            {GOAL_CONTENT.description}
          </p>
        </div>

        {/* 4 Stakeholder Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            width: '100%'
          }}
        >
          {GOAL_CONTENT.stakeholders.map((item, idx) => {
            const IconComp = stakeholderIcons[idx] || Sparkles;
            const meta = stakeholderMeta[idx] || stakeholderMeta[0];
            return (
              <div
                key={item.title}
                className="card-base"
                style={{
                  padding: 'clamp(1.25rem, 2vw, 1.75rem)',
                  borderRadius: '20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--line-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className={`icon-tile ${meta.tileClass}`}>
                    <IconComp size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: meta.accent,
                      backgroundColor: meta.badgeBg,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.count}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--nebula)',
                      marginBottom: '4px',
                      lineHeight: 1.25
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: meta.accent,
                      marginBottom: '6px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.role}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      lineHeight: 1.5,
                      color: 'var(--slate)',
                      margin: 0
                    }}
                  >
                    {meta.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
