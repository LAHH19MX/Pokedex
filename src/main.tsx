/**
 * Punto de entrada principal de la aplicación
 * Siguiendo Google TypeScript Style Guide
 */

// ASPECTO 2: Import Organization - Externos primero, luego internos
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';

// ASPECTO 4: Const vs Let - Usar const para obtener el elemento root
// ASPECTO 3: Type Annotations - Tipo explícito para el elemento HTML
const rootElement = document.getElementById('root');

// ASPECTO 6: Optional Chaining - Verificación de elemento antes de renderizar
if (!rootElement) {
  throw new Error('No se encontró el elemento root en el DOM');
}

// ASPECTO 4: Const vs Let - Usar const para la instancia de root
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);