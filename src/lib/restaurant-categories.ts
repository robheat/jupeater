import { getRestaurants, type Restaurant } from "@/lib/restaurants";

export type RestaurantCategory = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  seoParagraphs: string[];
};

const categories: RestaurantCategory[] = [
  {
    slug: "waterfront-dining-jupiter-fl",
    keyword: "Waterfront Dining in Jupiter FL",
    title: "Waterfront Dining in Jupiter FL",
    description:
      "Explore waterfront dining in Jupiter, FL plus nearby coastal towns including Tequesta and Juno Beach.",
    seoParagraphs: [
      "Waterfront dining in Jupiter FL is its own kind of search, because the water is the whole point of the trip - dinner at a marina table means something different than dinner at a strip-mall storefront, even when the menus overlap. This list is filtered specifically for restaurants that sit directly on the Jupiter Inlet, the Intracoastal, or a marina basin, not just restaurants that happen to be near water on a map.",
      "Right now that includes Guanabanas and U-Tiki Beach, both built around open-air tiki seating at the Jupiter Inlet Marina; Jetty's and Lucky Shuck, a short walk away with their own inlet-facing patios; and Zunzibar and Voodoo Bayou, which trade the inlet view for Intracoastal and marina settings further south in Jupiter and Palm Beach Gardens. Each listing notes which body of water it actually sits on, since \"waterfront\" in this area can mean inlet, Intracoastal, or a private marina, and the view - and the parking situation - differs by location.",
      "Check the map link on each listing before you go; waterfront tables are the first to fill on weekend evenings, and a few of these spots don't take reservations for outdoor seating at all. This page gets updated as new inlet and Intracoastal restaurants open in the area.",
    ],
  },
  {
    slug: "best-seafood-restaurants-jupiter-fl",
    keyword: "Best Seafood Restaurants in Jupiter FL",
    title: "Best Seafood Restaurants in Jupiter FL",
    description:
      "Find local seafood restaurants in Jupiter, FL and surrounding areas with fresh fish, sushi, and coastal menus.",
    seoParagraphs: [
      "Not every seafood restaurant in Jupiter is the same kind of seafood restaurant. Some are raw bars built around a daily oyster list, some are sushi counters, and some are full dinner houses with a rotating fresh-catch board. This page separates seafood-focused restaurants from the rest of the directory so you're not scrolling past pizza and burger joints to find them.",
      "The list splits roughly into two camps: classic Florida seafood kitchens serving mahi, snapper, and stone crab depending on the season, and sushi-forward spots where raw preparations are the main draw. A few - Dive Bar and Sea Racha among them - do both under one roof. Price tier varies more here than in most categories on this site; you can get a casual fish sandwich for lunch or a full raw bar spread for a group dinner from restaurants on this same list.",
      "Market-driven specials mean the exact catch on offer can change day to day, so it's worth calling ahead if you have a specific dish in mind - stone crab season, for instance, runs roughly October through May in Florida. Use the neighborhood and price filters on the main restaurant list if you want to narrow this further by area.",
    ],
  },
  {
    slug: "date-night-restaurants-jupiter-fl",
    keyword: "Date Night Restaurants in Jupiter FL",
    title: "Date Night Restaurants in Jupiter FL",
    description:
      "Browse date night restaurants in Jupiter, FL and Palm Beach Gardens for elevated dinners and cocktail nights.",
    seoParagraphs: [
      "Date night restaurants get judged on more than food quality - noise level, lighting, and whether a table actually lets you talk to each other all matter. This category leans on price tier and menu language (words like chef-driven, elevated, and craft cocktail in a restaurant's own description) to surface places built for that kind of evening rather than a quick weeknight stop.",
      "The range here runs from steakhouse settings like Ruth's Chris and Lewis Steakhouse, to intimate Italian dining rooms like Tavolena, to newer upscale openings like Eddie V's and Blackbird Modern Asian. If waterfront ambiance matters to you as much as the cuisine, it's worth cross-referencing this list against the waterfront dining category - several restaurants qualify for both.",
      "Reservations move fast on Friday and Saturday nights during peak season, roughly November through April, so it's worth calling two or three options on this list rather than committing to just one. Each listing links directly to the restaurant's own site for booking.",
    ],
  },
  {
    slug: "family-friendly-restaurants-jupiter-fl",
    keyword: "Family Friendly Restaurants in Jupiter FL",
    title: "Family Friendly Restaurants in Jupiter FL",
    description:
      "Discover family friendly restaurants in Jupiter, FL, Tequesta, and nearby communities for casual local dining.",
    seoParagraphs: [
      "Family-friendly, in practice, usually means three things: a menu with something a picky eater will actually eat, a noise level where a stroller or a toddler meltdown doesn't stand out, and a bill that doesn't sting after a Tuesday dinner out. This list filters toward casual, moderately priced restaurants rather than the fine-dining end of the directory.",
      "That includes straightforward counter-service spots like Dune Dog Cafe, easygoing neighborhood bars like Nieko's, and casual seafood shacks where kids' portions and outdoor seating are already the norm. A few, Little Moir's Food Shack among them, stay casual on price but still run a serious kitchen - worth knowing if \"family-friendly\" for you also means \"actually good.\"",
      "Early dinner, generally before 6 PM, is your best bet for a table without a wait at the more popular spots on this list, especially on weekends. If a restaurant doesn't list a kids' menu on its site, it's still worth calling - most casual spots here will accommodate smaller portions on request.",
    ],
  },
  {
    slug: "best-italian-restaurants-jupiter-fl",
    keyword: "Best Italian Restaurants in Jupiter FL",
    title: "Best Italian Restaurants in Jupiter FL",
    description:
      "Find the best Italian restaurants in Jupiter, FL and nearby Tequesta, from handmade pasta to wood-fired pizza and classic red-sauce cooking.",
    seoParagraphs: [
      "Five restaurants on Jupeater are built specifically around Italian cooking, ranging from a family restaurant that's been open since 1976 to a 2026 opening from a chef with a New York pedigree - a wider range than \"Italian restaurant\" usually implies.",
      "Lynora's has served the area since 1976 and is the closest thing to an institution on this list. Tavolena and Del Pesto both lean into handmade pasta and wood-fired cooking. Evo Italian, over in Tequesta, adds Neapolitan-style pizza to the mix. Arthur & Sons is the newest addition, bringing a New York red-sauce approach to Jupiter. If fresh, in-house pasta is a requirement for you, check each listing's description directly - not every restaurant on this list makes it that way.",
      "Weekend dinner reservations are worth making a day or two ahead at the more established spots, particularly Lynora's. All five listings include a direct map link so you can compare drive times before picking one.",
    ],
  },
  {
    slug: "best-sushi-restaurants-jupiter-fl",
    keyword: "Best Sushi Restaurants in Jupiter FL",
    title: "Best Sushi Restaurants in Jupiter FL",
    description:
      "Browse the best sushi restaurants in Jupiter, FL, from creative specialty rolls to traditional nigiri and sashimi.",
    seoParagraphs: [
      "Six Jupeater listings treat sushi as a real part of the menu rather than an afterthought, and they split into two rough camps: Asian-fusion kitchens that pair sushi with Thai or Japanese entrees, and seafood restaurants that added a sushi bar alongside a raw bar.",
      "Thai Lotus and Sea Racha fall into the first camp, pairing rolls with a full Thai or pan-Asian menu. Dive Bar, Hog Snappers, and 2 Vinez lean toward the second, treating sushi as one part of a broader seafood-and-raw-bar concept. Blackbird Modern Asian is the newest and most upscale of the group, built around a modern Asian menu with sushi as one component rather than the headline.",
      "If you're bringing a group with mixed preferences, the fusion-style listings tend to have the broadest non-sushi menu to fall back on. Several of these restaurants run roll specials during happy hour on weekdays - worth checking each listing if pricing matters.",
    ],
  },
  {
    slug: "best-mexican-restaurants-jupiter-fl",
    keyword: "Best Mexican Restaurants in Jupiter FL",
    title: "Best Mexican Restaurants in Jupiter FL",
    description:
      "Discover the best Mexican restaurants in Jupiter, FL, from casual taco spots to upscale modern Mexican kitchens and cantinas.",
    seoParagraphs: [
      "Jupeater currently lists three Mexican restaurants, and they cover three distinct occasions: a quick taco stop, a neighborhood cantina, and an upscale Harbourside patio bar.",
      "Taco Maki, in Abacoa, is built for a fast, casual meal - order at the counter, eat, move on. Casa Tequila, out in Jupiter Farms, is more of a sit-down neighborhood spot. Calaveras Cantina, at Harbourside Place, is the most polished of the three, with craft cocktails and Intracoastal patio seating that makes it a legitimate date-night option rather than just a casual Mexican dinner.",
      "If you're deciding between the three, distance and occasion matter more than menu differences - all three do tacos and margaritas well, but only Calaveras Cantina is really built for a longer, drinks-forward evening out.",
    ],
  },
  {
    slug: "best-brunch-restaurants-jupiter-fl",
    keyword: "Best Brunch Restaurants in Jupiter FL",
    title: "Best Brunch Restaurants in Jupiter FL",
    description:
      "Find the best brunch restaurants in Jupiter, FL for weekend mornings, from waterfront brunch spots to bottomless-mimosa favorites.",
    seoParagraphs: [
      "Only three Jupeater restaurants run an actual dedicated brunch service, as opposed to just opening early, and each does it differently enough that it's worth knowing which before you commit a Sunday morning to it.",
      "Guanabanas runs its brunch dockside at the Jupiter Inlet from 10 AM to 2 PM on Sundays, with the tiki-bar atmosphere intact even in the morning. Ruth's Chris pairs a more traditional Sunday brunch service with its usual dinner hours later the same day. Sea Racha's brunch is a weekend add-on to its regular sushi-and-seafood menu, so expect a lighter, more improvised spread than the other two.",
      "Because this list is short, check each restaurant's current hours directly before you go - brunch service is the most likely thing on a menu to shift seasonally, and none of these three run it every day of the week.",
    ],
  },
  {
    slug: "best-happy-hour-restaurants-jupiter-fl",
    keyword: "Best Happy Hour Restaurants in Jupiter FL",
    title: "Best Happy Hour Restaurants in Jupiter FL",
    description:
      "Browse the best happy hour restaurants in Jupiter, FL for discounted drinks, appetizer specials, and after-work hangouts.",
    seoParagraphs: [
      "Six restaurants on Jupeater run a real, named happy hour - not just a restaurant that happens to have a bar. That's enough options to choose based on neighborhood rather than defaulting to whichever one you remember the name of.",
      "U-Tiki Beach and Zunzibar both run daily happy hour with a water view, U-Tiki at the Jupiter Inlet and Zunzibar on the Intracoastal further south. Hap & Hooch, in South Jupiter, is a straightforward neighborhood bar-and-grill version. Lucky Shuck and Lewis Steakhouse both pair happy hour with a more food-forward menu than a typical bar. Voodoo Bayou, in Palm Beach Gardens, extends its happy hour latest into the night on Fridays and Saturdays.",
      "Specials and time windows shift with the season more than almost anything else on this site, so treat the hours listed here as a starting point and confirm directly if a specific deal is the reason you're going.",
    ],
  },
  {
    slug: "live-music-restaurants-jupiter-fl",
    keyword: "Live Music Restaurants in Jupiter FL",
    title: "Live Music Restaurants in Jupiter FL",
    description:
      "Discover restaurants with live music in Jupiter, FL, from tiki-stage bands to weekly karaoke and lounge trios.",
    seoParagraphs: [
      "Four restaurants on Jupeater regularly book live entertainment, and they're different enough in format that \"live music restaurant\" undersells the range: an outdoor tiki stage, a strip-mall seafood shack with a nightly band, a neighborhood bar's karaoke night, and a lounge trio at an upscale steakhouse.",
      "Guanabanas has an actual stage built into its open-air layout. Little Moir's Food Shack runs live music nightly despite its no-frills setting. Nieko's Neighborhood Bar is the karaoke-and-comedy-night option rather than a live band. Eddie V's, the newest and most upscale of the four, features a lounge trio in its V Lounge rather than a full band.",
      "Lineups and performance nights change weekly at most of these - if a specific act or night, like Nieko's karaoke, is the reason you're going, it's worth a quick call or a look at the restaurant's own social media before you head out.",
    ],
  },
  {
    slug: "dog-friendly-restaurants-jupiter-fl",
    keyword: "Dog Friendly Restaurants in Jupiter FL",
    title: "Dog Friendly Restaurants in Jupiter FL",
    description:
      "Find dog friendly restaurants in Jupiter, FL with patio and outdoor seating where your dog is welcome to join you.",
    seoParagraphs: [
      "Nine Jupeater restaurants have a confirmed policy of welcoming dogs in their outdoor seating, verified restaurant-by-restaurant rather than assumed from \"has a patio\" - plenty of restaurants with outdoor tables still don't allow pets, so this list is deliberately narrower than it could be.",
      "Most of the nine cluster around waterfront and marina settings: U-Tiki Beach, Jetty's, Dive Bar, and Lucky Shuck are all inlet or marina-adjacent, while Zunzibar and Thirsty Turtle Seagrill sit on the Intracoastal further south. Calaveras Cantina and Voodoo Bayou round out the list with patio seating at Harbourside Place and Downtown at the Gardens, respectively. The Twisted Tuna's dockside patio is one of the more spacious dog-friendly setups on this list.",
      "Policies can vary by day, weather, and how busy the patio is, so it's worth a quick call ahead if bringing your dog is the whole point of the trip - what's listed here reflects what could be verified, not a guarantee for every visit.",
    ],
  },
];

