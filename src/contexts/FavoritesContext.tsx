import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabaseService } from '@services/supabaseService';
import { useAuth } from './AuthContext';

interface FavoritesContextType {
  favorites: string[];
  isLoading: boolean;
  isFavorite: (pointId: string) => boolean;
  toggleFavorite: (pointId: string) => Promise<void>;
  refreshFavorites: () => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadFavorites();
    } else {
      setFavorites([]);
      setIsLoading(false);
    }
  }, [user]);

  const loadFavorites = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      const favs = await supabaseService.getFavorites(user.uid);
      setFavorites(favs);
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFavorite = (pointId: string): boolean => {
    return favorites.includes(pointId);
  };

  const toggleFavorite = async (pointId: string): Promise<void> => {
    if (!user) return;

    try {
      if (isFavorite(pointId)) {
        await supabaseService.removeFavorite(user.uid, pointId);
        setFavorites(prev => prev.filter(id => id !== pointId));
      } else {
        await supabaseService.addFavorite(user.uid, pointId);
        setFavorites(prev => [...prev, pointId]);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error;
    }
  };

  const refreshFavorites = async (): Promise<void> => {
    await loadFavorites();
  };

  const value: FavoritesContextType = {
    favorites,
    isLoading,
    isFavorite,
    toggleFavorite,
    refreshFavorites,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;
