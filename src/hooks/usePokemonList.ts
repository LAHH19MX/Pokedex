/**
 * Hook personalizado para gestionar la lista de Pokemon
 * Siguiendo Google TypeScript Style Guide
 */
import { useEffect, useState } from 'react';

import { fetchPokemonList } from '../services/pokemonApi';
import { PokemonListItem } from '../types/ApiResponse';
import { DEFAULT_LIMIT } from '../utils/constants';

interface UsePokemonListReturn {
  pokemons: PokemonListItem[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
}

export const usePokemonList = (): UsePokemonListReturn => {
  // ASPECTO 4: Const vs Let - Usar const para estado inmutable
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadPokemons = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await fetchPokemonList(DEFAULT_LIMIT, offset);
      
      setPokemons((prev) => [...prev, ...data.results]);
      setHasMore(data.next !== null);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = (): void => {
    if (!loading && hasMore) {
      setOffset((prev) => prev + DEFAULT_LIMIT);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, [offset]);

  return {
    pokemons,
    loading,
    error,
    hasMore,
    loadMore,
  };
};