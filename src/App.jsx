import './index.css';
import logo from './logo.png';
import {
  proyecto, kpis, alerta, tecnologias,
  hitosCompletados, hitosPendientes, riesgos,
  comunicaciones, entregables,
} from './data';
import {
  KpiCard, ProgBar, HitoRow, RiskRow, CommsRow, Sec, Card,
} from './components/ui';

export default function App() {
  return (
    <div className="db">

      {/* ── Header ── */}
      <header className="hdr">
        <div className="hdr-left">
          <div className="logo-wrap">
            <img src={logo} alt="Censys — CEN Systems" />
          </div>
          <div className="proj-info">
            <div className="proj-name">Dashboard de Proyecto — {proyecto.nombre}</div>
            <div className="proj-id">
              {proyecto.id} &nbsp;·&nbsp; Contrato {proyecto.contrato}
              &nbsp;·&nbsp; PM: {proyecto.pm} &nbsp;·&nbsp; {proyecto.email}
            </div>
          </div>
        </div>
        <div className="hdr-right">
          <div className="hdr-date">Actualizado: {proyecto.actualizado}</div>
          <div className="upd-badge">{proyecto.sesion}</div>
        </div>
      </header>

      {/* ── KPIs ── */}
      <Sec titulo="Indicadores clave">
        <div className="kpi-grid">
          {kpis.map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </Sec>

      {/* ── Alerta crítica ── */}
      {alerta.activa && (
        <div className="alert-box">
          <div className="alert-ttl">
            ⚠ Riesgo crítico activo
            {alerta.badge && <span className="new-badge">{alerta.badge}</span>}
            &nbsp;— {alerta.titulo}
          </div>
          <div className="alert-desc">{alerta.descripcion}</div>
        </div>
      )}

      {/* ── Avance por tecnología ── */}
      <Sec titulo="Avance por tecnología">
        <div className="two-col">
          {tecnologias.map((tec, i) => (
            <Card key={i} titulo={tec.titulo}>
              {tec.barras.map((b, j) => <ProgBar key={j} {...b} />)}
            </Card>
          ))}
        </div>
      </Sec>

      {/* ── Hitos ── */}
      <Sec titulo="Hitos del proyecto">
        <div className="two-col">
          <Card titulo="Completados ✓">
            {hitosCompletados.map((h, i) => <HitoRow key={i} {...h} />)}
          </Card>
          <Card titulo="Pendientes y en riesgo">
            {hitosPendientes.map((h, i) => <HitoRow key={i} {...h} />)}
          </Card>
        </div>
      </Sec>

      {/* ── Riesgos ── */}
      <Sec titulo="Matriz de riesgos">
        <Card>
          {riesgos.map((r, i) => <RiskRow key={i} {...r} />)}
        </Card>
      </Sec>

      {/* ── Comunicaciones ── */}
      <Sec titulo="Plan de comunicaciones — recientes y próximas">
        <Card>
          {comunicaciones.map((c, i) => <CommsRow key={i} {...c} />)}
        </Card>
      </Sec>

      {/* ── Entregables ── */}
      <Sec titulo="Entregables contractuales">
        <div className="three-col">
          <Card titulo="Completados">
            {entregables.completados.map((e, i) => (
              <HitoRow key={i} texto={e} fecha="" estado="done" />
            ))}
          </Card>
          <Card titulo="En proceso">
            {entregables.enProceso.map((e, i) => (
              <HitoRow key={i} texto={e} fecha="" estado="wip" />
            ))}
          </Card>
          <Card titulo="Pendientes">
            {entregables.pendientes.map((e, i) => (
              <HitoRow key={i} texto={e} fecha="" estado="pend" />
            ))}
          </Card>
        </div>
      </Sec>

      {/* ── Footer ── */}
      <div className="footer">
        <span>
          SLA: 24×7×2 hrs &nbsp;·&nbsp; SmartNet: 206484712 &amp; 207030889
          &nbsp;·&nbsp; SC-260326-002635 &nbsp;·&nbsp; CEN Systems S.A. de C.V.
        </span>
        <span>Uso Interno — Documento confidencial</span>
      </div>

    </div>
  );
}
