import { createFileRoute, Link } from "@tanstack/react-router";
import { CropFrame } from "@/components/crop-frame";
import { ABOUT, PEOPLE, SITE, TEAM_PHOTOS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: `關於啟揚｜${SITE.name}` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main id="main" className="pb-20">
      <section className="border-b border-line py-12">
        <div className="shell max-w-3xl">
          <p className="kicker">{ABOUT.kicker}</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">{ABOUT.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">{ABOUT.lead}</p>
        </div>
      </section>

      <section className="border-b border-line py-14">
        <div className="shell grid gap-10 lg:grid-cols-3">
          {ABOUT.stages.map((item) => (
            <article key={item.n}>
              <p className="font-display text-3xl text-seal">{item.n}</p>
              <h2 className="mt-3 font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-base text-fg-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line py-14">
        <div className="shell">
          <p className="kicker">誰在做</p>
          <h2 className="display mt-3 text-3xl">創辦人、業務、工務</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {PEOPLE.map((person) => (
              <article key={person.id}>
                {person.image ? (
                  <CropFrame>
                    <img
                      src={person.image}
                      alt={person.name}
                      width={800}
                      height={1000}
                      className="aspect-[3/4] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </CropFrame>
                ) : (
                  <div className="flex aspect-[3/4] items-end border border-line bg-bg-muted p-5">
                    <p className="font-display text-2xl">{person.name}</p>
                  </div>
                )}
                <p className="mt-4 text-base text-fg-muted">{person.role}</p>
                <h3 className="font-display text-2xl">{person.name}</h3>
                <p className="mt-2 text-base text-fg-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="shell">
          <p className="kicker">一起做</p>
          <h2 className="display mt-3 text-3xl">開會、聚餐、同一桌</h2>
          <div className="mt-8 columns-1 gap-6 sm:columns-2">
            {TEAM_PHOTOS.map((item) => (
              <figure key={item.src} className="mb-6 break-inside-avoid">
                <CropFrame>
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={1400}
                    height={1050}
                    className="w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </CropFrame>
              </figure>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="btn btn-primary">
              評估自家
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
