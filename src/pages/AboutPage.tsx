import { ArrowRight, Heart, Leaf, Waves, History } from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import PageHero from '@/components/PageHero';

const TIMELINE = [
  {
    year: '1989',
    title: 'The Beginning',
    description: 'Up the Creek Campground is established, offering tent-only camping in the heart of Moab. For over three decades, it serves multitudes of happy campers.',
    image: IMAGES.tentsForest,
  },
  {
    year: '2022',
    title: 'The Flood',
    description: 'A 500-year flood damages and alters the property significantly, forcing the campground to close for the remainder of the season.',
    image: IMAGES.creekWaterfall,
  },
  {
    year: '2023+',
    title: 'Rebuilding Greener',
    description: 'Using the clean slate as an opportunity, the campground is rebuilt to be more sustainable and environmentally friendly to the desert surroundings.',
    image: IMAGES.tentsColorful,
  },
  {
    year: 'Today',
    title: 'Your Desert Oasis',
    description: 'Up the Creek continues as an oasis in the high desert — the perfect base camp for your adventures, with a fresh look and the same welcoming spirit.',
    image: IMAGES.campfireDusk,
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="Our Story"
        subtitle="From 1989 to today — a campground shaped by the desert, the creek, and a community of campers."
        image={IMAGES.tentsForest}
      />

      {/* Story — split with full-bleed image */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
              <img
                src={IMAGES.creekStream}
                alt="Stream through forest"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-3">Est. 1989</p>
              <h2 className="display-text text-4xl lg:text-5xl text-ink-50 mb-6">
                A Moab original
              </h2>
              <div className="space-y-4 font-body text-ink-300 leading-relaxed">
                <p>
                  Up the Creek Campground was established in 1989 and has served
                  multitudes of happy campers since then. For over three decades, it has
                  been a beloved base camp for adventurers exploring Arches and
                  Canyonlands National Parks.
                </p>
                <p>
                  In 2022, the campground sustained a 500-year flood which damaged and
                  altered the property significantly, forcing it to close for the
                  remainder of the season. As we rebuild, we are taking the opportunity
                  of a clean slate to make the campground more sustainable and
                  environmentally friendly to our desert surroundings.
                </p>
                <p>
                  Up the Creek will have a different look and feel, yet will still serve
                  as an oasis in the high desert — the perfect base camp for your
                  adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — alternating full-bleed */}
      <section className="bg-ink-900">
        <div className="container-mx py-20 lg:py-28">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">The Journey</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              Three decades<br />at the creek.
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`h-72 lg:h-[500px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className={`flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-20 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-clay-500 flex items-center justify-center">
                      {i === 0 && <History className="w-5 h-5 text-white" />}
                      {i === 1 && <Waves className="w-5 h-5 text-white" />}
                      {i === 2 && <Leaf className="w-5 h-5 text-white" />}
                      {i === 3 && <Heart className="w-5 h-5 text-white" />}
                    </div>
                    <p className="font-display text-3xl tracking-tightest text-clay-400">{item.year}</p>
                  </div>
                  <h3 className="display-text text-3xl text-ink-50 mb-3">{item.title}</h3>
                  <p className="font-body text-ink-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-3">Rebuilding Greener</p>
              <h2 className="display-text text-4xl lg:text-5xl text-ink-50 mb-6">
                Sustainability<br />in the desert.
              </h2>
              <div className="space-y-4 font-body text-ink-300 leading-relaxed">
                <p>
                  The 2022 flood gave us a clean slate. As we rebuild, we are committed to
                  making Up the Creek more environmentally friendly to our fragile desert
                  ecosystem — from water-conscious landscaping to sustainable facilities.
                </p>
                <p>
                  The perennial stream that runs through the campground is part of what
                  makes this place special. We are working to protect it and the cottonwood
                  trees that provide shade, so future generations of campers can enjoy this
                  oasis for decades to come.
                </p>
              </div>
              <Link to="/amenities" className="btn-primary mt-8">
                See What We Offer
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={IMAGES.tentsColorful}
                alt="Colorful tents among trees"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Host note — full bleed */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.campfireCozy} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/75" />
        </div>
        <div className="relative container-mx max-w-3xl text-center z-10">
          <div className="w-16 h-16 rounded-full bg-clay-500 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <p className="eyebrow mb-4 !text-clay-300">A Note From Your Hosts</p>
          <p className="font-body text-xl lg:text-2xl text-ink-100 leading-relaxed italic mb-6">
            "We've been welcoming campers to Up the Creek for over 30 years. Whether you're
            here to hike Arches, bike the Slickrock Trail, or just relax by the creek, we
            want your stay to be the highlight of your Moab trip."
          </p>
          <p className="font-heading font-bold text-ink-50 uppercase tracking-wider">— The Up the Creek Team</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/booking" className="btn-primary">
              Reserve a Campsite
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
