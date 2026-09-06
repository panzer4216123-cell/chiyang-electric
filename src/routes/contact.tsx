import { createFileRoute } from "@tanstack/react-router";
import { Couplet } from "@/components/couplet";
import { SITE, SLOGANS } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: `聯絡評估｜${SITE.name}` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main id="main">
      <section className="shell grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="kicker">聯絡評估</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">先說這個家怎麼住</h1>
          <p className="mt-4 max-w-xl text-fg-muted">
            不需要先懂電梯。房屋類型、樓層、想裝的位置，加上樓梯周邊照片。
          </p>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            <li className="grid grid-cols-[3rem_1fr] gap-3 py-4">
              <span className="font-display text-seal">01</span>
              <span>縣市與房屋類型（透天、舊宅、既有建物）</span>
            </li>
            <li className="grid grid-cols-[3rem_1fr] gap-3 py-4">
              <span className="font-display text-seal">02</span>
              <span>樓層、預定位置（樓梯旁、室外、天井）</span>
            </li>
            <li className="grid grid-cols-[3rem_1fr] gap-3 py-4">
              <span className="font-display text-seal">03</span>
              <span>家人怎麼上下樓、最在意什麼</span>
            </li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={SITE.formUrl} target="_blank" rel="noopener noreferrer">
              填需求表
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
        <aside className="border border-seal p-8">
          <Couplet right={SLOGANS.install.line1} left={SLOGANS.install.line2} />
          <p className="mt-8 text-sm text-fg-muted">新梯不好裝，來看現場。裝完不好養，保養也找我們。</p>
          <p className="mt-4 text-xs tracking-widest text-fg-muted">可行性與深度以現勘、圖說、合約為準</p>
        </aside>
      </section>
    </main>
  );
}
