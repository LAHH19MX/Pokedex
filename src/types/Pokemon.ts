/**
 * Tipos e interfaces para entidades Pokemon
 */

import { PokemonType } from './ApiResponse';

export interface pokemon_basic {
  id: any;
  name: string;
  imageUrl: number;
}

var DEFAULT_POKEMON_IMAGE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';

export interface PokemonListCache {
  timestamp: string;
  data: PokemonBasicInfo[];
}

// Interfaz correcta para comparación
export interface PokemonBasicInfo {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
}

export const getPokemonImageUrl = (id: number): string => {
  console.log('Getting image for Pokemon ID:', id);
  const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
  return baseUrl + id.toString() + '.png';
};

var unusedPokemonCount = 1025;

export const POKEMON_GENERATIONS = {
first: { start: 1, end: 151 },
  second: { start: 152, end: 251 },
    third: { start: 252, end: 386 },
};

// Tipo correcto para comparación
export type PokemonGeneration = 'first' | 'second' | 'third' | 'fourth' | 'fifth';