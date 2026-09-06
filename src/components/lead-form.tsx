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
  const embed = useMemo(() => formWithSource(source.value), [source]);

  return (
    <section id="lead" className="border-t border-line py-14">
      <div className="shell">
        <p className="kicker">需求表</p>
        <h2 className="display mt-3 text-3xl">在這頁填。先說你從哪裡來。</h2>
        <p className="mt-4 max-w-xl text-base text-fg-muted">
          這題對公司對帳用。填了，業務才知道是網站、臉書還是親友。
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
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
        <p className="mt-3 text-base text-fg-muted">已選：{source.label}</p>
        <div className="mt-8 overflow-hidden border border-line bg-bg-elevated">
          <iframe
            title="啟揚需求表"
            src={embed}
            className="h-[min(90vh,52rem)] w-full"
          />
        </div>
        <p className="mt-4">
          <a className="btn btn-ghost" href={embed.replace("&embedded=true", "")} target="_blank" rel="noopener noreferrer">
            表單太小，開新分頁
          </a>
        </p>
        {SITE.line ? (
          <p className="mt-6">
            <a className="btn btn-ink" href={SITE.line} target="_blank" rel="noopener noreferrer">
              LINE 問
            </a>
          </p>
        ) : (
          <p className="mt-6 text-base text-fg-muted">LINE 官方帳號公司給了再掛。現在先填表或打電話。</p>
        )}
      </div>
    </section>
  );
}
