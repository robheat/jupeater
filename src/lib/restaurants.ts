export type PriceTier = "$" | "$$" | "$$$";

export type Restaurant = {
  slug: string;
  name: string;
  tagline: string;
  address: string;
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
    tagline: "Tropical waterfront dining under the palms.",
    address: "960 N Highway A1A, Jupiter, FL 33477",
    neighborhood: "Jupiter Inlet",
    priceTier: "$$",
    cuisines: ["Seafood", "Caribbean", "American"],
    description:
      "Known for open-air seating and a lively island ambiance with seafood-forward plates and coastal cocktails.",
    hours: [
      "Mon-Thu: 11:00 AM - 10:00 PM",
      "Fri-Sat: 11:00 AM - 11:00 PM",
      "Sun: 10:00 AM - 10:00 PM",
    ],
    phone: "(561) 747-8878",
    website: "https://www.guanabanas.com",
    mapUrl: "https://maps.google.com/?q=960+N+Highway+A1A+Jupiter+FL+33477",
    photoUrls: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-01",
  },
  {
    slug: "u-tiki-beach",
    name: "U-Tiki Beach",
    tagline: "Dock-and-dine with panoramic Intracoastal views.",
    address: "1095 N Highway A1A, Jupiter, FL 33477",
    neighborhood: "Jupiter Inlet",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    description:
      "A favorite for sunset dinners and weekend brunch with broad seafood and grill selections.",
    hours: [
      "Mon-Thu: 11:30 AM - 10:00 PM",
      "Fri-Sat: 11:30 AM - 11:00 PM",
      "Sun: 10:00 AM - 10:00 PM",
    ],
    phone: "(561) 406-2210",
    website: "https://www.u-tikibeach.com",
    mapUrl: "https://maps.google.com/?q=1095+N+Highway+A1A+Jupiter+FL+33477",
    photoUrls: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
      "https://images.unsplash.com/photo-1481833761820-0509d3217039",
    ],
    featured: true,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-06-01",
  },
  {
    slug: "1000-north",
    name: "1000 NORTH",
    tagline: "Upscale waterfront dining and private club atmosphere.",
    address: "1000 N US Highway 1, Jupiter, FL 33477",
    neighborhood: "Harbourside",
    priceTier: "$$$",
    cuisines: ["Steakhouse", "Seafood"],
    description:
      "Premium steaks, seafood towers, and curated wine pairings in a polished setting.",
    hours: [
      "Mon-Thu: 5:00 PM - 10:00 PM",
      "Fri-Sat: 5:00 PM - 11:00 PM",
      "Sun: 5:00 PM - 9:00 PM",
    ],
    phone: "(561) 570-1000",
    website: "https://www.1000north.com",
    mapUrl: "https://maps.google.com/?q=1000+N+US+Highway+1+Jupiter+FL+33477",
    photoUrls: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-02",
  },
  {
    slug: "jetties-waterfront",
    name: "Jetty's Waterfront Restaurant",
    tagline: "Classic local favorite with riverfront seating.",
    address: "1075 N Highway A1A, Jupiter, FL 33477",
    neighborhood: "Jupiter Inlet",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    description:
      "A relaxed dinner spot popular for fresh catch specials and marina views.",
    hours: [
      "Mon-Thu: 4:00 PM - 9:30 PM",
      "Fri-Sat: 4:00 PM - 10:00 PM",
      "Sun: 4:00 PM - 9:00 PM",
    ],
    phone: "(561) 743-8166",
    website: "https://www.jettys.com",
    mapUrl: "https://maps.google.com/?q=1075+N+Highway+A1A+Jupiter+FL+33477",
    photoUrls: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2",
      "https://images.unsplash.com/photo-1516685018646-549d52a7f9a8",
      "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-06-02",
  },
  {
    slug: "dune-dog-cafe",
    name: "Dune Dog Cafe",
    tagline: "Beloved laid-back hotspot with old Florida charm.",
    address: "775 N Alternate A1A, Jupiter, FL 33477",
    neighborhood: "Central Jupiter",
    priceTier: "$",
    cuisines: ["American", "Bar & Grill"],
    description:
      "Great for casual lunches, comfort food classics, and a lively neighborhood crowd.",
    hours: [
      "Mon-Thu: 11:00 AM - 10:00 PM",
      "Fri-Sat: 11:00 AM - 11:00 PM",
      "Sun: 11:00 AM - 9:30 PM",
    ],
    phone: "(561) 744-6667",
    website: "https://www.dunedog.com",
    mapUrl: "https://maps.google.com/?q=775+N+Alternate+A1A+Jupiter+FL+33477",
    photoUrls: [
      "https://images.unsplash.com/photo-1452960962994-acf4fd70b632",
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c",
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Kids Menu"],
    lastVerified: "2026-06-01",
  },
  {
    slug: "food-shack",
    name: "Food Shack",
    tagline: "Creative seafood and global flavors in a compact space.",
    address: "103 S US Highway 1, Jupiter, FL 33477",
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Seafood", "Global"],
    description:
      "Chef-driven plates with bold flavor combinations and a loyal local following.",
    hours: [
      "Mon-Thu: 5:00 PM - 9:30 PM",
      "Fri-Sat: 5:00 PM - 10:00 PM",
      "Sun: Closed",
    ],
    phone: "(561) 741-3626",
    website: "https://www.littlemoirs.com",
    mapUrl: "https://maps.google.com/?q=103+S+US+Highway+1+Jupiter+FL+33477",
    photoUrls: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.unsplash.com/photo-1544025162-d76694265947",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-03",
  },
  {
    slug: "leftovers-cafe",
    name: "Leftovers Cafe",
    tagline: "Eclectic seafood house with neighborhood energy.",
    address: "451 University Blvd, Jupiter, FL 33458",
    neighborhood: "Abacoa",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    description:
      "An approachable local staple known for fish tacos, daily specials, and a lively bar.",
    hours: [
      "Mon-Thu: 11:30 AM - 9:00 PM",
      "Fri-Sat: 11:30 AM - 10:00 PM",
      "Sun: 11:30 AM - 9:00 PM",
    ],
    phone: "(561) 741-3626",
    website: "https://www.leftoverscafe.com",
    mapUrl: "https://maps.google.com/?q=451+University+Blvd+Jupiter+FL+33458",
    photoUrls: [
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
      "https://images.unsplash.com/photo-1505253213348-cd54c92b37af",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-06-03",
  },
  {
    slug: "the-woods",
    name: "The Woods Jupiter",
    tagline: "Modern American grill with refined sports-lounge feel.",
    address: "129 Soundings Ave, Jupiter, FL 33477",
    neighborhood: "Harbourside",
    priceTier: "$$$",
    cuisines: ["American", "Steakhouse"],
    description:
      "Polished atmosphere and broad menu built for date nights, business dinners, and groups.",
    hours: [
      "Mon-Thu: 4:00 PM - 10:00 PM",
      "Fri-Sat: 4:00 PM - 11:00 PM",
      "Sun: 11:00 AM - 9:00 PM",
    ],
    phone: "(561) 320-9627",
    website: "https://www.thewoodsjupiter.com",
    mapUrl: "https://maps.google.com/?q=129+Soundings+Ave+Jupiter+FL+33477",
    photoUrls: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-02",
  },
];

export function getRestaurants(): Restaurant[] {
  return restaurants;
}

export function getFeaturedRestaurants(): Restaurant[] {
  return restaurants.filter((restaurant) => restaurant.featured);
}

export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find((restaurant) => restaurant.slug === slug);
}

export function getCuisineOptions(): string[] {
  return [...new Set(restaurants.flatMap((restaurant) => restaurant.cuisines))].sort();
}

export function getNeighborhoodOptions(): string[] {
  return [...new Set(restaurants.map((restaurant) => restaurant.neighborhood))].sort();
}