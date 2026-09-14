import { useState, type FormEvent } from "react";
import { HOUSE_TYPES, LEAD_SOURCES, SITE } from "@/lib/site";

const fieldClass = "mt-1 w-full border border-line bg-bg px-3 py-3 text-base";

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setBusy(true);
    try {
      await fetch(SITE.formAction, { method: "POST", mode: "no-cors", body: new FormData(form) });
      setSent(true);
    } catch {
      form.submit();
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="lead" className="border-t border-line py-14">
      <div className="shell">
        <p className="kicker">需求表</p>
        <h2 className="display mt-3 text-3xl">在這頁填即可</h2>
        <p className="mt-4 max-w-xl text-base text-fg-muted">
          姓名、電話、樓層。照片之後再傳。這份只收新梯需求。保養、維修請直接打電話。
        </p>
        {sent ? (
          <p className="mt-8 max-w-xl text-lg">已收到。啟揚會先看需求，再與你聯絡。不是報價，能不能裝以現勘為準。</p>
        ) : (
          <form className="mt-8 max-w-xl space-y-5" action={SITE.formAction} method="post" onSubmit={onSubmit}>
            <label className="block">
              姓名
              <input className={fieldClass} name={SITE.formEntries.name} required autoComplete="name" />
            </label>
            <label className="block">
              電話
              <input className={fieldClass} name={SITE.formEntries.phone} required inputMode="tel" autoComplete="tel" />
            </label>
            <label className="block">
              縣市／區域
              <input className={fieldClass} name={SITE.formEntries.city} placeholder="例：高雄市大社區" />
            </label>
            <label className="block">
              幾樓到幾樓
              <input className={fieldClass} name={SITE.formEntries.floors} placeholder="例：1到3樓" />
            </label>
            <fieldset>
              <legend>房屋類型</legend>
              <div className="mt-2 flex flex-wrap gap-4">
                {HOUSE_TYPES.map((item) => (
                  <label key={item} className="inline-flex items-center gap-2">
                    <input type="radio" name={SITE.formEntries.house} value={item} required />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="block">
              照片（選填）
              <input className={fieldClass} name={SITE.formEntries.photo} placeholder="之後用電話傳或現勘再拍即可" />
            </label>
            <fieldset>
              <legend>你從哪裡看到啟揚</legend>
              <div className="mt-2 flex flex-wrap gap-3">
                {LEAD_SOURCES.map((item) => (
                  <label key={item.id} className="inline-flex items-center gap-2">
                    <input type="radio" name={SITE.formEntries.source} value={item.value} />
                    {item.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="flex flex-wrap gap-3">
              <button className="btn btn-primary" type="submit" disabled={busy}>
                {busy ? "送出中" : "送出需求"}
              </button>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                保養請來電 {SITE.phoneDisplay}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
