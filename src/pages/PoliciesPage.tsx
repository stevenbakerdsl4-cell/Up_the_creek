import {
  Clock,
  VolumeX,
  Flame,
  Car,
  Trees,
  Bike,
  Building2,
  type LucideIcon,
  ArrowRight,
} from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { POLICIES, SITE } from '@/lib/siteData';
import PageHero from '@/components/PageHero';

const ICON_MAP: Record<string, LucideIcon> = {
  Clock, VolumeX, Flame, Car, Trees, Bike, Building2,
};

export default function PoliciesPage() {
  return (
    <div>
      <PageHero
        title="Policies"
        subtitle="The ground rules. Read these before you arrive so everyone has a great time."
        image={IMAGES.tentsStarry}
      />

      {/* Policies Grid */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POLICIES.map((policy) => {
              const Icon = ICON_MAP[policy.icon] || Clock;
              return (
                <div key={policy.title} className="card p-7">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-clay-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-clay-400" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-ink-50">
                      {policy.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {policy.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2 shrink-0" />
                        <span className="font-body text-ink-400 text-sm leading-relaxed">
                          {rule}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Season Info Bar */}
      <section className="bg-clay-500 text-white">
        <div className="container-mx py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Season', value: SITE.season },
              { label: 'Check-In', value: SITE.checkIn },
              { label: 'Check-Out', value: SITE.checkOut },
            ].map((item) => (
              <div key={item.label}>
                <Clock className="w-8 h-8 mx-auto mb-3 text-white/70" />
                <p className="font-heading text-xs uppercase tracking-[0.15em] text-white/60 mb-1">{item.label}</p>
                <p className="font-display text-2xl tracking-tightest">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx max-w-2xl text-center">
          <h2 className="display-text text-3xl sm:text-4xl text-ink-50 mb-4">
            Still have questions?
          </h2>
          <p className="font-body text-ink-400 mb-8 max-w-lg mx-auto">
            Check our FAQs or reach out — we're happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/faqs" className="btn-primary">
              View FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
