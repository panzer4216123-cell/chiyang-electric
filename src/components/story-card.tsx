import { CropFrame } from "@/components/crop-frame";
import { STORIES } from "@/lib/site";

type Story = (typeof STORIES)[number];

export function StoryCard({ item }: { item: Story }) {
  return (
    <article>
      <CropFrame>
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="relative block no-underline">
          <img
            src={item.image}
            alt={item.title}
            width={1200}
            height={675}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
          <span className="play-mark" aria-hidden>
            <span className="play-mark-tri" />
          </span>
          <span className="sr-only">看影片</span>
        </a>
      </CropFrame>
      <p className="mt-4 text-base text-seal">{item.kind}</p>
      <h3 className="font-display text-xl">{item.title}</h3>
      <p className="mt-2 text-base text-fg-muted">{item.note}</p>
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-4">
        看影片
      </a>
    </article>
  );
}
