#!/usr/bin/env node
/**
 * validate.js
 * Valida src/data.js antes de publicar.
 * Claude Code lo corre automáticamente antes de cada git push.
 *
 * Uso: node scripts/validate.js
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'src', 'data.js');
let errors = [];
let warnings = [];
let ok = [];

// ── Leer archivo ─────────────────────────────────────────────
let content;
try {
  content = fs.readFileSync(DATA_PATH, 'utf8');
} catch (e) {
  console.error('❌ No se puede leer src/data.js:', e.message);
  process.exit(1);
}

// ── 1. Exports requeridos ────────────────────────────────────
const requiredExports = [
  'proyecto', 'kpis', 'alerta', 'tecnologias',
  'hitosCompletados', 'hitosPendientes', 'riesgos',
  'comunicaciones', 'entregables'
];
requiredExports.forEach(exp => {
  if (content.includes(`export const ${exp}`)) {
    ok.push(`Export '${exp}' presente`);
  } else {
    errors.push(`FALTA export: ${exp}`);
  }
});

// ── 2. Valores de color válidos ──────────────────────────────
const validColors = ['blue', 'amber', 'red', 'green', 'gray'];
const colorMatches = [...content.matchAll(/color:\s*['"](\w+)['"]/g)];
colorMatches.forEach(m => {
  if (!validColors.includes(m[1])) {
    errors.push(`Color inválido: '${m[1]}' — debe ser: ${validColors.join(', ')}`);
  }
});
if (colorMatches.length > 0) ok.push(`${colorMatches.length} valores de color válidos`);

// ── 3. Valores de estado válidos ─────────────────────────────
const validEstados = ['done', 'wip', 'pend', 'risk'];
const estadoMatches = [...content.matchAll(/estado:\s*['"](\w+)['"]/g)];
estadoMatches.forEach(m => {
  if (!validEstados.includes(m[1])) {
    errors.push(`Estado inválido: '${m[1]}' — debe ser: ${validEstados.join(', ')}`);
  }
});
if (estadoMatches.length > 0) ok.push(`${estadoMatches.length} valores de estado válidos`);

// ── 4. Niveles de riesgo válidos ─────────────────────────────
const validNiveles = ['critico', 'medio', 'resuelto'];
const nivelMatches = [...content.matchAll(/nivel:\s*['"](\w+)['"]/g)];
nivelMatches.forEach(m => {
  if (!validNiveles.includes(m[1])) {
    errors.push(`Nivel de riesgo inválido: '${m[1]}' — debe ser: ${validNiveles.join(', ')}`);
  }
});
if (nivelMatches.length > 0) ok.push(`${nivelMatches.length} niveles de riesgo válidos`);

// ── 5. Tipos de comunicación válidos ─────────────────────────
const validTipos = ['hecho', 'pendiente'];
const tipoMatches = [...content.matchAll(/tipo:\s*['"](\w+)['"]/g)];
tipoMatches.forEach(m => {
  if (!validTipos.includes(m[1])) {
    errors.push(`Tipo de comunicación inválido: '${m[1]}' — debe ser: ${validTipos.join(', ')}`);
  }
});
if (tipoMatches.length > 0) ok.push(`${tipoMatches.length} tipos de comunicación válidos`);

// ── 6. Porcentajes entre 0 y 100 ─────────────────────────────
const pctMatches = [...content.matchAll(/pct:\s*(\d+)/g)];
pctMatches.forEach(m => {
  const val = parseInt(m[1]);
  if (val < 0 || val > 100) {
    errors.push(`Porcentaje fuera de rango: ${val} (debe ser 0-100)`);
  }
});
if (pctMatches.length > 0) ok.push(`${pctMatches.length} porcentajes en rango válido`);

// ── 7. Sin datos sensibles ────────────────────────────────────
const sensitive = ['sk-ant-', 'password:', 'api_key:', 'private_key'];
sensitive.forEach(s => {
  if (content.toLowerCase().includes(s)) {
    errors.push(`DATO SENSIBLE encontrado: '${s}' — no debe estar en el código`);
  }
});
ok.push('Sin datos sensibles detectados');

// ── 8. Campo actualizado no vacío ────────────────────────────
if (/actualizado:\s*['"]["']/.test(content)) {
  warnings.push("Campo 'actualizado' está vacío — recuerda poner la fecha de hoy");
} else {
  ok.push("Campo 'actualizado' tiene valor");
}

// ── 9. Al menos 1 KPI definido ───────────────────────────────
const kpiCount = (content.match(/label:/g) || []).length;
if (kpiCount < 4) {
  warnings.push(`Solo ${kpiCount} KPIs definidos — se esperan al menos 4`);
} else {
  ok.push(`${kpiCount} KPIs definidos`);
}

// ── 10. Al menos 1 riesgo definido ──────────────────────────
if (nivelMatches.length === 0) {
  warnings.push('No hay riesgos definidos en el array riesgos[]');
} else {
  ok.push(`${nivelMatches.length} riesgos definidos`);
}

// ── Reporte ───────────────────────────────────────────────────
console.log('\n════════════════════════════════════════');
console.log('  QA Dashboard COLMEX — src/data.js');
console.log('════════════════════════════════════════\n');

ok.forEach(msg => console.log(`  ✅ ${msg}`));

if (warnings.length > 0) {
  console.log('');
  warnings.forEach(msg => console.log(`  ⚠️  ${msg}`));
}

if (errors.length > 0) {
  console.log('');
  errors.forEach(msg => console.log(`  ❌ ${msg}`));
  console.log(`\n  ${errors.length} error(es) encontrado(s). Corrígelos antes de publicar.\n`);
  process.exit(1);
} else {
  console.log(`\n  ✅ Todo correcto — listo para publicar.\n`);
  process.exit(0);
}
