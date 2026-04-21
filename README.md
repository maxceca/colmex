# Dashboard PRY-260106-06245 — CEN Systems / COLMEX

Dashboard de seguimiento del proyecto de Renovación WLAN + ISE/SNA para El Colegio de México.

## Cómo actualizar el dashboard

**Solo edita un archivo:** `src/data.js`

Ahí están todos los datos: KPIs, avances, riesgos, hitos y comunicaciones.
No necesitas tocar ningún componente de React.

## Cómo correr en local

```bash
npm install
npm start
```

## Cómo publicar en GitHub Pages

1. Agrega en `package.json` la línea `"homepage"`:
```json
"homepage": "https://TU-USUARIO.github.io/NOMBRE-REPO"
```

2. Instala y despliega:
```bash
npm install
npm run deploy
```

Esto construye el proyecto y lo sube automáticamente a la rama `gh-pages`.

## Estructura del proyecto

```
src/
├── data.js          ← EDITA AQUÍ para actualizar el dashboard
├── App.jsx          ← componente principal (no necesitas tocarlo)
├── index.css        ← estilos con colores corporativos CEN Systems
├── logo.png         ← logo Censys con fondo transparente
└── components/
    └── ui.jsx       ← componentes reutilizables (KpiCard, ProgBar, etc.)
```

## Tecnologías

- React 18
- Create React App
- CSS variables (sin dependencias de UI externas)
- gh-pages para publicación automática
