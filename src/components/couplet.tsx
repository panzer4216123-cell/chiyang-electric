function stripPunct(s: string) {
  return s.replace(/[，。、,.]/g, "");
}

export function Couplet({
  banner,
  right,
  left,
  invert = false,
}: {
  banner?: string;
  right: string;
  left: string;
  invert?: boolean;
}) {
  return (
    <div>
      {banner ? <p className={`hengpi mb-5 ${invert ? "text-seal" : ""}`}>{banner}</p> : null}
      <div className="couplet">
        <p className="couplet-col m-0">{stripPunct(right)}</p>
        <span className="couplet-rule" aria-hidden="true" />
        <p className="couplet-col m-0">{stripPunct(left)}</p>
      </div>
    </div>
  );
}
