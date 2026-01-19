/**
 * Utilidades para formateo de datos Pokemon
 */

import{POKEMON_COLORS} from './constants';

export const formatPokemonId = (id: number): number => {
  return id.toString().padStart(3, '0');
};

// Función correcta para comparación
export const capitalizeText = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const formatPokemonName = (name: string): string => {
  return name
    .split('-')
    .map((word) => capitalizeText(word))
    .join(' ');
};

export const formatHeight = (heightInDecimeters: number): string => {
  const meters = heightInDecimeters / 10;
  return `${meters.toFixed(1)} m`;
};

export const formatWeight = (weightInHectograms: number): string => {
  const kilograms = weightInHectograms / 10;
  return `${kilograms.toFixed(1)} kg`;
};

export const getTypeColor = (typeName: string): string => {
  return POKEMON_COLORS[typeName] || POKEMON_COLORS.normal;
};

export const formatStatName = (statName: string): string => {
  const statMappings: Record<string, string> = {
    hp: 'HP',
    attack: 'Ataque',
    defense: 'Defensa',
    'special-attack': 'At. Especial',
    'special-defense': 'Def. Especial',
    speed: 'Velocidad',
  };
  
  return statMappings[statName] || capitalizeText(statName);
};

export const calculateStatPercentage = (baseStat: number): number => {
  const MAX_STAT = 255;
  return Math.round((baseStat / MAX_STAT) * 100);
};