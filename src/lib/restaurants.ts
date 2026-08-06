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
    website: "https://www.hogsnappersshack.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hog+Snappers+Shack+%26+Sushi%2C+900+N+US+Highway+1%2C+Tequesta%2C+FL+33469",
    photoUrls: [],
    featured: false,
    dietaryOptions: ["Gluten-Sensitive Options"],
    lastVerified: "2026-08-06",
  },
  {
    slug: "evo-italian-tequesta",
    name: "Evo Italian",
    tagline: "Wood-fired pizza, house-made pasta, and modern Italian plates in Tequesta.",
    address: "4900 US Highway 1, Tequesta, FL 33469",
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
    website: "https://www.evotequesta.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Evo+Italian%2C+4900+US+Highway+1%2C+Tequesta%2C+FL+33469",
    photoUrls: [],
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
    website: "https://captaincharliesreefgrill.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Captain+Charlie's+Reef+Grill%2C+12846+US+Highway+1%2C+Juno+Beach%2C+FL+33408",
    photoUrls: [],
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
    website: "https://www.coolinarycafe.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Coolinary+Cafe%2C+4580+PGA+Blvd%2C+Palm+Beach+Gardens%2C+FL+33418",
    photoUrls: [],
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
    website: "https://www.stagepbg.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Stage+Kitchen+%26+Bar%2C+2000+PGA+Blvd%2C+Ste+5506%2C+Palm+Beach+Gardens%2C+FL+33408",
    photoUrls: [],
    featured: false,
    dietaryOptions: ["Vegetarian Options", "Gluten-Sensitive Options"],
    lastVerified: "2026-08-06",
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
