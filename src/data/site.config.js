/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://username.github.io/DeW/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Sumit & Rupali — We're getting married",
    description:
      "Join Sumit and Rupali in Lucknow on 02 December 2026. Ceremony, celebrations, and all the details.",
  },
  couple: {
    partnerA: "Sumit",
    partnerB: "Rupali",
  },
  hashtag: "#SumitWedsRupali",
  weddingDateIso: "2026-12-02T09:30:00+05:30",
  displayDate: "02 December 2026",
  city: "Lucknow, Uttar Pradesh",
  music: {
    src: "song.mp3",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "Together with their families",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A note from us",
    heading: "Please celebrate with us",
    paragraphs: [
      "We fell in love between shared playlists, late-night walks, and a thousand small kindnesses. On a bright winter afternoon in Lucknow, we will promise each other a lifetime of the same.",
      "Your presence is the gift we want most. Come for the colour, stay for the dancing, and help us begin this next chapter surrounded by the people we love.",
    ],
    signOff: "With all our love",
  },
  countdown: {
    heading: "Until we say I do",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The day is here",
    arrivedMessage: "The celebrations have begun. We cannot wait to see you.",
  },
  lineup: {
    eyebrow: "The celebrations",
    heading: "Event line-up",
  },
  events: [
    {
      id: "mandap",
      title: "Mandap Sthapana & Haldi",
      date: "30 November 2026",
      time: "10:00 AM",
      venue: "Araji No. 232, Plot No. 15, Sakarpur, Sector-6, Swarn Jayanti Vihar, Kidwai Nagar, Kanpur Nagar, UP – 208011",
      note: "Mandap preparation and Haldi ceremony with family.",
      accent: "marigold",
    },
    {
      id: "mehendi",
      title: "Mehendi & Tel Pujan",
      date: "01 December 2026",
      time: "7:00 PM",
      venue: "Araji No. 232, Plot No. 15, Sakarpur, Sector-6, Swarn Jayanti Vihar, Kidwai Nagar, Kanpur Nagar, UP – 208011",
      note: "Mehendi celebration and ceremonial oil ritual.",
      accent: "emerald",
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "02 December 2026",
      time: "10:00 AM",
      venue: "Mandap at The Maharaja Inn",
      note: "The sacred wedding ceremony and pheras.",
      accent: "sapphire",
    },
    {
      id: "farewell",
      title: "Bride's Homecoming",
      date: "03 December 2026",
      time: "4:00 AM",
      venue: "Araji No. 232, Plot No. 15, Sakarpur, Sector-6, Swarn Jayanti Vihar, Kidwai Nagar, Kanpur Nagar, UP – 208011",
      note: "Bidaai ceremony - a celebration of new beginnings.",
      accent: "ruby",
    },
  ],
  venue: {
    eyebrow: "Find us",
    heading: "The wedding venue",
    name: "The Maharaja Inn",
    addressLines: [
      "The Maharaja Inn, HN",
      " Allen House Public School, Vrindavan Yojna-1",
      "Sec. 6c, Vrindavan Colony, Lucknow, Uttar Pradesh, India",
    ],
    directions:
      " It is approximately a 15 to 20-minute drive (around 7.5 to 8 km) from Chaudhary Charan Singh International Airport (LKO). Rideshares can easily pull up right to the front gate for pick-ups and drop-offs.",
  },
  gallery: {
    eyebrow: "A few frames",
    heading: "From our story so far",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    photos: [
      {
        src: "photos/1.jpeg",
        alt: "Meera and Arjun walking through a marigold-lined courtyard at dusk",
        width: 900,
        height: 1600,
      },
      {
        src: "photos/2.jpeg",
        alt: "Close-up of henna patterns on Meera's hands with gold bangles",
        width: 1600,
        height: 901,
      },
      {
        src: "photos/3.jpeg",
        alt: "Arjun laughing with family during a rooftop tea in Jaipur",
        width: 1201,
        height: 1600,
      },
      {
        src: "photos/4.jpeg",
        alt: "A table of sweets, roses, and brass diyas before a celebration",
        width: 720,
        height: 1280,
      },
      {
        src: "photos/5.jpeg",
        alt: "The couple under a string of fairy lights in a palace garden",
        width: 2630,
        height: 2976,
      },
      {
        src: "photos/6.jpeg",
        alt: "Folk musicians playing dhol and flute at a sangeet rehearsal",
        width: 3120,
        height: 4160,
      },
      {
        src: "photos/7.jpeg",
        alt: "Meera in a rose-coloured saree standing beside carved sandstone",
        width: 3120,
        height: 4160,
      },
      {
        src: "photos/8.jpeg",
        alt: "Arjun and Meera holding hands, rings catching the evening sun",
        width: 1280,
        height: 960,
      },
    ],
  },
  footer: {
    closing: "We cannot wait to celebrate with you.",
    crafted: "With love, from our little corner of the internet.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "countdown", label: "When" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
];

export default site;
