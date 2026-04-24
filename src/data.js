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
  actualizado: "24 de abril de 2026",
  sesion: "Sesión 24/04/2026 · Revisión SOW y seguimiento",
};

export const kpis = [
  { label: "APs instalados", valor: "109", sufijo: "/ 166", sub: "66% completado · 57 APs pendientes · 4 alarmados por cableado", color: "blue" },
  { label: "SSIDs / WLAN", valor: "85%", sub: "80–90% avanzado · solo 1 SSID pendiente (estudiantes + personal)", color: "amber" },
  { label: "Riesgos activos", valor: "3", sub: "1 crítico (AD) · 2 medios (SFPs, Site Survey)", color: "red" },
  { label: "Avance general", valor: "64%", sub: "cCenter desplegado · ruta AD definida · pendiente fecha compromiso DC 2022", color: "amber" },
];

export const alerta = {
  activa: true,
  titulo: "BUG CSCwn62873: ISE 3.4 no integra con Active Directory en Windows Server 2025",
  badge: "Ruta definida · Fecha compromiso ≤ vie 01/05",
  descripcion:
    'Tras revisión con fabricante, se priorizan 2 rutas: (1) desplegar DC adicional con Windows Server 2022 — ruta preferida, COLMEX se compromete a tener fecha de habilitación a más tardar el viernes 01/05/2026; (2) integración vía LDAP (sin AD join) — ruta alterna, pero se pierde monitoreo constante y atributos específicos de AD. La 3ra alternativa (upgrade ISE) queda descartada por falta de garantía del fabricante. Caso TAC sigue en seguimiento. Resp: Víctor Quintanar / Facundo Sarmiento.',
};

export const tecnologias = [
  {
    titulo: "Red WLAN — Meraki (109 APs en producción)",
    barras: [
      { label: "Instalación de APs (109/166)", pct: 66, color: "blue" },
      { label: "Configuración base Meraki", pct: 90, color: "green" },
      { label: "SSIDs migrados / validados (80–90%)", pct: 85, color: "green" },
      { label: "SSIDs de validación configurados (LAB-VISIT, Test1, wilinkr20)", pct: 100, color: "green" },
      { label: "Pruebas portal cautivo + MAC filtering", pct: 80, color: "green" },
      { label: "SSID pendiente — estudiantes + personal (user/pass + 2do factor)", pct: 20, color: "amber" },
      { label: "Site Survey — análisis final", pct: 70, color: "amber" },
      { label: "Nuevos SSIDs CEN (falta VLANs COLMEX)", pct: 10, color: "gray" },
      { label: "6 GHz / WPA3 / Transition Mode", pct: 10, color: "gray" },
    ],
  },
  {
    titulo: "Seguridad — ISE / SNA",
    barras: [
      { label: "ISE hardware + alta disponibilidad", pct: 100, color: "green" },
      { label: "Certificados + portal de prueba", pct: 90, color: "green" },
      { label: "802.1X cableado en maqueta", pct: 85, color: "amber" },
      { label: "Ruta integración AD definida (DC 2022 o LDAP)", pct: 50, color: "amber" },
      { label: "Integración productiva AD/LDAP", pct: 0, color: "red" },
      { label: "Hardening de políticas / protocolos (pend 1ra visita)", pct: 0, color: "gray" },
      { label: "ISE + WLAN Meraki (MAC / Portal)", pct: 20, color: "amber" },
      { label: "SNA — Secure Network Analytics", pct: 0, color: "gray" },
    ],
  },
  {
    titulo: "LAN Switching — Catalyst 9500X + Catalyst Center",
    barras: [
      { label: "Catalyst Center — setup + licencia", pct: 100, color: "green" },
      { label: "9500X del proyecto integrados a cCenter", pct: 100, color: "green" },
      { label: "Stacks COLMEX integrados a cCenter", pct: 100, color: "green" },
      { label: "Preconfiguración 9500X capa 2", pct: 100, color: "green" },
      { label: "Migración capa 2 (sáb 25/04)", pct: 0, color: "amber" },
      { label: "Migración capa 3 (faltan 5 SFPs 1 GB)", pct: 0, color: "red" },
      { label: "Certificado web admin + servidor respaldo", pct: 0, color: "gray" },
    ],
  },
];

