import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function SiteDock() {
  return (
    <nav className="dock" aria-label="現場快捷">
      <a href={`tel:${SITE.phoneTel}`}>電話</a>
      <Link to="/cases">現場</Link>
      <Link to="/contact">評估</Link>
    </nav>
  );
}
