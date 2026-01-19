/**
 * Constantes de la aplicación Pokemon
 * Siguiendo Google TypeScript Style Guide
 */
export const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const POKEMON_ENDPOINT = '/pokemon';

export const POKEMON_SPECIES_ENDPOINT = '/pokemon-species';

export const POKEMON_COLORS: Record<string, string> = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

export const DEFAULT_LIMIT = 20;

export const MAX_POKEMON_ID = 1025;

export const THEME_COLORS = {
  primary: '#EE1515',
  secondary: '#FFCB05',
  accent: '#3B4CCA',
  background: '#F5F5F5',
  cardBg: '#FFFFFF',
  text: '#2C2C2C',
} as const;