// estado: "done" | "wip" | "pend" | "risk"
export const hitosCompletados = [
  { texto: "Entrega física de equipamiento (3 remesas)", fecha: "Cerrado", estado: "done" },
  { texto: "ISE en Alta Disponibilidad — 2 nodos SNS-3815", fecha: "Cerrado", estado: "done" },
  { texto: "109 APs instalados y operando en producción", fecha: "23/04", estado: "done" },
  { texto: "Licencias Meraki — 166 APs cubiertos", fecha: "Cerrado", estado: "done" },
  { texto: "Certificados wildcard ISE + portales de prueba", fecha: "17/04", estado: "done" },
  { texto: "802.1X exitoso: Windows, Linux, teléfonos IP", fecha: "17/04", estado: "done" },
  { texto: "Acuerdo de confidencialidad firmado", fecha: "Cerrado", estado: "done" },
  { texto: "Catalyst Center — setup + licenciamiento", fecha: "22/04", estado: "done" },
  { texto: "9500X del proyecto integrados a Catalyst Center", fecha: "22/04", estado: "done" },
  { texto: "Stacks COLMEX integrados a Catalyst Center", fecha: "22/04", estado: "done" },
  { texto: "Preconfiguración 9500X para migración capa 2", fecha: "22/04", estado: "done" },
  { texto: "Pruebas SSIDs — portal cautivo + MAC filtering", fecha: "23/04", estado: "done" },
  { texto: "3 SSIDs migrados a nueva infraestructura", fecha: "23/04", estado: "done" },
  { texto: "SSID LAB-VISIT — portal de Invitados en Cisco ISE + Meraki", fecha: "23/04", estado: "done" },
  { texto: "SSID Test1 — autenticación MAB + asignación dinámica de VLAN", fecha: "23/04", estado: "done" },
  { texto: "SSID wilinkr20 — autenticación 802.1X + MAB", fecha: "23/04", estado: "done" },
  { texto: "Memoria Técnica ISE/SNA v1 liberada al cliente", fecha: "23/04", estado: "done" },
  { texto: "Revisión SOW y ruta AD definida con fabricante", fecha: "24/04", estado: "done" },
  { texto: "Avance WLAN 80–90% validado con cliente", fecha: "24/04", estado: "done" },
  { texto: "Propuesta comercial — entregada (José Bello)", fecha: "24/04", estado: "done" },
  { texto: "Documentos FO-SAD (cartas, plan, fichas)", fecha: "Cerrado", estado: "done" },
];

export const hitosPendientes = [
  { texto: "Integración ISE–AD — COLMEX habilita DC Windows Server 2022", fecha: "≤ Vie 01/05", estado: "risk" },
  { texto: "Plan B: integración vía LDAP si DC 2022 no está a tiempo", fecha: "≤ 01/05", estado: "pend" },
  { texto: "Migración capa 2 — 9500X", fecha: "Sáb 25/04", estado: "wip" },
  { texto: "Migración capa 3 — bloqueada por 5 SFPs 1 GB faltantes", fecha: "Riesgo", estado: "risk" },
  { texto: "1ra visita VQ — evidencias + hardening + Memoria Técnica", fecha: "Sem 28/04", estado: "wip" },
  { texto: "2da visita VQ — integración AD/LDAP + último SSID + NRFU", fecha: "Sem 05/05", estado: "pend" },
  { texto: "SSID pendiente — estudiantes + personal (user/pass + 2do factor hostname/MAC)", fecha: "Por definir", estado: "wip" },
  { texto: "Site Survey — reporte final", fecha: "Sem 28/04", estado: "wip" },
  { texto: "Memoria Técnica — apartado NRFU (anexando pruebas)", fecha: "En curso", estado: "wip" },
  { texto: "4 APs alarmados por cableado — revisión", fecha: "En curso", estado: "wip" },
  { texto: "57 APs restantes por instalar", fecha: "Pendiente", estado: "pend" },
  { texto: "Migración SSIDs faltantes (MAC filter) — espera lista MACs del cliente", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "Nuevos SSIDs CEN — esperando nombres + VLANs onboarding (COLMEX)", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "Certificado web admin + servidor respaldo cCenter", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "ISE integrado con red inalámbrica Meraki", fecha: "Pendiente", estado: "pend" },
  { texto: "Deploy SNA — Secure Network Analytics", fecha: "Pendiente", estado: "pend" },
];

