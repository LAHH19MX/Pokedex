/**
 * Componente barra de búsqueda de Pokemon
 * Siguiendo Google TypeScript Style Guide
 */

// ASPECTO 2: Import Organization - Externos primero, luego internos
import React, { useState } from 'react';

import { THEME_COLORS } from '../utils/constants';

// ASPECTO 2: Interface para props del componente
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

// ASPECTO 1: Naming Conventions - PascalCase para componente
// ASPECTO 7: Export Practices - Named export
export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Buscar Pokemon...' 
}) => {
  // ASPECTO 4: Const vs Let - Usar const para estado
  const [searchTerm, setSearchTerm] = useState<string>('');

  // ASPECTO 4: Const vs Let - Usar const para funciones
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim().toLowerCase());
      setSearchTerm('');
    }
  };

  // ASPECTO 4: Const vs Let - Usar const para funciones
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '12px',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 20px',
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          flex: 1,
          padding: '14px 20px',
          fontSize: '16px',
          border: `2px solid ${THEME_COLORS.primary}`,
          borderRadius: '30px',
          outline: 'none',
          transition: 'all 0.3s ease',
          backgroundColor: THEME_COLORS.cardBg,
          color: THEME_COLORS.text,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = THEME_COLORS.accent;
          e.currentTarget.style.boxShadow = `0 0 0 3px rgba(59, 76, 202, 0.1)`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = THEME_COLORS.primary;
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
      <button
        type="submit"
        style={{
          padding: '14px 32px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: THEME_COLORS.primary,
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(238, 21, 21, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#CC0000';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(238, 21, 21, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = THEME_COLORS.primary;
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(238, 21, 21, 0.3)';
        }}
      >
        Buscar
      </button>
    </form>
  );
};