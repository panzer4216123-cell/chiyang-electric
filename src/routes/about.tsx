import { createFileRoute, Link } from "@tanstack/react-router";
import { CropFrame } from "@/components/crop-frame";
import { PhotoReel } from "@/components/photo-reel";
import { ABOUT, PEOPLE, SITE, STORIES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: `關於啟揚｜${SITE.name}` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const founder = PEOPLE[0];
  return (
    <main id="main" className="pb-20">
      <section className="border-b border-line">
        <div className="shell grid items-end gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <CropFrame>
            <img
              src={founder.image}
              alt={`創辦人${founder.name}`}
              width={1100}
              height={1122}
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </CropFrame>
          <div>
            <p className="kicker">{founder.role}</p>
            <h1 className="display mt-3 text-5xl sm:text-6xl">{founder.name}</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed">{ABOUT.lead}</p>
          </div>
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

      <section id="stories" className="border-b border-line py-14">
        <div className="shell">
          <p className="kicker">訪談</p>
          <h2 className="display mt-3 text-3xl">同仁怎麼講</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {STORIES.filter((s) => s.image).map((item) => (
              <article key={item.id}>
                <a href={item.href || SITE.facebook} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={675}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                </a>
                <p className="mt-3 text-base text-seal">{item.kind}</p>
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-base text-fg-muted">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="shell mb-6">
          <p className="kicker">現場</p>
          <h2 className="display mt-3 text-3xl">團體、業務、工務</h2>
        </div>
        <PhotoReel />
        <div className="shell mt-10">
          <Link to="/contact" hash="lead" className="btn btn-primary">
            評估自家
          </Link>
        </div>
      </section>
    </main>
  );
}
