import { site } from "../data/site.config";
import { useTranslation } from "../lib/useTranslation";

export function Venue() {
  const { venue } = site;
  const t = useTranslation();

  return (
    <section id="venue" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">
          {t.venue.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
          {t.venue.heading}
        </h2>
        <p className="mt-4 font-display text-2xl text-accent-deep">{venue.name}</p>
        <address className="mt-3 not-italic leading-7 text-muted">
          {venue.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="mt-5 text-sm leading-7 text-ink/80">{t.venue.directions}</p>
      </div>
    </section>
  );
}
