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
  actualizado: "29 de abril de 2026",
  sesion: "Sesión 29/04/2026 · Revisión SOW y seguimiento — sesiones se mueven a viernes",
};

export const kpis = [
  { label: "APs instalados", valor: "109", sufijo: "/ 166", sub: "66% completado · 57 APs pendientes · 4 alarmados por cableado", color: "blue" },
  { label: "SSIDs / WLAN", valor: "85%", sub: "Solo 1 SSID pendiente — propuesta EAP chaining (user/pass + cert) en revisión COLMEX", color: "amber" },
  { label: "Riesgos activos", valor: "3", sub: "1 crítico (AD WS2022) · 2 medios (SFPs, Site Survey)", color: "red" },
  { label: "Avance general", valor: "70%", sub: "Migración L2 9500X completada · MT/Hardening/NRFU 9500X listos · espera DC 2022", color: "amber" },
];

export const alerta = {
  activa: true,
  titulo: "BUG CSCwn62873: ISE 3.4 + Active Directory en Windows Server 2025",
  badge: "Cisco confirma: única ruta = DC WS2022",
  descripcion:
    'Cisco TAC confirmó que el workaround es complementario: (1) ISE patcheado — ya cumplido (3.4 P5), (2) habilitar SAM RPC en el DC WS2025 — COLMEX lo rechazó por inseguro. No existe parche que solvente al 100% lado ISE. Ruta única acordada: VM aislada con Windows Server 2022 como DC adicional, exclusivo para integración ISE (mínima exposición). Facundo Sarmiento espera entrega del servidor mañana jueves 30/04 — validación inmediata: hacer AD join y verificar ausencia del error ACCESS_DENIED. Resp: VQ / FCS.',
};

export const tecnologias = [
  {
    titulo: "Red WLAN — Meraki (109 APs en producción)",
    barras: [
      { label: "Instalación de APs (109/166)", pct: 66, color: "blue" },
      { label: "Configuración base Meraki", pct: 90, color: "green" },
      { label: "SSIDs migrados / validados (80–90%)", pct: 85, color: "green" },
      { label: "SSIDs de validación configurados (LAB-VISIT, Test1, wilinkr20)", pct: 100, color: "green" },
      { label: "R-NRFU Meraki — listo", pct: 100, color: "green" },
      { label: "Pruebas portal cautivo + MAC filtering", pct: 80, color: "green" },
      { label: "SSID pendiente — propuesta EAP chaining en revisión COLMEX", pct: 30, color: "amber" },
      { label: "Site Survey — reporte final consolidado", pct: 70, color: "amber" },
      { label: "Memoria Técnica Meraki (al final, tras DNA)", pct: 0, color: "gray" },
      { label: "Nuevos SSIDs CEN (falta VLANs COLMEX)", pct: 10, color: "gray" },
      { label: "6 GHz / WPA3 / Transition Mode", pct: 10, color: "gray" },
    ],
  },
  {
    titulo: "Seguridad — ISE / SNA",
    barras: [
      { label: "ISE hardware + alta disponibilidad", pct: 100, color: "green" },
      { label: "ISE 3.4 Patch 5 — primer requisito Cisco cumplido", pct: 100, color: "green" },
      { label: "Certificados + portal de prueba", pct: 90, color: "green" },
      { label: "802.1X cableado en maqueta", pct: 85, color: "amber" },
      { label: "DC WS2022 — espera entrega COLMEX (jue 30/04)", pct: 60, color: "amber" },
      { label: "AD join productivo + integración 802.1X", pct: 0, color: "red" },
      { label: "Hardening de políticas / protocolos", pct: 0, color: "gray" },
      { label: "ISE + WLAN Meraki (MAC / Portal)", pct: 30, color: "amber" },
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
      { label: "Migración capa 2 — completada (sáb 25/04)", pct: 100, color: "green" },
      { label: "Memoria Técnica 9500X — lista", pct: 100, color: "green" },
      { label: "Hardening 9500X — listo", pct: 100, color: "green" },
      { label: "NRFU 9500X — listo", pct: 100, color: "green" },
      { label: "Migración capa 3 (faltan 5 SFPs 1 GB)", pct: 0, color: "red" },
      { label: "Certificado web admin + servidor respaldo", pct: 0, color: "gray" },
    ],
  },
];

