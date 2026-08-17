export const SITE = {
  name: 'Up the Creek Campground',
  tagline: 'Your desert oasis for downtown Moab camping',
  address: '210 E 300 S, Moab, UT 84532',
  phone: '435-260-1888',
  phoneAlt: '435-248-2001',
  email: 'moabupthecreek@gmail.com',
  season: 'March 20 – November 2, 2026',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  quietHours: '10:00 PM – 6:00 AM',
  social: {
    yelp: 'https://www.yelp.com/biz/up-the-creek-campground-moab',
    tripadvisor: 'https://www.tripadvisor.com/Hotel_Review-g60724-d2238126-Reviews-Up_the_Creek_Campground-Moab_Utah.html',
    hipcamp: 'https://www.hipcamp.com/en-US/land/utah-up-the-creek-campground-kk9hyp5x',
    thedyrt: 'https://thedyrt.com/camping/utah/up-the-creek-camp-ground',
  },
  mapsEmbed: 'https://www.google.com/maps?q=210+E+300+S,+Moab,+UT+84532&output=embed',
  mapsLink: 'https://www.google.com/maps/dir/?api=1&destination=210+E+300+S,+Moab,+UT+84532',
};

export const RATES = [
  { people: 1, price: 28 },
  { people: 2, price: 35 },
  { people: 3, price: 42 },
  { people: 4, price: 49 },
];

export const WEEKEND_SURCHARGE = 2;
export const TAX_RATE = 0.1592;

export const AMENITIES = [
  {
    icon: 'Tent',
    title: 'Walk-In Tent Camping',
    description: '16 tent-only sites nestled among shade trees. No noisy RVs or cars in the campground — just a 25-foot walk from parking to your site.',
  },
  {
    icon: 'ShowerHead',
    title: 'Clean Bathhouse',
    description: 'Hot showers and flush toilets, cleaned daily. Bathrooms closed 11 AM–1 PM for cleaning.',
  },
  {
    icon: 'Waves',
    title: 'Creek-Side Setting',
    description: 'Camp next to a cooling perennial stream surrounded by large cottonwood trees. A true desert oasis.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Dishwashing Sink',
    description: 'Outdoor sink for washing dishes, with a charging area and outlets for your electronics right next door.',
  },
  {
    icon: 'Flame',
    title: 'Grilling Stations',
    description: 'Grilling stations available on the property. Propane fire pits may be allowed based on current fire conditions.',
  },
  {
    icon: 'Trophy',
    title: 'Games & Fun',
    description: 'Horseshoe pit and cornhole games adjacent to the camping area for evening entertainment.',
  },
  {
    icon: 'Snowflake',
    title: 'Ice For Sale',
    description: 'Bagged ice available on site so you can keep your cooler cold without a trip into town.',
  },
  {
    icon: 'ShoppingCart',
    title: 'Gear Carts',
    description: 'Wheelbarrows and carts provided to help you shuttle your supplies from the parking lot to your campsite.',
  },
  {
    icon: 'Bike',
    title: 'Bike Storage',
    description: 'Bike rack near the bathhouse, or lock your bike to the picnic table at your site. Don\'t leave bikes in the lot.',
  },
  {
    icon: 'Car',
    title: 'Private Parking',
    description: 'Small private lot for reserved guests, accommodating large and small vehicles. Trailer parking by arrangement.',
  },
  {
    icon: 'MapPin',
    title: 'Two Blocks from Main St',
    description: 'Walk to Moab\'s restaurants, shops, and coffee. The closest laundromat is 3 blocks away, open 24/7 with free WiFi.',
  },
  {
    icon: 'Trees',
    title: 'Shade & Landscaping',
    description: 'Well-kept natural landscaping with level sand and dirt tent pads. Shade moves with the sun across the day.',
  },
];

export const NO_AMENITIES = [
  { icon: 'Wifi', title: 'No WiFi', description: 'No WiFi at the campground. The library, coffee shops, and laundromat nearby all offer free internet.' },
  { icon: 'Flame', title: 'No Campfires', description: 'Wood campfires are not allowed. Propane fire pits may be permitted — please ask staff first.' },
  { icon: 'Building2', title: 'No On-Site Office', description: 'Staff visits the campground 3+ times daily. Call, email, or leave a note in the camp post for assistance.' },
];

