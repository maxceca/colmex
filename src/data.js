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
  actualizado: "18 de mayo de 2026",
  sesion: "Sesión 15/05/2026 · NetFlow 9500X — limitantes detectadas para SNA",
};

export const kpis = [
  { label: "APs instalados", valor: "109", sufijo: "/ 166", sub: "66% completado · 57 APs pendientes · 4 alarmados por cableado", color: "blue" },
  { label: "Migración capa 3", valor: "29–30 May", sub: "Ventana de mantenimiento programada · bloqueante: 5 SFPs 1 GB", color: "amber" },
  { label: "Riesgos activos", valor: "4", sub: "2 críticos (SFPs capa 3, NetFlow 9500X) · 2 medios (BUG AD, Site Survey)", color: "red" },
  { label: "Avance general", valor: "72%", sub: "Limitante NetFlow 9500X · arquitectura SNA en replanteo", color: "amber" },
];

export const alerta = {
  activa: true,
  titulo: "URGENTE: 5 SFPs 1 Gbps compatibles con 9500X-64 — Migración capa 3 el 29–30 mayo",
  badge: "Bloqueante · Ventana de mantenimiento",
  descripcion:
    "Se acordó ventana de mantenimiento para migración total del Catalyst 9500 (capa 3) el 29–30 de mayo de 2026. Es requisito indispensable contar con 5 SFPs de 1 Gbps compatibles con el modelo 9500X-64. La reunión preparatoria está programada para el 21 de mayo. Sin los SFPs no es viable la ventana. Resp: COLMEX (procurement) / Andrés González (técnico).",
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
      { label: "Documentación WLAN (18–21 may · entrega 22 may)", pct: 0, color: "amber" },
      { label: "Overview plataforma Meraki — 22 mayo", pct: 0, color: "amber" },
      { label: "SSID pendiente — propuesta EAP chaining en revisión COLMEX", pct: 30, color: "amber" },
      { label: "Site Survey — reporte final consolidado", pct: 70, color: "amber" },
      { label: "Memoria Técnica Meraki (al final, tras DNA)", pct: 0, color: "gray" },
      { label: "6 GHz / WPA3 / Transition Mode", pct: 10, color: "gray" },
    ],
  },
  {
    titulo: "Seguridad — ISE",
    barras: [
      { label: "ISE hardware + alta disponibilidad", pct: 100, color: "green" },
      { label: "ISE 3.4 Patch 5 — primer requisito Cisco cumplido", pct: 100, color: "green" },
      { label: "Certificados + portal de prueba", pct: 90, color: "green" },
      { label: "802.1X cableado en maqueta", pct: 85, color: "amber" },
      { label: "DC WS2022 — entrega + AD join (verificación post 30/04)", pct: 60, color: "amber" },
      { label: "AD join productivo + integración 802.1X", pct: 20, color: "amber" },
      { label: "Hardening de políticas / protocolos", pct: 0, color: "gray" },
      { label: "ISE + WLAN Meraki (MAC / Portal)", pct: 30, color: "amber" },
    ],
  },
  {
    titulo: "SNA — Secure Network Analytics (Stealthwatch 7.6.0)",
    barras: [
      { label: "Plan despliegue + requisitos compartidos (08/05)", pct: 100, color: "green" },
      { label: "Sesión técnica integración Flow Sensor (12/05)", pct: 100, color: "green" },
      { label: "NetFlow 9500X — limitantes detectadas (replanteo arquitectura)", pct: 100, color: "red" },
      { label: "Norte–Sur: NetFlow en 9500 puertos firewall (vía válida)", pct: 10, color: "amber" },
      { label: "Este–Oeste: opción cCenter+SNA+ETA (req. DNA Advantage)", pct: 0, color: "gray" },
      { label: "Este–Oeste: opción manual NetFlow en 9300 (puertos troncales)", pct: 0, color: "gray" },
      { label: "SMC — Cisco SNA Virtual Manager (8 vCPU / 42 GB / 300 GB)", pct: 30, color: "amber" },
      { label: "Flow Collector NetFlow (8 vCPU / 64 GB / 1.8 TB)", pct: 30, color: "amber" },
      { label: "Flow Sensor (6 vCPU / 10 GB / 100 GB · 2 NICs)", pct: 40, color: "amber" },
      { label: "Configurar VLAN nueva sin tráfico de producción en Core", pct: 0, color: "amber" },
      { label: "Propagar VLAN sobre trunk Core ↔ hipervisor", pct: 0, color: "amber" },
      { label: "Port group en hipervisor (vSwitch) asociado a VLAN nueva", pct: 0, color: "amber" },
      { label: "Reconfigurar adaptador de red del Flow Sensor (apagar/editar/encender)", pct: 0, color: "amber" },
      { label: "Validar tráfico espejeado recibido en Flow Sensor", pct: 0, color: "gray" },
      { label: "Configurar SVIs como orígenes VSPAN en Core → SMC", pct: 0, color: "gray" },
      { label: "Infraestructura VMware 7.0/8.0 + segmento de red dedicado", pct: 50, color: "amber" },
      { label: "Conectividad DNS / NTP / TCP 443 a internet", pct: 50, color: "amber" },
      { label: "Puertos AD (TCP 389) + ISE (TCP 443 / 8910 bidireccional)", pct: 50, color: "amber" },
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
      { label: "Reunión preparatoria migración capa 3 — 21 mayo", pct: 0, color: "amber" },
      { label: "Migración capa 3 — ventana 29–30 mayo (req. 5 SFPs)", pct: 0, color: "red" },
      { label: "Documentación DNAC (25–29 may · entrega 1 jun)", pct: 0, color: "amber" },
      { label: "Overview DNAC — semana 1–4 junio", pct: 0, color: "gray" },
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
  { texto: "SSID LAB-VISIT — portal de Invitados en Cisco ISE + Meraki", fecha: "23/04", estado: "done" },
  { texto: "SSID Test1 — autenticación MAB + asignación dinámica de VLAN", fecha: "23/04", estado: "done" },
  { texto: "SSID wilinkr20 — autenticación 802.1X + MAB", fecha: "23/04", estado: "done" },
  { texto: "Memoria Técnica ISE/SNA v1 liberada al cliente", fecha: "23/04", estado: "done" },
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
  { texto: "Plan despliegue SNA — requisitos compartidos al cliente", fecha: "08/05", estado: "done" },
  { texto: "Cronograma operativo mayo–junio acordado con COLMEX", fecha: "08/05", estado: "done" },
  { texto: "Sesión técnica SNA — pasos de integración Flow Sensor + VSPAN", fecha: "12/05", estado: "done" },
  { texto: "Análisis NetFlow 9500X — limitantes documentadas (Cisco docs)", fecha: "15/05", estado: "done" },
  { texto: "Documentos FO-SAD (cartas, plan, fichas)", fecha: "Cerrado", estado: "done" },
];

export const hitosPendientes = [
  { texto: "5 SFPs 1 Gbps compatibles 9500X-64 — bloqueante para migración capa 3", fecha: "≤ 29 May", estado: "risk" },
  { texto: "NetFlow 9500X — definir arquitectura SNA (N-S firewall vs E-O 9300)", fecha: "Mié próx", estado: "risk" },
  { texto: "Decisión: ¿involucrar a Cisco para analizar limitantes 9500X?", fecha: "Por definir", estado: "pend" },
  { texto: "Sesión revisión NetFlow/SNA — propuesta miércoles 10–12 PM", fecha: "Mié próx", estado: "pend" },
  { texto: "Reunión preparatoria migración capa 3 9500X", fecha: "21 May", estado: "pend" },
  { texto: "Ventana de mantenimiento — migración capa 3 9500X", fecha: "29–30 May", estado: "pend" },
  { texto: "Documentación WLAN — entrega al cliente", fecha: "22 May", estado: "wip" },
  { texto: "Overview plataforma Meraki con COLMEX", fecha: "22 May", estado: "pend" },
  { texto: "Documentación DNAC — entrega al cliente", fecha: "1 Jun", estado: "wip" },
  { texto: "Overview DNAC — sesiones con COLMEX", fecha: "Sem 1–4 Jun", estado: "pend" },
  { texto: "SNA — Descarga ISOs (SMC, Flow Collector, Flow Sensor) v7.6.0", fecha: "Pendiente", estado: "pend" },
  { texto: "SNA — VMware 7.0/8.0 + segmento de red dedicado para 3 VMs", fecha: "Pre-deploy", estado: "pend" },
  { texto: "SNA — Conectividad DNS/NTP/TCP 443 + puertos AD/ISE", fecha: "Pre-deploy", estado: "pend" },
  { texto: "SNA — Despliegue de las 3 VMs (SMC + Flow Collector + Flow Sensor)", fecha: "Por programar", estado: "pend" },
  { texto: "SNA Flow Sensor — VLAN nueva sin tráfico de producción en Core", fecha: "Próximos días", estado: "wip" },
  { texto: "SNA Flow Sensor — propagar VLAN en trunk Core ↔ hipervisor", fecha: "Próximos días", estado: "wip" },
  { texto: "SNA Flow Sensor — port group en hipervisor + adaptador VM", fecha: "Próximos días", estado: "wip" },
  { texto: "SNA Flow Sensor — validar tráfico espejeado recibido", fecha: "Tras port group", estado: "pend" },
  { texto: "SNA — configurar SVIs como orígenes VSPAN en Core (visibilidad SMC)", fecha: "Tras Flow Sensor", estado: "pend" },
  { texto: "DC Windows Server 2022 — verificación post entrega + AD join productivo", fecha: "En verificación", estado: "wip" },
  { texto: "SSID estudiantes/profesores — revisión EAP chaining por COLMEX", fecha: "En revisión", estado: "wip" },
  { texto: "Site Survey — reporte final consolidado (recordatorio cliente)", fecha: "Atrasado", estado: "risk" },
  { texto: "Memoria Técnica Meraki (al final, tras DNA)", fecha: "Post migración", estado: "pend" },
  { texto: "4 APs alarmados por cableado — revisión", fecha: "En curso", estado: "wip" },
  { texto: "57 APs restantes por instalar", fecha: "Tras Site Survey", estado: "pend" },
  { texto: "Migración SSIDs faltantes (MAC filter) — espera lista MACs del cliente", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "Nuevos SSIDs CEN — esperando nombres + VLANs onboarding (COLMEX)", fecha: "Pendiente cliente", estado: "pend" },
  { texto: "Certificado web admin + servidor respaldo cCenter", fecha: "Pendiente cliente", estado: "pend" },
];

// nivel: "critico" | "medio" | "resuelto"
export const riesgos = [
  {
    nivel: "critico",
    titulo: "NetFlow 9500X sin flexibilidad — replanteo de arquitectura SNA",
    badge: "NUEVO 15/05",
    descripcion:
      "Al configurar NetFlow para enviar tráfico a SNA se detectaron limitantes del 9500X (confirmadas en doc Cisco): solo configurable en interfaz ingress, solo con sampler (muestreo estadístico, no exacto), no soporta monitor en SVI ni interfaces físicas, NetFlow solo por software, no MPLS/VXLAN, una sola tasa de sampler. El hardware no da la flexibilidad que busca el colegio en esa capa. Plan: (1) Norte–Sur con NetFlow en 9500 puertos del firewall (vía válida); (2) Este–Oeste vía cCenter+SNA con ETA (requiere licencia DNA Advantage); (3) alternativa manual NetFlow en 9300 (puertos troncales). Pendiente: sesión revisión miércoles 10–12 PM y decidir si se involucra a Cisco. Resp: VQ / Andrés / COLMEX.",
  },
  {
    nivel: "critico",
    titulo: "5 SFPs 1 Gbps 9500X-64 — bloqueante para migración capa 3 (29–30 May)",
    badge: "Ventana hard · 29 May",
    descripcion:
      "Se acordó con COLMEX la ventana de mantenimiento para migración total del Catalyst 9500 (capa 3) el fin de semana del 29–30 de mayo de 2026. Requisito indispensable: 5 SFPs de 1 Gbps compatibles con el modelo 9500X-64. La reunión preparatoria es el 21 de mayo. Sin los SFPs no se puede ejecutar la ventana. Resp: COLMEX procurement / Andrés González.",
  },
  {
    nivel: "medio",
    titulo: "BUG CSCwn62873 — Integración ISE + AD en verificación post DC WS2022",
    badge: "En verificación",
    descripcion:
      "Cisco TAC confirmó (24/04) que el workaround es complementario y no existe parche al 100% lado ISE. COLMEX rechazó SAM RPC. Ruta acordada: VM con WS2022 como DC adicional aislado. Entrega esperada al 30/04. En verificación: hacer AD join productivo y confirmar ausencia del error ACCESS_DENIED antes de avanzar con 802.1X productivo. Resp: VQ / FCS.",
  },
  {
    nivel: "medio",
    titulo: "Site Survey — reporte final consolidado atrasado",
    badge: "Recordatorio cliente",
    descripcion:
      "Luis Enrique Yáñez recordó en sesión del 29/04 que el reporte final consolidado del Site Survey sigue pendiente desde hace tiempo. Bloquea la planificación de nodos para los 57 APs restantes. Resp: Andrés González.",
  },
  {
    nivel: "resuelto",
    titulo: "Migración Core 9500X — capa 2 completada",
    descripcion:
      "Migración capa 2 ejecutada exitosamente el sábado 25/04. Memoria Técnica, Hardening y NRFU de los 9500X listos. R-NRFU Meraki también listo. Documentos compartidos al cliente.",
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
  { tipo: "hecho", quien: "Sesión 08/05 — Plan SNA + cronograma mayo/junio", que: "Viernes 08/05 · WebEx. Plan operativo: 18–21 may doc WLAN, 21 may reunión capa 3, 22 may entrega WLAN + overview Meraki, 25–29 may doc DNAC, 29–30 may ventana migración capa 3, 1 jun entrega DNAC, 1–4 jun overview DNAC.", cuando: "08/05 ✓" },
  { tipo: "hecho", quien: "Víctor Quintanar — requisitos de despliegue SNA", que: "Compartió guía completa de despliegue SNA 7.6.0 (Stealthwatch): 3 VMs (SMC 8c/42GB/300GB, Flow Collector 8c/64GB/1.8TB, Flow Sensor 6c/10GB/100GB), VMware 7/8, mismo segmento de red, sin vMotion/snapshots, conectividad DNS/NTP/TCP443, puertos AD TCP 389 + ISE TCP 443/8910 bidireccional. Link guía Cisco incluido.", cuando: "08/05 ✓" },
  { tipo: "hecho", quien: "Víctor Quintanar → Uriel Pérez (COLMEX) — pasos integración Flow Sensor", que: "Tras sesión técnica de hoy: (1) crear VLAN nueva sin tráfico de producción en Core, (2) propagarla en trunk Core↔hipervisor, (3) port group en hipervisor asociado a la VLAN, (4) apagar VM Flow Sensor desde GUI, (5) reasignar adaptador al port group, (6) encender y validar tráfico espejeado. Una vez listos los pasos, el SMC debería mostrar tráfico proveniente de las SVIs configuradas como orígenes VSPAN en el Core.", cuando: "12/05 ✓" },
  { tipo: "hecho", quien: "Sesión de seguimiento a proyecto — 15/05", que: "Seguimiento de SNA: configuración de NetFlow en el Core, Flow Collector y Flow Sensor (este último como herramienta complementaria/opcional). Se discutió visibilidad de servidores y usuarios vía análisis de tráfico y relevancia de Smart Account / NCC para el licenciamiento de SNA. Queda retro pendiente de Víctor respecto a Active Directory.", cuando: "15/05 ✓" },
  { tipo: "hecho", quien: "Víctor Quintanar → COLMEX — limitantes NetFlow 9500X", que: "Resumen post-sesión: NetFlow en 9500X solo soporta sampler, solo interfaz ingress, no SVI ni interfaces físicas. Confirmado en doc Cisco (software-only, sin MPLS/VXLAN, una tasa de sampler). Propuesta: N-S con NetFlow en puertos del firewall en 9500; E-O vía cCenter+SNA+ETA (req. DNA Advantage) o manual en 9300. Propone sesión de revisión el próximo miércoles 10–12 PM y consultar si involucrar al fabricante.", cuando: "15/05 ✓" },
  { tipo: "hecho", quien: "Cisco TAC (Sherlock / Harvi Arias) — caso BUG CSCwn62873", que: "Confirma WA complementario y obligatorio. ISE 3.4 P5 ya cumple. Única vía técnica: SAM RPC en DC WS2025 (descartado por COLMEX) o usar DC WS2022.", cuando: "24/04 ✓" },
  { tipo: "hecho", quien: "Migración capa 2 — 9500X completada", que: "Migración ejecutada exitosamente el sábado 25/04. MT, Hardening, NRFU 9500X y R-NRFU Meraki listos.", cuando: "25/04 ✓" },
  { tipo: "hecho", quien: "Alan Cerón → COLMEX (4 documentos + Minuta 07)", que: "Enviados al cliente: MT 9500X + Hardening + NRFU 9500X + R-NRFU Meraki + Minuta 07.", cuando: "29/04 ✓" },
  { tipo: "hecho", quien: "Víctor Quintanar — propuesta SSID estudiantes/profesores", que: "Propuesta EAP chaining: doble validación user/pass + certificado de máquina. Acceso parcial (VLAN/ACL) en otros casos.", cuando: "29/04 ✓" },
  { tipo: "pendiente", quien: "COLMEX — adquisición 5 SFPs 1 Gbps 9500X-64", que: "Indispensable para la ventana de migración capa 3 del 29–30 mayo. Sin ellos no se ejecuta. Procurement urgente.", cuando: "≤ 29 May" },
  { tipo: "pendiente", quien: "Reunión preparatoria migración capa 3", que: "Sesión específica para revisar la migración total del Catalyst 9500, particularmente capa 3. La invitación se enviará posteriormente.", cuando: "21 May" },
  { tipo: "pendiente", quien: "Sesión Webex — aclaración despliegue SNA (opcional)", que: "Víctor ofreció agendar sesión de aclaración previa al despliegue SNA si COLMEX lo considera adecuado.", cuando: "Por agendar" },
  { tipo: "pendiente", quien: "COLMEX — preparación infra SNA", que: "Provisionar VMware 7.0/8.0, segmento de red dedicado para 3 VMs, conectividad DNS/NTP/internet TCP 443, apertura de puertos AD/ISE.", cuando: "Pre-deploy" },
  { tipo: "pendiente", quien: "Uriel Pérez (COLMEX) — adecuaciones Flow Sensor SNA", que: "Ejecutar los 6 pasos compartidos por Víctor: VLAN nueva en Core, propagación trunk, port group en hipervisor, reconfigurar adaptador VM Flow Sensor (apagar/editar/encender) y validar tráfico espejeado. Configurar SVIs como orígenes VSPAN del lado del Core.", cuando: "Próximos días" },
  { tipo: "pendiente", quien: "Documentación WLAN — entrega", que: "Trabajo del 18 al 21 de mayo. Entrega del documento al cliente el 22 de mayo.", cuando: "22 May" },
  { tipo: "pendiente", quien: "Overview Meraki — sesión con COLMEX", que: "Sesión de overview de la plataforma Meraki.", cuando: "22 May" },
  { tipo: "pendiente", quien: "Documentación DNAC — entrega", que: "Trabajo del 25 al 29 de mayo. Entrega el 1 de junio.", cuando: "1 Jun" },
  { tipo: "pendiente", quien: "Overview DNAC — semana 1–4 junio", que: "Sesiones de overview de DNAC con COLMEX. Se enviarán invitaciones.", cuando: "Sem 1–4 Jun" },
  { tipo: "pendiente", quien: "COLMEX — revisión propuesta EAP chaining", que: "Revisar propuesta de Víctor para SSID de estudiantes y profesores. Atención a Macs entregadas que no están en dominio.", cuando: "En revisión" },
  { tipo: "pendiente", quien: "Andrés González — Site Survey reporte final", que: "Recordatorio cliente: reporte final consolidado pendiente desde hace tiempo.", cuando: "Atrasado" },
  { tipo: "pendiente", quien: "COLMEX → Víctor Quintanar", que: "Lista de MAC addresses para cargar en ISE y migrar SSIDs restantes por MAC filtering.", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX → CEN Systems", que: "Nombres de nuevos SSIDs CEN + VLANs de onboarding (config VLANs en LAN = responsabilidad COLMEX).", cuando: "Pendiente cliente" },
  { tipo: "pendiente", quien: "COLMEX — decisión cCenter", que: "Definir si se usará certificado para web admin y el servidor de respaldo de Catalyst Center.", cuando: "Pendiente cliente" },
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
    "Plan de despliegue SNA + requisitos (compartido 08/05)",
  ],
  enProceso: [
    "Documentación WLAN (18–21 may · entrega 22 may)",
    "Documentación DNAC (25–29 may · entrega 1 jun)",
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
