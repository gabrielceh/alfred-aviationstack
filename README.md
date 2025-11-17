# Alfred Airport Search — Prueba Técnica

Aplicación desarrollada como prueba técnica para Alfred, construida con Next.js, TailwindCSS, Zustand, TanStack Query, y siguiendo una Arquitectura Hexagonal completamente modular.

Permite buscar aeropuertos por nombre o código IATA, visualizar un listado de aeropuertos, ver el detalle de un aeropuerto, incluyendo su ubicación en el mapa utilizando Leaflet, y mantener un historial de búsqueda gestionado desde el frontend.

---

## Setup del proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/gabrielceh/alfred-aviationstack.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Agrega las variables de entorno en un archivo `.env`:

```env
SERVER_URL = http://localhost:PUERTO
API_URL = "https://api.aviationstack.com/v1"
API_KEY = "your_api_key"
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

---

## Tecnologías principales

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Zustand — Estado global (incluye historial de búsqueda)
- TanStack Query — Data fetching en componentes cliente
- Leaflet + React Leaflet — Mapas
- Arquitectura Hexagonal
- Jest + React Testing Library — Pruebas unitarias y de componentes

---

## Arquitectura y estructura del proyecto

El proyecto implementa Arquitectura Hexagonal para mantener una separación limpia entre:

Domain → Interfaces, entidades, lógica de negocio

Application → Casos de uso (aplicación)

Infrastructure → Datasources, mappers, repositorios concretos

Presentation → Componentes, páginas, hooks, layouts

---

## Funcionalidades

### Búsqueda de aeropuertos

- Búsqueda por nombre o código IATA
- Resultados con paginación
- Historial de búsqueda usando Zustand

### Listado de aeropuertos

- Visualización completa de aeropuertos obtenidos desde la API
- Adaptado a UI con TailwindCSS

### Detalle del aeropuerto

- Vista con información detallada
- Mapa interactivo usando Leaflet

### Arquitectura Hexagonal

- Separación clara entre dominio, infraestructura y presentación
- Interfaces en dominio para aislar dependencias
- Repositorios inyectados en casos de uso

### Testing

- Pruebas con Jest + React Testing Library
- Tests para componentes.

---

## Scripts útiles

```bash
npm run dev         # Modo desarrollo
npm run build       # Build producción
npm run start       # Servidor de producción
npm run test        # Ejecutar tests con Jest
```

---

## Estilos

- Implementado con TailwindCSS y module css
- Tema centralizado en theme/
- Componentes desacoplados en modules/*/presentation/components
