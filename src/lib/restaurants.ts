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
    tagline: "Tropical waterfront dining under the palms.",
    address: "960 N Highway A1A, Jupiter, FL 33477",
    location: {
      lat: 26.9425432,
      lon: -80.0808546,
    },
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
      "https://www.guanabanas.com/wp-content/uploads/GUANAS_2020_WEB_079.jpg",
      "https://www.guanabanas.com/wp-content/uploads/GUANAS_2020_WEB_045.jpg",
      "https://www.guanabanas.com/wp-content/uploads/GUANAS_2020_WEB_063.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "u-tiki-beach",
    name: "U-Tiki Beach",
    tagline: "Dock-and-dine with panoramic Intracoastal views.",
    address: "1095 N Highway A1A, Jupiter, FL 33477",
    location: {
      lat: 26.9458971,
      lon: -80.0838222,
    },
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
      "https://media-cdn.tripadvisor.com/media/photo-s/05/ad/27/bf/u-tiki-beach.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/10/8d/f3/9e/indoor-but-outdoor.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/aARFlq163bK4SJqVDgg1qQ/l.jpg",
    ],
    featured: true,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "little-moirs-food-shack",
    name: "Little Moir's Food Shack",
    tagline: "Award-winning creative seafood in a casual setting.",
    address: "103 US-1, Jupiter, FL 33477",
    location: {
      lat: 26.9324664,
      lon: -80.0790973,
    },
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
    mapUrl: "https://maps.google.com/?q=103+US-1+Jupiter+FL+33477",
    photoUrls: [
      "https://s3-media0.fl.yelpcdn.com/bphoto/2m1N3VUPwB-OQdX1O8ShqA/258s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/CZMmFwQI_sB-GxvqiIyXeQ/348s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/AeZb8Ss6GbuLGR13mPNYvA/348s.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "jettys-waterfront",
    name: "Jetty's Waterfront Restaurant",
    tagline: "Classic local favorite with riverfront seating.",
    address: "1075 N Highway A1A, Jupiter, FL 33477",
    location: {
      lat: 26.9431,
      lon: -80.0822,
    },
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
      "https://static.wixstatic.com/media/a9bfdc_72e83c1f9773489b89932ba972972aed.jpg/v1/fill/w_980,h_888,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9bfdc_72e83c1f9773489b89932ba972972aed.jpg",
      "https://static.wixstatic.com/media/a9bfdc_7ff89817b3694e4286602b99d8864262~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9bfdc_7ff89817b3694e4286602b99d8864262~mv2.jpg",
      "https://img.restaurantguru.com/cb04-Jettys-Waterfront-Restaurant-Jupiter-facade-1.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "tavolena-ristorante",
    name: "Tavolena Ristorante",
    tagline: "Authentic Northern Italian cuisine in a warm setting.",
    address: "185 E Indiantown Rd Ste 123, Jupiter, FL 33477",
    location: {
      lat: 26.9352802,
      lon: -80.09082,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$$",
    cuisines: ["Italian"],
    description:
      "Handmade pasta, risotto, and Italian seafood specialties with an extensive wine list.",
    hours: [
      "Mon-Thu: 5:00 PM - 10:00 PM",
      "Fri-Sat: 5:00 PM - 11:00 PM",
      "Sun: 5:00 PM - 9:00 PM",
    ],
    phone: "(561) 744-7788",
    website: "https://tavolena.com",
    mapUrl: "https://maps.google.com/?q=185+E+Indiantown+Rd+Jupiter+FL+33477",
    photoUrls: [
      "https://tavolena.com/wp-content/uploads/2023/10/Appetizers_v12.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/4_0feMe7Vd6Zc0y_2vknqA/l.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/NXl4DfehoVUG_Q7-m_yXQg/l.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "thai-lotus",
    name: "Thai Lotus",
    tagline: "Authentic Thai cuisine with traditional flavors.",
    address: "201 North US-1 # C-4, Jupiter, FL 33477",
    location: {
      lat: 26.9312019,
      lon: -80.0792817,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Thai", "Asian"],
    description:
      "Traditional Thai dishes with fresh ingredients, aromatic curries, and skilled preparation.",
    hours: [
      "Mon-Thu: 11:00 AM - 10:00 PM",
      "Fri-Sat: 11:00 AM - 11:00 PM",
      "Sun: 12:00 PM - 9:00 PM",
    ],
    phone: "(561) 741-0222",
    website: "https://www.thailotusjupiter.com",
    mapUrl: "https://maps.google.com/?q=201+North+US-1+Jupiter+FL+33477",
    photoUrls: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/0a/ae/f9/thai-lotus-restaurant.jpg?w=700&h=400&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/93/3d/fc/sushi-combo.jpg?w=1400&h=800&s=1",
      "https://image.zmenu.com/menupic/2077209/w_20201203122920768028.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Vegan Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "taco-maki-jupiter",
    name: "Taco Maki Jupiter",
    tagline: "Fusion of Mexican and Japanese cuisines with creative rolls.",
    address: "1155 Main St Ste 120, Jupiter, FL 33477",
    location: {
      lat: 26.8886563,
      lon: -80.1145833,
    },
    neighborhood: "Downtown Jupiter",
    priceTier: "$$",
    cuisines: ["Mexican", "Japanese", "Fusion"],
    description:
      "Unique fusion restaurant blending Mexican and Japanese flavors with creative tacos and sushi rolls.",
    hours: [
      "Mon-Thu: 11:00 AM - 10:00 PM",
      "Fri-Sat: 11:00 AM - 11:00 PM",
      "Sun: 12:00 PM - 9:00 PM",
    ],
    phone: "(561) 741-6262",
    website: "https://www.takomakirestaurant.com",
    mapUrl: "https://maps.google.com/?q=1155+Main+St+Jupiter+FL+33477",
    photoUrls: [
      "https://www.takomakirestaurant.com/wp-content/uploads/2023/07/roll.png",
      "https://www.takomakirestaurant.com/wp-content/uploads/2023/07/takomaki-dragon2-3.png",
      "https://www.takomakirestaurant.com/wp-content/uploads/2023/07/mix-fried-rice.png",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "sea-racha-asian-cuisine",
    name: "Sea Racha Asian Cuisine and Bar",
    tagline: "Vibrant Thai and pan-Asian cuisine in downtown Jupiter.",
    address: "103 US-1 STE B5-B6, Jupiter, FL 33477",
    location: {
      lat: 26.9342246,
      lon: -80.0942087,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Thai", "Asian", "Seafood"],
    description:
      "Contemporary Asian cuisine with bold flavors, fresh ingredients, and craft cocktails.",
    hours: [
      "Mon-Thu: 11:00 AM - 10:00 PM",
      "Fri-Sat: 11:00 AM - 11:00 PM",
      "Sun: 12:00 PM - 10:00 PM",
    ],
    phone: "(561) 744-2244",
    website: "https://searachajupiter.com",
    mapUrl: "https://maps.google.com/?q=103+US-1+Jupiter+FL+33477",
    photoUrls: [
      "https://searachajupiter.com/wp-content/uploads/2022/01/Toppicksearacha12.jpg",
      "https://searachajupiter.com/wp-content/uploads/2022/06/Healthy-Food-1.jpeg",
      "https://searachajupiter.com/wp-content/uploads/2022/01/Toppicksearacha11.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Vegan Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "ruths-chris-steak-house",
    name: "Ruth's Chris Steak House",
    tagline: "Premium steakhouse with sizzling steaks and fine wines.",
    address: "105 Breakwater Ct, Jupiter, FL 33477",
    location: {
      lat: 26.9356686,
      lon: -80.0824482,
    },
    neighborhood: "Harbourside",
    priceTier: "$$$",
    cuisines: ["Steakhouse", "American"],
    description:
      "Upscale steakhouse known for USDA prime beef, fresh seafood, and an extensive wine collection.",
    hours: [
      "Mon-Thu: 5:00 PM - 10:00 PM",
      "Fri-Sat: 4:30 PM - 11:00 PM",
      "Sun: 5:00 PM - 9:00 PM",
    ],
    phone: "(561) 616-0555",
    website: "https://www.ruthschris.com/locations/jupiter",
    mapUrl: "https://maps.google.com/?q=105+Breakwater+Ct+Jupiter+FL+33477",
    photoUrls: [
      "https://www.hmdgrouparchitects.com/wp-content/uploads/2025/02/RCSH_7380_Jupiter-FL_003_Ruths-Rm-scaled.jpg",
      "https://www.hmdgrouparchitects.com/wp-content/uploads/2025/02/RCSH_7380_Jupiter-FL_009_BAR-scaled.jpg",
      "https://www.hmdgrouparchitects.com/wp-content/uploads/2025/02/RCSH_7380_Jupiter-FL_013_Patio-scaled.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-14",
  },
  {
    slug: "lynoras-italian",
    name: "Lynora's Italian Restaurant",
    tagline: "Beloved family Italian restaurant since 1980.",
    address: "1548 US-1, Jupiter, FL 33477",
    location: {
      lat: 26.9534401,
      lon: -80.0853315,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Italian"],
    description:
      "Traditional Italian dishes, fresh pasta, and homemade sauces in a cozy, welcoming atmosphere.",
    hours: [
      "Mon-Thu: 5:00 PM - 10:00 PM",
      "Fri-Sat: 5:00 PM - 11:00 PM",
      "Sun: 5:00 PM - 10:00 PM",
    ],
    phone: "(561) 746-5577",
    website: "https://www.lynoras.com",
    mapUrl: "https://maps.google.com/?q=1548+US-1+Jupiter+FL+33477",
    photoUrls: [
      "https://images.squarespace-cdn.com/content/v1/6070549ad072dc72e1eedecf/1621357358745-XFXPCB4GC4P8WBDAAYVS/Lynoras.jpg",
      "https://img.restaurantguru.com/c521-dishes-Lynoras-Jupiter.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/KiBaDKC8dpeDdqoi-Gehwg/l.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-06-14",
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
