import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CropFrame } from "@/components/crop-frame";
import { CASES, CASE_FILTERS, SITE, type CaseKind } from "@/lib/site";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [{ title: `工程現場｜${SITE.name}` }],
  }),
  component: CasesPage,
});

function CasesPage() {
  const [kind, setKind] = useState<CaseKind>("home");
  const list = useMemo(
    () => CASES.filter((item) => !item.hidden && item.kind !== "show" && item.kind === kind),
    [kind],
  );

  return (
    <main id="main" className="pb-20">
      <section className="border-b border-line py-12">
        <div className="shell">
          <p className="kicker">工程現場</p>
          <h1 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">工程現場，依設備類型整理</h1>
          <p className="mt-4 max-w-xl text-base text-fg-muted">
            以案場編號呈現，只標照片看得到的做法。每戶條件以現勘、圖說與合約為準。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CASE_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={kind === item.id ? "btn btn-primary" : "btn btn-ghost"}
                onClick={() => setKind(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="shell mt-10 columns-1 gap-8 sm:columns-2 lg:columns-3">
        {list.map((item) => (
          <article key={item.id} id={item.id} className="mb-10 break-inside-avoid">
            <CropFrame>
              <img
                src={item.image}
                alt={item.title}
                width={800}
                height={1000}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </CropFrame>
            <div className="mt-3 flex items-start justify-between gap-3">
              <h2 className="font-display text-xl">{item.title}</h2>
              <span className="chop shrink-0">{item.id}</span>
            </div>
          </article>
        ))}
      </section>
      {list.length === 0 ? (
        <p className="shell text-base text-fg-muted">這一類目前沒有可公開的照片。</p>
      ) : null}
      <section className="border-t border-line py-12">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-base text-fg-muted">規格、檢查、許可仍以個案文件為準。</p>
          <Link to="/contact" hash="lead" className="btn btn-primary">
            評估自家
          </Link>
        </div>
      </section>
    </main>
  );
}
