import { SITE } from "@/lib/site";

const EMBED = `${SITE.formEmbed}?embedded=true`;

export function LeadForm() {
  return (
    <section id="lead" className="border-t border-line py-14">
      <div className="shell">
        <p className="kicker">需求表</p>
        <h2 className="display mt-3 text-3xl">留下這個家怎麼住</h2>
        <p className="mt-4 max-w-xl text-base text-fg-muted">
          姓名、電話、樓層。照片有就更好。這份表只收新梯需求。保養、維修請直接打電話。
        </p>
        <p className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href={SITE.formUrl} target="_blank" rel="noopener noreferrer">
            開新分頁填需求表
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            保養請來電 {SITE.phoneDisplay}
          </a>
        </p>
        <p className="mt-4 text-base text-fg-muted">若下面沒出現表單，請點上面開新分頁。</p>
        <div className="mt-4 overflow-hidden border border-line bg-bg-elevated">
          <iframe
            title="啟揚需求表"
            src={EMBED}
            className="h-[min(90vh,52rem)] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
