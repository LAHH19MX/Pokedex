/**
 * Componente principal de la aplicación Pokemon
 * Siguiendo Google TypeScript Style Guide
 */

// ASPECTO 2: Import Organization - Externos primero, luego internos
import React, { useState } from 'react';

import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import { LoadingSpinner } from './components/LoadingSpinner';
import { usePokemonDetail } from './hooks/usePokemonDetail';
import { THEME_COLORS } from './utils/constants';

// ASPECTO 1: Naming Conventions - PascalCase para componente
// ASPECTO 7: Export Practices - Named export
export const App: React.FC = () => {
  // ASPECTO 4: Const vs Let - Usar const para estado
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(null);
  const [searchedPokemonName, setSearchedPokemonName] = useState<string | null>(null);

  // ASPECTO 4: Const vs Let - Usar const para hooks
  const { pokemon, loading, error } = usePokemonDetail({
    pokemonId: selectedPokemonId || undefined,
    pokemonName: searchedPokemonName || undefined,
  });

  // ASPECTO 4: Const vs Let - Usar const para funciones
  const handlePokemonSelect = (id: number): void => {
    setSelectedPokemonId(id);
    setSearchedPokemonName(null);
  };

  // ASPECTO 4: Const vs Let - Usar const para funciones
  const handleSearch = (query: string): void => {
    setSearchedPokemonName(query);
    setSelectedPokemonId(null);
  };

  // ASPECTO 4: Const vs Let - Usar const para funciones
  const handleCloseDetail = (): void => {
    setSelectedPokemonId(null);
    setSearchedPokemonName(null);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: THEME_COLORS.background,
      }}
    >
      <Header />

      <div style={{ padding: '32px 0' }}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* ASPECTO 6: Optional Chaining - Verificación de estados */}
      {loading && (
        <div style={{ padding: '60px 0' }}>
          <LoadingSpinner />
        </div>
      )}

      {/* ASPECTO 6: Optional Chaining - Verificación de error */}
      {error && !loading && (
        <div
          style={{
            textAlign: 'center',
            padding: '40px 20px',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              backgroundColor: THEME_COLORS.cardBg,
              border: `3px solid ${THEME_COLORS.primary}`,
              borderRadius: '16px',
              padding: '30px',
            }}
          >
            <p
              style={{
                fontSize: '48px',
                margin: '0 0 16px 0',
              }}
            >
              😕
            </p>
            <p
              style={{
                color: THEME_COLORS.primary,
                fontSize: '20px',
                fontWeight: 'bold',
                margin: '0 0 12px 0',
              }}
            >
              Pokemon no encontrado
            </p>
            <p
              style={{
                color: THEME_COLORS.text,
                fontSize: '16px',
                margin: '0 0 24px 0',
              }}
            >
              {error}
            </p>
            <button
              onClick={handleCloseDetail}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: THEME_COLORS.primary,
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#CC0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = THEME_COLORS.primary;
              }}
            >
              Volver a la lista
            </button>
          </div>
        </div>
      )}

      {/* ✅ CORRECCIÓN: Verificar que haya búsqueda activa */}
      {pokemon && !loading && (selectedPokemonId !== null || searchedPokemonName !== null) && (
        <PokemonDetail pokemon={pokemon} onClose={handleCloseDetail} />
      )}

      {/* ASPECTO 6: Optional Chaining - Mostrar lista solo si no hay búsqueda activa */}
      {!selectedPokemonId && !searchedPokemonName && (
        <PokemonList onPokemonSelect={handlePokemonSelect} />
      )}

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '32px 20px',
          backgroundColor: THEME_COLORS.cardBg,
          borderTop: `3px solid ${THEME_COLORS.primary}`,
          marginTop: '40px',
        }}
      >
        <p
          style={{
            color: THEME_COLORS.text,
            fontSize: '14px',
            margin: '0 0 8px 0',
          }}
        >
          Creado con React + TypeScript + Vite
        </p>
        <p
          style={{
            color: THEME_COLORS.accent,
            fontSize: '12px',
            margin: 0,
          }}
        >
          Siguiendo la{' '}
          <strong style={{ color: THEME_COLORS.primary }}>
            Google TypeScript Style Guide
          </strong>
        </p>
      </footer>
    </div>
  );
};