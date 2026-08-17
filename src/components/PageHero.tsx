import type { ReactNode } from 'react';

export default function PageHero({
  title,
  subtitle,
  image,
  children,
}: {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/20" />
      </div>
      <div className="relative container-mx pb-16 pt-24">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="display-text text-5xl sm:text-6xl lg:text-7xl text-white mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-lg sm:text-xl text-ink-200 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