export function getRestaurantCategories(): RestaurantCategory[] {
  return categories;
}

export function getRestaurantCategoryBySlug(slug: string): RestaurantCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

function matchesWaterfront(restaurant: Restaurant): boolean {
  return restaurant.waterfront === true;
}

function matchesSeafood(restaurant: Restaurant): boolean {
  return restaurant.cuisines.some((cuisine) =>
    ["seafood", "sushi"].includes(cuisine.toLowerCase()),
  );
}

function matchesDateNight(restaurant: Restaurant): boolean {
  const keywordSource = `${restaurant.tagline} ${restaurant.description}`.toLowerCase();
  const hasDateNightKeyword = [
    "upscale",
    "elevated",
    "cocktail",
    "wine",
    "romantic",
    "chef-driven",
  ].some((keyword) => keywordSource.includes(keyword));

  return restaurant.priceTier === "$$$" || hasDateNightKeyword;
}

function matchesFamilyFriendly(restaurant: Restaurant): boolean {
  const keywordSource = `${restaurant.tagline} ${restaurant.description}`.toLowerCase();
  const hasFamilyKeyword = [
    "family",
    "casual",
    "neighborhood",
    "local",
    "lunch",
  ].some((keyword) => keywordSource.includes(keyword));

  return restaurant.priceTier !== "$$$" && hasFamilyKeyword;
}

