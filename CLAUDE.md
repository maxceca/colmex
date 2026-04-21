# Proyecto: Dashboard COLMEX — CEN Systems

## Contexto
Dashboard de seguimiento del proyecto PRY-260106-06245 — Renovación de
Infraestructura de Red WLAN + ISE/SNA para El Colegio de México A.C.
Contrato: COLMEX-LPN-ADQ-11-25. PM: Alan Cerón Cardonne.

## Regla más importante
**El único archivo de datos es `src/data.js`.**
Todos los cambios de contenido van ahí. Nunca edites componentes React
(`App.jsx`, `ui.jsx`) a menos que se pida explícitamente un cambio de UI.

## Flujo completo de trabajo

Cuando Alan diga "actualiza el dashboard" o "publica", sigue estos pasos:

### 1. Validar antes de publicar
Siempre corre esta validación antes de hacer commit:
```bash
node scripts/validate.js
```
Si hay errores, corrígelos en `src/data.js` y vuelve a validar.
Si pasa, continúa al paso 2.

### 2. Publicar a GitHub
```bash
git add src/data.js
git commit -m "dashboard: actualización [FECHA HOY]"
git push origin main
```
GitHub Actions compilará y publicará automáticamente en ~2 minutos.
URL: https://maxceca.github.io/colmex

### 3. Confirmar
Después del push dile a Alan:
"✅ Publicado. En ~2 minutos estará en https://maxceca.github.io/colmex"

## Comandos disponibles
```bash
npm start                    # desarrollo local
npm run build                # compilar
node scripts/validate.js     # validar datos antes de publicar
python scripts/update_from_minuta.py minuta.txt  # actualizar desde minuta
git add src/data.js && git commit -m "msg" && git push  # publicar
```

## Qué puedes pedirle a Claude Code

- "Actualiza el dashboard con esta minuta" → pega el texto
- "El avance de ISE subió a 95%"
- "Agrega este riesgo: [descripción]"
- "Marca el hito de Site Survey como completado"
- "Cambia la fecha de actualización a hoy"
- "Valida y publica"
- "Publica los cambios"

## Esquema de src/data.js

### proyecto
```js
export const proyecto = {
  nombre, id, contrato, pm, email, actualizado, sesion
}
```

### kpis — 4 tarjetas
```js
// color: "blue" | "amber" | "red" | "green"
{ label, valor, sufijo, sub, color }
```

### alerta
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

## Contexto técnico (al 17/04/2026)
- 104 APs instalados de 166 · 62 pendientes
- ISE 3.4 en HA (2 nodos SNS-3815) — BUG CSCwn62873 activo con WS2025
- 802.1X validado en maqueta: Windows, Linux, teléfonos IP
- Pendiente: integración AD, WLAN con ISE, DNA Center, SNA
- Sesiones semanales: miércoles 11:00 hrs WebEx
