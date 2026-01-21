# Pokédex TypeScript - Demostración de Estándares de Codificación

> Proyecto educativo que demuestra la **Google TypeScript Style Guide** mediante ejemplos prácticos con errores intencionales y su corrección usando herramientas de análisis estático.

![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.0.11-646cff)
![ESLint](https://img.shields.io/badge/ESLint-9.39.2-4B32C3)
![Prettier](https://img.shields.io/badge/Prettier-3.2.4-F7B93E)

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Objetivos](#-objetivos)
- [Tecnologías y Herramientas](#-tecnologías-y-herramientas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Errores Intencionales](#-errores-intencionales)
- [Google TypeScript Style Guide](#-google-typescript-style-guide)
- [Instalación](#-instalación)
- [Uso de Herramientas](#-uso-de-herramientas)
- [Flujo de Corrección](#-flujo-de-corrección)
- [Resultados](#-resultados)
- [Comandos Disponibles](#-comandos-disponibles)

---

## Descripción del Proyecto

Este proyecto es una **aplicación web Pokédex** desarrollada con **React + TypeScript + Vite** que consume la [PokeAPI](https://pokeapi.co/). Fue diseñado específicamente para demostrar:

1. **Errores comunes** en proyectos TypeScript
2. **Detección automática** de problemas usando herramientas estáticas
3. **Corrección** mediante buenas prácticas de la **Google TypeScript Style Guide**

### Características de la Aplicación:
- Búsqueda de Pokémon por nombre
- Lista con scroll infinito
- Detalles completos (stats, habilidades, tipos)
- Diseño temático de Pokémon (colores rojo #EE1515 y amarillo #FFCB05)
- Interfaz responsive

---

## Objetivos

### Objetivo General
Demostrar el uso práctico de herramientas de análisis estático para mantener código TypeScript de alta calidad siguiendo estándares de la industria.

### Objetivos Específicos
1. Implementar **24 errores intencionales** en 3 archivos específicos
2. Mantener **12 archivos correctos** siguiendo Google TypeScript Style Guide
3. Detectar errores usando **TypeScript Compiler**, **ESLint** y **Prettier**
4. Corregir automática y manualmente los problemas detectados
5. Documentar el proceso completo de corrección

---

## Tecnologías y Herramientas

### Framework y Librerías
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.2.0 | Framework UI |
| **TypeScript** | 5.3.3 | Tipado estático |
| **Vite** | 5.0.11 | Build tool |
| **Axios** | 1.6.5 | Cliente HTTP |

### Herramientas de Análisis

#### 1️⃣ TypeScript Compiler
**Comando:** `npm run type-check`

**Función:**
- Detecta errores de **tipos de datos**
- Valida uso de `any` implícito
- Identifica accesos inseguros a propiedades

**Errores detectados:** 8 (100% requieren corrección manual)

---

#### 2️⃣ ESLint
**Dependencia:** `eslint@9.39.2`

**Función:**
- Detecta **errores de calidad de código**
- Valida convenciones de nombres
- Identifica código no usado
- Aplica reglas de Google TypeScript Style Guide

**Errores detectados:** 14 (86% auto-corregibles)

**Reglas principales:**
```javascript
{
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'no-console': 'warn'
}
```

---

#### 3️⃣ Prettier
**Dependencia:** `prettier@3.2.4`

**Función:**
- Formatea **código automáticamente**
- Estandariza indentación, espacios, comillas
- Asegura consistencia visual

**Errores detectados:** 4 (100% auto-corregibles)

**Configuración:**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100
}
```

---

## 📁 Estructura del Proyecto
```
pokemon-app/
├── src/
│   ├── components/           
│   │   ├── PokemonCard.tsx
│   │   ├── PokemonList.tsx
│   │   ├── PokemonDetail.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Header.tsx
│   │   └── LoadingSpinner.tsx
│   │
│   ├── services/             
│   │   ├── pokemonApi.ts     
│   │   └── apiClient.ts      
│   │
│   ├── types/                
│   │   ├── ApiResponse.ts    
│   │   ├── PokemonDetail.ts  
│   │   └── Pokemon.ts        
│   │
│   ├── hooks/                # 2 custom hooks (CORRECTOS)
│   │   ├── usePokemonList.ts
│   │   └── usePokemonDetail.ts
│   │
│   ├── utils/                
│   │   ├── constants.ts      
│   │   └── formatters.ts     
│   │
│   ├── App.tsx               
│   ├── main.tsx              
│   └── index.css             
│
├── .eslintrc.cjs             
├── .prettierrc               
├── tsconfig.json             
├── vite.config.ts            
└── package.json
```

**Total:** 15 archivos de código

## 📚 Google TypeScript Style Guide

El proyecto demuestra **8 aspectos destacados** de la guía oficial de Google:

### 1️⃣ Naming Conventions
```typescript
// ✅ CORRECTO
const pokemonList = [];           // camelCase para variables
function getPokemon() {}          // camelCase para funciones
interface PokemonData {}          // PascalCase para interfaces
const API_BASE_URL = 'https://'; // UPPER_CASE para constantes

// ❌ INCORRECTO (error intencional)
interface pokemon_basic {}        // snake_case - NO usar
```

### 2️⃣ Import Organization
```typescript
// ✅ CORRECTO: Externos primero, luego internos
import React from 'react';
import axios from 'axios';

import { PokemonCard } from './components/PokemonCard';
import { THEME_COLORS } from './utils/constants';
```

### 3️⃣ Type Annotations
```typescript
// ✅ CORRECTO: Tipos explícitos
export const fetchPokemon = async (id: number): Promise<Pokemon> => {
  // ...
};

// ❌ INCORRECTO (error intencional)
export const get = async (endpoint, params?) => {
  // any implícito
};
```

### 4️⃣ Const vs Let
```typescript
// ✅ CORRECTO
const API_URL = 'https://pokeapi.co/api/v2';
let count = 0;

// ❌ INCORRECTO (error intencional)
var url = `${API_URL}/pokemon`; // NUNCA usar var
```

### 5️⃣ Array/Object Types
```typescript
// ✅ CORRECTO
const pokemons: Pokemon[] = [];
const types: PokemonType[] = [];

// ❌ EVITAR
const pokemons: Array<Pokemon> = [];
```

### 6️⃣ Optional Chaining
```typescript
// ✅ CORRECTO: Acceso seguro
const message = error.response?.data?.message || 'Error desconocido';

// ❌ INCORRECTO (error intencional)
const message = error.response.data.message; // Puede causar crash
```

### 7️⃣ Export Practices
```typescript
// ✅ CORRECTO: Named exports
export const PokemonCard = () => { /* ... */ };
export const usePokemonList = () => { /* ... */ };

// ❌ EVITAR: Default exports
export default PokemonCard;
```

### 8️⃣ File Organization
```
✅ CORRECTO: Un módulo/componente por archivo
src/components/PokemonCard.tsx    → Solo componente PokemonCard
src/hooks/usePokemonList.ts       → Solo hook usePokemonList
src/types/Pokemon.ts              → Solo tipos de Pokemon
```

---

## 🚀 Instalación

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/pokemon-typescript-standards.git
cd pokemon-typescript-standards
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Verificar instalación**
```bash
npm run type-check
npm run lint
npm run format:check
```

---

## 🔧 Uso de Herramientas

### TypeScript Compiler

**Detectar errores de tipos:**
```bash
npm run type-check
```

**Salida esperada (con errores):**
```
src/services/apiClient.ts:10:28 - error TS7006: Parameter 'endpoint' implicitly has an 'any' type.
src/types/Pokemon.ts:13:6 - error TS2322: Type 'any' is not assignable to type 'never'.
...
Found 8 errors.
```

---

### ESLint

**Ver todos los errores:**
```bash
npm run lint
```

**Corregir automáticamente:**
```bash
npm run lint:fix
```

**Ejemplo de corrección automática:**
- ✅ Elimina imports no usados
- ✅ Convierte `var` → `const`
- ✅ Elimina variables no usadas
- ✅ Elimina/comenta `console.log`

---

### Prettier

**Verificar formato:**
```bash
npm run format:check
```

**Formatear todos los archivos:**
```bash
npm run format
```

**Ejemplo de corrección:**
```typescript
// ANTES
import{POKEMON_COLORS}from'./constants';

// DESPUÉS (Prettier)
import { POKEMON_COLORS } from './constants';
```

---

## 🔄 Flujo de Corrección

### Paso 1: Formatear código (Prettier)
```bash
npm run format
```
**Resultado:** 4/4 errores de formato corregidos ✅

### Paso 2: Corregir código (ESLint)
```bash
npm run lint:fix
```
**Resultado:** 12/14 errores de código corregidos ✅

### Paso 3: Verificar tipos (TypeScript)
```bash
npm run type-check
```
**Resultado:** Muestra 8 errores que requieren corrección manual ⚠️

### Paso 4: Corrección manual
Editar archivos para corregir:
- Añadir tipos explícitos
- Usar optional chaining (`?.`)
- Corregir tipos de datos
- Cambiar nombres a PascalCase

### Paso 5: Verificación final
```bash
npm run type-check && npm run lint && npm run format:check
```
---

## 📝 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Preview de build de producción |
| `npm run type-check` | Verifica tipos con TypeScript |
| `npm run lint` | Analiza código con ESLint |
| `npm run lint:fix` | Corrige errores de ESLint automáticamente |
| `npm run format` | Formatea código con Prettier |
| `npm run format:check` | Verifica formato sin modificar |

---

## Lecciones Aprendidas

### ✅ Buenas Prácticas Demostradas

1. **Uso de herramientas de análisis estático** previene errores en producción
2. **Prettier** garantiza consistencia visual sin discusiones de estilo
3. **ESLint** detecta bugs potenciales antes de runtime
4. **TypeScript** previene errores de tipos en tiempo de compilación
5. **Google Style Guide** provee estándares claros y probados

### ⚠️ Errores Comunes a Evitar

1. ❌ No usar `any` - elimina beneficios de TypeScript
2. ❌ No verificar valores nulos - causa crashes
3. ❌ Usar `var` - scope confuso y errores sutiles
4. ❌ Dejar `console.log` - expone información sensible
5. ❌ Ignorar convenciones de nombres - dificulta lectura

---

## Referencias

- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)

---

<div align="center">

Hecho con ❤️ y TypeScript

</div>