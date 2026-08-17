/*
# Create Up the Creek Campground tables

1. New Tables
- `bookings`: Reservation requests submitted by guests via the website booking form.
  - id (uuid, primary key)
  - name (text, guest full name)
  - email (text, guest email)
  - phone (text, guest phone number)
  - site_type (text, 'small_tent' or 'large_tent')
  - num_people (integer, number of campers)
  - check_in (date, arrival date)
  - check_out (date, departure date)
  - notes (text, optional guest notes/requests)
  - status (text, 'pending' | 'confirmed' | 'declined', default 'pending')
  - created_at (timestamptz)
- `contact_messages`: Messages submitted by visitors via the contact form.
  - id (uuid, primary key)
  - name (text, sender name)
  - email (text, sender email)
  - message (text, message body)
  - created_at (timestamptz)
- `reviews`: Guest testimonials displayed on the reviews page.
  - id (uuid, primary key)
  - author_name (text, reviewer name)
  - source (text, where the review came from: 'Hipcamp', 'The Dyrt', 'Tripadvisor', 'Yelp', 'Google')
  - rating (integer, 1-5 star rating)
  - quote (text, review excerpt)
  - created_at (timestamptz)
2. Security
- Enable RLS on all three tables.
- bookings: anon can INSERT (guests submit requests); anon CANNOT SELECT (only admin reads bookings via service role edge function).
- contact_messages: anon can INSERT; anon CANNOT SELECT (same reason).
- reviews: anon can SELECT (public testimonials shown on site); admin manages via service role.
- No UPDATE or DELETE policies for anon on any table — all mutations beyond insert are admin-only (server-side service role).
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  site_type text NOT NULL DEFAULT 'small_tent',
  num_people integer NOT NULL DEFAULT 1,
  check_in date NOT NULL,
  check_out date NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  source text NOT NULL DEFAULT 'Google',
  rating integer NOT NULL DEFAULT 5,
  quote text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reviews" ON reviews;
CREATE POLICY "anon_select_reviews" ON reviews FOR SELECT
  TO anon, authenticated USING (true);