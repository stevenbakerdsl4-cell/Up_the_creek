import { useEffect, useState } from 'react';
import { Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { SITE } from '@/lib/siteData';
import PageHero from '@/components/PageHero';
import StarRating from '@/components/StarRating';
import { supabase } from '@/lib/supabase';
import type { Review } from '@/lib/types';

const REVIEW_SOURCES = [
  { name: 'Hipcamp', url: SITE.social.hipcamp },
  { name: 'The Dyrt', url: SITE.social.thedyrt },
  { name: 'Tripadvisor', url: SITE.social.tripadvisor },
  { name: 'Yelp', url: SITE.social.yelp },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('reviews')
      .select('*')
      .order('rating', { ascending: false })
      .then(({ data }) => {
        if (data) setReviews(data as Review[]);
        setLoading(false);
      });
  }, []);

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '4.8';

  return (
    <div>
      <PageHero
        title="Reviews"
        subtitle="What campers say about staying at Up the Creek."
        image={IMAGES.campfireFriends}
      />

      {/* Summary */}
      <section className="py-16 bg-ink-950">
        <div className="container-mx">
          <div className="card p-8 lg:p-12 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <p className="font-display text-6xl tracking-tightest text-ink-50">{avgRating}</p>
              <div className="text-left">
                <StarRating rating={Math.round(Number(avgRating))} size="lg" />
                <p className="font-body text-sm text-ink-500 mt-1">
                  Based on {reviews.length || 9} reviews
                </p>
              </div>
            </div>
            <p className="font-body text-ink-400 leading-relaxed">
              Campers consistently praise Up the Creek for its clean facilities, quiet
              atmosphere, friendly hosts, and unbeatable downtown Moab location.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="pb-20 lg:pb-28 bg-ink-950">
        <div className="container-mx">
          {loading ? (
            <div className="text-center py-16">
              <p className="font-body text-ink-500">Loading reviews...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="card p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="w-8 h-8 text-clay-500" />
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-clay-400 bg-clay-500/10 px-3 py-1 rounded-full">
                      {review.source}
                    </span>
                  </div>
                  <p className="font-body text-ink-300 leading-relaxed flex-1 italic">
                    "{review.quote}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-ink-800">
                    <StarRating rating={review.rating} />
                    <p className="font-heading font-bold text-ink-50 mt-3">{review.author_name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Read More */}
      <section className="section-pad bg-ink-900">
        <div className="container-mx max-w-3xl text-center">
          <p className="eyebrow mb-3">Read More</p>
          <h2 className="display-text text-4xl lg:text-5xl text-ink-50 mb-5">
            Find us online.
          </h2>
          <p className="font-body text-ink-400 mb-10 max-w-xl mx-auto">
            Read full reviews and leave your own on any of these platforms.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEW_SOURCES.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:border-clay-600 hover:-translate-y-1 transition-all duration-300 group"
              >
                <ExternalLink className="w-6 h-6 text-clay-400 mx-auto mb-3 group-hover:text-clay-300 transition-colors" />
                <p className="font-heading font-bold text-ink-50">{source.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.campfireNightTents} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>
        <div className="relative container-mx text-center z-10">
          <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            Come experience it.
          </h2>
          <p className="font-body text-ink-200 mb-6 max-w-xl mx-auto">
            Join the many happy campers who've made Up the Creek their Moab base camp.
          </p>
          <Link to="/booking" className="btn-primary text-base">
            Reserve a Campsite
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
