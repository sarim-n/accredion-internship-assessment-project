'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

interface ModalContextType {
  isLeadModalOpen: boolean;
  openLeadModal: (programTitle?: string) => void;
  closeLeadModal: () => void;
  selectedProgram?: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  // Stable references — consumers won't re-render due to function identity changes.
  const openLeadModal = useCallback((programTitle?: string) => {
    setSelectedProgram(programTitle);
    setIsLeadModalOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setIsLeadModalOpen(false);
    setSelectedProgram(undefined);
  }, []);

  // Memoized value object — only a new object when state actually changes.
  const value = useMemo(
    () => ({ isLeadModalOpen, openLeadModal, closeLeadModal, selectedProgram }),
    [isLeadModalOpen, openLeadModal, closeLeadModal, selectedProgram]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

export const useLeadModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useLeadModal must be used within a ModalProvider');
  }
  return context;
};