// nivel: "critico" | "medio" | "resuelto"
export const riesgos = [
  {
    nivel: "critico",
    titulo: "BUG CSCwn62873 — Integración ISE 3.4 con Active Directory en WS2025",
    badge: "Compromiso cliente ≤ 01/05",
    descripcion:
      "Tras revisión con Cisco se definen 2 rutas: (1) DC adicional con Windows Server 2022 — ruta preferida, COLMEX se compromete a habilitarlo a más tardar el viernes 01/05/2026; (2) integración por LDAP — alterna, se pierde monitoreo constante y atributos específicos de AD. 3ra alternativa (upgrade ISE) descartada por falta de garantía. Caso TAC continúa. Si no hay DC 2022 a tiempo, se ejecuta plan B (LDAP). Impacto: bloquea 802.1X productivo y fase WLAN final. Resp: VQ / FCS / Cisco TAC.",
  },
  {
    nivel: "medio",
    titulo: "Migración capa 3 bloqueada — faltan 5 SFPs de 1 GB",
    badge: "NUEVO 22/04",
    descripcion:
      "Los firewall usan interfaces de 1 GB y solo quedan 9 de los 11 SFPs adquiridos por el colegio. Faltan 5 SFPs de 1 GB adicionales para completar la migración de capa 3. Fecha de migración capa 3 por definir hasta resolver el faltante.",
  },
  {
    nivel: "medio",
    titulo: "Site Survey — retraso en entrega de reporte final",
    descripcion:
      "Análisis en proceso por José + Andrés. Sin el resultado no se puede planificar la instalación definitiva de los 57 APs restantes.",
  },
  {
    nivel: "resuelto",
    titulo: "Migración Core 9500X — preconfiguración completada",
    descripcion:
      "Los switches 9500X quedaron preconfigurados para capa 2 el 22/04. Migración programada para el sábado 25/04. Ya no bloqueado por adaptadores.",
  },
  {
    nivel: "resuelto",
    titulo: "Licencias Meraki — resuelto",
    descripcion:
      "Las 166 licencias están activas y correctamente asignadas. Problema de 5 APs sin cobertura resuelto previamente.",
  },
];

