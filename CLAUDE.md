# Proyecto: Dashboard COLMEX — CEN Systems

## Contexto
Dashboard de seguimiento del proyecto PRY-260106-06245 — Renovación de
Infraestructura de Red WLAN + ISE/SNA para El Colegio de México A.C.
Contrato: COLMEX-LPN-ADQ-11-25. PM: Alan Cerón Cardonne.

## Regla más importante
**El único archivo de datos es `src/data.js`.**
Todos los cambios de contenido van ahí. Nunca edites componentes React
(`App.jsx`, `ui.jsx`) a menos que se pida explícitamente un cambio de UI.

## Estructura del proyecto
```
src/
├── data.js          ← ÚNICO archivo que se edita para actualizar datos
├── App.jsx          ← componente principal (no tocar)
├── index.css        ← estilos (no tocar)
├── logo.png         ← logo Censys transparente (no tocar)
└── components/
    └── ui.jsx       ← componentes reutilizables (no tocar)
.github/
└── workflows/
    └── deploy.yml   ← CI/CD automático en cada push a main
scripts/
└── update_from_minuta.py ← script para actualizar desde minutas
```

## Comandos disponibles
```bash
npm start          # desarrollo local en localhost:3000
npm run build      # compilar para producción
npm run deploy     # build + push a gh-pages (manual)
git add . && git commit -m "update" && git push  # dispara CI/CD automático
```

## Cómo actualizar el dashboard

### Desde una minuta o transcript (lo más común)
Pégame el texto de la minuta o transcript y dime:
> "Actualiza el dashboard con esta minuta"

Yo extraeré los datos relevantes y actualizaré `src/data.js` automáticamente.

### Cambios puntuales
Ejemplos de lo que puedes pedirme:
- "El avance de ISE subió a 95%"
- "Agrega este riesgo: [descripción]"
- "La próxima sesión es el miércoles 29 a las 11"
- "Marca el hito de Site Survey como completado"
- "Cambia la fecha de actualización a hoy"
- "Publica los cambios" → corro `git add . && git commit && git push`

### Publicar a GitHub Pages
Después de cualquier cambio, solo di:
> "Publica" o "Haz deploy"

Yo corro:
```bash
git add src/data.js
git commit -m "dashboard: update [fecha]"
git push origin main
```
GitHub Actions compila y publica automáticamente en ~2 minutos.

## Esquema de data.js (referencia rápida)

### proyecto — datos generales
```js
export const proyecto = {
  nombre, id, contrato, pm, email, actualizado, sesion
}
```

### kpis — 4 tarjetas numéricas
```js
// color: "blue" | "amber" | "red" | "green"
{ label, valor, sufijo, sub, color }
```

### alerta — banner rojo superior
```js
{ activa: true/false, titulo, badge, descripcion }
```

### tecnologias — barras de progreso
```js
// color: "green" | "amber" | "blue" | "red" | "gray"
{ titulo, barras: [{ label, pct: 0-100, color }] }
```

### hitosCompletados / hitosPendientes
```js
// estado: "done" | "wip" | "pend" | "risk"
{ texto, fecha, estado }
```

### riesgos
```js
// nivel: "critico" | "medio" | "resuelto"
{ nivel, titulo, badge?, descripcion }
```

### comunicaciones
```js
// tipo: "hecho" | "pendiente"
{ tipo, quien, que, cuando }
```

### entregables
```js
{ completados: [], enProceso: [], pendientes: [] }
```

## Equipo CEN Systems
- PM: Alan Cerón Cardonne (AC) — aceron@censys.com.mx
- Ing. WLAN/DNA: Andrés González (AG) — agonzalez@censystems.com.mx
- Ing. ISE/SNA: Víctor Hugo Quintanar (VQ) — vquintanar@censystems.com.mx
- Ing. 9300: Sergio Roldán (SR) — sroldan@censystems.com.mx
- AM: Aldo Silva (AS) — asilva@censystems.com.mx

## Equipo COLMEX
- Ing. Red: Luis Enrique Yañez (LEY) — leyanez@colmex.mx ext.3285
- Jefe Área: Facundo Sarmiento (FCS) — fsarmiento@colmex.mx
- Logística: Uriel Pérez (UP) — uperez@colmex.mx ext.3266

## Contexto técnico actual (al 17/04/2026)
- 104 APs instalados de 166 · 62 pendientes
- ISE 3.4 en HA (2 nodos SNS-3815) — BUG CSCwn62873 activo con WS2025
- 802.1X validado en maqueta: Windows, Linux, teléfonos IP
- Pendiente: integración AD, WLAN con ISE, DNA Center, SNA
- Sesiones semanales: miércoles 11:00 hrs WebEx
