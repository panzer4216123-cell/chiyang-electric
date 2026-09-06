import { useEffect, useMemo, useState } from "react";
import { formWithSource, LEAD_SOURCES, SITE } from "@/lib/site";

function sourceFromQuery() {
  if (typeof window === "undefined") return "site";
  const q = new URLSearchParams(window.location.search);
  const raw = (q.get("utm_source") || q.get("from") || "").toLowerCase();
  if (raw.includes("facebook") || raw === "fb") return "fb";
  if (raw.includes("insta") || raw === "ig") return "ig";
  if (raw.includes("google")) return "google";
  if (raw.includes("friend") || raw.includes("intro")) return "friend";
  return "site";
}

export function LeadForm() {
  const [sourceId, setSourceId] = useState("site");

  useEffect(() => {
    setSourceId(sourceFromQuery());
  }, []);

  const source = LEAD_SOURCES.find((s) => s.id === sourceId) ?? LEAD_SOURCES[0];
  const embed = useMemo(() => formWithSource(source.value, true), [source]);
  const openUrl = useMemo(() => formWithSource(source.value, false), [source]);

  return (
    <section id="lead" className="border-t border-line py-14">
      <div className="shell">
        <p className="kicker">需求表</p>
        <h2 className="display mt-3 text-3xl">留下這個家怎麼住</h2>
        <p className="mt-4 max-w-xl text-base text-fg-muted">
          姓名、電話、樓層。照片有就更好。能裝再說怎麼裝。
        </p>
        <p className="mt-6 text-base">你從哪裡看到啟揚</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {LEAD_SOURCES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={sourceId === item.id ? "btn btn-primary" : "btn btn-ghost"}
              onClick={() => setSourceId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-8 overflow-hidden border border-line bg-bg-elevated">
          <iframe
            key={sourceId}
            title="啟揚需求表"
            src={embed}
            className="h-[min(90vh,52rem)] w-full"
          />
        </div>
        <p className="mt-4 flex flex-wrap gap-3">
          <a className="btn btn-ghost" href={openUrl} target="_blank" rel="noopener noreferrer">
            開新分頁填
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            {SITE.phoneDisplay}
          </a>
        </p>
        {SITE.line ? (
          <p className="mt-6">
            <a className="btn btn-ink" href={SITE.line} target="_blank" rel="noopener noreferrer">
              LINE 問
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
