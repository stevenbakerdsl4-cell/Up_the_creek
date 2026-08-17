import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram } from 'lucide-react';
import { Link } from '@/lib/router';
import { SITE } from '@/lib/siteData';

const FOOTER_LINKS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Our Story', to: '/about' },
      { label: 'Amenities', to: '/amenities' },
      { label: 'Things to Do', to: '/moab' },
    ],
  },
  {
    title: 'Plan Your Stay',
    links: [
      { label: 'Rates & Booking', to: '/booking' },
      { label: 'Policies', to: '/policies' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Reviews', to: '/reviews' },
    ],
  },
  {
    title: 'Visit Us',
    links: [
      { label: 'Directions', to: '/contact' },
      { label: 'Contact', to: '/contact' },
      { label: 'Admin', to: '/admin' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800 mt-0">
      <div className="container-mx py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display uppercase text-2xl tracking-tightest text-ink-50">
                Up the Creek
              </span>
              <span className="font-heading text-[10px] uppercase tracking-[0.2em] mt-1 text-clay-400">
                Campground · Moab, UT
              </span>
            </div>
            <p className="font-body text-sm text-ink-400 leading-relaxed mb-5 max-w-xs">
              A tent-only walk-in campground in the heart of Moab. Creek-side sites under
              cottonwood trees, two blocks from Main Street.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ink-900 border border-ink-800 hover:border-clay-500 hover:text-clay-400 flex items-center justify-center transition-colors text-ink-400"
                aria-label="Yelp"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ink-900 border border-ink-800 hover:border-clay-500 hover:text-clay-400 flex items-center justify-center transition-colors text-ink-400"
                aria-label="Tripadvisor"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.hipcamp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ink-900 border border-ink-800 hover:border-clay-500 hover:text-clay-400 flex items-center justify-center transition-colors text-ink-400"
                aria-label="Hipcamp"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-clay-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-ink-400 hover:text-ink-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-ink-800">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-clay-400 mt-0.5 shrink-0" />
            <span className="font-body text-sm text-ink-400">{SITE.address}</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-clay-400 mt-0.5 shrink-0" />
            <a href={`tel:${SITE.phone}`} className="font-body text-sm text-ink-400 hover:text-ink-50 transition-colors">
              {SITE.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-clay-400 mt-0.5 shrink-0" />
            <a href={`mailto:${SITE.email}`} className="font-body text-sm text-ink-400 hover:text-ink-50 transition-colors break-all">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <Clock className="w-4 h-4 text-clay-400" />
          <span className="font-body text-xs text-ink-500">
            Season: {SITE.season} · Check-in {SITE.checkIn} · Check-out {SITE.checkOut}
          </span>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-800">
          <p className="font-body text-xs text-ink-500">
            © {new Date().getFullYear()} Up the Creek Campground. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
