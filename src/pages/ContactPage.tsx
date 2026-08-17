import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Navigation,
} from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { SITE } from '@/lib/siteData';
import PageHero from '@/components/PageHero';
import { supabase } from '@/lib/supabase';
import type { NewContactMessage } from '@/lib/types';

export default function ContactPage() {
  const [form, setForm] = useState<NewContactMessage>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert([form]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again or call us.');
      return;
    }

    setStatus('success');
  };

  const update = (field: keyof NewContactMessage, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <PageHero
        title="Directions & Contact"
        subtitle="Find us in downtown Moab, two blocks east of Main Street. We're here to help."
        image={IMAGES.archesBlueSky}
      />

      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p className="eyebrow mb-3">Get in Touch</p>
              <h2 className="display-text text-4xl lg:text-5xl text-ink-50 mb-8">
                Contact info.
              </h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Address', value: SITE.address },
                  { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: Clock, label: 'Hours', value: `Season: ${SITE.season} · Check-in ${SITE.checkIn} · Check-out ${SITE.checkOut}` },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 bg-ink-900 rounded-2xl border border-ink-800">
                    <div className="w-12 h-12 rounded-xl bg-clay-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-clay-400" />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-clay-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-ink-200 hover:text-ink-50 transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-body text-ink-200">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-moss-900/30 rounded-2xl border border-moss-800">
                <div className="flex items-center gap-3 mb-3">
                  <Navigation className="w-5 h-5 text-moss-400" />
                  <h3 className="font-heading text-lg font-bold text-ink-50">Getting Here</h3>
                </div>
                <p className="font-body text-ink-400 text-sm leading-relaxed">
                  From Moab's Main St. / Hwy 191, turn east on 300 South. Up the Creek
                  Campground will be on your right, after about two blocks. Look for our
                  sign at the entrance to the parking lot.
                </p>
                <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-4 text-sm">
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="eyebrow mb-3">Send a Message</p>
              <h2 className="display-text text-4xl lg:text-5xl text-ink-50 mb-8">
                We'd love<br />to hear from you.
              </h2>

              {status === 'success' ? (
                <div className="card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-moss-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9 text-moss-400" />
                  </div>
                  <h3 className="display-text text-3xl text-ink-50 mb-3">Message sent!</h3>
                  <p className="font-body text-ink-400 mb-8">
                    Thanks, {form.name}. We'll get back to you at {form.email} soon.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }); }}
                    className="btn-ghost"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-950/50 rounded-xl border border-red-800">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <p className="font-body text-sm text-red-300">{errorMsg}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="c_name" className="label">Name *</label>
                    <input id="c_name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} className="input" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="c_email" className="label">Email *</label>
                    <input id="c_email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="input" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="c_message" className="label">Message *</label>
                    <textarea id="c_message" required value={form.message} onChange={(e) => update('message', e.target.value)} className="input min-h-[140px] resize-y" placeholder="How can we help?" />
                  </div>
                  <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 lg:pb-28 bg-ink-950">
        <div className="container-mx">
          <div className="rounded-2xl overflow-hidden border border-ink-800">
            <iframe
              title="Up the Creek Campground location"
              src={SITE.mapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
