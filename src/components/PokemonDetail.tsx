/**
 * Componente para mostrar detalles completos de un Pokemon
 * Siguiendo Google TypeScript Style Guide
 */

// ASPECTO 2: Import Organization - Externos primero, luego internos
import React from 'react';

import { PokemonDetailResponse } from '../types/PokemonDetail';
import { POKEMON_COLORS, THEME_COLORS } from '../utils/constants';

// ASPECTO 2: Interface para props del componente
interface PokemonDetailProps {
  pokemon: PokemonDetailResponse;
  onClose: () => void;
}

// ASPECTO 1: Naming Conventions - PascalCase para componente
// ASPECTO 7: Export Practices - Named export
export const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon, onClose }) => {
  // ASPECTO 4: Const vs Let - Usar const para variables
  const mainType = pokemon.types[0]?.type.name || 'normal';
  const typeColor = POKEMON_COLORS[mainType] || POKEMON_COLORS.normal;
  
  // ASPECTO 6: Optional Chaining - Acceso seguro a sprites
  const imageUrl = pokemon.sprites.other?.['official-artwork']?.front_default || 
                   pokemon.sprites.front_default || 
                   '';

  // ASPECTO 4: Const vs Let - Usar const para funciones
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // ASPECTO 4: Const vs Let - Usar const para funciones
  const formatStatName = (statName: string): string => {
    const statNames: Record<string, string> = {
      hp: 'HP',
      attack: 'Attack',
      defense: 'Defense',
      'special-attack': 'Sp. Atk',
      'special-defense': 'Sp. Def',
      speed: 'Speed',
    };
    return statNames[statName] || capitalizeFirstLetter(statName);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: THEME_COLORS.cardBg,
          borderRadius: '24px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Header con color del tipo */}
        <div
          style={{
            backgroundColor: typeColor,
            padding: '30px',
            borderRadius: '24px 24px 0 0',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '24px',
              cursor: 'pointer',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            ×
          </button>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0 0 8px 0',
            }}
          >
            #{pokemon.id.toString().padStart(3, '0')}
          </p>

          <h2
            style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
              margin: '0 0 16px 0',
              textTransform: 'capitalize',
            }}
          >
            {capitalizeFirstLetter(pokemon.name)}
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            {/* ASPECTO 5: Array Types - Usando Type[] */}
            {pokemon.types.map((type) => (
              <span
                key={type.slot}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* Imagen del Pokemon */}
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: THEME_COLORS.background,
          }}
        >
          <img
            src={imageUrl}
            alt={pokemon.name}
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Información física */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            padding: '20px',
            borderBottom: `2px solid ${THEME_COLORS.background}`,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: THEME_COLORS.accent, margin: '0 0 4px 0', fontSize: '14px' }}>
              Altura
            </p>
            <p style={{ color: THEME_COLORS.text, fontWeight: 'bold', fontSize: '18px', margin: 0 }}>
              {(pokemon.height / 10).toFixed(1)} m
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: THEME_COLORS.accent, margin: '0 0 4px 0', fontSize: '14px' }}>
              Peso
            </p>
            <p style={{ color: THEME_COLORS.text, fontWeight: 'bold', fontSize: '18px', margin: 0 }}>
              {(pokemon.weight / 10).toFixed(1)} kg
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div style={{ padding: '20px' }}>
          <h3
            style={{
              color: THEME_COLORS.text,
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Estadísticas Base
          </h3>

          {/* ASPECTO 5: Array Types - Usando Type[] */}
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} style={{ marginBottom: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '4px',
                }}
              >
                <span style={{ color: THEME_COLORS.text, fontSize: '14px' }}>
                  {formatStatName(stat.stat.name)}
                </span>
                <span style={{ color: THEME_COLORS.accent, fontWeight: 'bold', fontSize: '14px' }}>
                  {stat.base_stat}
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: THEME_COLORS.background,
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${(stat.base_stat / 255) * 100}%`,
                    height: '100%',
                    backgroundColor: typeColor,
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Habilidades */}
        <div style={{ padding: '20px', borderTop: `2px solid ${THEME_COLORS.background}` }}>
          <h3
            style={{
              color: THEME_COLORS.text,
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '12px',
            }}
          >
            Habilidades
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {/* ASPECTO 5: Array Types - Usando Type[] */}
            {pokemon.abilities.map((ability) => (
              <span
                key={ability.slot}
                style={{
                  backgroundColor: ability.is_hidden ? THEME_COLORS.secondary : THEME_COLORS.background,
                  color: ability.is_hidden ? THEME_COLORS.text : THEME_COLORS.accent,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}
              >
                {ability.ability.name.replace('-', ' ')}
                {ability.is_hidden && ' (Oculta)'}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};