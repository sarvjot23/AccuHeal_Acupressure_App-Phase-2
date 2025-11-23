import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabaseService } from '@services/supabaseService';
import { useAuth } from './AuthContext';

interface SessionHistoryEntry {
  id: string;
  point_id: string;
  duration_seconds?: number;
  notes?: string;
  created_at: string;
}

interface SessionHistoryContextType {
  history: SessionHistoryEntry[];
  isLoading: boolean;
  addSession: (pointId: string, durationSeconds?: number, notes?: string) => Promise<void>;
  refreshHistory: () => Promise<void>;
  getRecentPoints: (limit?: number) => string[];
}

const SessionHistoryContext = createContext<SessionHistoryContextType | undefined>(undefined);

interface SessionHistoryProviderProps {
  children: ReactNode;
}

export const SessionHistoryProvider: React.FC<SessionHistoryProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [history, setHistory] = useState<SessionHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadHistory();
    } else {
      setHistory([]);
      setIsLoading(false);
    }
  }, [user]);

  const loadHistory = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      const sessions = await supabaseService.getSessionHistory(user.uid);
      setHistory(sessions);
    } catch (error) {
      console.error('Error loading session history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addSession = async (
    pointId: string,
    durationSeconds?: number,
    notes?: string
  ): Promise<void> => {
    if (!user) return;

    try {
      await supabaseService.addSessionHistory(user.uid, pointId, durationSeconds, notes);
      await loadHistory();
    } catch (error) {
      console.error('Error adding session:', error);
      throw error;
    }
  };

  const refreshHistory = async (): Promise<void> => {
    await loadHistory();
  };

  const getRecentPoints = (limit: number = 5): string[] => {
    const uniquePoints = new Set<string>();
    for (const session of history) {
      if (uniquePoints.size >= limit) break;
      uniquePoints.add(session.point_id);
    }
    return Array.from(uniquePoints);
  };

  const value: SessionHistoryContextType = {
    history,
    isLoading,
    addSession,
    refreshHistory,
    getRecentPoints,
  };

  return <SessionHistoryContext.Provider value={value}>{children}</SessionHistoryContext.Provider>;
};

export const useSessionHistory = (): SessionHistoryContextType => {
  const context = useContext(SessionHistoryContext);
  if (context === undefined) {
    throw new Error('useSessionHistory must be used within a SessionHistoryProvider');
  }
  return context;
};

export default SessionHistoryContext;
