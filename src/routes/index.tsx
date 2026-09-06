import { createFileRoute, Link } from "@tanstack/react-router";
import { Couplet } from "@/components/couplet";
import { CropFrame } from "@/components/crop-frame";
import { CASES, FAQS, PAINS, SITE, SLOGANS, STEPS } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main id="main">
      <section className="border-b border-line">
        <div className="shell grid items-end gap-10 py-10 lg:grid-cols-[auto_1fr] lg:py-14">
          <div>
            <Couplet banner="舊透天加梯" right={SLOGANS.install.line1} left={SLOGANS.install.line2} />
            <p className="mt-8 max-w-sm text-sm text-fg-muted">
              空間窄、別家不接、地板不能大挖。先看這個家怎麼住，再談電梯怎麼放。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={SITE.formUrl} target="_blank" rel="noopener noreferrer">
                填需求表
              </a>
              <Link to="/cases" className="btn btn-ghost">
                看現場
              </Link>
            </div>
            <p className="mt-6 text-sm">
              <span className="text-fg-muted">來電　</span>
              <a href={`tel:${SITE.phoneTel}`} className="tracking-wide no-underline">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
          <CropFrame>
            <figure>
              <img
                src="/images/branded/qy-040-finished-qy-logo.jpg"
                alt="樓梯旁加裝電梯的完成畫面"
                width={960}
                height={1280}
                className="h-[min(78vh,640px)] w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption className="flex items-center justify-between py-3 text-xs tracking-widest text-fg-muted">
                <span className="chop">QY-040</span>
                <span>匿名工程 · 完成面</span>
              </figcaption>
            </figure>
          </CropFrame>
        </div>
      </section>

      <div className="overflow-hidden border-b border-line py-3">
        <p className="kicker whitespace-nowrap text-center">
          舊透天　／　空間太窄　／　別家不接　／　地板不能大挖　／　裝完也養
        </p>
      </div>

      <section className="bg-bg-ink text-fg-on-ink">
        <div className="shell grid items-end gap-10 py-14 lg:grid-cols-[1fr_auto]">
          <CropFrame>
            <img
              src="/images/branded/qy-040-progress-qy-logo.jpg"
              alt="井道安裝中"
              width={1108}
              height={1477}
              className="h-[min(64vh,520px)] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </CropFrame>
          <div className="text-fg-on-ink">
            <Couplet banner="裝完也養" right={SLOGANS.maintain.line1} left={SLOGANS.maintain.line2} />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16">
        <div className="shell">
          <p className="hengpi">{SLOGANS.floor.line1}{SLOGANS.floor.line2}</p>
          <p className="mt-4 max-w-lg text-sm text-fg-muted">
            怕動防水、怕挖太深、怕把家拆掉。深度與做法以現勘為準，這裡不寫死規格。
          </p>
          <div className="mt-10 grid border-t border-l border-line sm:grid-cols-2">
            {PAINS.map((item, i) => (
              <article key={item.id} className="border-b border-r border-line p-6 sm:p-8">
                <p className="font-display text-3xl text-seal">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-fg-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="shell mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">工程現場</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">不是樣品屋</h2>
          </div>
          <Link to="/cases" className="text-sm tracking-widest no-underline hover:text-seal">
            全部照片 →
          </Link>
        </div>
        <div className="film pl-4 md:pl-[max(1rem,calc((100vw-1180px)/2+1rem))]">
          {CASES.map((item) => (
            <Link key={item.id} to="/cases">
              <img src={item.image} alt={item.title} width={640} height={800} loading="lazy" decoding="async" />
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="chop">{item.id}</span>
                <span className="text-xs text-fg-muted">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line py-16">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="kicker">流程</p>
            <h2 className="display mt-3 text-3xl">四步，先說能不能裝</h2>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {STEPS.map((step) => (
              <li key={step.n} className="grid grid-cols-[3.5rem_1fr] gap-4 py-5">
                <span className="font-display text-xl text-seal">{step.n}</span>
                <div>
                  <h3 className="font-display text-xl">{step.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16" id="faq">
        <div className="shell max-w-3xl">
          <p className="kicker">屋主問</p>
          <h2 className="display mt-3 text-3xl">先問這幾個</h2>
          <div className="mt-8 border-y border-line">
            {FAQS.map((item) => (
              <details key={item.id} className="group border-b border-line py-4 last:border-b-0">
                <summary className="cursor-pointer list-none font-display text-lg marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-seal group-open:hidden">＋</span>
                    <span className="hidden text-seal group-open:inline">－</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-fg-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-seal py-16 text-accent-fg">
        <div className="shell">
          <p className="kicker text-accent-fg/70">下一步</p>
          <h2 className="display mt-3 text-4xl">想裝電梯，先問啟揚</h2>
          <p className="mt-4 max-w-lg text-accent-fg/85">
            留下房屋類型、樓層和照片。能裝、不能裝，我們講清楚。
          </p>
          <p className="mt-8 font-display text-4xl tracking-wide sm:text-5xl">
            <a href={`tel:${SITE.phoneTel}`} className="no-underline">
              {SITE.phoneDisplay}
            </a>
          </p>
          <a
            className="btn btn-on-ink mt-8"
            href={SITE.formUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            填需求表
          </a>
        </div>
      </section>
    </main>
  );
}
