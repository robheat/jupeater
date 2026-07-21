export type PriceTier = "$" | "$$" | "$$$";

export type Restaurant = {
  slug: string;
  name: string;
  tagline: string;
  address: string;
  location: {
    lat: number;
    lon: number;
  };
  neighborhood: string;
  priceTier: PriceTier;
  cuisines: string[];
  description: string;
  hours: string[];
  phone: string;
  website: string;
  mapUrl: string;
  photoUrls: string[];
  featured: boolean;
  dietaryOptions: string[];
  lastVerified: string;
};

const restaurants: Restaurant[] = [
  {
    slug: "guanabanas",
    name: "Guanabanas",
    tagline: "Open-air tiki dining on the Jupiter Inlet.",
    address: "960 N Highway A1A, Jupiter, FL 33477",
    location: {
      lat: 26.9425432,
      lon: -80.0808546,
    },
    neighborhood: "Jupiter Inlet",
    priceTier: "$$",
    cuisines: ["Seafood", "Caribbean", "American"],
    description:
      "A fully open-air waterfront restaurant and bar under woven tiki huts and banyan trees, founded in 2004 by local surfers. Serves Florida-sourced seafood and tropical fare, with live music on its tiki stage and a Sunday brunch.",
    hours: [
      "Mon-Tue: 11:30 AM - 9:00 PM",
      "Wed-Thu: 11:30 AM - 10:00 PM",
      "Fri-Sat: 11:30 AM - 11:00 PM",
      "Sun: 10:00 AM - 9:00 PM (Brunch 10 AM - 2 PM)",
    ],
    phone: "(561) 747-8878",
    website: "https://www.guanabanas.com",
    mapUrl: "https://maps.google.com/?q=960+N+Highway+A1A+Jupiter+FL+33477",
    photoUrls: [
      "https://www.guanabanas.com/wp-content/uploads/GUANAS_2020_WEB_040.jpg",
      "https://www.guanabanas.com/wp-content/uploads/GUANAS_2020_WEB_079.jpg",
      "https://www.guanabanas.com/wp-content/uploads/home-live-music.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "u-tiki-beach",
    name: "U-Tiki Beach",
    tagline: "Waterfront tiki bar at Jupiter Inlet Marina with lighthouse views.",
    address: "1095 N Highway A1A, Jupiter, FL 33477",
    location: {
      lat: 26.9458971,
      lon: -80.0838222,
    },
    neighborhood: "Jupiter Inlet",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    description:
      "A casual, open-air waterfront restaurant and bar at Jupiter Inlet Marina with sandy beach seating and views of the Jupiter Lighthouse. Known for a laid-back tiki-bar vibe, Caribbean-influenced seafood menu, and happy hour.",
    hours: [
      "Mon-Thu: 4:30 PM - 10:00 PM",
      "Fri-Sun: 12:00 PM - 10:00 PM",
    ],
    phone: "(561) 406-2210",
    website: "https://www.utikibeach.com",
    mapUrl: "https://maps.google.com/?q=1095+N+Highway+A1A+Jupiter+FL+33477",
    photoUrls: [
      "https://static.wixstatic.com/media/a9bfdc_0c5c2d85877e4263ac4a48b9ab06dc3b.jpg/v1/fill/w_972,h_600,al_c,q_80,enc_avif,quality_auto/a9bfdc_0c5c2d85877e4263ac4a48b9ab06dc3b.jpg",
      "https://static.wixstatic.com/media/a9bfdc_d492826766124d759579d1f671c7afb9.jpg/v1/fill/w_972,h_600,al_c,q_80,enc_avif,quality_auto/a9bfdc_d492826766124d759579d1f671c7afb9.jpg",
      "https://static.wixstatic.com/media/1149de6bf15f40c587573bf9311dc32c.jpg/v1/fill/w_972,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1149de6bf15f40c587573bf9311dc32c.jpg",
    ],
    featured: true,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "little-moirs-food-shack",
    name: "Little Moir's Food Shack",
    tagline: "A simple twist of taste — creative seafood in a casual shack.",
    address: "103 S US Highway 1, Ste D3, Jupiter, FL 33477",
    location: {
      lat: 26.9347,
      lon: -80.0895,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Seafood", "Global"],
    description:
      "A no-frills, strip-mall seafood shack in Jupiter Square on US-1 known for creatively crusted fresh fish, craft cocktails, and nightly live music. Founded in 2002 by chef Mike Moir.",
    hours: [
      "Mon-Sat: 11:00 AM - 4:00 PM (Lunch)",
      "Mon-Thu: 4:00 PM - 9:00 PM (Dinner)",
      "Fri-Sat: 4:00 PM - 10:00 PM (Dinner)",
      "Sun: 3:00 PM - 9:00 PM",
    ],
    phone: "(561) 741-3626",
    website: "https://littlemoirsfoodshack.com",
    mapUrl: "https://maps.google.com/?q=103+S+US+Highway+1+Jupiter+FL+33477",
    photoUrls: [
      "https://littlemoirsfoodshack.com/wp-content/uploads/2024/05/Food-Shack-Hero-Background-2.webp",
      "https://littlemoirsfoodshack.com/wp-content/uploads/2024/05/The-Shack-Menu-Hero-1024x427.webp",
      "https://littlemoirsfoodshack.com/wp-content/uploads/2024/07/IMG_5135-e1722090453576-1024x627.webp",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "jettys-waterfront",
    name: "Jetty's Waterfront Restaurant",
    tagline: "Waterfront dining with unobstructed views of the Jupiter Inlet and historic lighthouse.",
    address: "1075 N Highway A1A, Jupiter, FL 33477",
    location: {
      lat: 26.9459,
      lon: -80.0833,
    },
    neighborhood: "Jupiter Inlet",
    priceTier: "$$$",
    cuisines: ["Seafood", "Steakhouse", "American"],
    description:
      "A three-decade fixture on the Jupiter Inlet Waterway serving seafood and Certified Angus steaks, with a lighthouse view, full bar, and Sunday brunch.",
    hours: [
      "Mon-Thu: 5:00 PM - 9:00 PM",
      "Fri-Sat: 5:00 PM - 9:30 PM",
      "Sun: 11:00 AM - 3:00 PM (Brunch), 5:00 PM - 9:00 PM (Dinner)",
    ],
    phone: "(561) 743-8166",
    website: "https://www.jettysjupiter.com",
    mapUrl: "https://maps.google.com/?q=1075+N+Highway+A1A+Jupiter+FL+33477",
    photoUrls: [
      "https://static.wixstatic.com/media/a9bfdc_bd58b3e48d0d4fbe96090dd6e0a9e0db~mv2.jpg",
      "https://static.wixstatic.com/media/a9bfdc_0f0ce40a171c4f0b8247afedf353c528~mv2.jpg",
      "https://static.wixstatic.com/media/a9bfdc_5c6ddab51c6b405e8f43439d30a55f6e~mv2.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "tavolena-ristorante",
    name: "Tavolena Ristorante",
    tagline: "Named for the chef's grandmother, serving elevated Italian classics and handmade pasta.",
    address: "185 E Indiantown Rd, Jupiter, FL 33477",
    location: {
      lat: 26.9352802,
      lon: -80.09082,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$$",
    cuisines: ["Italian"],
    description:
      "Named for chef Michael Rolchigo's grandmother Lena Bello, Tavolena serves elevated takes on Italian classics — pork spiedini, meatballs, and Sunday sauce — plus a private dining room called 'Gramma's Table.'",
    hours: [
      "Tue-Sat: 5:00 PM - 10:00 PM",
      "Sun-Mon: Closed",
    ],
    phone: "(561) 972-7228",
    website: "https://tavolena.com",
    mapUrl: "https://maps.google.com/?q=185+E+Indiantown+Rd+Jupiter+FL+33477",
    photoUrls: [
      "https://tavolena.com/wp-content/uploads/2023/10/CozyDining.jpg",
      "https://tavolena.com/wp-content/uploads/2023/10/SpaghettiWithGiantMeatball.jpg",
      "https://tavolena.com/wp-content/uploads/2023/09/EntryPhoto.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "thai-lotus",
    name: "Thai Lotus",
    tagline: "Thai and Japanese favorites in a casual, family-friendly setting.",
    address: "201 North US-1 # C-4, Jupiter, FL 33477",
    location: {
      lat: 26.9365608,
      lon: -80.0801717,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Thai", "Japanese", "Sushi"],
    description:
      "A longtime Jupiter spot for Thai staples — curries, stir-fries, noodle dishes — alongside a sushi bar menu, located in the Shoppes at Jupiter plaza on US-1.",
    hours: [
      "Mon-Fri: 11:30 AM - 9:00 PM",
      "Sat-Sun: 12:00 PM - 9:00 PM",
    ],
    phone: "(561) 320-9121",
    website: "https://thailotusflorida.com/jupiter/",
    mapUrl: "https://maps.google.com/?q=201+North+US-1+Jupiter+FL+33477",
    photoUrls: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/0a/ae/f9/thai-lotus-restaurant.jpg?w=700&h=400&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/93/3d/fc/sushi-combo.jpg?w=1400&h=800&s=1",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Vegan Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "taco-maki-jupiter",
    name: "Taco Maki Jupiter",
    tagline: "Bold fusion tacos blending Latin street food with Japanese and Korean flavors.",
    address: "1155 Main St Ste 120, Jupiter, FL 33458",
    location: {
      lat: 26.8886563,
      lon: -80.1145833,
    },
    neighborhood: "Abacoa",
    priceTier: "$$",
    cuisines: ["Mexican", "Japanese", "Fusion"],
    description:
      "A fusion restaurant in Jupiter's Abacoa district serving tacos, bowls, and shareable bites that combine Japanese, Korean, and Latin street-food influences.",
    hours: [
      "Sun-Thu: 11:00 AM - 12:00 AM",
      "Fri-Sat: 11:00 AM - 2:00 AM",
    ],
    phone: "(561) 888-6812",
    website: "https://tacomakijupiter.com",
    mapUrl: "https://maps.google.com/?q=1155+Main+St+Jupiter+FL+33458",
    photoUrls: [
      "https://photos.tryotter.com/menu-photos/04aeae81-543a-4ff6-8691-2a0a7748f23c.jpeg",
      "https://photos.tryotter.com/menu-photos/218905e0-6c06-46ee-9552-2698b802c220.jpeg",
      "https://photos.tryotter.com/menu-photos/404f532a-cf32-4a72-99ab-d2ddee5e0eaa.jpeg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "sea-racha-asian-cuisine",
    name: "Sea Racha Asian Cuisine and Bar",
    tagline: "Modern Thai and pan-Asian cuisine with a full bar in Central Jupiter.",
    address: "103 S US Highway 1, Ste B5-B6, Jupiter, FL 33477",
    location: {
      lat: 26.9347,
      lon: -80.0895,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Thai", "Asian", "Seafood"],
    description:
      "Sea Racha serves Thai-inspired curries, noodles, and seafood dishes alongside a cocktail bar, located in the Jupiter Square shopping plaza on US-1.",
    hours: [
      "Mon: 11:30 AM - 9:00 PM",
      "Tue: Closed",
      "Wed-Thu: 11:30 AM - 9:00 PM",
      "Fri-Sat: 11:30 AM - 10:00 PM",
      "Sun: 4:00 PM - 9:00 PM",
    ],
    phone: "(561) 747-6944",
    website: "https://searachajupiter.com",
    mapUrl: "https://maps.google.com/?q=103+S+US+Highway+1+Jupiter+FL+33477",
    photoUrls: [
      "https://searachajupiter.com/wp-content/uploads/2023/11/13.png",
      "https://searachajupiter.com/wp-content/uploads/2022/05/3.jpg",
      "https://searachajupiter.com/wp-content/uploads/2022/10/2.png",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Vegan Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "ruths-chris-steak-house",
    name: "Ruth's Chris Steak House",
    tagline: "Sizzling USDA Prime steaks in an upscale waterfront setting at Harbourside Place.",
    address: "105 Breakwater Ct, Jupiter, FL 33477",
    location: {
      lat: 26.9356686,
      lon: -80.0824482,
    },
    neighborhood: "Harbourside",
    priceTier: "$$$",
    cuisines: ["Steakhouse", "American", "Seafood"],
    description:
      "Part of the national Ruth's Chris chain, this location opened in June 2024 at Harbourside Place in Jupiter. Serves USDA Prime steaks broiled and finished on a 500-degree plate, plus seafood and a full wine list.",
    hours: [
      "Mon-Thu: 3:30 PM - 10:00 PM",
      "Fri-Sat: 3:30 PM - 10:30 PM",
      "Sun: 3:30 PM - 9:00 PM",
    ],
    phone: "(561) 831-4440",
    website: "https://www.ruthschris.com/locations/fl/jupiter/jupiter/7380",
    mapUrl: "https://maps.google.com/?q=105+Breakwater+Ct+Jupiter+FL+33477",
    photoUrls: [
      "https://harboursideplace.com/wp-content/uploads/2024/03/ruths-chris-featured-image.webp",
      "https://harboursideplace.com/wp-content/uploads/2024/03/ruths-chris-interior-1.png",
      "https://harboursideplace.com/wp-content/uploads/2024/03/ruths-chris-carousel-1.webp",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "lynoras-italian",
    name: "Lynora's Italian Restaurant",
    tagline: "Family-owned Italian kitchen serving scratch-made pasta since 1976.",
    address: "1548 US-1, Jupiter, FL 33469",
    location: {
      lat: 26.9534401,
      lon: -80.0853315,
    },
    neighborhood: "North Jupiter",
    priceTier: "$$",
    cuisines: ["Italian"],
    description:
      "A family owned and operated Italian restaurant on US-1, part of a small South Florida group with roots dating to 1976. The menu centers on scratch-made pasta and Italian classics, served in a marble-topped dining room and outdoor patio with a full bar.",
    hours: [
      "Mon-Fri: 3:00 PM - 10:00 PM",
      "Sat-Sun: 11:00 AM - 10:00 PM",
    ],
    phone: "(561) 203-2702",
    website: "https://www.lynoras.com/location/lynoras-jupiter/",
    mapUrl: "https://maps.google.com/?q=1548+US-1+Jupiter+FL+33469",
    photoUrls: [
      "https://images.getbento.com/accounts/c75f8ca9fa5bb3f01f6b720239e2a376/media/images/27417LENORAS-SHOOT-01557.jpg",
      "https://images.getbento.com/accounts/c75f8ca9fa5bb3f01f6b720239e2a376/media/images/97757IMG_3115.jpeg",
      "https://images.getbento.com/accounts/c75f8ca9fa5bb3f01f6b720239e2a376/media/images/18089Screen_Shot_2023-02-27_at_11.45.08_AM.png",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-07-21",
  },
];

export function getRestaurants(): Restaurant[] {
  return restaurants;
}

export function getFeaturedRestaurants(): Restaurant[] {
  return restaurants.filter((r) => r.featured).slice(0, 3);
}

export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find((r) => r.slug === slug);
}

export function getCuisineOptions(): string[] {
  const cuisines = new Set<string>();
  restaurants.forEach((r) => r.cuisines.forEach((c) => cuisines.add(c)));
  return Array.from(cuisines).sort();
}

export function getNeighborhoodOptions(): string[] {
  const neighborhoods = new Set<string>();
  restaurants.forEach((r) => neighborhoods.add(r.neighborhood));
  return Array.from(neighborhoods).sort();
}
