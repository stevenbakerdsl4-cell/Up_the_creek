import { useState } from 'react';
import {
  Lock,
  CalendarDays,
  Mail,
  Users,
  Tent,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  X,
  ArrowLeft,
} from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import type { Booking, ContactMessage } from '@/lib/types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'bookings' | 'messages'>('bookings');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/admin-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Login failed');
      }

      const data = await res.json();
      setBookings(data.bookings || []);
      setMessages(data.messages || []);
      setAuthed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (authed) {
    return (
      <div className="min-h-screen bg-ink-950 pt-20">
        <div className="container-mx py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="display-text text-4xl text-ink-50">Admin</h1>
              <p className="font-body text-ink-500 mt-1">
                {bookings.length} booking requests · {messages.length} messages
              </p>
            </div>
            <button
              onClick={() => {
                setAuthed(false);
                setPassword('');
                setBookings([]);
                setMessages([]);
              }}
              className="btn-ghost text-sm"
            >
              <X className="w-4 h-4" />
              Log Out
            </button>
          </div>

          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setTab('bookings')}
              className={`px-5 py-2.5 rounded-full font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                tab === 'bookings' ? 'bg-clay-500 text-white' : 'bg-ink-900 text-ink-400 border border-ink-800 hover:text-ink-50'
              }`}
            >
              <CalendarDays className="w-4 h-4 inline mr-2" />
              Bookings ({bookings.length})
            </button>
            <button
              onClick={() => setTab('messages')}
              className={`px-5 py-2.5 rounded-full font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                tab === 'messages' ? 'bg-clay-500 text-white' : 'bg-ink-900 text-ink-400 border border-ink-800 hover:text-ink-50'
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Messages ({messages.length})
            </button>
          </div>

          {tab === 'bookings' && (
            <div>
              {bookings.length === 0 ? (
                <div className="card p-12 text-center">
                  <CalendarDays className="w-12 h-12 text-ink-700 mx-auto mb-4" />
                  <p className="font-body text-ink-500">No booking requests yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="card p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-clay-500/10 flex items-center justify-center">
                            <Tent className="w-5 h-5 text-clay-400" />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-ink-50">{booking.name}</h3>
                            <p className="font-body text-xs text-ink-500">
                              {new Date(booking.created_at).toLocaleDateString()} at{' '}
                              {new Date(booking.created_at).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full font-heading text-xs font-bold uppercase tracking-wider ${
                          booking.status === 'pending' ? 'bg-ink-800 text-ink-300' :
                          booking.status === 'confirmed' ? 'bg-moss-500/20 text-moss-400' :
                          'bg-red-950/50 text-red-400'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-ink-300"><Users className="w-4 h-4 text-ink-600" />{booking.num_people} {booking.num_people === 1 ? 'person' : 'people'}</div>
                        <div className="flex items-center gap-2 text-ink-300"><Tent className="w-4 h-4 text-ink-600" />{booking.site_type === 'small_tent' ? 'Small Tent' : 'Large Tent'}</div>
                        <div className="flex items-center gap-2 text-ink-300"><CalendarDays className="w-4 h-4 text-ink-600" />In: {new Date(booking.check_in).toLocaleDateString()}</div>
                        <div className="flex items-center gap-2 text-ink-300"><CalendarDays className="w-4 h-4 text-ink-600" />Out: {new Date(booking.check_out).toLocaleDateString()}</div>
                        <div className="flex items-center gap-2 text-ink-300"><Mail className="w-4 h-4 text-ink-600" />{booking.email}</div>
                        <div className="flex items-center gap-2 text-ink-300"><Phone className="w-4 h-4 text-ink-600" />{booking.phone}</div>
                      </div>
                      {booking.notes && (
                        <div className="mt-4 p-3 bg-ink-800 rounded-lg">
                          <p className="font-heading text-xs uppercase tracking-wider text-ink-500 mb-1">Notes</p>
                          <p className="font-body text-sm text-ink-300">{booking.notes}</p>
                        </div>
                      )}
                      <div className="flex gap-2 mt-4">
                        <a href={`mailto:${booking.email}`} className="btn-ghost text-xs flex-1"><Mail className="w-3.5 h-3.5" />Email</a>
                        <a href={`tel:${booking.phone}`} className="btn-ghost text-xs flex-1"><Phone className="w-3.5 h-3.5" />Call</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'messages' && (
            <div>
              {messages.length === 0 ? (
                <div className="card p-12 text-center">
                  <MessageSquare className="w-12 h-12 text-ink-700 mx-auto mb-4" />
                  <p className="font-body text-ink-500">No messages yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {messages.map((msg) => (
                    <div key={msg.id} className="card p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-heading font-bold text-ink-50">{msg.name}</h3>
                          <p className="font-body text-xs text-ink-500">
                            {new Date(msg.created_at).toLocaleDateString()} at{' '}
                            {new Date(msg.created_at).toLocaleTimeString()}
                          </p>
                        </div>
                        <a href={`mailto:${msg.email}`} className="font-body text-sm text-clay-400 hover:text-clay-300 transition-colors">{msg.email}</a>
                      </div>
                      <p className="font-body text-sm text-ink-300 leading-relaxed mt-3 p-3 bg-ink-800 rounded-lg">{msg.message}</p>
                      <div className="mt-4">
                        <a href={`mailto:${msg.email}`} className="btn-ghost text-xs"><Mail className="w-3.5 h-3.5" />Reply via Email</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-950 relative overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={IMAGES.tentStarrySky} alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative container-mx max-w-md">
        <div className="card p-8 lg:p-10">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-full bg-clay-500/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-clay-400" />
            </div>
            <h1 className="display-text text-3xl text-ink-50 mb-2">Admin Access</h1>
            <p className="font-body text-sm text-ink-500">
              Enter your password to view bookings and messages.
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-950/50 rounded-xl border border-red-800 mb-4">
              <X className="w-4 h-4 text-red-400 shrink-0" />
              <p className="font-body text-sm text-red-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-password" className="label">Password</label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 disabled:opacity-60">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="font-body text-sm text-ink-500 hover:text-ink-300 transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