function matchesCuisine(restaurant: Restaurant, cuisine: string): boolean {
  return restaurant.cuisines.some(
    (c) => c.toLowerCase() === cuisine.toLowerCase(),
  );
}

function matchesItalian(restaurant: Restaurant): boolean {
  return matchesCuisine(restaurant, "Italian");
}

function matchesSushi(restaurant: Restaurant): boolean {
  return matchesCuisine(restaurant, "Sushi");
}

function matchesMexican(restaurant: Restaurant): boolean {
  return matchesCuisine(restaurant, "Mexican");
}

function matchesBrunch(restaurant: Restaurant): boolean {
  const keywordSource = `${restaurant.tagline} ${restaurant.description}`.toLowerCase();
  return keywordSource.includes("brunch");
}

function matchesHappyHour(restaurant: Restaurant): boolean {
  const keywordSource = `${restaurant.tagline} ${restaurant.description}`.toLowerCase();
  return keywordSource.includes("happy hour");
}

function matchesLiveMusic(restaurant: Restaurant): boolean {
  const keywordSource = `${restaurant.tagline} ${restaurant.description}`.toLowerCase();
  const hasLiveMusicKeyword = ["live music", "karaoke", "live bands", "lounge trio"].some(
    (keyword) => keywordSource.includes(keyword),
  );

  return hasLiveMusicKeyword;
}

