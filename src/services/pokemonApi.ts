/**
 * Servicio para interactuar con la PokeAPI
 * Siguiendo Google TypeScript Style Guide
 */
import axios from 'axios';

import {
  API_BASE_URL,
  DEFAULT_LIMIT,
  POKEMON_ENDPOINT,
  POKEMON_SPECIES_ENDPOINT,
} from '../utils/constants';
import { PokemonListResponse } from '../types/ApiResponse';
import { PokemonDetailResponse, PokemonSpecies } from '../types/PokemonDetail';

export const fetchPokemonList = async (
  limit: number = DEFAULT_LIMIT,
  offset: number = 0
): Promise<PokemonListResponse> => {
  const url = `${API_BASE_URL}${POKEMON_ENDPOINT}`;
  const response = await axios.get<PokemonListResponse>(url, {
    params: { limit, offset },
  });
  return response.data;
};

export const fetchPokemonById = async (
  id: number
): Promise<PokemonDetailResponse> => {
  const url = `${API_BASE_URL}${POKEMON_ENDPOINT}/${id}`;
  const response = await axios.get<PokemonDetailResponse>(url);
  return response.data;
};

export const fetchPokemonByName = async (
  name: string
): Promise<PokemonDetailResponse> => {
  const url = `${API_BASE_URL}${POKEMON_ENDPOINT}/${name.toLowerCase()}`;
  const response = await axios.get<PokemonDetailResponse>(url);
  return response.data;
};

export const fetchPokemonSpecies = async (
  id: number
): Promise<PokemonSpecies> => {
  const url = `${API_BASE_URL}${POKEMON_SPECIES_ENDPOINT}/${id}`;
  const response = await axios.get<PokemonSpecies>(url);
  return response.data;
};

// ASPECTO 4: Const vs Let - Usando const para funciones
// ASPECTO 1: Naming Conventions - camelCase para funciones
export const getPokemonIdFromUrl = (url: string): number => {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
};