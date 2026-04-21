// ─────────────────────────────────────────────────────────────
//  DATOS DEL PROYECTO — edita este archivo para actualizar
//  el dashboard sin tocar ningún componente.
// ─────────────────────────────────────────────────────────────

export const proyecto = {
  nombre: "El Colegio de México A.C.",
  id: "PRY-260106-06245",
  contrato: "COLMEX-LPN-ADQ-11-25",
  pm: "Alan Cerón Cardonne",
  email: "aceron@censys.com.mx",
  actualizado: "17 de abril de 2026",
  sesion: "Minuta 04 incluida · Sesión 17/04/2026",
};

export const kpis = [
  { label: "APs instalados", valor: "104", sufijo: "/ 166", sub: "63% completado · 62 APs pendientes", color: "blue" },
  { label: "ISE — red cableada", valor: "85%", sub: "802.1X validado · integración AD bloqueada", color: "amber" },
  { label: "Riesgos activos", valor: "3", sub: "1 crítico · 2 medios", color: "red" },
  { label: "Avance general", valor: "52%", sub: "ISE fase 1 + WLAN en progreso", color: "amber" },
];

export const alerta = {
  activa: true,
  titulo: "BUG CSCwn62873: ISE 3.4 no integra con Active Directory en Windows Server 2025",
  badge: "NUEVO 17/04",
  descripcion:
    'Al realizar el join de ISE 3.4 contra el Domain Controller con WS2025, se presenta error "acceso denegado". El workaround documentado por Cisco (FN74321) viola políticas de seguridad internas del COLMEX — descartado. Caso TAC activo. Alternativas: (A) DC secundario en WS2019/2022, (B) migrar ISE a v3.5 (no recomendada). Impacto: bloquea 802.1X productivo y fase WLAN. Responsable: Víctor Quintanar / Cisco TAC.',
};

export const tecnologias = [
  {
    titulo: "Red WLAN — Meraki (104 APs en producción)",
    barras: [
      { label: "Instalación de APs (104/166)", pct: 63, color: "blue" },
      { label: "Configuración base Meraki", pct: 90, color: "green" },
      { label: "Site Survey — análisis final", pct: 70, color: "amber" },
      { label: "Matriz de pruebas WLAN", pct: 20, color: "amber" },
      { label: "6 GHz / WPA3 / Transition Mode", pct: 10, color: "gray" },
      { label: "Migración Core 9500X", pct: 30, color: "amber" },
    ],
  },
  {
    titulo: "Seguridad — ISE / SNA / DNA Center",
    barras: [
      { label: "ISE hardware + alta disponibilidad", pct: 100, color: "green" },
      { label: "Certificados + portal de prueba", pct: 90, color: "green" },
      { label: "802.1X cableado en maqueta", pct: 85, color: "amber" },
      { label: "Integración Active Directory", pct: 30, color: "red" },
      { label: "ISE + WLAN Meraki (MAC / Portal)", pct: 5, color: "gray" },
      { label: "DNA Center — deploy virtual", pct: 20, color: "gray" },
      { label: "SNA — Secure Network Analytics", pct: 0, color: "gray" },
    ],
  },
];

// estado: "done" | "wip" | "pend" | "risk"
export const hitosCompletados = [
  { texto: "Entrega física de equipamiento (3 remesas)", fecha: "Cerrado", estado: "done" },
  { texto: "ISE en Alta Disponibilidad — 2 nodos SNS-3815", fecha: "Cerrado", estado: "done" },
  { texto: "104 APs instalados y operando en producción", fecha: "Cerrado", estado: "done" },
  { texto: "Licencias Meraki — 166 APs cubiertos", fecha: "Cerrado", estado: "done" },
  { texto: "Certificados wildcard ISE + portales de prueba", fecha: "17/04", estado: "done" },
  { texto: "802.1X exitoso: Windows, Linux, teléfonos IP", fecha: "17/04", estado: "done" },
  { texto: "Documentos FO-SAD (cartas, plan, fichas)", fecha: "Cerrado", estado: "done" },
];

