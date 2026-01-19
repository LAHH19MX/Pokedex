/**
 * Hook personalizado para obtener detalles de un Pokemon
 * Siguiendo Google TypeScript Style Guide
 */

import { useEffect, useState } from 'react';

import { fetchPokemonById, fetchPokemonByName } from '../services/pokemonApi';
import { PokemonDetailResponse } from '../types/PokemonDetail';

interface UsePokemonDetailParams {
  pokemonId?: number;
  pokemonName?: string;
}

interface UsePokemonDetailReturn {
  pokemon: PokemonDetailResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const usePokemonDetail = ({
  pokemonId,
  pokemonName,
}: UsePokemonDetailParams): UsePokemonDetailReturn => {
  const [pokemon, setPokemon] = useState<PokemonDetailResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async (): Promise<void> => {
    if (!pokemonId && !pokemonName) {
      return;
    }

    try {
      setLoading(true);
      setError(null);

      let data: PokemonDetailResponse;

      if (pokemonId) {
        data = await fetchPokemonById(pokemonId);
      } else if (pokemonName) {
        data = await fetchPokemonByName(pokemonName);
      } else {
        throw new Error('Se requiere ID o nombre del Pokemon');
      }

      setPokemon(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar Pokemon';
      setError(errorMessage);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const refetch = (): void => {
    fetchPokemon();
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonId, pokemonName]);

  return {
    pokemon,
    loading,
    error,
    refetch,
  };
};