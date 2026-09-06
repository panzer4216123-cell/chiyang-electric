import { TEAM_PHOTOS } from "@/lib/site";

export function PhotoReel() {
  const loop = [...TEAM_PHOTOS, ...TEAM_PHOTOS];
  return (
    <div className="reel" aria-label="公司照片">
      <div className="reel-track">
        {loop.map((item, i) => (
          <figure key={`${item.src}-${i}`}>
            <img src={item.src} alt={item.alt} width={1400} height={1050} loading="lazy" decoding="async" />
            <figcaption>{item.alt}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
