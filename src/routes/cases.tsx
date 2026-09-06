import { createFileRoute } from "@tanstack/react-router";
import { CropFrame } from "@/components/crop-frame";
import { CASES, SITE } from "@/lib/site";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [{ title: `工程現場｜${SITE.name}` }],
  }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <main id="main" className="pb-20">
      <section className="border-b border-line py-12">
        <div className="shell">
          <p className="kicker">工程現場</p>
          <h1 className="display mt-3 max-w-xl text-4xl sm:text-5xl">看得見施工，才知道家會變成什麼樣子</h1>
          <p className="mt-4 max-w-xl text-sm text-fg-muted">
            匿名案件。只描述畫面看得見的。坑深、規格、檢查與許可，不由照片推定。
          </p>
        </div>
      </section>
      <section className="shell mt-10 columns-1 gap-8 sm:columns-2">
        {CASES.map((item) => (
          <article key={item.id} className="mb-10 break-inside-avoid">
            <CropFrame>
              <img
                src={item.image}
                alt={`${item.id} ${item.title}`}
                width={800}
                height={1000}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </CropFrame>
            <div className="mt-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-xl">{item.title}</h2>
                <p className="mt-1 text-sm text-fg-muted">{item.note}</p>
              </div>
              <span className="chop shrink-0">{item.id}</span>
            </div>
          </article>
        ))}
      </section>
      <p className="shell mt-4 max-w-2xl text-sm text-fg-muted">
        業主隱私以匿名編號處理。評估自家能不能裝，帶縣市、樓層與現場照片即可。
      </p>
    </main>
  );
}
