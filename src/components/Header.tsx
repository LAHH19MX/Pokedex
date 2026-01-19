/**
 * Componente encabezado de la aplicación
 * Siguiendo Google TypeScript Style Guide
 */

// ASPECTO 2: Import Organization - Solo externos en este caso
import React from 'react';

import { THEME_COLORS } from '../utils/constants';

// ASPECTO 1: Naming Conventions - PascalCase para componente
// ASPECTO 7: Export Practices - Named export
export const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: THEME_COLORS.primary,
        padding: '24px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `4px solid ${THEME_COLORS.text}`,
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: THEME_COLORS.text,
              borderRadius: '50%',
              border: '3px solid white',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: THEME_COLORS.text,
              transform: 'translateY(-50%)',
            }}
          />
        </div>

        <h1
          style={{
            color: 'white',
            fontSize: '36px',
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          Pokédex TypeScript
        </h1>
      </div>

      <p
        style={{
          color: THEME_COLORS.secondary,
          fontSize: '14px',
          margin: '8px 0 0 0',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        }}
      >
        Explorando la Google TypeScript Style Guide
      </p>
    </header>
  );
};