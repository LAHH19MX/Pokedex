/**
 * Componente tarjeta individual de Pokemon
 * Siguiendo Google TypeScript Style Guide
 */
import React from 'react';

import { PokemonListItem } from '../types/ApiResponse';
import { getPokemonIdFromUrl } from '../services/pokemonApi';
import { THEME_COLORS } from '../utils/constants';

interface PokemonCardProps {
  pokemon: PokemonListItem;
  onClick: (id: number) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  // ASPECTO 4: Const vs Let - Usar const para variables
  const pokemonId = getPokemonIdFromUrl(pokemon.url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  const handleClick = (): void => {
    onClick(pokemonId);
  };

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: THEME_COLORS.cardBg,
        border: `3px solid ${THEME_COLORS.primary}`,
        borderRadius: '16px',
        padding: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(238, 21, 21, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div
        style={{
          backgroundColor: THEME_COLORS.background,
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '12px',
        }}
      >
        <img
          src={imageUrl}
          alt={pokemon.name}
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
          }}
        />
      </div>

      <p
        style={{
          fontSize: '14px',
          color: THEME_COLORS.accent,
          fontWeight: 'bold',
          margin: '0 0 8px 0',
        }}
      >
        #{pokemonId.toString().padStart(3, '0')}
      </p>

      <h3
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: THEME_COLORS.text,
          margin: '0',
          textTransform: 'capitalize',
        }}
      >
        {capitalizeFirstLetter(pokemon.name)}
      </h3>
    </div>
  );
};