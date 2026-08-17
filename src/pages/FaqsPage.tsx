import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { FAQS } from '@/lib/siteData';
import PageHero from '@/components/PageHero';

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filtered = FAQS.filter(
    (faq) =>
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHero
        title="FAQ"
        subtitle="Everything you need to know about staying at Up the Creek."
        image={IMAGES.tentsColorful}
      />

      <section className="py-12 bg-ink-950">
        <div className="container-mx max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-500" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input pl-12 text-base"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-ink-950">
        <div className="container-mx max-w-3xl">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-12 h-12 text-ink-700 mx-auto mb-4" />
              <p className="font-body text-ink-500">
                No questions match your search. Try a different term or contact us.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <div
                  key={i}
                  className={`card overflow-hidden transition-all duration-200 ${
                    openIndex === i ? 'border-clay-600' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-heading text-lg font-bold text-ink-50">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-clay-400 shrink-0 transition-transform duration-200 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="font-body text-ink-400 leading-relaxed px-5 pb-5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 p-8 bg-clay-500 rounded-2xl text-center text-white">
            <h3 className="display-text text-3xl mb-3">Still have questions?</h3>
            <p className="font-body text-white/80 mb-6">We're happy to help. Reach out and we'll get back to you fast.</p>
            <Link to="/contact" className="btn bg-white text-clay-700 hover:bg-ink-100">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
