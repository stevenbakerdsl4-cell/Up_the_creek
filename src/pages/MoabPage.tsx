import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { THINGS_TO_DO, SITE } from '@/lib/siteData';
import PageHero from '@/components/PageHero';

const IMAGE_MAP: Record<string, string> = {
  archesDelicate: IMAGES.archesDelicate,
  canyonlandsSunrise: IMAGES.canyonlandsSunrise,
  bikingDesert: IMAGES.bikingDesert,
  coloradoRiver: IMAGES.coloradoRiver,
  archesGolden: IMAGES.archesGolden,
  creekRipples: IMAGES.creekRipples,
};

const PHOTO_STRIP = [
  IMAGES.archesSouthWindow,
  IMAGES.bikingSunset,
  IMAGES.canyonlandsAerial,
  IMAGES.archesVisitors,
];

const RESOURCES = [
  { title: 'Laundromat', info: '3 blocks · Open 24/7 · Free WiFi' },
  { title: 'Library', info: 'Short walk · Free internet' },
  { title: 'Coffee Shops', info: '2 blocks to Main St · WiFi' },
  { title: 'Restaurants & Shops', info: '2 blocks · Walk to dining' },
];

export default function MoabPage() {
  return (
    <div>
      <PageHero
        title="About Moab"
        subtitle="Home to Arches and Canyonlands. Surrounded by the most stunning red rock landscapes on Earth."
        image={IMAGES.archesDelicate}
      />

      {/* Intro — split with full-bleed */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-3">The Destination</p>
              <h2 className="display-text text-4xl lg:text-5xl text-ink-50 mb-6">
                Moab, Utah.
              </h2>
              <div className="space-y-4 font-body text-ink-300 leading-relaxed">
                <p>
                  Moab, Utah, home to Arches and Canyonlands National Parks, is surrounded
                  by some of the most stunning red rock landscapes on Earth. Moab's unique
                  combination of small resort town hospitality, beautiful scenery, and the
                  cool waters of the Colorado River has made it one of the most sought-after
                  destinations in the American Southwest.
                </p>
                <p>
                  Whether you're here to hike among sandstone arches, mountain bike the
                  world-famous Slickrock Trail, raft the Colorado River, or simply soak in
                  the desert scenery, Moab offers adventure for everyone — and Up the Creek
                  is your perfect base camp.
                </p>
              </div>
              <Link to="/booking" className="btn-primary mt-8">
                Plan Your Stay
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={IMAGES.canyonlandsSunset} alt="Canyonlands at sunset" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do — bold cards with big photos */}
      <section className="section-pad bg-ink-900">
        <div className="container-mx">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Things to Do</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              Adventure is<br />minutes away.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THINGS_TO_DO.map((activity) => (
              <div
                key={activity.name}
                className="group rounded-2xl overflow-hidden bg-ink-950 border border-ink-800 hover:border-clay-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={IMAGE_MAP[activity.image]}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-clay-400" />
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-clay-400">
                      {activity.distance}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ink-50 mb-2">
                    {activity.name}
                  </h3>
                  <p className="font-body text-sm text-ink-400 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-0 bg-ink-900">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {PHOTO_STRIP.map((src, i) => (
            <div key={i} className="h-72 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Resources */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx max-w-4xl">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">Practical Info</p>
            <h2 className="display-text text-4xl sm:text-5xl text-ink-50">
              Nearby<br />resources.
            </h2>
            <p className="font-body text-lg text-ink-400 mt-5">
              Everything you might need is a short walk or drive from the campground.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESOURCES.map((resource) => (
              <div key={resource.title} className="card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-clay-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-clay-400" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink-50 mb-1">{resource.title}</h3>
                  <p className="font-body text-sm text-ink-400">{resource.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full bleed */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hikersCanyon} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/75" />
        </div>
        <div className="relative container-mx text-center z-10">
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            Base your adventure<br />at the creek.
          </h2>
          <p className="font-body text-ink-200 mb-6 max-w-xl mx-auto">
            Walking distance to downtown, minutes from the parks, a quiet place to rest.
          </p>
          <Link to="/booking" className="btn-primary text-base">
            Reserve Your Site
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
