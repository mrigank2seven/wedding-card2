import { site } from "../data/site.config";
import { useTranslation } from "../lib/useTranslation";
import { MarigoldGarland } from "./Florals";

export function Invitation() {
  const { couple } = site;
  const t = useTranslation();

  return (
    <section id="invitation" className="scroll-mt-6 px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <MarigoldGarland className="mx-auto mb-10 w-full max-w-lg" />
        <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">
          {t.invitation.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
          {t.invitation.heading}
        </h2>
        {t.invitation.paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-5 text-base leading-7 text-muted">
            {paragraph}
          </p>
        ))}
        <p className="mt-8 font-script text-4xl text-accent-deep">
          {t.invitation.signOff}
        </p>
        <p className="mt-1 font-display text-lg text-ink">
          {couple.partnerA} & {couple.partnerB}
        </p>
      </div>
    </section>
  );
}
