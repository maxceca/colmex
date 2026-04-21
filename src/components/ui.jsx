// ─── KPI Card ────────────────────────────────────────────────
export function KpiCard({ label, valor, sufijo, sub, color }) {
  return (
    <div className="kpi">
      <div className="kpi-lbl">{label}</div>
      <div className={`kpi-val kv-${color}`}>
        {valor}{sufijo && <span className="sufijo"> {sufijo}</span>}
      </div>
      <div className="kpi-sub">{sub}</div>
    </div>
  );
}

// ─── Progress Bar ────────────────────────────────────────────
export function ProgBar({ label, pct, color }) {
  return (
    <div className="prog-row">
      <div className="prog-lbl">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="prog-bar">
        <div className={`prog-fill pf-${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ─── Hito Row ────────────────────────────────────────────────
const hitoMeta = {
  done: { cls: 'hi-done', sym: '✓', hbCls: 'hb-done' },
  wip:  { cls: 'hi-wip',  sym: '~', hbCls: 'hb-wip'  },
  pend: { cls: 'hi-pend', sym: '–', hbCls: 'hb-pend' },
  risk: { cls: 'hi-risk', sym: '!', hbCls: 'hb-risk' },
};

export function HitoRow({ texto, fecha, estado }) {
  const m = hitoMeta[estado] || hitoMeta.pend;
  return (
    <div className="hito-row">
      <div className={`hito-icon ${m.cls}`}>{m.sym}</div>
      <div className="hito-txt">{texto}</div>
      <span className={`hb ${m.hbCls}`}>{fecha}</span>
    </div>
  );
}

// ─── Risk Row ────────────────────────────────────────────────
export function RiskRow({ nivel, titulo, badge, descripcion }) {
  return (
    <div className="risk-row">
      <div className={`risk-dot rd-${nivel}`} />
      <div className="risk-body">
        <div className="risk-ttl">
          {titulo}
          {badge && <span className="new-badge">{badge}</span>}
        </div>
        <div className="risk-desc">{descripcion}</div>
      </div>
      <div className={`risk-pill rp-${nivel}`}>
        {{ critico: 'Crítico', medio: 'Medio', resuelto: 'Resuelto' }[nivel]}
      </div>
    </div>
  );
}

// ─── Comms Row ───────────────────────────────────────────────
export function CommsRow({ tipo, quien, que, cuando }) {
  return (
    <div className="comms-row">
      <div className={`comms-dot cd-${tipo}`} />
      <div className="comms-body">
        <div className="comms-quien">{quien}</div>
        <div className="comms-que">{que}</div>
      </div>
      <div className="comms-cuando">{cuando}</div>
    </div>
  );
}

// ─── Section wrapper ─────────────────────────────────────────
export function Sec({ titulo, children }) {
  return (
    <div className="sec">
      <div className="sec-ttl">{titulo}</div>
      {children}
    </div>
  );
}

// ─── Card wrapper ────────────────────────────────────────────
export function Card({ titulo, children }) {
  return (
    <div className="card">
      {titulo && <div className="card-ttl">{titulo}</div>}
      {children}
    </div>
  );
}