export const FAQS = [
  {
    q: 'What time is check-in and check-out?',
    a: 'Check-in is at 12:00 PM and check-out is at 11:00 AM. The bathrooms are closed from 11 AM to 1 PM for cleaning, so please plan accordingly.',
  },
  {
    q: 'What are the quiet hours?',
    a: 'Quiet hours are from 10:00 PM to 6:00 AM. Sound travels easily throughout the campground, so please respect your fellow campers.',
  },
  {
    q: 'Are campfires allowed?',
    a: 'Wood campfires are not allowed. Propane fire pits may be allowed based on current fire hazards — please ask staff before using one.',
  },
  {
    q: 'Can I drive my car to my campsite?',
    a: 'No. Up the Creek is a tent-only, walk-in campground. Vehicles are parked in the parking lot and you walk to your site. It is only 25 feet from the parking area to the first campsite, and we provide carts to help shuttle your gear.',
  },
  {
    q: 'Can I sleep in my car or RV?',
    a: 'No. Sleeping in vehicles is not allowed. All campsites are tent-only. There are no RV hookups or vehicle camping of any kind.',
  },
  {
    q: 'Where should I pitch my tent?',
    a: 'Please pitch tents only on the level dirt and sand areas within your campsite. Half the sites border a grassy orchard area where tents are not allowed.',
  },
  {
    q: 'Where can I store my bike?',
    a: 'There is a bike rack near the bathhouse where bikes can be locked up. We also suggest keeping bikes at your campsite, locked to the picnic table. Do not leave bikes locked to your car in the parking lot.',
  },
  {
    q: 'Is there an office on site?',
    a: 'We do not have an office on site, but staff visits the campground 3+ times a day — morning, afternoon, and evening. If you need assistance, call and leave a message (we will call you right back), email us, or put a note in the camp post, which we check 3 times daily. The house next to the campground is a private residence — please do not disturb.',
  },
  {
    q: 'Can I park a trailer?',
    a: 'We have a small private parking lot that can accommodate large and small vehicles. If you need to park a trailer, please contact us in advance as you may need to use street parking in front of the campground.',
  },
  {
    q: 'Is there WiFi at the campground?',
    a: 'No, there is no WiFi at the campground. It is a short walk to places where you can get online: the laundromat (3 blocks, open 24/7 with free WiFi), the library, and coffee shops.',
  },
  {
    q: 'Where is the closest laundromat?',
    a: 'The closest laundry is three blocks from the campground, open 7 days a week, 24 hours a day, and provides free WiFi.',
  },
  {
    q: 'Will my campsite be shaded all day?',
    a: 'The campground is overall shady thanks to large cottonwood and other trees, but shade moves with the sun so your site may not be shaded all day. In early spring there is minimal foliage, and during regional drought the stream may be less full.',
  },
  {
    q: 'When is the campground open?',
    a: 'For 2026, we are open from March 20 through November 2. We operate as a tent-only facility during this season.',
  },
  {
    q: 'Are pets allowed?',
    a: 'Please contact us about pets before booking. Policies may vary based on the season and site conditions.',
  },
  {
    q: 'How do I get to the campground?',
    a: 'From Moab\'s Main St. / Hwy 191, turn east on 300 South. Up the Creek Campground will be on your right after about two blocks. Look for our sign at the entrance to the parking lot.',
  },
];

export const POLICIES = [
  {
    title: 'Check-In & Check-Out',
    icon: 'Clock',
    rules: [
      'Check-in: 12:00 PM',
      'Check-out: 11:00 AM',
      'Bathrooms closed 11 AM–1 PM for cleaning',
    ],
  },
  {
    title: 'Quiet Hours',
    icon: 'VolumeX',
    rules: [
      'Quiet hours: 10:00 PM – 6:00 AM',
      'Sound travels easily throughout the campground',
      'Please respect your fellow campers',
    ],
  },
  {
    title: 'Campfires',
    icon: 'Flame',
    rules: [
      'Wood campfires are not allowed',
      'Propane fire pits may be allowed based on current fire hazards',
      'Please ask staff before using a propane fire pit',
    ],
  },
  {
    title: 'Tent-Only / No Vehicles',
    icon: 'Car',
    rules: [
      'All sites are tent-only — park and walk to your site',
      'No vehicles allowed in the campground',
      'No sleeping in cars',
      'Carts provided for shuttling gear',
    ],
  },
  {
    title: 'Tent Placement',
    icon: 'Trees',
    rules: [
      'Pitch tents only on level dirt and sand areas',
      'No tents in the grassy orchard area',
      'Some sites are less than a 1-minute walk; others up to 2 minutes from parking',
    ],
  },
  {
    title: 'Bike Storage',
    icon: 'Bike',
    rules: [
      'Bike rack near the bathhouse for lock-up',
      'Or lock bikes to the picnic table at your campsite',
      'Do not leave bikes locked to your car in the parking lot',
    ],
  },
  {
    title: 'Parking',
    icon: 'Car',
    rules: [
      'Small private lot for reserved guests',
      'Accommodates large and small vehicles',
      'Trailer parking: contact us in advance — may need street parking',
    ],
  },
  {
    title: 'On-Site Staff',
    icon: 'Building2',
    rules: [
      'No on-site office',
      'Staff visits 3+ times daily (morning, afternoon, evening)',
      'Call, email, or leave a note in the camp post for assistance',
      'The house next to the campground is a private residence',
    ],
  },
];

