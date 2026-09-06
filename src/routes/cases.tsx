import { createFileRoute, Link } from "@tanstack/react-router";
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
          <p className="kicker">工程檔案</p>
          <h1 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">現場看得到，才拿得出去跟屋主講</h1>
          <p className="mt-4 max-w-xl text-base text-fg-muted">
            舊站工程實績 {CASES.length} 案。匿名編號。只寫畫面看得見的。新案持續補上。
          </p>
        </div>
      </section>
      <section className="shell mt-10 columns-1 gap-8 sm:columns-2 lg:columns-3">
        {CASES.map((item) => (
          <article key={item.id} id={item.id} className="mb-10 break-inside-avoid">
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
              <h2 className="font-display text-xl">{item.title}</h2>
              <span className="chop shrink-0">{item.id}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="border-t border-line py-12">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-base text-fg-muted">
            業主隱私以編號處理。有新的完成面，補進這頁。規格、檢查、許可仍以個案文件為準。
          </p>
          <Link to="/contact" className="btn btn-primary">
            評估自家
          </Link>
        </div>
      </section>
    </main>
  );
}