function matchesDogFriendly(restaurant: Restaurant): boolean {
  return restaurant.dogFriendly === true;
}

export function getRestaurantsForCategory(slug: string): Restaurant[] {
  const restaurants = getRestaurants();

  switch (slug) {
    case "waterfront-dining-jupiter-fl":
      return restaurants.filter(matchesWaterfront);
    case "best-seafood-restaurants-jupiter-fl":
      return restaurants.filter(matchesSeafood);
    case "date-night-restaurants-jupiter-fl":
      return restaurants.filter(matchesDateNight);
    case "family-friendly-restaurants-jupiter-fl":
      return restaurants.filter(matchesFamilyFriendly);
    case "best-italian-restaurants-jupiter-fl":
      return restaurants.filter(matchesItalian);
    case "best-sushi-restaurants-jupiter-fl":
      return restaurants.filter(matchesSushi);
    case "best-mexican-restaurants-jupiter-fl":
      return restaurants.filter(matchesMexican);
    case "best-brunch-restaurants-jupiter-fl":
      return restaurants.filter(matchesBrunch);
    case "best-happy-hour-restaurants-jupiter-fl":
      return restaurants.filter(matchesHappyHour);
    case "live-music-restaurants-jupiter-fl":
      return restaurants.filter(matchesLiveMusic);
    case "dog-friendly-restaurants-jupiter-fl":
      return restaurants.filter(matchesDogFriendly);
    default:
      return [];
  }
}
