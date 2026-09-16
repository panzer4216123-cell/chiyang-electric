import { CropFrame } from "@/components/crop-frame";
import { STORIES } from "@/lib/site";

type Story = (typeof STORIES)[number];

export function StoryCard({ item }: { item: Story }) {
  return (
    <article>
      <CropFrame>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
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
      <p className="mt-4 text-base text-seal">{item.kind}</p>
      <h3 className="font-display text-xl">{item.title}</h3>
      <p className="mt-2 text-base text-fg-muted">{item.note}</p>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-base no-underline hover:text-seal"
      >
        看這支影片 →
      </a>
    </article>
  );
}