// estado: "done" | "wip" | "pend" | "risk"
export const hitosCompletados = [
  { texto: "Entrega física de equipamiento (3 remesas)", fecha: "Cerrado", estado: "done" },
  { texto: "ISE en Alta Disponibilidad — 2 nodos SNS-3815", fecha: "Cerrado", estado: "done" },
  { texto: "ISE 3.4 Patch 5 — primer requisito Cisco cumplido", fecha: "Cerrado", estado: "done" },
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
  { texto: "Migración capa 2 — 9500X completada", fecha: "Sáb 25/04", estado: "done" },
  { texto: "Memoria Técnica 9500X — lista", fecha: "29/04", estado: "done" },
  { texto: "Hardening 9500X — listo", fecha: "29/04", estado: "done" },
  { texto: "NRFU 9500X — listo", fecha: "29/04", estado: "done" },
  { texto: "R-NRFU Meraki — listo", fecha: "29/04", estado: "done" },
  { texto: "Cisco TAC confirma WA complementario (sin parche al 100%)", fecha: "29/04", estado: "done" },
  { texto: "COLMEX confirma ruta única: DC WS2022 (descarta SAM RPC)", fecha: "29/04", estado: "done" },
  { texto: "Propuesta SSID estudiantes/profesores enviada (EAP chaining)", fecha: "29/04", estado: "done" },
  { texto: "4 documentos enviados a COLMEX (MT 9500X / Hardening / NRFU / R-NRFU Meraki)", fecha: "29/04", estado: "done" },
  { texto: "Minuta 07 enviada al cliente", fecha: "29/04", estado: "done" },
  { texto: "Documentos FO-SAD (cartas, plan, fichas)", fecha: "Cerrado", estado: "done" },
];

export const hitosPendientes = [
  { texto: "DC Windows Server 2022 — entrega COLMEX (validación inmediata)", fecha: "Jue 30/04", estado: "risk" },
  { texto: "AD join productivo ISE → DC 2022 + verificación sin ACCESS_DENIED", fecha: "Tras DC 2022", estado: "pend" },
  { texto: "Migración capa 3 — bloqueada por 5 SFPs 1 GB faltantes", fecha: "Riesgo", estado: "risk" },
  { texto: "SSID estudiantes/profesores — revisión EAP chaining por COLMEX", fecha: "En revisión", estado: "wip" },
  { texto: "Site Survey — reporte final consolidado (recordatorio cliente)", fecha: "Sem 04/05", estado: "wip" },
  { texto: "2da visita VQ — integración AD WS2022 + último SSID + NRFU final", fecha: "Tras DC 2022", estado: "pend" },
  { texto: "Memoria Técnica Meraki (al final, tras DNA)", fecha: "Pendiente", estado: "pend" },
  { texto: "4 APs alarmados por cableado — revisión", fecha: "En curso", estado: "wip" },
  { texto: "57 APs restantes por instalar", fecha: "Tras Site Survey", estado: "pend" },
  { texto: "Migración SSIDs faltantes (MAC filter) — espera lista MACs del cliente", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "Nuevos SSIDs CEN — esperando nombres + VLANs onboarding (COLMEX)", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "Certificado web admin + servidor respaldo cCenter", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "ISE integrado con red inalámbrica Meraki", fecha: "Pendiente", estado: "pend" },
  { texto: "Deploy SNA — Secure Network Analytics", fecha: "Pendiente (al final)", estado: "pend" },
];

