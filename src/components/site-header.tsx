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
  return (
    <header className="border-b border-line bg-bg md:sticky md:top-0 md:z-40">
      <div className="shell flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center no-underline">
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
          <Link to="/contact" hash="lead" className="btn btn-primary">
            我家能不能裝
          </Link>
        </div>
      </div>
    </header>
  );
}
