import { Link } from "@tanstack/react-router";
import { SITE, SLOGANS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-bg-ink text-fg-on-ink">
      <div className="shell grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="kicker text-fg-on-ink/40">啟揚機電</p>
          <p className="display mt-4 text-2xl leading-snug">
            {SLOGANS.install.line1}
            <br />
            {SLOGANS.install.line2}
          </p>
          <p className="mt-3 text-sm text-fg-on-ink/55">
            {SLOGANS.maintain.line1}
            {SLOGANS.maintain.line2}
          </p>
        </div>
        <div>
          <p className="kicker text-fg-on-ink/40">頁面</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/" className="no-underline hover:text-seal">
                首頁
              </Link>
            </li>
            <li>
              <Link to="/cases" className="no-underline hover:text-seal">
                工程現場
              </Link>
            </li>
            <li>
              <Link to="/contact" className="no-underline hover:text-seal">
                聯絡評估
              </Link>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-seal">
                臉書日常
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-seal">
                Instagram 施工
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker text-fg-on-ink/40">公司</p>
          <ul className="mt-4 space-y-3 text-sm text-fg-on-ink/80">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="no-underline hover:text-seal">
                電話　{SITE.phoneDisplay}
              </a>
            </li>
            <li>傳真　{SITE.faxDisplay}</li>
            <li>
              <a href={`mailto:${SITE.email}`} className="no-underline hover:text-seal">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-seal">
                {SITE.address}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="shell flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-fg-on-ink/40">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}
          </span>
          <span>住宅加梯 · 舊透天 · 保養</span>
        </p>
      </div>
    </footer>
  );
}
