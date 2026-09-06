import { createFileRoute, Link } from "@tanstack/react-router";
import { Couplet } from "@/components/couplet";
import { FacebookMark } from "@/components/facebook-mark";
import { InstagramMark } from "@/components/instagram-mark";
import { LeadForm } from "@/components/lead-form";
import { LOCATIONS, SITE, SLOGANS, SURVEY } from "@/lib/site";

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
            先答這五句。照片有就更好。深度與能不能少動地板，以現勘為準。
          </p>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {SURVEY.map((item, i) => (
              <li key={item} className="grid grid-cols-[3rem_1fr] gap-3 py-4">
                <span className="font-display text-seal">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#lead">
              填需求表
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.freePhoneTel}`}>
              免付費 {SITE.freePhoneDisplay}
            </a>
          </div>
        </div>
        <aside className="border border-seal p-8">
          <Couplet right={SLOGANS.install.line1} left={SLOGANS.install.line2} />
          <p className="mt-8 text-base text-fg-muted">新梯不好裝，來看現場。裝完不好養，保養也找我們。</p>
          <p className="mt-3 font-display text-lg">{SLOGANS.floor.line1}{SLOGANS.floor.line2}</p>
          <p className="mt-2 text-base text-fg-muted">可行性與深度以現勘、圖說、合約為準。不是每戶都能少動地板。</p>
        </aside>
      </section>

      <LeadForm />

      <section className="border-t border-line py-14">
        <div className="shell">
          <p className="kicker">據點</p>
          <h2 className="display mt-3 text-3xl">高雄、台南、台中、桃園</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <article key={loc.id} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl">{loc.name}</h3>
                <p className="mt-3">
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="no-underline">
                    {loc.address}
                  </a>
                </p>
                {loc.phoneDisplay ? (
                  <p className="mt-2">
                    <a href={`tel:${loc.phoneTel}`} className="no-underline">
                      {loc.phoneDisplay}
                    </a>
                    {loc.faxDisplay ? <span className="text-fg-muted">　傳真 {loc.faxDisplay}</span> : null}
                  </p>
                ) : (
                  <p className="mt-2 text-base text-fg-muted">電話請打總公司或免付費專線</p>
                )}
              </article>
            ))}
          </div>
          <p className="mt-8 text-base text-fg-muted">
            信箱{" "}
            <a href={`mailto:${SITE.email}`} className="no-underline">
              {SITE.email}
            </a>
            　免付費{" "}
            <a href={`tel:${SITE.freePhoneTel}`} className="no-underline">
              {SITE.freePhoneDisplay}
            </a>
          </p>
        </div>
      </section>

      <section className="border-t border-line py-14">
        <div className="shell">
          <p className="kicker">給屋主看</p>
          <h2 className="display mt-3 text-3xl">現場、日常、評估</h2>
          <ul className="mt-8 max-w-xl divide-y divide-line border-y border-line">
            <li>
              <Link to="/cases" className="flex justify-between py-4 no-underline">
                <span>工程現場照片</span>
                <span className="text-seal">看</span>
              </Link>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-4 no-underline">
                <span className="inline-flex items-center gap-3">
                  <FacebookMark />
                  臉書日常
                </span>
                <span className="text-seal">開</span>
              </a>
            </li>
            {SITE.instagram ? (
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-4 no-underline">
                  <span className="inline-flex items-center gap-3">
                    <InstagramMark />
                    Instagram
                  </span>
                  <span className="text-seal">開</span>
                </a>
              </li>
            ) : null}
            <li>
              <a href={SITE.reel} target="_blank" rel="noopener noreferrer" className="flex justify-between py-4 no-underline">
                <span>一支施工影片</span>
                <span className="text-seal">開</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
