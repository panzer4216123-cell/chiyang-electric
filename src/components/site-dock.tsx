import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function SiteDock() {
  return (
    <nav className="dock" aria-label="現場快捷">
      <a href={`tel:${SITE.phoneTel}`}>打電話</a>
      <Link to="/cases">看現場</Link>
      <Link to="/contact" hash="lead" className="dock-go">
        能不能裝
      </Link>
    </nav>
  );
}
