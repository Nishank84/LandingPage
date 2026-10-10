import React, { useState, useEffect, useRef } from 'react';
import { PLATFORM_MODULES, type PlatformModule } from '../data/content';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Target,
  Sparkles,
  BookOpen,
  Dumbbell,
  HeartHandshake,
  BarChart3,
  Building2,
  MessageCircle,
  Users2,
  Trophy,
  ShieldCheck,
  Bot,
  Calendar,
  Clock,
  FileText
} from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  activeModuleId: string;
  onClose: () => void;
  onSelectModule: (moduleId: string) => void;
  onOpenDemo: (topic?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  Target,
  Sparkles,
  BookOpen,
  Dumbbell,
  HeartHandshake,
  BarChart3,
  Building2,
  MessageCircle,
  Users2
};

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  activeModuleId,
  onClose,
  onSelectModule,
  onOpenDemo
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // AI Assistant active query simulation inside modal
  const [aiActiveQuery, setAiActiveQuery] = useState<number>(0);
  const aiQueries = [
    {
      q: "Explain Kepler's laws of planetary motion using a bicycle wheel analogy",
      response:
        "Imagine pedaling along an oval velodrome: when you whip around the tight curve nearest the center of gravity, you speed up instinctively (Kepler's Second Law: equal areas in equal intervals of time)...",
      tag: "Concept Explainer"
    },
    {
      q: "Generate a 3-question diagnostic quiz on Grade 9 Indian Constitution (Articles 14-19)",
      response:
        "1. Under Article 14, what constitutes 'reasonable classification'?\n2. Which fundamental freedom under Article 19 is suspended automatically during an emergency?\n3. How does Article 16 protect equality of opportunity in public employment?",
      tag: "Practice Quiz"
    },
    {
      q: "Create a 5-point teacher revision note for Class 10 Periodic Table trends",
      response:
        "• Atomic Radius decreases across a period (increasing nuclear charge).\n• Ionization Energy increases across a period, decreases down a group.\n• Electronegativity peaks at Fluorine.\n• Metallic character increases down each group.\n• Valency matches group electrons for s-block.",
      tag: "Teacher Lesson Notes"
    }
  ];

  const currentIndex = PLATFORM_MODULES.findIndex((m) => m.id === activeModuleId);
  const activeModule: PlatformModule = PLATFORM_MODULES[currentIndex >= 0 ? currentIndex : 0];
  const ActiveIcon = iconMap[activeModule.icon] || Sparkles;

  // Handle ESC and Arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const nextIdx = (currentIndex + 1) % PLATFORM_MODULES.length;
        onSelectModule(PLATFORM_MODULES[nextIdx].id);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const prevIdx = (currentIndex - 1 + PLATFORM_MODULES.length) % PLATFORM_MODULES.length;
        onSelectModule(PLATFORM_MODULES[prevIdx].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, onSelectModule, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Reset content scroll position on active module switch
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeModuleId]);

  if (!isOpen) return null;

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + PLATFORM_MODULES.length) % PLATFORM_MODULES.length;
    onSelectModule(PLATFORM_MODULES[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % PLATFORM_MODULES.length;
    onSelectModule(PLATFORM_MODULES[nextIdx].id);
  };

  // Dedicated visual mockup for each product module
  const renderVisualMockup = (moduleId: string) => {
    switch (moduleId) {
      case 'exam-management':
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line-light)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--line-light)',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ClipboardCheck size={20} color="var(--blue)" />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700 }}>
                  Evaluation Console · Mid-Term Assessment
                </span>
              </div>
              <span
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--blue)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}
              >
                Anonymous Mode: Active
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'var(--cloud)',
                padding: '1rem',
                borderRadius: '14px',
                marginBottom: '1rem',
                borderLeft: '4px solid var(--blue)'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>
                Question 4 (Analytical Geometry · 8 Marks)
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--nebula)', marginTop: '4px', fontWeight: 500 }}>
                Find the equation of the locus of a point equidistant from the lines 3x - 4y + 7 = 0 and 5x + 12y - 2 = 0.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--mint)', fontWeight: 700 }}>
                <ShieldCheck size={16} /> Student Identity Masked (Candidate #8841B)
              </div>
              <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Score: 7.5 / 8.0 Marks</span>
            </div>
          </div>
        );

      case 'task-management':
        return (
          <div
            style={{
              backgroundColor: 'var(--nebula)',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--line)',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={20} color="var(--sun)" />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700 }}>
                  Mission Log · Class 8B
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--sun)', fontWeight: 800, fontSize: '0.875rem' }}>
                <Trophy size={16} /> Rank #2 on Leaderboard
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '6px' }}>
                <span style={{ color: 'var(--mist)' }}>Weekly XP Goal: 850 / 1000 XP</span>
                <span style={{ fontWeight: 700, color: 'var(--sun)' }}>85%</span>
              </div>
              <div style={{ width: '100%', height: '10px', backgroundColor: 'var(--deep)', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #FF6B4D, #FFC44B)', borderRadius: '999px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Quest: The Solar System Cartographer</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--mist)' }}>Assigned by Mrs. Iyer · Due Tomorrow</div>
                </div>
                <span style={{ backgroundColor: 'rgba(255, 107, 77, 0.2)', color: 'var(--coral)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
                  +200 XP
                </span>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Parent Reward: 1 Hour Weekend Drone Flying</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--mist)' }}>Cost: 1,200 XP · Status: Unlocked</div>
                </div>
                <span style={{ backgroundColor: 'rgba(0, 212, 170, 0.2)', color: 'var(--mint)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
                  Ready to Claim
                </span>
              </div>
            </div>
          </div>
        );

      case 'ai-assistant':
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line-light)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--line-light)',
                marginBottom: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    color: 'var(--purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700 }}>
                    Delta
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Grounded in NCERT / CBSE Class 9 &amp; 10</div>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)' }}>● Online</span>
            </div>

            {/* Prompt Switcher Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '4px' }}>
              {aiQueries.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setAiActiveQuery(idx)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: aiActiveQuery === idx ? 'var(--purple)' : 'var(--cloud)',
                    color: aiActiveQuery === idx ? '#FFFFFF' : 'var(--slate)',
                    border: '1px solid var(--line-light)',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                >
                  {item.tag}
                </button>
              ))}
            </div>

            {/* Simulated Chat stream */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ alignSelf: 'flex-end', maxWidth: '85%' }}>
                <div
                  style={{
                    backgroundColor: 'var(--nebula)',
                    color: '#FFFFFF',
                    padding: '10px 14px',
                    borderRadius: '16px 16px 4px 16px',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5
                  }}
                >
                  {aiQueries[aiActiveQuery].q}
                </div>
              </div>

              <div style={{ alignSelf: 'flex-start', maxWidth: '90%' }}>
                <div
                  style={{
                    backgroundColor: 'var(--cloud)',
                    color: 'var(--nebula)',
                    padding: '12px 16px',
                    borderRadius: '16px 16px 16px 4px',
                    fontSize: '0.8125rem',
                    lineHeight: 1.6,
                    border: '1px solid var(--line-light)',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {aiQueries[aiActiveQuery].response}
                </div>
              </div>
            </div>
          </div>
        );

      case 'library':
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line-light)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>
                Resource Canvas &amp; Artifact Hub
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--blue)', fontWeight: 700 }}>● 24 Shared Artifacts</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              {[
                { title: 'Trigonometry Formulas', type: 'Formula Sheet · PDF', date: 'Shared today' },
                { title: 'French Revolution Timeline', type: 'Mind Map · Interactive', date: 'Updated 2h ago' },
                { title: 'Periodic Table Flashcards', type: 'Deck · 42 Cards', date: 'Active deck' },
                { title: 'Optics Ray Diagrams', type: 'Whiteboard · Assignable', date: 'Teacher resource' }
              ].map((res, i) => (
                <div key={i} style={{ backgroundColor: 'var(--cloud)', padding: '12px', borderRadius: '12px', border: '1px solid var(--line-light)' }}>
                  <FileText size={16} color="var(--blue)" style={{ marginBottom: '6px' }} />
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)' }}>{res.title}</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--slate)', marginTop: '2px' }}>{res.type}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'training-centre':
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line-light)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--coral)', textTransform: 'uppercase' }}>
                Skill Strengthening Studio
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--mint)', fontWeight: 700 }}>● 12-Day Streak</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ backgroundColor: 'var(--cloud)', padding: '12px 14px', borderRadius: '12px', borderLeft: '4px solid var(--coral)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)' }}>Adaptive Weakness Quiz: Quadratic Roots</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Identified from Mid-Term Q3 · 5 targeted drills generated</div>
              </div>
              <div style={{ backgroundColor: 'var(--cloud)', padding: '12px 14px', borderRadius: '12px', borderLeft: '4px solid var(--sun)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--nebula)' }}>AI Rhyme Mnemonic: Mitosis Phases</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Theme: Hip-hop tempo · Prophase to Telophase</div>
              </div>
            </div>
          </div>
        );

      case 'behaviour':
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line-light)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--mint)', textTransform: 'uppercase' }}>
                Pastoral Care &amp; Wellbeing Dashboard
              </span>
              <span style={{ backgroundColor: 'rgba(0, 212, 170, 0.1)', color: 'var(--mint)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                Wellbeing Index: 94%
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              <div style={{ backgroundColor: 'var(--cloud)', padding: '12px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Merit Points Awarded</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--nebula)', marginTop: '2px' }}>+480 Points</div>
              </div>
              <div style={{ backgroundColor: 'var(--cloud)', padding: '12px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Counselor Check-ins</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--nebula)', marginTop: '2px' }}>12 Scheduled</div>
              </div>
              <div style={{ backgroundColor: 'var(--cloud)', padding: '12px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Confidential Flags</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--mint)', marginTop: '2px' }}>0 Unresolved</div>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line-light)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--purple)', textTransform: 'uppercase' }}>
                Real-Time Academic Mastery
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--purple)', fontWeight: 700 }}>● Cohort Class 10 (120 Students)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { subject: 'Mathematics · Algebra & Vectors', pct: 88, color: 'var(--blue)' },
                { subject: 'Physics · Mechanics & Optics', pct: 92, color: 'var(--purple)' },
                { subject: 'English · Essay & Comprehension', pct: 84, color: 'var(--coral)' }
              ].map((sub, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, color: 'var(--nebula)' }}>{sub.subject}</span>
                    <span style={{ fontWeight: 800, color: sub.color }}>{sub.pct}% Mastery</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--cloud)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: `${sub.pct}%`, height: '100%', backgroundColor: sub.color, borderRadius: '999px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'admin':
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line-light)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase' }}>
                School Operations Hub
              </span>
              <span style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--blue)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                Synced with CBSE ERP
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              <div style={{ backgroundColor: 'var(--cloud)', padding: '12px', borderRadius: '12px' }}>
                <Clock size={16} color="var(--blue)" style={{ marginBottom: '4px' }} />
                <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Timetable Engine</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>0 Conflicts Detected</div>
              </div>
              <div style={{ backgroundColor: 'var(--cloud)', padding: '12px', borderRadius: '12px' }}>
                <Calendar size={16} color="var(--mint)" style={{ marginBottom: '4px' }} />
                <div style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>Today Attendance</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--nebula)' }}>98.2% Recorded</div>
              </div>
            </div>
          </div>
        );

      case 'whatsapp':
        return (
          <div
            style={{
              backgroundColor: '#ECE5DD',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid #D1D7DB',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#075E54', textTransform: 'uppercase' }}>
              Official School WhatsApp Channel
            </div>
            <div style={{ alignSelf: 'flex-start', backgroundColor: '#FFFFFF', padding: '10px 14px', borderRadius: '12px', fontSize: '0.8125rem', color: '#111B21', maxWidth: '90%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              “Hi Mrs. Sharma! Aarav completed all tasks for Math Unit 4 and earned 250 XP today. Next assessment is on Friday.”
              <div style={{ fontSize: '0.625rem', color: '#667781', textAlign: 'right', marginTop: '4px' }}>12:45 PM · Delivered</div>
            </div>
            <div style={{ alignSelf: 'flex-start', backgroundColor: '#FFFFFF', padding: '10px 14px', borderRadius: '12px', fontSize: '0.8125rem', color: '#111B21', maxWidth: '90%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              “📄 Term 1 Report Card is ready. Tap to download signed PDF: gameup.tech/report/aarav-t1”
              <div style={{ fontSize: '0.625rem', color: '#667781', textAlign: 'right', marginTop: '4px' }}>01:10 PM · Delivered</div>
            </div>
          </div>
        );

      case 'communities':
        return (
          <div
            style={{
              backgroundColor: 'var(--nebula)',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--line)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sun)', textTransform: 'uppercase' }}>
                Safe Moderated Student Circles
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--mint)', fontWeight: 700 }}>● AI Moderation Guardrails</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>House Phoenix</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--sun)', marginTop: '2px' }}>Rank #1 · 4,250 House Points</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Robotics &amp; AI Club</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--mist)', marginTop: '2px' }}>34 Active Peer Members</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(10, 15, 40, 0.78)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 2.5vw, 24px)',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        style={{
          width: 'min(1140px, 96vw)',
          height: 'min(840px, 92vh)',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(19, 26, 61, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 24px',
            borderBottom: '1px solid var(--line-light)',
            backgroundColor: '#FFFFFF',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: 'var(--nebula)'
              }}
            >
              GameUp AcademicOS · Product Catalog
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: 'var(--cloud)',
                color: 'var(--slate)',
                padding: '2px 8px',
                borderRadius: '999px'
              }}
            >
              {currentIndex + 1} of {PLATFORM_MODULES.length}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handlePrev}
              title="Previous product (Left arrow)"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: '1px solid var(--line-light)',
                backgroundColor: 'var(--cloud)',
                color: 'var(--nebula)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              title="Next product (Right arrow)"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: '1px solid var(--line-light)',
                backgroundColor: 'var(--cloud)',
                color: 'var(--nebula)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <ChevronRight size={18} />
            </button>

            <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--line-light)', margin: '0 4px' }} />

            <button
              onClick={onClose}
              title="Close (ESC)"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: '1px solid var(--line-light)',
                backgroundColor: 'var(--cloud)',
                color: 'var(--nebula)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Split View: Left Sidebar of all products + Right details pane */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Side Panel: Scrollable list of other products */}
          <div
            ref={sidebarRef}
            style={{
              width: 'clamp(260px, 28vw, 320px)',
              flexShrink: 0,
              backgroundColor: 'var(--cloud)',
              borderRight: '1px solid var(--line-light)',
              overflowY: 'auto',
              padding: '12px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div
              style={{
                padding: '8px 12px 6px 12px',
                fontSize: '0.6875rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: 'var(--slate)',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>Explore Products</span>
              <span>10 Available</span>
            </div>

            {PLATFORM_MODULES.map((item) => {
              const ItemIcon = iconMap[item.icon] || Sparkles;
              const isActive = item.id === activeModule.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectModule(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: isActive ? 'var(--nebula)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--nebula)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : '#FFFFFF',
                      color: isActive ? 'var(--sun)' : 'var(--purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isActive ? 'none' : '0 1px 3px rgba(0,0,0,0.06)'
                    }}
                  >
                    <ItemIcon size={18} />
                  </div>

                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: '0.6875rem',
                        color: isActive ? 'var(--mist)' : 'var(--slate)',
                        textTransform: 'uppercase',
                        fontWeight: 600
                      }}
                    >
                      {item.category}
                    </div>
                  </div>

                  {isActive && (
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--sun)',
                        flexShrink: 0
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Pane: Active product rich content & visual mockup */}
          <div
            ref={contentRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)'
            }}
          >
            {/* Header Block */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  backgroundColor: 'var(--nebula)',
                  color: 'var(--sun)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px rgba(19, 26, 61, 0.18)'
                }}
              >
                <ActiveIcon size={32} />
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--purple)',
                    display: 'inline-block',
                    marginBottom: '2px'
                  }}
                >
                  {activeModule.category} Module
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 800,
                    color: 'var(--nebula)',
                    lineHeight: 1.2
                  }}
                >
                  {activeModule.name}
                </h2>
              </div>
            </div>

            {/* Tagline & Long Description */}
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--coral)',
                marginBottom: '1rem',
                lineHeight: 1.4
              }}
            >
              {activeModule.tagline}
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--slate)',
                marginBottom: '2rem'
              }}
            >
              {activeModule.fullDesc}
            </p>

            {/* Dedicated Interactive Visual Mockup */}
            {renderVisualMockup(activeModule.id)}

            {/* Value for Stakeholders Grid */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--slate)',
                  marginBottom: '10px'
                }}
              >
                Value for Stakeholders
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '10px'
                }}
              >
                {activeModule.stakeholders.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--cloud)',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      fontSize: '0.8125rem'
                    }}
                  >
                    <div style={{ fontWeight: 800, color: 'var(--nebula)', marginBottom: '2px' }}>
                      {s.role}
                    </div>
                    <div style={{ color: 'var(--slate)', lineHeight: 1.45 }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Module Highlights / Capabilities Checklist */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--slate)',
                  marginBottom: '10px'
                }}
              >
                Module Capabilities
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '10px'
                }}
              >
                {activeModule.features.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.875rem'
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--mint)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--nebula)', fontWeight: 600 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* End Tagline */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 800,
                color: 'var(--purple)',
                marginBottom: '1rem'
              }}
            >
              {activeModule.endTagline}
            </div>

            {/* One dedicated line after the content */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--line-light)'
              }}
            >
              <button
                onClick={() => onOpenDemo(`Product: ${activeModule.name}`)}
                className="btn btn-primary"
                style={{
                  padding: '10px 22px',
                  fontSize: '0.875rem'
                }}
              >
                Book a Demo
              </button>

              <button
                onClick={handleNext}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--coral)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  transition: 'transform 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                Next Product
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
