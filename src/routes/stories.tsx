import { createFileRoute, Link } from "@tanstack/react-router";
import { CropFrame } from "@/components/crop-frame";
import { SITE, STORIES } from "@/lib/site";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [{ title: `訪談｜${SITE.name}` }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <main id="main" className="pb-20">
      <section className="border-b border-line py-12">
        <div className="shell max-w-3xl">
          <p className="kicker">訪談</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">同仁先講。屋主接著講。</h1>
          <p className="mt-4 max-w-xl text-lg text-fg-muted">
            影片在臉書。這裡放封面，方便業務拿給屋主看。台南顧客訪談拍完再補。
          </p>
        </div>
      </section>
      <section className="shell py-12">
        <div className="grid gap-10 sm:grid-cols-2">
          {STORIES.map((item) => (
            <article key={item.id}>
              {item.image ? (
                <CropFrame>
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
                </CropFrame>
              ) : (
                <div className="flex aspect-video items-end border border-dashed border-line bg-bg-muted p-6">
                  <p className="font-display text-2xl">{item.status}</p>
                </div>
              )}
              <p className="mt-4 text-base text-seal">{item.kind}</p>
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-2 text-base text-fg-muted">{item.note}</p>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-base no-underline hover:text-seal">
                  去臉書看 →
                </a>
              ) : null}
            </article>
          ))}
        </div>
        <p className="mt-12">
          <Link to="/contact" hash="lead" className="btn btn-primary">
            評估自家
          </Link>
        </p>
      </section>
    </main>
  );
}
