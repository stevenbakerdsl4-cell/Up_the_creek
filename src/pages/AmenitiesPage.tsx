import {
  Tent,
  ShowerHead,
  Waves,
  UtensilsCrossed,
  Flame,
  Trophy,
  Snowflake,
  ShoppingCart,
  Bike,
  Car,
  MapPin,
  Trees,
  Wifi,
  Building2,
  type LucideIcon,
  ArrowRight,
} from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { AMENITIES, NO_AMENITIES } from '@/lib/siteData';
import PageHero from '@/components/PageHero';

const ICON_MAP: Record<string, LucideIcon> = {
  Tent, ShowerHead, Waves, UtensilsCrossed, Flame, Trophy, Snowflake, ShoppingCart, Bike, Car, MapPin, Trees, Wifi, Building2,
};

const PHOTO_STRIP = [
  IMAGES.creekRipples,
  IMAGES.tentsForest,
  IMAGES.campfireBarrel,
  IMAGES.tentCampNight,
];

export default function AmenitiesPage() {
  return (
    <div>
      <PageHero
        title="Amenities"
        subtitle="Everything you need for a comfortable tent camping experience in downtown Moab."
        image={IMAGES.tentsRow}
      />

      {/* Amenities Grid */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">What We Offer</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              Built for<br />tent campers.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-800 rounded-2xl overflow-hidden border border-ink-800">
            {AMENITIES.map((amenity) => {
              const Icon = ICON_MAP[amenity.icon] || Tent;
              return (
                <div
                  key={amenity.title}
                  className="bg-ink-900 p-8 hover:bg-ink-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-clay-500/10 flex items-center justify-center mb-5 group-hover:bg-clay-500 transition-colors">
                    <Icon className="w-6 h-6 text-clay-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink-50 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="font-body text-ink-400 leading-relaxed text-sm">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-bleed photo strip */}
      <section className="py-0 bg-ink-950">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {PHOTO_STRIP.map((src, i) => (
            <div key={i} className="h-64 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* What We Don't Have */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Good to Know</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              What we<br />don't have.
            </h2>
            <p className="font-body text-lg text-ink-400 mt-5 leading-relaxed max-w-xl">
              We believe in keeping it real. Here's what to plan for before you arrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {NO_AMENITIES.map((item) => {
              const Icon = ICON_MAP[item.icon] || Building2;
              return (
                <div key={item.title} className="card p-7 border-l-4 border-l-clay-500">
                  <div className="w-12 h-12 rounded-xl bg-ink-800 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-clay-400" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink-50 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-ink-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — full bleed */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.campCoffee} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>
        <div className="relative container-mx text-center z-10">
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            Ready to book?
          </h2>
          <p className="font-body text-ink-300 mb-6 max-w-xl mx-auto">
            Check our rates and reserve your tent site — we'll confirm within 24 hours.
          </p>
          <Link to="/booking" className="btn-primary text-base">
            View Rates & Reserve
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