// nivel: "critico" | "medio" | "resuelto"
export const riesgos = [
  {
    nivel: "critico",
    titulo: "Integración ISE 3.4 + Active Directory — única ruta DC WS2022",
    badge: "Espera entrega DC jue 30/04",
    descripcion:
      "Cisco TAC confirmó (29/04) que el workaround del FN74321 es complementario: ISE patcheado (ya cumplido — 3.4 P5) + habilitar SAM RPC en DC WS2025. COLMEX rechazó SAM RPC por considerarlo inseguro. NO existe parche del lado ISE que resuelva al 100%. Única ruta acordada: VM aislada con Windows Server 2022 como DC adicional. Facundo Sarmiento espera la entrega para jueves 30/04 — validación inmediata. Si la entrega se atrasa, se mantiene la ruta. Impacto: bloquea 802.1X productivo. Resp: FCS / VQ.",
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
    titulo: "Site Survey — reporte final consolidado pendiente",
    badge: "Recordatorio cliente 29/04",
    descripcion:
      "Luis Enrique Yáñez (COLMEX) recordó en la sesión del 29/04 que el reporte final consolidado del Site Survey sigue pendiente. Andrés se comprometió a entregarlo esta semana. Sin él, COLMEX no puede planificar la ubicación final de nodos para los 57 APs restantes.",
  },
  {
    nivel: "resuelto",
    titulo: "Migración Core 9500X — capa 2 completada",
    descripcion:
      "Migración capa 2 ejecutada exitosamente el sábado 25/04. Memoria Técnica, Hardening y NRFU de los 9500X listos. R-NRFU Meraki también listo. Documentos compartidos al cliente para revisión.",
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
  { tipo: "hecho", quien: "Sesión Revisión SOW y seguimiento — Minuta 07", que: "29/04 · WebEx. Confirmación Cisco TAC: WA complementario, sin parche al 100%. COLMEX rechaza SAM RPC; ruta única DC WS2022 (entrega esperada jue 30/04). Propuesta SSID estudiantes (EAP chaining). Cierre migración L2 + entrega de 4 documentos.", cuando: "29/04 ✓" },
  { tipo: "hecho", quien: "Cisco TAC (Sherlock / Harvi Arias) — caso BUG CSCwn62873", que: "Confirma que ambos workarounds del FN74321 son obligatorios y complementarios. ISE 3.4 P5 ya cumple primer requisito. No existe parche lado ISE — única vía técnica: ajustar SAM RPC en DC WS2025 vía GPO o usar DC WS2022.", cuando: "24/04 ✓" },
  { tipo: "hecho", quien: "COLMEX — descarta SAM RPC por seguridad", que: "El equipo de Active Directory de COLMEX considera inseguro habilitar SAM RPC en el DC productivo WS2025. Se confirma ruta DC WS2022 como única vía viable.", cuando: "29/04 ✓" },
  { tipo: "hecho", quien: "Víctor Quintanar — propuesta SSID estudiantes/profesores", que: "Correo a COLMEX con propuesta de EAP chaining: doble validación user/pass + certificado de máquina. Acceso completo si dispositivo del colegio + usuario válido; acceso parcial (VLAN/ACL restringida) en otros casos.", cuando: "29/04 ✓" },
  { tipo: "hecho", quien: "Migración capa 2 — 9500X completada", que: "Migración ejecutada exitosamente el sábado 25/04. Documentación lista: MT 9500X, Hardening, NRFU 9500X, R-NRFU Meraki.", cuando: "25/04 ✓" },
  { tipo: "hecho", quien: "Sesión Revisión SOW — Minuta 06", que: "24/04 · WebEx. 2 rutas para ISE-AD (DC 2022 o LDAP). Avance WLAN 80–90%. Plan visitas VQ.", cuando: "24/04 ✓" },
  { tipo: "hecho", quien: "Víctor Quintanar — actividades en sitio 23/04", que: "Configuración 3 SSIDs: LAB-VISIT (Invitados), Test1 (MAB+VLAN din.), wilinkr20 (802.1X+MAB).", cuando: "24/04 ✓" },
  { tipo: "hecho", quien: "José Bello — propuesta comercial", que: "Propuesta comercial concluida y entregada.", cuando: "24/04 ✓" },
  { tipo: "pendiente", quien: "COLMEX — DC Windows Server 2022", que: "Entrega del servidor con WS2022. Facundo Sarmiento espera tenerlo para jueves 30/04. Validación inmediata: hacer join al AD y verificar que no aparezca el error ACCESS_DENIED.", cuando: "Jue 30/04" },
  { tipo: "hecho", quien: "Alan Cerón → COLMEX (4 documentos + minuta)", que: "Enviados al cliente: Memoria Técnica 9500X + Hardening + NRFU 9500X + R-NRFU Meraki, junto con la Minuta 07 de la sesión.", cuando: "29/04 ✓" },
  { tipo: "pendiente", quien: "COLMEX — revisión propuesta EAP chaining", que: "Revisar propuesta de Víctor para SSID de estudiantes y profesores. Especial atención a Macs entregadas a usuarios que no están en dominio.", cuando: "En revisión" },
  { tipo: "pendiente", quien: "Andrés González — Site Survey reporte final", que: "Luis Enrique Yáñez recordó que el reporte final consolidado sigue pendiente. Andrés comprometió entrega esta semana.", cuando: "Sem 29/04" },
  { tipo: "pendiente", quien: "Víctor Quintanar — 2da visita en sitio", que: "Tras llegada del DC WS2022: integración AD productiva + configuración último SSID + pruebas NRFU finales.", cuando: "Tras 30/04" },
  { tipo: "pendiente", quien: "COLMEX → Víctor Quintanar", que: "Entregar lista de MAC addresses para cargarlas a la base de datos de ISE y poder migrar los SSIDs restantes por MAC filtering.", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX → CEN Systems", que: "Compartir nombres de los nuevos SSIDs diseñados por CEN y definir VLANs de onboarding (config VLANs en LAN = responsabilidad COLMEX).", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX — decisión cCenter", que: "Definir si se usará certificado para web admin y el servidor de respaldo de Catalyst Center.", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX — SFPs para capa 3", que: "Adquirir 5 SFPs de 1 GB adicionales para completar la migración de capa 3 en los firewalls.", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "Próxima sesión — cambia a viernes", que: "Sesiones semanales se mueven definitivamente a viernes (misma hora). Próxima sesión: viernes 08/05/2026 (semana 04/05 corta por feriado 01/05).", cuando: "Vie 08/05" },
];

export const entregables = {
  completados: [
    "Entrega física equipamiento (3 remesas)",
    "Documento soporte Cisco / SmartNet",
    "Kit de bienvenida y guía de soporte",
    "Cartas de aceptación FO-SAD-5.4",
    "Catálogo fichas técnicas (12 equipos)",
    "Plan de comunicación FO-SAD-5.6",
    "Minutas 01–07 generadas",
    "Acuerdo de confidencialidad",
    "Memoria Técnica ISE/SNA v1 (liberada al cliente)",
    "Memoria Técnica 9500X",
    "Hardening 9500X",
    "NRFU 9500X",
    "R-NRFU Meraki",
    "Propuesta comercial (José Bello)",
  ],
  enProceso: [
    "Site Survey — reporte final consolidado",
    "SSID estudiantes/profesores — revisión EAP chaining",
    "Reporte mensual de tickets",
  ],
  pendientes: [
    "Memoria Técnica Meraki (al final, tras DNA)",
    "Plan de trabajo detallado",
    "4 cursos Cisco oficiales",
    "Documento diseño técnico HLD",
  ],
};
