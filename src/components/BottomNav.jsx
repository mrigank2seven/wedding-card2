import { useEffect, useState } from "react";
import { navItems } from "../data/site.config";
import { useTranslation } from "../lib/useTranslation";

export function BottomNav() {
  const t = useTranslation();
  const [active, setActive] = useState(navItems[0]?.id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-40 w-[min(100%-1rem,55rem)] -translate-x-1/2"
      aria-label="Page sections"
    >
      <div className="nav-scroll rounded-full border border-gold/30 bg-page/95 px-1 py-1 shadow-lg backdrop-blur">
        <ul className="flex min-w-max items-center justify-center gap-0.5">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-accent-deep text-page shadow-md"
                      : "bg-gold/10 text-accent-deep hover:bg-gold/20"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t.nav[item.id]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
