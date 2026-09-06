import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FacebookMark } from "@/components/facebook-mark";
import { InstagramMark } from "@/components/instagram-mark";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "首頁" },
  { to: "/about", label: "關於啟揚" },
  { to: "/cases", label: "工程現場" },
  { to: "/equipment", label: "設備型錄" },
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
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主要導覽">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-base tracking-wide no-underline hover:text-seal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 no-underline hover:opacity-80"
            aria-label="啟揚機電臉書"
          >
            <FacebookMark />
            <span className="text-base">臉書</span>
          </a>
          {SITE.instagram ? (
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline hover:opacity-80"
              aria-label="啟揚機電 Instagram"
            >
              <InstagramMark />
              <span className="text-base">IG</span>
            </a>
          ) : null}
          <a href={`tel:${SITE.phoneTel}`} className="text-base tracking-wide no-underline">
            {SITE.phoneDisplay}
          </a>
          <a className="btn btn-primary" href={SITE.formUrl} target="_blank" rel="noopener noreferrer">
            填需求表
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 min-w-11 items-center justify-center border border-line px-3 text-base md:hidden"
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
                className="border-b border-border py-3 text-base no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="border-b border-border py-3 no-underline">
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-border py-3 no-underline"
            >
              <FacebookMark />
              臉書日常
            </a>
            {SITE.instagram ? (
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-border py-3 no-underline"
              >
                <InstagramMark />
                Instagram
              </a>
            ) : null}
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