export const hitosPendientes = [
  { texto: "Integración ISE — Active Directory (BUG CSCwn62873)", fecha: "Riesgo", estado: "risk" },
  { texto: "Pruebas 802.1X completas (Mac + todos escenarios)", fecha: "17/04", estado: "wip" },
  { texto: "Site Survey — reporte final", fecha: "Sem 21/04", estado: "wip" },
  { texto: "Memoria Técnica ISE (entregas parciales)", fecha: "En curso", estado: "wip" },
  { texto: "62 APs restantes por instalar", fecha: "Pendiente", estado: "pend" },
  { texto: "ISE integrado con red inalámbrica Meraki", fecha: "Pendiente", estado: "pend" },
  { texto: "Migración Core 9500X (adaptadores pendientes)", fecha: "Pendiente", estado: "pend" },
  { texto: "Deploy DNA Center + SNA", fecha: "Pendiente", estado: "pend" },
];

// nivel: "critico" | "medio" | "resuelto"
export const riesgos = [
  {
    nivel: "critico",
    titulo: "BUG CSCwn62873 — ISE 3.4 + Active Directory en Windows Server 2025",
    badge: "NUEVO 17/04",
    descripcion:
      'Join de ISE contra DC con WS2025 genera error "acceso denegado". Workaround de Cisco (FN74321) viola políticas de seguridad internas — descartado. Caso TAC activo. Alternativas: DC secundario WS2019/22 o migrar ISE a v3.5. Impacto: bloquea 802.1X productivo y fase WLAN. Resp: VQ / Cisco TAC.',
  },
  {
    nivel: "medio",
    titulo: "Migración Core 9500X — bloqueada por falta de adaptadores",
    descripcion:
      "Adaptadores de red pendientes de entrega. Facundo Sarmiento estima entrega 17–20/04/2026. Sin ellos no puede continuarse la migración del core de red.",
  },
  {
    nivel: "medio",
    titulo: "Site Survey — retraso en entrega de reporte final",
    descripcion:
      "Análisis en proceso por José + Andrés. Sin el resultado no se puede planificar la instalación definitiva de los 62 APs restantes.",
  },
  {
    nivel: "resuelto",
    titulo: "Licencias Meraki — resuelto",
    descripcion:
      "Las 166 licencias están activas y correctamente asignadas. Problema de 5 APs sin cobertura resuelto previamente.",
  },
];

// tipo: "hecho" | "pendiente" | "proceso"
export const comunicaciones = [
  { tipo: "hecho", quien: "Víctor Quintanar → equipo COLMEX", que: "Correo 14/04: resumen sesión ISE — certificados wildcard, portales, credenciales CIMC, BUG AD con WS2025. Visita en sitio jueves 16/04.", cuando: "14/04 ✓" },
  { tipo: "hecho", quien: "Sesión semanal de seguimiento — Minuta 04", que: "17/04 · 11:00 hrs · WebEx. Temas: avances 802.1X, riesgo BUG AD, licenciamiento ISE, matriz integral, Memoria Técnica, adaptadores Core.", cuando: "17/04 ✓" },
  { tipo: "hecho", quien: "Sesión técnica ISE — pruebas 802.1X múltiples escenarios", que: "17/04 · 12:00 hrs · ~3 hrs. Escenarios: Mac, teléfono, computadora simultáneos. Captura evidencia para Memoria Técnica.", cuando: "17/04" },
  { tipo: "pendiente", quien: "Escalación Cisco TAC — BUG CSCwn62873", que: "Seguimiento del caso activo para obtener resolución oficial o ruta de migración recomendada antes de aplicar workaround.", cuando: "Sem 21/04" },
  { tipo: "pendiente", quien: "Próxima sesión semanal de seguimiento", que: "Miércoles 22/04/2026 · 11:00 hrs · WebEx. Agenda: resolución BUG AD, pruebas WLAN, adaptadores Core, Site Survey, Memoria Técnica.", cuando: "22/04" },
];

export const entregables = {
  completados: [
    "Entrega física equipamiento (3 remesas)",
    "Documento soporte Cisco / SmartNet",
    "Kit de bienvenida y guía de soporte",
    "Cartas de aceptación FO-SAD-5.4",
    "Catálogo fichas técnicas (12 equipos)",
    "Plan de comunicación FO-SAD-5.6",
    "Minutas 01–04 generadas",
  ],
  enProceso: [
    "Memoria Técnica ISE/SNA (parcial)",
    "Site Survey — reporte final",
    "Reporte mensual de tickets",
  ],
  pendientes: [
    "Acuerdo de confidencialidad",
    "Plan de trabajo detallado",
    "4 cursos Cisco oficiales",
    "Documento diseño técnico HLD",
  ],
};
