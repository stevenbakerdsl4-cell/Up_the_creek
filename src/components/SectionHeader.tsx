import type { ReactNode } from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? '!text-clay-300' : ''}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`display-text text-4xl sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink-50'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-lg mt-5 leading-relaxed ${light ? 'text-ink-300' : 'text-ink-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
