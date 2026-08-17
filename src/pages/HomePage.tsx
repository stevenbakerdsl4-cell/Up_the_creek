import { useEffect, useState } from 'react';
import {
  Tent,
  Waves,
  Trees,
  ShowerHead,
  MapPin,
  VolumeX,
  ArrowRight,
  ArrowDown,
  Quote,
  CalendarDays,
  Users,
  Car,
  Flame,
  Bike,
  Star,
} from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { SITE, RATES, WEEKEND_SURCHARGE } from '@/lib/siteData';
import StarRating from '@/components/StarRating';
import type { Review } from '@/lib/types';
import { supabase } from '@/lib/supabase';

const STATS = [
  { value: '16', label: 'Tent Sites' },
  { value: '2', label: 'Blocks to Main St' },
  { value: '1989', label: 'Est.' },
  { value: '5min', label: 'To Arches NP' },
];

const FEATURES = [
  { icon: Tent, title: 'Tent-Only Walk-In', description: 'No RVs. No cars. Just 16 peaceful sites under shade trees, steps from your parking spot.' },
  { icon: VolumeX, title: 'Actually Quiet', description: 'Without vehicle traffic, the campground stays calm. A real oasis in the middle of Moab.' },
  { icon: Waves, title: 'Creek-Side Setting', description: 'Camp next to a cooling perennial stream, surrounded by giant cottonwood trees.' },
  { icon: ShowerHead, title: 'Clean Bathhouse', description: 'Hot showers, flush toilets, daily cleaned. Plus an outdoor dishwashing sink.' },
  { icon: MapPin, title: 'Walk to Downtown', description: 'Two blocks to Main Street — restaurants, bars, gear shops, and coffee, all on foot.' },
  { icon: Flame, title: 'Base Camp for Adventure', description: 'Minutes from Arches, Canyonlands, and the Slickrock Bike Trail. Go hard, come home to shade.' },
];

const GALLERY = [
  { src: IMAGES.tentsForest, alt: 'Tents under shade trees', label: 'Creek-side sites' },
  { src: IMAGES.campfireFriends, alt: 'Friends around a campfire', label: 'Evening hangs' },
  { src: IMAGES.creekForest, alt: 'Creek through the campground', label: 'The creek' },
  { src: IMAGES.tentStarrySky, alt: 'Tent under starry sky', label: 'Dark skies' },
  { src: IMAGES.campCoffee, alt: 'Morning coffee at camp', label: 'Slow mornings' },
  { src: IMAGES.hikersCanyon, alt: 'Hikers in red rock canyon', label: 'Adventure awaits' },
];

