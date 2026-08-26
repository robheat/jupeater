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
  waterfront?: boolean;
  dogFriendly?: boolean;
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
    waterfront: true,
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Guanabanas%2C+960+N+Highway+A1A%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "/restaurants/guanabanas/guanabanas-1.jpg",
      "/restaurants/guanabanas/guanabanas-2.jpg",
      "/restaurants/guanabanas/guanabanas-3.jpg",
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
    waterfront: true,
    dogFriendly: true,
    description:
      "A casual, open-air waterfront restaurant and bar at Jupiter Inlet Marina with sandy beach seating and views of the Jupiter Lighthouse. Known for a laid-back tiki-bar vibe, Caribbean-influenced seafood menu, and happy hour.",
    hours: [
      "Mon-Thu: 4:30 PM - 10:00 PM",
      "Fri-Sun: 12:00 PM - 10:00 PM",
    ],
    phone: "(561) 406-2210",
    website: "https://www.utikibeach.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=U-Tiki+Beach%2C+1095+N+Highway+A1A%2C+Jupiter%2C+FL+33477",
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
      lat: 26.932485,
      lon: -80.077801,
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Little+Moir's+Food+Shack%2C+103+S+US+Highway+1%2C+Ste+D3%2C+Jupiter%2C+FL+33477",
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
    waterfront: true,
    dogFriendly: true,
    description:
      "A three-decade fixture on the Jupiter Inlet Waterway serving seafood and Certified Angus steaks, with a lighthouse view, full bar, and Sunday brunch.",
    hours: [
      "Mon-Thu: 5:00 PM - 9:00 PM",
      "Fri-Sat: 5:00 PM - 9:30 PM",
      "Sun: 11:00 AM - 3:00 PM (Brunch), 5:00 PM - 9:00 PM (Dinner)",
    ],
    phone: "(561) 743-8166",
    website: "https://www.jettysjupiter.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jetty's+Waterfront+Restaurant%2C+1075+N+Highway+A1A%2C+Jupiter%2C+FL+33477",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tavolena+Ristorante%2C+185+E+Indiantown+Rd%2C+Jupiter%2C+FL+33477",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Thai+Lotus%2C+201+North+US-1+%23+C-4%2C+Jupiter%2C+FL+33477",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Taco+Maki+Jupiter%2C+1155+Main+St+Ste+120%2C+Jupiter%2C+FL+33458",
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
      lat: 26.932485,
      lon: -80.077801,
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sea+Racha+Asian+Cuisine+and+Bar%2C+103+S+US+Highway+1%2C+Ste+B5-B6%2C+Jupiter%2C+FL+33477",
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
    waterfront: true,
    description:
      "Part of the national Ruth's Chris chain, this location opened in June 2024 at Harbourside Place in Jupiter. Serves USDA Prime steaks broiled and finished on a 500-degree plate, plus seafood and a full wine list.",
    hours: [
      "Mon-Thu: 3:30 PM - 10:00 PM",
      "Fri-Sat: 3:30 PM - 10:30 PM",
      "Sun: 3:30 PM - 9:00 PM",
    ],
    phone: "(561) 831-4440",
    website: "https://www.ruthschris.com/locations/fl/jupiter/jupiter/7380",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ruth's+Chris+Steak+House%2C+105+Breakwater+Ct%2C+Jupiter%2C+FL+33477",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lynora's+Italian+Restaurant%2C+1548+US-1%2C+Jupiter%2C+FL+33469",
    photoUrls: [
      "https://images.getbento.com/accounts/c75f8ca9fa5bb3f01f6b720239e2a376/media/images/27417LENORAS-SHOOT-01557.jpg",
      "https://images.getbento.com/accounts/c75f8ca9fa5bb3f01f6b720239e2a376/media/images/97757IMG_3115.jpeg",
      "https://images.getbento.com/accounts/c75f8ca9fa5bb3f01f6b720239e2a376/media/images/18089Screen_Shot_2023-02-27_at_11.45.08_AM.png",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-07-21",
  },
  {
    slug: "dive-bar-restaurant",
    name: "Dive Bar Restaurant",
    tagline: "Sushi, raw bar, and seafood over Jupiter Yacht Club Marina views.",
    address: "318 S US Highway 1, Jupiter, FL 33477",
    location: {
      lat: 26.9309931,
      lon: -80.0800758,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Sushi", "Seafood", "American"],
    waterfront: true,
    dogFriendly: true,
    description:
      "A waterfront sushi bar and seafood restaurant overlooking the Jupiter Yacht Club Marina along the Riverwalk, known for creative rolls, a raw oyster bar, and an aquarium-lined indoor bar that stays open late.",
    hours: [
      "Sun-Wed: 11:00 AM - 11:00 PM (Bar until 1:00 AM)",
      "Thu-Sat: 11:00 AM - 12:00 AM (Bar until 1:00 AM)",
    ],
    phone: "(561) 747-4767",
    website: "https://divebarrestaurant.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dive+Bar+Restaurant%2C+318+S+US+Highway+1%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://divebarrestaurant.com/wp-content/uploads/2018/10/slider.png",
      "https://divebarrestaurant.com/wp-content/uploads/2018/10/The-Jupiter-Yacht-Club.png",
      "https://divebarrestaurant.com/wp-content/uploads/2018/10/img1.png",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "zunzibar",
    name: "Zunzibar",
    tagline: "Coastal cuisine and curated cocktails on an open-air patio.",
    address: "80 Intracoastal Point Dr, Jupiter, FL 33477",
    location: {
      lat: 26.9345303,
      lon: -80.0888704,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Seafood", "American", "Caribbean"],
    waterfront: true,
    dogFriendly: true,
    description:
      "Zunzibar's first Florida location serves chef-driven coastal plates — Peruvian chicken skewers, snow crab with Cajun butter, blackened mahi with mango slaw — alongside curated cocktails on an outdoor patio, with daily happy hour from 4-7 PM.",
    hours: [
      "Sun-Thu: 12:00 PM - 9:00 PM",
      "Fri-Sat: 12:00 PM - 10:00 PM",
    ],
    phone: "(561) 453-4333",
    website: "https://zunzibar.com/locations/jupiter-fl",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Zunzibar%2C+80+Intracoastal+Point+Dr%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://cdn.sanity.io/images/kllt83hn/production/707eaeeabeab5263d595b335c5ec38d4c84b5f66-4120x3971.jpg",
      "https://cdn.sanity.io/images/kllt83hn/production/414dc5f670d8b9a9b078f402ed67b073a32a6d3b-3354x3904.jpg",
      "https://cdn.sanity.io/images/kllt83hn/production/263d3d9a5bc917a7f36399dc849241d59649e3f3-4451x2967.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "2-vinez",
    name: "2 Vinez",
    tagline: "Wine bar and sushi lounge with an eclectic Asian-fusion menu.",
    address: "287 E Indiantown Rd, Ste B2, Jupiter, FL 33477",
    location: {
      lat: 26.934087,
      lon: -80.088655,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Sushi", "Asian", "Fusion"],
    description:
      "An eclectic wine bar and sushi lounge on Indiantown Road serving Asian-fusion dishes alongside an extensive wine list, with couch seating and local art throughout the dining room.",
    hours: [
      "Mon: Closed",
      "Tue-Thu: 11:30 AM - 9:00 PM",
      "Fri-Sat: 11:30 AM - 10:00 PM",
      "Sun: 5:00 PM - 9:00 PM",
    ],
    phone: "(561) 745-6262",
    website: "https://www.2vinezjupiter.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=2+Vinez%2C+287+E+Indiantown+Rd%2C+Ste+B2%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://cdn.res-discover.com/2-vinez/15482-albums-4.jpg",
      "https://cdn.res-discover.com/2-vinez/15482-albums-5.jpg",
      "https://cdn.res-discover.com/2-vinez/15482-albums-6.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "niekos-neighborhood-bar",
    name: "Nieko's Neighborhood Bar",
    tagline: "A local's bar for cheesesteaks, karaoke, and game-day watching in Abacoa.",
    address: "1153 Town Center Dr, Ste 101, Jupiter, FL 33458",
    location: {
      lat: 26.889805,
      lon: -80.114628,
    },
    neighborhood: "Abacoa",
    priceTier: "$",
    cuisines: ["American"],
    description:
      "A neighborhood bar in Abacoa opened by longtime local bartender Nieko Tischler, serving elevated bar fare like cheesesteaks, loaded cheese fries, walking tacos, and charcuterie boards alongside crafted cocktails, with 15 TVs for game days and weekly karaoke, comedy, and live-music nights.",
    hours: [
      "Mon-Wed: 11:00 AM - 12:00 AM",
      "Thu-Sat: 11:00 AM - 2:00 AM",
      "Sun: 11:00 AM - 12:00 AM",
    ],
    phone: "(561) 623-0916",
    website: "https://niekosneighborhood.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nieko's+Neighborhood+Bar%2C+1153+Town+Center+Dr%2C+Ste+101%2C+Jupiter%2C+FL+33458",
    photoUrls: [
      "https://tfc-uwc.s3.amazonaws.com/Nieko%27s_Neighborhood_Bar_pAWaYI371d_Niekos-Jupiter-New1stPic.jpg",
      "https://tfc-uwc.s3.amazonaws.com/Nieko%27s_Neighborhood_Bar_ktQYDkllEr_Niekos-Neighbothood-Bar-Jupiter-201.jpg",
      "https://tfc-uwc.s3.amazonaws.com/Nieko%27s_Neighborhood_Bar_9mUBCg3yum_Niekos-Neighbothood-Bar-Jupiter-204.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "casa-tequila",
    name: "Casa Tequila",
    tagline: "Mexican and Tex-Mex fare with margaritas on West Indiantown Road.",
    address: "4177 W Indiantown Rd, Jupiter, FL 33478",
    location: {
      lat: 26.9356929,
      lon: -80.1594067,
    },
    neighborhood: "Jupiter Farms",
    priceTier: "$$",
    cuisines: ["Mexican", "Tex-Mex"],
    description:
      "A casual Mexican and Tex-Mex restaurant on West Indiantown Road serving appetizers, small plates, and entrees alongside a full margarita bar, with a private dining room and an outdoor bar patio.",
    hours: ["Mon-Sun: 11:00 AM - 10:00 PM"],
    phone: "(561) 781-3772",
    website: "https://casatequila.us",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Tequila%2C+4177+W+Indiantown+Rd%2C+Jupiter%2C+FL+33478",
    photoUrls: [
      "https://casatequila.us/order/images/casajupiter2.jpg",
      "https://casatequila.us/order/images/casajupiter1.jpg",
      "https://casatequila.us/order/images/casajupiter3.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options", "Vegetarian Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "brass-ring-pub",
    name: "Brass Ring Pub",
    tagline: "Sports-bar wings, burgers, and prime rib on Indiantown Road.",
    address: "1150 W Indiantown Rd, Jupiter, FL 33458",
    location: {
      lat: 26.9339614,
      lon: -80.1147463,
    },
    neighborhood: "West Jupiter",
    priceTier: "$",
    cuisines: ["American"],
    description:
      "A neighborhood sports bar on Indiantown Road known for its chicken wings and prime rib sandwich, with surfboard-shaped tables, sports memorabilia on the walls, and TVs throughout for game days.",
    hours: [
      "Mon-Thu: 11:00 AM - 10:00 PM",
      "Fri-Sat: 11:00 AM - 11:00 PM",
      "Sun: 11:00 AM - 10:00 PM",
    ],
    phone: "(561) 406-5057",
    website: "https://www.brassringpubfl.com/jup",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Brass+Ring+Pub%2C+1150+W+Indiantown+Rd%2C+Jupiter%2C+FL+33458",
    photoUrls: [
      "https://static.wixstatic.com/media/be8e01_febf8aad46ef49c599ad00dc029f70b0~mv2.jpg",
      "https://static.wixstatic.com/media/be8e01_02758af6f9b44e9e815c8a204b92d383~mv2.jpg",
      "https://static.wixstatic.com/media/be8e01_45623746a1a946c88422f9cfe6eef2e2~mv2.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "calaveras-cantina",
    name: "Calaveras Cantina",
    tagline: "Sexy Mexican cuisine and cocktails at Harbourside Place.",
    address: "125 Dockside Cir, Jupiter, FL 33477",
    location: {
      lat: 26.9355389,
      lon: -80.083289,
    },
    neighborhood: "Harbourside",
    priceTier: "$$",
    cuisines: ["Mexican"],
    waterfront: true,
    dogFriendly: true,
    description:
      "Part of a South Florida group of upscale Mexican restaurants, Calaveras Cantina serves modern Mexican cuisine and craft cocktails at Harbourside Place, with patio seating overlooking the Jupiter Intracoastal.",
    hours: [
      "Mon-Thu: 11:30 AM - 11:00 PM",
      "Fri: 11:30 AM - 1:00 AM",
      "Sat: 11:00 AM - 1:00 AM",
      "Sun: 11:00 AM - 10:00 PM",
    ],
    phone: "(561) 489-7869",
    website: "https://calaverascantina.com/jupiter/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Calaveras+Cantina%2C+125+Dockside+Cir%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://calaverascantina.com/wp-content/uploads/2024/08/02-LUX6028-3-3-scaled.jpg",
      "https://calaverascantina.com/wp-content/uploads/2023/08/05-LUX6038-3.jpg",
      "https://calaverascantina.com/wp-content/uploads/2023/08/09-LUX6063-3.jpg",
    ],
    featured: true,
    dietaryOptions: ["Vegetarian Options", "Gluten-Sensitive Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "del-pesto",
    name: "Del Pesto",
    tagline: "New York-Italian wood-fired pizza and family recipes on US-1.",
    address: "201 N US Highway 1, Jupiter, FL 33477",
    location: {
      lat: 26.9365608,
      lon: -80.0801717,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Italian", "Pizza"],
    description:
      "A family-owned Italian restaurant from a lineage of New York restaurateurs, serving handcrafted pasta, house-made sauces, and Neapolitan-style wood-fired pizza from a Marra Forni brick oven, in the Shoppes at Jupiter plaza on US-1.",
    hours: [
      "Mon: Closed",
      "Tue-Thu: 12:00 PM - 10:00 PM",
      "Fri-Sat: 12:00 PM - 10:30 PM",
      "Sun: 12:00 PM - 10:00 PM",
    ],
    phone: "(561) 768-9533",
    website: "https://delpestojupiter.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Del+Pesto%2C+201+N+US+Highway+1%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://delpestojupiter.com/assets/hero-main-BcqW7VgH.jpg",
      "https://delpestojupiter.com/assets/delpesto-sign-C_yKhnMF.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "twisted-tuna",
    name: "The Twisted Tuna",
    tagline: "Sushi, seafood, and daily specials on US-1.",
    address: "353 S US Highway 1, Jupiter, FL 33477",
    location: {
      lat: 26.931488,
      lon: -80.077185,
    },
    neighborhood: "Central Jupiter",
    priceTier: "$$",
    cuisines: ["Seafood", "Sushi", "American"],
    dogFriendly: true,
    description:
      "A bar and grill on US-1 serving sushi, seafood, and bar bites, known for daily specials like Taco Tuesday and Sushi Sunday plus a weekend brunch menu.",
    hours: [
      "Mon-Thu: 11:00 AM - 11:00 PM",
      "Fri-Sat: 11:00 AM - 12:00 AM",
      "Sun: 11:00 AM - 11:00 PM",
    ],
    phone: "(561) 406-2188",
    website: "https://thetwistedtuna.com/jupiter/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Twisted+Tuna%2C+353+S+US+Highway+1%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://thetwistedtuna.com/wp-content/uploads/2025/01/twisted-tuna-sushi-sunday-special.jpg",
      "https://thetwistedtuna.com/wp-content/uploads/2025/01/twisted-tuna-happy-hour-special.jpg",
      "https://thetwistedtuna.com/wp-content/uploads/2025/01/twisted-tuna-taco-tuesday-special.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-02",
  },
  {
    slug: "arthur-and-sons-ny-italian",
    name: "Arthur & Sons NY Italian",
    tagline: "Chef Joe Isidori's nostalgic red-sauce classics at Bluffs Square.",
    address: "4050 US Highway 1 S, Ste 307, Jupiter, FL 33477",
    location: {
      lat: 26.8952187,
      lon: -80.061709,
    },
    neighborhood: "South Jupiter",
    priceTier: "$$$",
    cuisines: ["Italian", "American"],
    description:
      "Chef Joe Isidori's Florida outpost of his New York red-sauce Italian restaurant, serving nostalgic classics like spicy rigatoni alla vodka, chicken parmesan, and spumoni in the Bluffs Square Shoppes.",
    hours: [
      "Mon-Thu: 4:00 PM - 10:00 PM",
      "Fri-Sat: 4:00 PM - 11:00 PM",
      "Sun: 4:00 PM - 10:00 PM",
    ],
    phone: "(561) 335-3715",
    website: "https://arthurandsonsnyc.com/pages/jupiter",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Arthur+%26+Sons+NY+Italian%2C+4050+US+Highway+1+S%2C+Ste+307%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://arthurandsonsnyc.com/cdn/shop/files/RH-11.26.25_0044-1.jpg",
      "https://arthurandsonsnyc.com/cdn/shop/files/SPICY-RIGATONI-ALLA-VODKA-_1.jpg",
      "https://arthurandsonsnyc.com/cdn/shop/files/BURRATA-1.jpg",
    ],
    featured: true,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-03",
  },
  {
    slug: "hap-and-hooch",
    name: "Hap & Hooch",
    tagline: "Scratch-kitchen smashburgers and wings with a serious cocktail program.",
    address: "4050 US Highway 1 S, Unit 309, Jupiter, FL 33477",
    location: {
      lat: 26.8952187,
      lon: -80.061709,
    },
    neighborhood: "South Jupiter",
    priceTier: "$$",
    cuisines: ["American"],
    description:
      "A scratch-kitchen bar and grill in Bluffs Square Shoppes known for smashburgers, wings, and comfort-food classics, backed by an outstanding cocktail program and daily happy hour.",
    hours: [
      "Mon: Closed",
      "Tue-Thu: 3:00 PM - 10:00 PM",
      "Fri-Sat: 12:00 PM - 10:00 PM",
      "Sun: 12:00 PM - 8:00 PM",
    ],
    phone: "(561) 320-1182",
    website: "https://www.hapandhooch.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hap+%26+Hooch%2C+4050+US+Highway+1+S%2C+Unit+309%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://images.squarespace-cdn.com/content/v1/6837911665f29b77a6240414/f910b444-2eb3-45df-a17b-37b1397ac757/Burger.JPG",
      "https://images.squarespace-cdn.com/content/v1/6837911665f29b77a6240414/bca58c98-af91-4c06-ad5c-010f842a0010/Nachos.jpg",
      "https://images.squarespace-cdn.com/content/v1/6837911665f29b77a6240414/a3b1e339-2583-474e-989a-981eb8e738bb/Wisconsin+Cheese+Curds.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-08-03",
  },
  {
    slug: "thirsty-turtle-seagrill",
    name: "Thirsty Turtle Seagrill",
    tagline: "Fresh seafood, wings, and craft beer just south of Jupiter in Juno Beach.",
    address: "13981 US Highway 1, Juno Beach, FL 33408",
    location: {
      lat: 26.881149,
      lon: -80.0573668,
    },
    neighborhood: "Juno Beach",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    dogFriendly: true,
    description:
      "A sports-bar seafood grill just south of Jupiter serving coconut shrimp salad, firecracker shrimp tacos, and award-winning wings, with a rotating craft beer list and outdoor seating.",
    hours: [
      "Mon-Thu: 11:30 AM - 10:00 PM",
      "Fri-Sat: 11:30 AM - 11:00 PM",
      "Sun: 12:00 PM - 10:00 PM",
    ],
    phone: "(561) 627-8991",
    website: "https://thirstyturtlefl.com/juno-beach/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Thirsty+Turtle+Seagrill%2C+13981+US+Highway+1%2C+Juno+Beach%2C+FL+33408",
    photoUrls: [
      "https://thirstyturtlefl.com/wp-content/uploads/2024/04/ThirtstyTurtle_CoconutShrimpSalad_2880x2304.jpg",
      "https://thirstyturtlefl.com/wp-content/uploads/2024/04/ThirtstyTurtle_FirecrackerShrimpTacos_2880x2304.jpg",
      "https://thirstyturtlefl.com/wp-content/uploads/2024/04/ThirtstyTurtle_Award_Winning_Chicken_Wings-1024x819.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-03",
  },
  {
    slug: "hog-snappers-shack-and-sushi",
    name: "Hog Snappers Shack & Sushi",
    tagline: "Neighborhood seafood and sushi spot in Tequesta with a lively bar scene.",
    address: "900 N US Highway 1, Tequesta, FL 33469",
    location: {
      lat: 26.9682474,
      lon: -80.0843162,
    },
    neighborhood: "Tequesta",
    priceTier: "$$",
    cuisines: ["Seafood", "Sushi", "American"],
    description:
      "A longtime Tequesta favorite serving fresh seafood, sushi rolls, and daily chalkboard specials in a casual, local-first setting with indoor and patio seating.",
    hours: [
      "Mon-Thu: 4:00 PM - 10:00 PM",
      "Fri-Sat: 4:00 PM - 11:00 PM",
      "Sun: 4:00 PM - 9:00 PM",
    ],
    phone: "(561) 406-5193",
    website: "https://www.hogsnappersshackandsushi.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hog+Snappers+Shack+%26+Sushi%2C+900+N+US+Highway+1%2C+Tequesta%2C+FL+33469",
    photoUrls: [
      "https://static.wixstatic.com/media/227056_161866b5862a4163994f6f875e869af2~mv2.jpg/v1/fill/w_972,h_600,al_c,q_80,enc_avif,quality_auto/227056_161866b5862a4163994f6f875e869af2~mv2.jpg",
      "https://static.wixstatic.com/media/227056_c124746da1b4473a9aee0f964b8b29da~mv2.jpg/v1/fill/w_972,h_600,al_c,q_80,enc_avif,quality_auto/227056_c124746da1b4473a9aee0f964b8b29da~mv2.jpg",
      "https://static.wixstatic.com/media/227056_b6235b57f8ac4e9d8e9661798f113aad~mv2.jpg/v1/fill/w_972,h_600,al_c,q_80,enc_avif,quality_auto/227056_b6235b57f8ac4e9d8e9661798f113aad~mv2.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-06",
  },
  {
    slug: "evo-italian-tequesta",
    name: "Evo Italian",
    tagline: "Wood-fired pizza, house-made pasta, and modern Italian plates in Tequesta.",
    address: "150 N US Highway 1, Ste 11-13, Tequesta, FL 33469",
    location: {
      lat: 26.9616088,
      lon: -80.0889036,
    },
    neighborhood: "Tequesta",
    priceTier: "$$",
    cuisines: ["Italian", "Pizza"],
    description:
      "A polished-casual Italian kitchen in Tequesta known for Neapolitan-style pizza, handmade pasta, and a rotating menu of seasonal starters and mains.",
    hours: [
      "Mon-Thu: 11:30 AM - 9:30 PM",
      "Fri-Sat: 11:30 AM - 10:00 PM",
      "Sun: 11:30 AM - 9:00 PM",
    ],
    phone: "(561) 203-9945",
    website: "https://evoitalian.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Evo+Italian%2C+150+N+US+Highway+1%2C+Tequesta%2C+FL+33469",
    photoUrls: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/7c/91/62/filetto-gorgonzola.jpg?w=1200&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/34/40/ad/caption.jpg?w=1200&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/86/0d/fb/ground-veal-beef-and.jpg?w=1200&h=800&s=1",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options"],
    lastVerified: "2026-08-06",
  },
  {
    slug: "captain-charlies-reef-grill",
    name: "Captain Charlie's Reef Grill",
    tagline: "Seafood-focused neighborhood grill just south of Jupiter in Juno Beach.",
    address: "12846 US Highway 1, Juno Beach, FL 33408",
    location: {
      lat: 26.8668218,
      lon: -80.0583828,
    },
    neighborhood: "Juno Beach",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    description:
      "A local Juno Beach staple serving fresh fish, shellfish, and hearty grill favorites in a relaxed dining room with full-bar service and nightly specials.",
    hours: [
      "Mon-Thu: 11:30 AM - 9:00 PM",
      "Fri-Sat: 11:30 AM - 10:00 PM",
      "Sun: 11:30 AM - 9:00 PM",
    ],
    phone: "(561) 626-1700",
    website: "https://www.captaincharliesreefgrillfl.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Captain+Charlie's+Reef+Grill%2C+12846+US+Highway+1%2C+Juno+Beach%2C+FL+33408",
    photoUrls: [
      "https://www.captaincharliesreefgrillfl.com/assets/img_2464-BzovOB2P.jpg",
      "https://www.captaincharliesreefgrillfl.com/assets/img_2476-YvbpSVd3.jpg",
      "https://www.captaincharliesreefgrillfl.com/assets/img_4684-DZLKKwCh.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-06",
  },
  {
    slug: "coolinary-cafe",
    name: "Coolinary Cafe",
    tagline: "Chef-driven New American cuisine with global influences in Palm Beach Gardens.",
    address: "4580 PGA Blvd, Palm Beach Gardens, FL 33418",
    location: {
      lat: 26.8391605,
      lon: -80.1103378,
    },
    neighborhood: "Palm Beach Gardens",
    priceTier: "$$$",
    cuisines: ["American", "Global", "Seafood"],
    description:
      "A destination dining spot in Palm Beach Gardens known for seasonal small plates, seafood-forward entrees, and an extensive wine list in an intimate setting.",
    hours: [
      "Mon-Thu: 5:00 PM - 9:30 PM",
      "Fri-Sat: 5:00 PM - 10:00 PM",
      "Sun: Closed",
    ],
    phone: "(561) 249-6760",
    website: "https://thecoolpig.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Coolinary+Cafe%2C+4580+PGA+Blvd%2C+Palm+Beach+Gardens%2C+FL+33418",
    photoUrls: [
      "https://images.squarespace-cdn.com/content/v1/65c65d2617f84d530785ebe6/765a03de-06ba-4d7e-8e18-b59a06dffed8/CoolinaryParchedPig_Image_home-01.jpg",
      "https://images.squarespace-cdn.com/content/v1/65c65d2617f84d530785ebe6/51401952-0eb5-4489-afb1-7daacf537ffb/CoolinaryParchedPig_Image_home-02.jpg",
      "https://images.squarespace-cdn.com/content/v1/65c65d2617f84d530785ebe6/55fd3d4a-f319-4806-aa93-1ca7e488ae3b/CoolinaryParchedPig_Image_menu.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Gluten-Sensitive Options"],
    lastVerified: "2026-08-06",
  },
  {
    slug: "stage-kitchen-and-bar",
    name: "Stage Kitchen & Bar",
    tagline: "Creative small plates blending Indian and global flavors in Palm Beach Gardens.",
    address: "2000 PGA Blvd, Ste 5506, Palm Beach Gardens, FL 33408",
    location: {
      lat: 26.8445485,
      lon: -80.0885587,
    },
    neighborhood: "Palm Beach Gardens",
    priceTier: "$$$",
    cuisines: ["Indian", "Global", "Fusion"],
    description:
      "An award-winning Palm Beach Gardens kitchen led by chef Pushkar Marathe, serving bold, shareable plates that fuse Indian flavors with contemporary global techniques.",
    hours: [
      "Mon-Thu: 5:00 PM - 10:00 PM",
      "Fri-Sat: 5:00 PM - 11:00 PM",
      "Sun: 5:00 PM - 9:00 PM",
    ],
    phone: "(561) 408-3685",
    website: "https://www.stagekitchenandbar.com/location/stage-pga/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Stage+Kitchen+%26+Bar%2C+2000+PGA+Blvd%2C+Ste+5506%2C+Palm+Beach+Gardens%2C+FL+33408",
    photoUrls: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/ce/09/26/inside-design.jpg?w=1200&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/06/3e/0c/garden-root-vegetable.jpg?w=1200&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/06/3d/0e/charcuterie-platter-with.jpg?w=1200&h=800&s=1",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Gluten-Sensitive Options"],
    lastVerified: "2026-08-06",
  },
  {
    slug: "lucky-shuck",
    name: "Lucky Shuck",
    tagline: "Waterfront oyster bar and seafood shack with a dockside patio on the Jupiter Inlet.",
    address: "1116 Love St, Jupiter, FL 33477",
    location: {
      lat: 26.9456741,
      lon: -80.0819569,
    },
    neighborhood: "Jupiter Inlet",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    waterfront: true,
    dogFriendly: true,
    description:
      "A casual waterfront restaurant and raw bar on Love Street near the Jupiter Inlet, partnering with local fishermen for daily-caught seafood, freshly shucked oysters, and hand-rolled sushi. The dockside patio and lawn area draw families and boaters alike for happy hour and sunset views.",
    hours: [
      "Mon-Thu: 11:30 AM - 9:00 PM",
      "Fri-Sat: 11:30 AM - 10:00 PM",
      "Sun: 11:30 AM - 9:00 PM",
    ],
    phone: "(561) 532-3331",
    website: "https://www.luckyshuckjupiter.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lucky+Shuck%2C+1116+Love+St%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://images.getbento.com/accounts/12db1d42ec807dcf9b60ce4df8cdecb7/media/images/LuckyShuck_HoldMyBeer.jpg",
      "https://images.getbento.com/accounts/12db1d42ec807dcf9b60ce4df8cdecb7/media/images/LuckyShuck_Oyster.jpg",
      "https://images.getbento.com/accounts/12db1d42ec807dcf9b60ce4df8cdecb7/media/images/LuckyShuck_Cocktail.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "dune-dog-cafe",
    name: "Dune Dog Cafe",
    tagline: "Casual beachside cafe known for hot dogs, fish sandwiches, and family-friendly dining near Jupiter Beach.",
    address: "775 N Alt Highway A1A, Jupiter, FL 33477",
    location: {
      lat: 26.9407482,
      lon: -80.0930825,
    },
    neighborhood: "Jupiter Inlet",
    priceTier: "$",
    cuisines: ["American", "Seafood"],
    description:
      "A longtime Jupiter Beach favorite for casual, affordable eats - gourmet hot dogs, the Original Crispy Fish Sandwich, burgers, and onion rings - just off Alternate A1A. Casual counter service and a laid-back patio make it a go-to for families after the beach.",
    hours: [
      "Mon-Thu: 11:00 AM - 9:00 PM",
      "Fri-Sat: 11:00 AM - 10:00 PM",
      "Sun: 11:00 AM - 9:00 PM",
    ],
    phone: "(561) 744-6667",
    website: "https://dunedog.com/jupiter-fl/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dune+Dog+Cafe%2C+775+N+Alt+Highway+A1A%2C+Jupiter%2C+FL+33477",
    photoUrls: [
      "https://dunedog.com/assets/photos/jupiter/jupiter.jpg",
      "https://dunedog.com/assets/photos/food/food1.jpg",
      "https://dunedog.com/assets/photos/food/food3.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "lewis-steakhouse",
    name: "Lewis Steakhouse",
    tagline: "Upscale steakhouse from the Okeechobee Prime family serving dry-aged cuts and craft cocktails in West Jupiter.",
    address: "6390 W Indiantown Rd, Ste 59, Jupiter, FL 33458",
    location: {
      lat: 26.9338854,
      lon: -80.1330848,
    },
    neighborhood: "West Jupiter",
    priceTier: "$$$",
    cuisines: ["Steakhouse", "American", "Seafood"],
    description:
      "Jupiter's newest locally owned steakhouse, part of the Okeechobee Prime restaurant group, serving USDA Prime dry-aged steaks, fresh seafood, and chef-driven small plates alongside an extensive whiskey and craft cocktail list. An elevated dining room and nightly happy hour make it a favorite for date night.",
    hours: [
      "Mon-Thu: 4:00 PM - 9:00 PM",
      "Fri-Sat: 4:00 PM - 10:00 PM",
      "Sun: 4:00 PM - 9:00 PM",
    ],
    phone: "(561) 277-9188",
    website: "https://www.lewissteakhouse.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lewis+Steakhouse%2C+6390+W+Indiantown+Rd%2C+Ste+59%2C+Jupiter%2C+FL+33458",
    photoUrls: [
      "https://www.lewissteakhouse.com/content/images/thumbs/0000058_surf-n-turf.jpeg",
      "https://www.lewissteakhouse.com/content/images/thumbs/0000067_tomahawk.jpeg",
      "https://www.lewissteakhouse.com/content/images/thumbs/0000078_crab-cake-entree.jpeg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "blackbird-modern-asian",
    name: "Blackbird Modern Asian",
    tagline: "Chef-driven modern Asian small plates and craft cocktails in an elevated dining room near Tequesta.",
    address: "1511 N Old Dixie Hwy, Jupiter, FL 33469",
    location: {
      lat: 26.9432457,
      lon: -80.0938499,
    },
    neighborhood: "Tequesta",
    priceTier: "$$$",
    cuisines: ["Asian", "Sushi"],
    description:
      "A striking modern Asian restaurant near the Jupiter-Tequesta line, where a 12-foot golden Buddha and a color-changing cherry blossom tree set the scene for chef-driven dishes spanning Japan, Thailand, China, Korea, and Vietnam - from Chinese BBQ short ribs to bao buns and inventive sushi rolls. A polished, romantic atmosphere and craft cocktail program make it a top pick for date night.",
    hours: [
      "Mon-Thu: 4:00 PM - 10:00 PM",
      "Fri-Sat: 4:00 PM - 11:00 PM",
      "Sun: 4:00 PM - 10:00 PM",
    ],
    phone: "(561) 589-7505",
    website: "https://www.blackbirdmodernasian.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Blackbird+Modern+Asian%2C+1511+N+Old+Dixie+Hwy%2C+Jupiter%2C+FL+33469",
    photoUrls: [
      "https://images.getbento.com/accounts/614949c1810e09f6eae4e906681ff71b/media/images/68138fl-blackbird-modern-asian-restaurant-jupiter-02.JPG",
      "https://images.getbento.com/accounts/614949c1810e09f6eae4e906681ff71b/media/images/65701fl-blackbird-modern-asian-restaurant-jupiter-08.JPG",
      "https://images.getbento.com/accounts/614949c1810e09f6eae4e906681ff71b/media/images/5181820220624-Capture0417.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "little-moirs-sweet-fish",
    name: "Little Moir's Sweet Fish",
    tagline: "A focused seafood menu from the Little Moir's family, casual and local in West Jupiter.",
    address: "6390 W Indiantown Rd, Jupiter, FL 33458",
    location: {
      lat: 26.9338854,
      lon: -80.1330848,
    },
    neighborhood: "West Jupiter",
    priceTier: "$$",
    cuisines: ["Seafood", "American"],
    description:
      "The Little Moir's family's newest concept on Indiantown Road, serving the same Florida-fresh seafood and casual hospitality as the original Food Shack in a fresh, focused space. Grilled octopus, blackened fish and grits, and craft cocktails headline a menu built for the way Jupiter eats, with a casual dining room and bar.",
    hours: [
      "Mon-Thu: 11:00 AM - 9:00 PM",
      "Fri-Sat: 11:00 AM - 9:30 PM",
      "Sun: Closed",
    ],
    phone: "(561) 730-4340",
    website: "https://www.littlemoirssweetfish.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Little+Moir%27s+Sweet+Fish%2C+6390+W+Indiantown+Rd%2C+Jupiter%2C+FL+33458",
    photoUrls: [
      "https://www.littlemoirssweetfish.com/images/bar-dining-room.webp",
      "https://www.littlemoirssweetfish.com/images/specialties/grilled-octopus.webp",
      "https://www.littlemoirssweetfish.com/images/specialties/blackened-fish-and-grits.webp",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "kee-grill",
    name: "Ke'e Grill",
    tagline: "Longtime Juno Beach favorite for prime rib, fresh fish, and an old-Florida supper-club feel.",
    address: "14020 US Highway 1, Juno Beach, FL 33408",
    location: {
      lat: 26.8822663,
      lon: -80.0566108,
    },
    neighborhood: "Juno Beach",
    priceTier: "$$$",
    cuisines: ["Seafood", "Steakhouse", "American"],
    description:
      "A Juno Beach institution serving fresh local fish and jumbo prime rib with a classic, no-reservations supper-club atmosphere on US Highway 1. The wood-fired open kitchen and full bar make it a dependable choice for a special seafood dinner.",
    hours: [
      "Mon-Thu: 5:00 PM - 9:00 PM",
      "Fri-Sat: 5:00 PM - 9:30 PM",
      "Sun: 5:00 PM - 9:00 PM",
    ],
    phone: "(561) 776-1167",
    website: "https://keegrilljunobeach.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ke%27e+Grill%2C+14020+US+Highway+1%2C+Juno+Beach%2C+FL+33408",
    photoUrls: [
      "https://static.wixstatic.com/media/a93f3d_c06b5122d91a440d8c30322442c36396~mv2.jpg",
      "https://static.wixstatic.com/media/a93f3d_c4632a7cbd354c358ab6ca0ecf73a5af~mv2.jpg",
      "https://static.wixstatic.com/media/a93f3d_571b33adff894c63807143a690cbf225~mv2.jpg",
    ],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "eddie-vs-prime-seafood",
    name: "Eddie V's Prime Seafood",
    tagline: "Upscale prime steak and seafood with live music in the V Lounge, at Legacy Place in Palm Beach Gardens.",
    address: "11330 Legacy Ave, Palm Beach Gardens, FL 33410",
    location: {
      lat: 26.8412755,
      lon: -80.0915965,
    },
    neighborhood: "Palm Beach Gardens",
    priceTier: "$$$",
    cuisines: ["Seafood", "Steakhouse", "American"],
    description:
      "The Palm Beach Gardens location of the national Eddie V's chain, opened in April 2026 at Legacy Place, serving USDA Prime steaks, a raw oyster bar, and theatrical seafood preparations in an elegant, earth-toned dining room. The adjoining V Lounge features live music trios nightly, making it a polished choice for date night and celebrations.",
    hours: [
      "Mon-Thu: 4:00 PM - 9:00 PM",
      "Fri-Sat: 4:00 PM - 10:00 PM",
      "Sun: 4:00 PM - 9:00 PM",
    ],
    phone: "(561) 491-7199",
    website: "https://www.eddiev.com/locations/all-locations",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Eddie+V%27s+Prime+Seafood%2C+11330+Legacy+Ave%2C+Palm+Beach+Gardens%2C+FL+33410",
    photoUrls: ["/restaurants/eddie-vs-prime-seafood/eddie-vs-prime-seafood-1.jpg"],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "voodoo-bayou",
    name: "Voodoo Bayou",
    tagline: "Lively Cajun kitchen and whiskey bar in Downtown at the Gardens with baked oysters and gumbo.",
    address: "11701 Lake Victoria Gardens Ave, Ste 5095, Palm Beach Gardens, FL 33410",
    location: {
      lat: 26.8488693,
      lon: -80.0940576,
    },
    neighborhood: "Palm Beach Gardens",
    priceTier: "$$",
    cuisines: ["Cajun", "American", "Seafood"],
    dogFriendly: true,
    description:
      "A New Orleans-inspired Cajun kitchen and whiskey bar in Palm Beach Gardens' Downtown at the Gardens, known for baked garlic butter and Rockefeller oysters, gumbo ya ya, and a lively happy hour. The lounge-style bar area and patio seating make it a popular casual spot for groups and late-night bites.",
    hours: [
      "Mon-Thu: 11:30 AM - 11:00 PM",
      "Fri-Sat: 11:00 AM - 1:00 AM",
      "Sun: 11:00 AM - 10:00 PM",
    ],
    phone: "(561) 782-6344",
    website: "https://voodoobayou.com/palmbeachgardens/",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Voodoo+Bayou%2C+11701+Lake+Victoria+Gardens+Ave%2C+Ste+5095%2C+Palm+Beach+Gardens%2C+FL+33410",
    photoUrls: [
      "https://voodoobayou.com/wp-content/uploads/2024/05/PBG-5-scaled-1.jpg",
      "https://voodoobayou.com/wp-content/uploads/2020/06/gallery-header.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Gluten-Sensitive Options"],
    lastVerified: "2026-08-10",
  },
  {
    slug: "ela-curry-and-cocktails",
    name: "Ela Curry & Cocktails",
    tagline: "Michelin-recognized Indian cuisine and craft cocktails in Palm Beach Gardens.",
    address: "4650 Donald Ross Rd, Ste 100, Palm Beach Gardens, FL 33418",
    location: {
      lat: 26.8820562,
      lon: -80.0732654,
    },
    neighborhood: "Palm Beach Gardens",
    priceTier: "$$$",
    cuisines: ["Indian"],
    description:
      "A refined, regionally-focused Indian restaurant from Flavor Builders chef Pushkar Marathe (also of Stage Kitchen & Bar), named for the Sanskrit word for cardamom. Serves shareable thali-style plates and street-food-inspired dishes built from family recipes, alongside an inventive cocktail program at the adjoining Peacock Tiki Bar. Recognized by the Michelin Guide in 2026.",
    hours: [
      "Mon-Sun: 4:30 PM - 9:00 PM",
    ],
    phone: "(561) 345-2196",
    website: "https://www.elacurryandcocktails.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ela+Curry+%26+Cocktails%2C+4650+Donald+Ross+Rd%2C+Ste+100%2C+Palm+Beach+Gardens%2C+FL+33418",
    photoUrls: [
      "https://images.getbento.com/accounts/285b30568c659265cd92d7f25f8e26b8/media/images/31351Ella-574.jpg",
      "https://images.getbento.com/accounts/285b30568c659265cd92d7f25f8e26b8/media/images/98433DSC00774.jpg",
      "https://images.getbento.com/accounts/285b30568c659265cd92d7f25f8e26b8/media/images/16666_MG_4929_copy.jpg",
    ],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Vegan Options", "Gluten-Sensitive Options"],
    lastVerified: "2026-08-26",
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

export function getRelatedRestaurants(restaurant: Restaurant, limit = 3): Restaurant[] {
  const scored = restaurants
    .filter((r) => r.slug !== restaurant.slug)
    .map((r) => {
      const sharedCuisines = r.cuisines.filter((c) => restaurant.cuisines.includes(c)).length;
      const sameNeighborhood = r.neighborhood === restaurant.neighborhood ? 10 : 0;
      return { restaurant: r, score: sameNeighborhood + sharedCuisines };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.restaurant);
}
