import React from 'react';
import { GOAL_CONTENT } from '../data/content';

export const GoalSection: React.FC = () => {
  return (
    <section
      className="section-wrapper"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--line-light)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '840px' }}>
          {/* Editorial Statement */}
          <div className="eyebrow-container">
            <span className="eyebrow-text eyebrow-text-slate">{GOAL_CONTENT.eyebrow}</span>
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
            {GOAL_CONTENT.headline}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 600,
              letterSpacing: '-0.015em',
              color: 'var(--purple)',
              lineHeight: 1.35,
              marginBottom: '1.5rem'
            }}
          >
            {GOAL_CONTENT.subheadline}
          </p>

          <p
            style={{
              fontSize: '1.1875rem',
              lineHeight: 1.8,
              color: 'var(--slate)',
              maxWidth: '720px'
            }}
          >
            {GOAL_CONTENT.description}
          </p>
        </div>
      </div>
    </section>
  );
};
