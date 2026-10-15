import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { GoalSection } from '../components/GoalSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { FinalCTA } from '../components/FinalCTA';
import { Layers, Flame, Lightbulb, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onOpenDemo: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  const pillars = [
    {
      eyebrow: 'ACADEMICOS',
      title: 'The Platform',
      tagline: 'The Connected Academic Ecosystem',
      description: '10 modular tools connecting assessments, gamified quests, curriculum intelligence, campus operations, and instant parent connection in real time.',
      path: '/platform',
      icon: Layers,
      accent: 'var(--coral)',
      bgTint: 'rgba(255, 107, 77, 0.08)',
      actionText: 'Explore Platform'
    },
    {
      eyebrow: 'WORKSHOPS & IMMERSION',
      title: 'The Crucible',
      tagline: 'Hands-On Technology Immersion',
      description: 'One-day, gamified workshops where students explore modern digital skills, solve real problems, and build projects they can genuinely be proud of.',
      path: '/crucible',
      icon: Flame,
      accent: 'var(--sun)',
      bgTint: 'rgba(255, 178, 36, 0.08)',
      actionText: 'Explore The Crucible'
    },
    {
      eyebrow: 'OUR PHILOSOPHY',
      title: 'The Thought',
      tagline: 'The Vision & Five Beliefs',
      description: 'The ideas, vision, and five foundational beliefs behind every feature—reimagining education from administrative exhaustion into joyful discovery.',
      path: '/thought',
      icon: Lightbulb,
      accent: 'var(--purple)',
      bgTint: 'rgba(139, 92, 246, 0.08)',
      actionText: 'Read The Thought'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero onOpenDemo={onOpenDemo} />

      {/* The Goal: A brighter tomorrow */}
      <GoalSection />

      {/* The Problem: 70% Anxiety / 65% Overworked */}
      <ProblemSection />

      {/* The Solution: GameUp AcademicOS & Stakeholder possibilities */}
      <SolutionSection />

      {/* Three Pillars Overview Section */}
      <section
        className="section-wrapper"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
            <div className="eyebrow-container">
              <span className="eyebrow-text eyebrow-text-slate">DISCOVER GAMEUP</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--section-title-size)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: 'var(--nebula)',
                marginBottom: '1rem'
              }}
            >
              Three pillars designed to transform modern learning.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--slate)',
                lineHeight: 1.5
              }}
            >
              Explore our modular software platform, our immersive student workshops, and the philosophy driving our mission.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}
          >
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="card-base"
                  style={{
                    padding: 'clamp(2rem, 4vw, 2.75rem)',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        backgroundColor: pillar.bgTint,
                        color: pillar.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <IconComponent size={28} />
                    </div>

                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--slate)',
                        marginBottom: '6px'
                      }}
                    >
                      {pillar.eyebrow}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                        fontWeight: 800,
                        color: 'var(--nebula)',
                        marginBottom: '0.5rem',
                        lineHeight: 1.2
                      }}
                    >
                      {pillar.title}
                    </h3>

                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: pillar.accent,
                        marginBottom: '1rem'
                      }}
                    >
                      {pillar.tagline}
                    </div>

                    <p
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        color: 'var(--slate)',
                        marginBottom: '2rem'
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      navigate(pillar.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-secondary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '14px 20px',
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      borderRadius: '14px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        onOpenDemo={onOpenDemo}
        onExplorePlatform={() => {
          navigate('/platform');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </>
  );
};
