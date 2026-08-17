import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useRouter } from '@/lib/router';
import { SITE } from '@/lib/siteData';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Rates', to: '/booking' },
  { label: 'Policies', to: '/policies' },
  { label: 'Moab', to: '/moab' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'FAQ', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const isActive = (to: string) => (to === '/' ? path === '/' : path.startsWith(to));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md border-b border-ink-800'
          : 'bg-gradient-to-b from-ink-950/60 to-transparent'
      }`}
    >
      <nav className="container-mx flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col leading-none">
            <span className={`font-display uppercase text-xl tracking-tightest transition-colors ${
              scrolled ? 'text-ink-50' : 'text-white'
            }`}>
              Up the Creek
            </span>
            <span className={`font-heading text-[9px] uppercase tracking-[0.2em] mt-0.5 transition-colors ${
              scrolled ? 'text-clay-400' : 'text-clay-300'
            }`}>
              Campground · Moab
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3.5 py-2 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all ${
                isActive(link.to)
                  ? 'text-clay-400'
                  : scrolled
                    ? 'text-ink-300 hover:text-ink-50'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary ml-3 text-xs">
            Reserve
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? 'text-ink-50' : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink-950 border-t border-ink-800 animate-slide-down">
          <div className="container-mx py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-xl font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive(link.to)
                    ? 'bg-ink-900 text-clay-400'
                    : 'text-ink-300 hover:bg-ink-900 hover:text-ink-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking" className="btn-primary mt-2">
              Reserve a Campsite
            </Link>
            <a href={`tel:${SITE.phone}`} className="btn-ghost mt-1">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
