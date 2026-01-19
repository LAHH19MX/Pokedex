/**
 * Componente indicador de carga
 * Siguiendo Google TypeScript Style Guide
 */

// ASPECTO 2: Import Organization - Solo externos en este caso
import React from 'react';

import { THEME_COLORS } from '../utils/constants';

// ASPECTO 1: Naming Conventions - PascalCase para componente
// ASPECTO 7: Export Practices - Named export
export const LoadingSpinner: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          border: `6px solid ${THEME_COLORS.background}`,
          borderTop: `6px solid ${THEME_COLORS.primary}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <p
        style={{
          color: THEME_COLORS.accent,
          fontSize: '16px',
          fontWeight: 'bold',
          margin: 0,
        }}
      >
        Cargando Pokemon...
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};