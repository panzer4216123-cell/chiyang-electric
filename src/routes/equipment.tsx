import { createFileRoute, Link } from "@tanstack/react-router";
import { CropFrame } from "@/components/crop-frame";
import { CATALOG, SITE } from "@/lib/site";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [{ title: `設備型錄｜${SITE.name}` }],
  }),
  component: EquipmentPage,
});

function EquipmentPage() {
  return (
    <main id="main" className="pb-20">
      <section className="border-b border-line py-12">
        <div className="shell">
          <p className="kicker">設備型錄</p>
          <h1 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">主機、門機、車廂</h1>
          <p className="mt-4 max-w-xl text-sm text-fg-muted">
            舊站乘客電梯型錄。規格、型號以現勘、圖說、合約為準，不以型錄推定。
          </p>
        </div>
      </section>
      <section className="shell mt-10 columns-1 gap-8 sm:columns-2">
        {CATALOG.map((item) => (
          <article key={item.id} className="mb-10 break-inside-avoid">
            <CropFrame>
              <img
                src={item.image}
                alt={item.title}
                width={1400}
                height={990}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </CropFrame>
            <div className="mt-3 flex items-center justify-between gap-3">
              <h2 className="font-display text-xl">{item.title}</h2>
              <span className="chop shrink-0">{item.id}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="border-t border-line py-12">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-sm text-fg-muted">自家怎麼裝，看工程現場。保養另談。</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/cases" className="btn btn-ghost">
              工程現場
            </Link>
            <Link to="/contact" className="btn btn-primary">
              評估自家
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