export default function HomePage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    supabase
      .from('reviews')
      .select('*')
      .order('rating', { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data && data.length > 0) setReviews(data as Review[]);
      });
  }, []);

  return (
    <div>
      {/* Hero — full bleed, immersive */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroRedRock}
            alt="Red rock desert landscape near Moab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950/30 to-ink-950" />
        </div>

        <div className="relative container-mx z-10 pt-20">
          <div className="max-w-4xl animate-fade-up">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-clay-300 mb-5">
              Est. 1989 · Downtown Moab, Utah
            </p>
            <h1 className="display-text text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white mb-6">
              Up the<br />Creek
            </h1>
            <p className="font-body text-xl sm:text-2xl text-ink-200 max-w-2xl leading-relaxed mb-10">
              Your desert oasis for downtown Moab camping. 16 tent-only walk-in sites
              under shade trees, next to a cooling perennial stream.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/booking" className="btn-primary text-base">
                Reserve a Campsite
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/amenities" className="btn-outline text-base">
                Explore the Camp
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-clay-500 text-white">
        <div className="container-mx py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl lg:text-5xl tracking-tightest">{stat.value}</p>
                <p className="font-heading text-xs uppercase tracking-[0.15em] text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story — full bleed image + text overlay */}
      <section className="relative py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img src={IMAGES.creekForest} alt="Creek flowing through forest" className="w-full h-full object-cover" />
          </div>
          <div className="bg-ink-900 flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <div className="max-w-lg">
              <p className="eyebrow mb-4">The Story</p>
              <h2 className="display-text text-4xl lg:text-5xl text-ink-50 mb-6">
                An oasis of peace in the heart of Moab
              </h2>
              <div className="space-y-4 font-body text-ink-300 leading-relaxed">
                <p>
                  Your quest to find a tent-only Moab campground can stop here. Just two
                  blocks from Main Street, Up the Creek is a cozy, urban campground — nestled
                  within a grove of large shade trees next to a cooling perennial stream.
                </p>
                <p>
                  Our 16-site, tent-only walk-in campground is off the beaten path, yet a
                  short walk to Moab's restaurants and shops. Close to Arches and Canyonlands
                  National Parks — easy access to any adventure you choose.
                </p>
              </div>
              <Link to="/about" className="btn-light mt-8">
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features — bold grid */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Why Stay Here</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              Everything you need.<br />Nothing you don't.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-800 rounded-2xl overflow-hidden border border-ink-800">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-ink-900 p-8 hover:bg-ink-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-clay-500/10 flex items-center justify-center mb-5 group-hover:bg-clay-500 transition-colors">
                  <feature.icon className="w-6 h-6 text-clay-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-ink-50 mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-ink-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed photo break */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={IMAGES.moabSunset} alt="Moab desert at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink-950/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tightest max-w-3xl text-balance">
              "Base all of your adventures from Moab's best campground."
            </p>
          </div>
        </div>
      </section>

      {/* Rates — bold, visual */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-3">2026 Season · March 20 – Nov 2</p>
              <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50 mb-5">
                Simple<br />per-person<br />pricing.
              </h2>
              <p className="font-body text-lg text-ink-400 leading-relaxed mb-8 max-w-md">
                No hidden fees. No complicated tiers. Just per-person nightly rates with a
                small weekend bump. Tax and fees not included (15.92%).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary">
                  Reserve Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/policies" className="btn-ghost">
                  View Policies
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {RATES.map((rate, i) => (
                <div
                  key={rate.people}
                  className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                    i === 0
                      ? 'bg-clay-500 border-clay-400 text-white'
                      : 'bg-ink-900 border-ink-800 text-ink-50 hover:border-clay-600'
                  }`}
                >
                  <Users className={`w-6 h-6 mb-3 ${i === 0 ? 'text-white/80' : 'text-clay-400'}`} />
                  <p className={`font-heading text-xs uppercase tracking-wider mb-1 ${i === 0 ? 'text-white/70' : 'text-ink-400'}`}>
                    {rate.people} {rate.people === 1 ? 'Person' : 'People'}
                  </p>
                  <p className="font-display text-4xl tracking-tightest">
                    ${rate.price}
                    <span className={`font-body text-sm font-normal ${i === 0 ? 'text-white/60' : 'text-ink-500'}`}>/night</span>
                  </p>
                </div>
              ))}
              <div className="col-span-2 p-4 bg-ink-900 rounded-xl border border-ink-800 flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-clay-400 shrink-0" />
                <p className="font-body text-sm text-ink-400">
                  Fridays & Saturdays add ${WEEKEND_SURCHARGE}/person. No payment collected online — we confirm your booking by phone or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — full bleed masonry feel */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Life at the Creek</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              See it for<br />yourself.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  i === 0 ? 'lg:col-span-2 lg:row-span-2 h-64 lg:h-auto' : 'h-48 lg:h-56'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-heading font-bold text-sm uppercase tracking-wider text-white">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/amenities" className="btn-ghost">
              See All Amenities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="bg-clay-500 text-white">
        <div className="container-mx py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CalendarDays, label: 'Season', value: SITE.season },
              { icon: Tent, label: 'Check-In / Out', value: `${SITE.checkIn} / ${SITE.checkOut}` },
              { icon: Car, label: 'Tent-Only', value: 'Walk-in, no RVs' },
              { icon: MapPin, label: 'Location', value: 'Downtown Moab' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-heading text-[10px] uppercase tracking-[0.15em] text-white/60 mb-0.5">{item.label}</p>
                  <p className="font-heading font-bold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Word on the Trail</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              What campers<br />say.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(reviews.length > 0 ? reviews : []).map((review) => (
              <div key={review.id} className="card p-8 flex flex-col">
                <Quote className="w-8 h-8 text-clay-500 mb-5" />
                <p className="font-body text-ink-300 leading-relaxed flex-1 italic">
                  "{review.quote}"
                </p>
                <div className="mt-6 pt-6 border-t border-ink-800">
                  <StarRating rating={review.rating} />
                  <p className="font-heading font-bold text-ink-50 mt-3">{review.author_name}</p>
                  <p className="font-body text-xs text-ink-500">via {review.source}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-ghost">
              Read All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — full bleed */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.tentStarrySky} alt="Tent under the stars" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/70" />
        </div>
        <div className="relative container-mx text-center z-10">
          <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl text-white mb-6 text-balance">
            Your Moab<br />adventure starts<br />at the creek.
          </h2>
          <p className="font-body text-lg text-ink-200 max-w-xl mx-auto mb-8 leading-relaxed">
            Reserve your tent site today. We'll confirm your booking and help you
            plan the perfect stay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking" className="btn-primary text-base">
              Reserve a Campsite
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${SITE.phone}`} className="btn-outline text-base">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
