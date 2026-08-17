import { useState } from 'react';
import {
  Users,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Tent,
  Info,
  CalendarDays,
} from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { RATES, WEEKEND_SURCHARGE, SITE } from '@/lib/siteData';
import PageHero from '@/components/PageHero';
import { supabase } from '@/lib/supabase';
import type { SiteType, NewBooking } from '@/lib/types';

export default function BookingPage() {
  const [form, setForm] = useState<NewBooking>({
    name: '',
    email: '',
    phone: '',
    site_type: 'small_tent',
    num_people: 1,
    check_in: '',
    check_out: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!form.check_in || !form.check_out) {
      setStatus('error');
      setErrorMsg('Please select your check-in and check-out dates.');
      return;
    }

    if (new Date(form.check_out) <= new Date(form.check_in)) {
      setStatus('error');
      setErrorMsg('Check-out date must be after your check-in date.');
      return;
    }

    const { error } = await supabase.from('bookings').insert([form]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting your request. Please try again or call us.');
      return;
    }

    setStatus('success');
  };

  const update = (field: keyof NewBooking, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <PageHero
        title="Rates & Booking"
        subtitle="Simple per-person pricing. Submit your reservation request and we'll confirm within 24 hours."
        image={IMAGES.archesFormations}
      />

      {/* Rates */}
      <section className="section-pad bg-ink-950">
        <div className="container-mx">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-3">2026 Season · March 20 – Nov 2</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl text-ink-50">
              Nightly rates.
            </h2>
            <p className="font-body text-lg text-ink-400 mt-5 leading-relaxed">
              Per person, per night. Fridays and Saturdays add ${WEEKEND_SURCHARGE}/person. Tax and fees not included (15.92%).
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
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
          </div>

          <div className="flex items-start gap-3 max-w-2xl mx-auto mt-8 p-4 bg-sky-900/30 rounded-xl border border-sky-800">
            <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <p className="font-body text-sm text-sky-200 leading-relaxed">
              Reservations are request-based. After you submit the form, our staff will
              review availability and contact you to confirm. No payment is collected online.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-pad bg-ink-900">
        <div className="container-mx max-w-3xl">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">Reserve Your Site</p>
            <h2 className="display-text text-4xl lg:text-5xl text-ink-50">
              Request a<br />reservation.
            </h2>
          </div>

          {status === 'success' ? (
            <div className="card p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-moss-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9 text-moss-400" />
              </div>
              <h3 className="display-text text-3xl text-ink-50 mb-3">Request received!</h3>
              <p className="font-body text-ink-400 leading-relaxed max-w-md mx-auto mb-8">
                Thank you, {form.name}. We've received your reservation request and will
                contact you at <span className="font-bold text-ink-200">{form.email}</span> within 24
                hours to confirm.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setStatus('idle');
                    setForm({ name: '', email: '', phone: '', site_type: 'small_tent', num_people: 1, check_in: '', check_out: '', notes: '' });
                  }}
                  className="btn-ghost"
                >
                  Submit Another Request
                </button>
                <Link to="/" className="btn-primary">Back to Home</Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-950/50 rounded-xl border border-red-800">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-red-300">{errorMsg}</p>
                </div>
              )}

              <div>
                <label className="label">Site Type</label>
                <div className="grid grid-cols-2 gap-4">
                  {(['small_tent', 'large_tent'] as SiteType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => update('site_type', type)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        form.site_type === type
                          ? 'border-clay-500 bg-clay-500/10'
                          : 'border-ink-700 hover:border-ink-600'
                      }`}
                    >
                      <Tent className={`w-5 h-5 ${form.site_type === type ? 'text-clay-400' : 'text-ink-500'}`} />
                      <span className={`font-heading font-bold text-sm ${form.site_type === type ? 'text-ink-50' : 'text-ink-400'}`}>
                        {type === 'small_tent' ? 'Small Tent Site' : 'Large Tent Site'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="label">Full Name *</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} className="input" placeholder="Jane Doe" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="label">Email *</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="input" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="label">Phone *</label>
                  <input id="phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className="input" placeholder="(435) 555-0100" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="check_in" className="label">Check-In *</label>
                  <input id="check_in" type="date" required value={form.check_in} onChange={(e) => update('check_in', e.target.value)} className="input" />
                </div>
                <div>
                  <label htmlFor="check_out" className="label">Check-Out *</label>
                  <input id="check_out" type="date" required value={form.check_out} onChange={(e) => update('check_out', e.target.value)} className="input" />
                </div>
              </div>

              <div>
                <label htmlFor="num_people" className="label">Number of Campers *</label>
                <select id="num_people" value={form.num_people} onChange={(e) => update('num_people', Number(e.target.value))} className="input">
                  <option value={1}>1 Person — $28/night</option>
                  <option value={2}>2 People — $35/night</option>
                  <option value={3}>3 People — $42/night</option>
                  <option value={4}>4 People — $49/night</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="label">Notes or Special Requests (optional)</label>
                <textarea id="notes" value={form.notes} onChange={(e) => update('notes', e.target.value)} className="input min-h-[100px] resize-y" placeholder="Anything we should know?" />
              </div>

              <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'submitting' ? 'Submitting...' : 'Submit Reservation Request'}
                {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="font-body text-xs text-ink-500 text-center">
                By submitting, you agree to our campground policies. We'll confirm by email or phone.
              </p>
            </form>
          )}

          <div className="mt-10 p-6 bg-ink-900 rounded-2xl border border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-6 h-6 text-clay-400" />
              <p className="font-body text-ink-300">Prefer to call? We're happy to help.</p>
            </div>
            <a href={`tel:${SITE.phone}`} className="btn-ghost shrink-0">Call {SITE.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