// tipo: "hecho" | "pendiente"
export const comunicaciones = [
  { tipo: "hecho", quien: "Sesión Revisión SOW y seguimiento — Minuta 06", que: "24/04 · WebEx. Revisión con fabricante: 2 rutas para ISE-AD (DC 2022 o LDAP). Avance WLAN 80–90%. Plan de 2 visitas VQ: hardening+evidencias, luego integración+NRFU.", cuando: "24/04 ✓" },
  { tipo: "hecho", quien: "Facundo Sarmiento (COLMEX) — compromiso DC 2022", que: "Entregará fecha concreta de habilitación de DC con Windows Server 2022. A más tardar viernes 01/05/2026. Si se vence, se activa plan B (LDAP).", cuando: "24/04 ✓" },
  { tipo: "hecho", quien: "Luis Enrique Yáñez (COLMEX)", que: "Confirma que el avance va bien. ISE aún no productivo — sigue en fase de implementación.", cuando: "24/04 ✓" },
  { tipo: "hecho", quien: "Sesión semanal de seguimiento — Minuta 05", que: "22/04 · 11:00 hrs · WebEx. Avances DNAC, 9500X, WLAN, caso TAC BUG AD (3 WA identificados), Memoria Técnica v1.", cuando: "22/04 ✓" },
  { tipo: "hecho", quien: "Deploy Catalyst Center + integración switches", que: "Setup cCenter, licenciamiento, integración 9500X del proyecto y stacks COLMEX. Preconfiguración 9500X para migración capa 2.", cuando: "22/04 ✓" },
  { tipo: "hecho", quien: "Pruebas WLAN — Víctor Quintanar", que: "Pruebas SSIDs con portal cautivo (OK) y MAC filtering en SSIDs faltantes.", cuando: "23/04 ✓" },
  { tipo: "hecho", quien: "Memoria Técnica ISE/SNA v1 liberada", que: "Primer documento entregado al cliente para revisión. Apartado NRFU breve — se anexarán pruebas conforme cliente las solicite.", cuando: "23/04 ✓" },
  { tipo: "hecho", quien: "Víctor Quintanar — resumen actividades en sitio 23/04", que: "Correo a COLMEX: configuración de 3 SSIDs — (1) LAB-VISIT portal Invitados en ISE+Meraki, (2) Test1 con MAB + VLAN dinámica, (3) wilinkr20 con 802.1X + MAB.", cuando: "24/04 ✓" },
  { tipo: "pendiente", quien: "COLMEX — DC Windows Server 2022", que: "Habilitar el servidor DC en WS2022 a más tardar el viernes 01/05 para integración con ISE. Si no, se activa LDAP como plan B.", cuando: "≤ 01/05" },
  { tipo: "pendiente", quien: "Víctor Quintanar — 1ra visita en sitio", que: "Siguiente semana: recabar evidencias, completar Memoria Técnica, aplicar hardening de políticas y protocolos en ISE.", cuando: "Sem 28/04" },
  { tipo: "pendiente", quien: "Víctor Quintanar — 2da visita en sitio", que: "Integración AD (o LDAP) + configuración del último SSID pendiente + pruebas NRFU.", cuando: "Sem 05/05" },
  { tipo: "pendiente", quien: "COLMEX → Víctor Quintanar", que: "Entregar lista de MAC addresses para cargarlas a la base de datos de ISE y poder migrar los SSIDs restantes por MAC filtering.", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX → CEN Systems", que: "Compartir nombres de los nuevos SSIDs diseñados por CEN y definir VLANs de onboarding (configuración VLANs en LAN es responsabilidad COLMEX).", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX — decisión cCenter", que: "Definir si se usará certificado para web admin y el servidor de respaldo de Catalyst Center.", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX — SFPs para capa 3", que: "Adquirir 5 SFPs de 1 GB adicionales para completar la migración de capa 3 en los firewalls.", cuando: "Pendiente cliente" },
  { tipo: "hecho", quien: "José Bello — propuesta comercial", que: "Propuesta comercial concluida y entregada.", cuando: "24/04 ✓" },
  { tipo: "pendiente", quien: "Escalación Cisco TAC — BUG CSCwn62873", que: "Seguimiento caso TAC para obtener resolución puntual del fabricante, independiente de los workarounds.", cuando: "En curso" },
  { tipo: "pendiente", quien: "Próxima sesión semanal de seguimiento", que: "Miércoles 29/04/2026 · 11:00 hrs · WebEx. Agenda: resultado migración capa 2, fecha DC 2022, resultados 1ra visita VQ, SFPs capa 3.", cuando: "29/04" },
];

export const entregables = {
  completados: [
    "Entrega física equipamiento (3 remesas)",
    "Documento soporte Cisco / SmartNet",
    "Kit de bienvenida y guía de soporte",
    "Cartas de aceptación FO-SAD-5.4",
    "Catálogo fichas técnicas (12 equipos)",
    "Plan de comunicación FO-SAD-5.6",
    "Minutas 01–06 generadas",
    "Acuerdo de confidencialidad",
    "Memoria Técnica ISE/SNA v1 (liberada al cliente)",
  ],
  enProceso: [
    "Memoria Técnica — apartado NRFU + hardening (1ra visita VQ)",
    "Site Survey — reporte final",
    "Reporte mensual de tickets",
  ],
  pendientes: [
    "Plan de trabajo detallado",
    "4 cursos Cisco oficiales",
    "Documento diseño técnico HLD",
  ],
};
