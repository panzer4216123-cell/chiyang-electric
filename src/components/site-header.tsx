import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "首頁" },
  { to: "/cases", label: "工程現場" },
  { to: "/contact", label: "聯絡評估" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="shell flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center no-underline" onClick={() => setOpen(false)}>
          <img
            src="/brand/chiyang-logo-lockup.png"
            alt={SITE.legalName}
            width={180}
            height={50}
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主要導覽">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-widest no-underline hover:text-seal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest no-underline hover:text-seal">
            臉書
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest no-underline hover:text-seal">
            IG
          </a>
          <a href={`tel:${SITE.phoneTel}`} className="text-sm tracking-wide no-underline">
            {SITE.phoneDisplay}
          </a>
          <a className="btn btn-primary" href={SITE.formUrl} target="_blank" rel="noopener noreferrer">
            填需求表
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 min-w-11 items-center justify-center border border-line px-3 text-sm tracking-widest md:hidden"
          aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "關閉" : "選單"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg px-4 py-3 md:hidden">
          <nav className="flex flex-col" aria-label="行動導覽">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border py-3 tracking-widest no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="border-b border-border py-3 no-underline">
              {SITE.phoneDisplay}
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="border-b border-border py-3 no-underline">
              臉書日常
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="border-b border-border py-3 no-underline">
              Instagram 施工
            </a>
            <a
              className="btn btn-primary mt-4"
              href={SITE.formUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              填需求表
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
