/**
 * Tipos para los detalles completos de un Pokemon
 * Siguiendo Google TypeScript Style Guide
 */
import { PokemonSprites, PokemonStat, PokemonType } from './ApiResponse';

export interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
  genera: Genus[];
}

interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
}

interface Genus {
  genus: string;
  language: {
    name: string;
  };
}