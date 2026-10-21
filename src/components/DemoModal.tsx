import React, { useEffect } from 'react';
import { openCalendly } from '../utils/calendly';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

/**
 * DemoModal serves as a clean bridge to the official Calendly booking popup.
 * It ensures that any component or route requesting a demo directly launches
 * the native Calendly scheduling experience without redundant forms.
 */
export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Game Up AcademicOS'
}) => {
  useEffect(() => {
    if (isOpen) {
      openCalendly(defaultTopic);
      onClose();
    }
  }, [isOpen, defaultTopic, onClose]);

  return null;
};
