import React from 'react';
import { CrucibleSection } from '../components/CrucibleSection';
import { FinalCTA } from '../components/FinalCTA';

interface CruciblePageProps {
  onOpenDemo: (topic?: string) => void;
}

export const CruciblePage: React.FC<CruciblePageProps> = ({ onOpenDemo }) => {
  return (
    <>
      {/* The Crucible: Chapter Hero, 6 Workshops, Immersion, Architecture, and Outcomes */}
      <CrucibleSection onOpenDemo={onOpenDemo} />

      {/* Final CTA */}
      <FinalCTA
        onOpenDemo={() => onOpenDemo('Crucible Workshop Booking')}
      />
    </>
  );
};
