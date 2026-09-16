import { createFileRoute, Link } from "@tanstack/react-router";
import { StoryCard } from "@/components/story-card";
import { CUSTOMER_STORIES, SITE } from "@/lib/site";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [{ title: `顧客訪談｜${SITE.name}` }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <main id="main" className="pb-20">
      <section className="border-b border-line py-12">
        <div className="shell max-w-3xl">
          <p className="kicker">顧客訪談</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">屋主怎麼講</h1>
          <p className="mt-4 max-w-xl text-lg text-fg-muted">影片在臉書。同仁訪談在關於啟揚。</p>
        </div>
      </section>
      <section className="shell py-12">
        <div className="grid gap-10 sm:grid-cols-2">
          {CUSTOMER_STORIES.map((item) => (
            <StoryCard key={item.id} item={item} />
          ))}
        </div>
        <p className="mt-12 flex flex-wrap gap-3">
          <Link to="/" hash="customer-stories" className="btn btn-primary">
            回首頁訪談
          </Link>
          <Link to="/about" hash="stories" className="btn btn-ghost">
            同仁訪談
          </Link>
        </p>
      </section>
    </main>
  );
}