export const THINGS_TO_DO = [
  {
    name: 'Arches National Park',
    distance: '5 min drive',
    description: 'Home to over 2,000 natural sandstone arches, including the iconic Delicate Arch. Hiking, scenic drives, and sunrise photography.',
    image: 'archesDelicate',
  },
  {
    name: 'Canyonlands National Park',
    distance: '30 min drive',
    description: 'Vast canyons carved by the Colorado River. Island in the Sky offers sweeping overlooks; Needles and Maze districts for backcountry adventure.',
    image: 'canyonlandsSunrise',
  },
  {
    name: 'Slickrock Bike Trail',
    distance: '10 min drive',
    description: 'The world-famous 10.5-mile mountain bike trail over Moab\'s slickrock domes. A bucket-list ride for mountain bikers everywhere.',
    image: 'bikingDesert',
  },
  {
    name: 'Colorado River',
    distance: '5 min drive',
    description: 'Rafting, kayaking, and stand-up paddleboarding on the cool waters of the Colorado. Multi-day and half-day trips available.',
    image: 'coloradoRiver',
  },
  {
    name: 'Main Street Restaurants & Shops',
    distance: '2 blocks walk',
    description: 'Moab\'s Main Street is packed with restaurants, bars, gear shops, and boutiques — all a short walk from the campground.',
    image: 'archesGolden',
  },
  {
    name: 'Laundromat with Free WiFi',
    distance: '3 blocks walk',
    description: 'Open 24/7, 7 days a week with free WiFi. Catch up on laundry and emails without leaving downtown.',
    image: 'creekRipples',
  },
];

export const SEED_REVIEWS = [
  { author_name: 'Madison R.', source: 'The Dyrt', rating: 5, quote: 'Perfect camp spot tucked into downtown! Clean facilities, warm showers, easy to peg tents into the sand. The location is quite good — feels like camping but with good facilities.' },
  { author_name: 'David S.', source: 'The Dyrt', rating: 5, quote: 'Clean, friendly, in-town camping. Everything is clean and well maintained, the location is great, and the hosts are friendly. I could not recommend this more highly.' },
  { author_name: 'Nicole P.', source: 'Hipcamp', rating: 5, quote: 'This was an awesome place to camp to see the Arches! Super convenient, clean, quiet, and had showers! Great place to spend a few nights in a tent.' },
  { author_name: 'Harrison K.', source: 'Hipcamp', rating: 5, quote: 'Great place to spend a few nights in a tent. In a quiet part of Moab with walking access to many restaurants and bars. Nice amenities, had a great time here.' },
  { author_name: 'Jason H.', source: 'Hipcamp', rating: 4, quote: 'Great location if you want to be in downtown Moab. Walking distance to restaurants. Quiet and bathrooms are clean. Second time I\'ve stayed here within 2 months.' },
  { author_name: 'Catherine B.', source: 'Hipcamp', rating: 4, quote: 'Great location for visiting the local national parks and Moab area. Easy check in, clean bathrooms, and a charging station.' },
  { author_name: 'Tripadvisor Guest', source: 'Tripadvisor', rating: 5, quote: 'I loved this campground. It was clean, bathrooms were nice, dish washing area, ice for sale, and wheelbarrows to haul your gear in since it is a walk-in campsite.' },
  { author_name: 'Yelp Reviewer', source: 'Yelp', rating: 5, quote: 'The best campground in Moab! Peaceful, quiet, and most importantly safe. Perfect urban camping location with clean facilities.' },
  { author_name: 'Alex P.', source: 'Hipcamp', rating: 5, quote: 'Easy check in, clean bathrooms, charging station. Walking distance to everything downtown. Would definitely stay again.' },
];
