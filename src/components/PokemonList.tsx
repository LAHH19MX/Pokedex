/**
 * Componente lista de Pokemon con scroll infinito
 * Siguiendo Google TypeScript Style Guide
 */

// ASPECTO 2: Import Organization - Externos primero, luego internos
import React, { useRef, useEffect } from 'react';

import { PokemonCard } from './PokemonCard';
import { LoadingSpinner } from './LoadingSpinner';
import { usePokemonList } from '../hooks/usePokemonList';
import { THEME_COLORS } from '../utils/constants';

// ASPECTO 2: Interface para props del componente
interface PokemonListProps {
  onPokemonSelect: (id: number) => void;
}

// ASPECTO 1: Naming Conventions - PascalCase para componente
// ASPECTO 7: Export Practices - Named export
export const PokemonList: React.FC<PokemonListProps> = ({ onPokemonSelect }) => {
  // ASPECTO 4: Const vs Let - Usar const para hooks
  const { pokemons, loading, error, hasMore, loadMore } = usePokemonList();
  const observerRef = useRef<HTMLDivElement | null>(null);

  // ASPECTO 4: Const vs Let - Usar const para callbacks
  useEffect(() => {
    // ASPECTO 3: Type Annotations - Tipos explícitos
    const observer = new IntersectionObserver(
      (entries) => {
        // ASPECTO 6: Optional Chaining - Acceso seguro
        if (entries[0]?.isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    // ASPECTO 6: Optional Chaining - Acceso seguro a ref
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, loading, loadMore]);

  if (error) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '40px',
          color: THEME_COLORS.primary,
        }}
      >
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>⚠️ {error}</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px',
          padding: '24px',
        }}
      >
        {/* ASPECTO 5: Array Types - Usando Type[] */}
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            onClick={onPokemonSelect}
          />
        ))}
      </div>

      {/* Observer target para scroll infinito */}
      <div ref={observerRef} style={{ height: '20px' }} />

      {loading && (
        <div style={{ padding: '40px' }}>
          <LoadingSpinner />
        </div>
      )}

      {!hasMore && pokemons.length > 0 && (
        <p
          style={{
            textAlign: 'center',
            padding: '20px',
            color: THEME_COLORS.accent,
            fontWeight: 'bold',
          }}
        >
          🎉 ¡Has visto todos los Pokemon disponibles!
        </p>
      )}
    </div>
  );
};