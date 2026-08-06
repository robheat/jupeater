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
      "If you are searching for waterfront dining in Jupiter FL, you are usually looking for more than just a meal - you want an experience that feels coastal, relaxed, and worth the drive. This page was built to help locals and visitors quickly find restaurants near the water across Jupiter and neighboring communities where the waterfront lifestyle is part of the atmosphere. From inlet-side patios and marina views to Intracoastal dining rooms and beach-adjacent spots, these listings focus on places where location and scenery matter as much as the menu. Whether you are planning lunch after boating, a sunset dinner, or a casual weekend meetup, this category gives you a direct path to the right options without sorting through unrelated results.",
      "Our Jupiter-area waterfront restaurant list includes options in Jupiter, Tequesta, and Juno Beach, plus select nearby locations that match the same coastal dining intent. You will find a mix of seafood-forward kitchens, sushi bars, tiki-style hangouts, and polished waterfront restaurants that fit different budgets and occasions. Some locations are ideal for families and large groups, while others are better for date night or special celebrations. Each listing helps you compare neighborhoods, cuisine style, and price tier so you can decide quickly based on your plans. Instead of relying on generic national directories, this page keeps the focus on local context, making it easier to discover where people actually eat in the North Palm Beach County waterfront corridor.",
      "Use this category when your primary goal is atmosphere and location. Start by opening listings that mention inlet, marina, riverwalk, dockside, Intracoastal, or beach access, then check hours and map links before heading out. In peak season, waterfront dining in Jupiter FL can fill up quickly, especially around sunset and on weekends, so having a short list of strong options saves time. As we continue expanding coverage, this page is designed to remain a high-intent resource for anyone searching terms like waterfront restaurants in Jupiter, best waterfront dinner near Tequesta, or casual coastal dining near Juno Beach. If water views are part of your must-have criteria, this is the category to bookmark first.",
    ],
  },
  {
    slug: "best-seafood-restaurants-jupiter-fl",
    keyword: "Best Seafood Restaurants in Jupiter FL",
    title: "Best Seafood Restaurants in Jupiter FL",
    description:
      "Find local seafood restaurants in Jupiter, FL and surrounding areas with fresh fish, sushi, and coastal menus.",
    seoParagraphs: [
      "People searching for the best seafood restaurants in Jupiter FL usually want dependable local choices with fresh fish, solid preparation, and a menu that reflects South Florida coastal dining. This page is built around that exact search intent. Instead of broad restaurant results, you get a focused list of Jupiter-area spots where seafood is central to the experience - from casual fish houses and raw bars to upscale kitchens with seasonal catches. Whether you are in the mood for grilled mahi, snapper specials, oysters, shellfish platters, sushi rolls, or chef-driven seafood entrees, these listings help you find relevant options quickly and skip the noise.",
      "Seafood dining in the Jupiter area is diverse, and that is why this category includes restaurants across Jupiter, Tequesta, Juno Beach, and Palm Beach Gardens. Some places are ideal for laid-back lunches after the beach, while others fit business dinners, weekend date nights, or group gatherings. You can compare cuisine tags, neighborhood, and price tier to find the right match for your plan and budget. If your preference is sushi and sashimi, this list includes seafood-forward sushi restaurants as well. If you prefer classic Florida seafood, you will also find options known for local fish, coastal American plates, and rotating daily specials tied to fresh market availability.",
      "For the best results, use this page as a shortlist builder. Open a few listings that match your preferred style, then review hours, location, and map links before choosing your stop. During high-traffic weekends and holiday periods, popular seafood restaurants in Jupiter FL can have longer waits, so pre-selecting options in nearby towns like Tequesta or Juno Beach can save time. Over time, this category is designed to stay useful for long-tail local searches such as best seafood near Jupiter Inlet, fresh fish restaurants in Tequesta, and top sushi and seafood in Palm Beach Gardens. If seafood quality is your priority, this is the most direct place to start.",
    ],
  },
  {
    slug: "date-night-restaurants-jupiter-fl",
    keyword: "Date Night Restaurants in Jupiter FL",
    title: "Date Night Restaurants in Jupiter FL",
    description:
      "Browse date night restaurants in Jupiter, FL and Palm Beach Gardens for elevated dinners and cocktail nights.",
    seoParagraphs: [
      "When someone searches date night restaurants in Jupiter FL, they are often looking for a place that feels intentional: great food, comfortable energy, and an atmosphere that supports conversation. This page is designed for that exact use case, with listings that lean toward elevated dining, curated cocktails, polished service, and memorable settings across Jupiter and nearby towns. Instead of scanning every restaurant in the area, you can focus on options better suited to anniversaries, first dates, birthdays, or spontaneous dinner plans that deserve a little more than a standard weeknight stop.",
      "Date night can mean different things, so this category includes a range of restaurant styles in Jupiter and Palm Beach Gardens, along with select nearby options that match the same intent. You may want waterfront ambiance and sunset views, a modern dining room with chef-driven small plates, a strong wine list, or an intimate Italian dinner with handcrafted pasta. Others may prefer upscale sushi, contemporary fusion menus, or a steakhouse setting with craft cocktails. The category structure helps you compare cuisine and price quickly, so you can choose a setting that matches your preferred tone - relaxed and coastal, trendy and energetic, or classic and refined.",
      "Use this page to build a short list based on your evening goals. If you are planning around a specific time, check each listing for hours and map access, then choose two to three backup options in case reservations fill up. Prime date-night windows in Jupiter-area dining corridors can book quickly on Fridays, Saturdays, and event weekends. This category is built to support high-intent local queries such as romantic restaurants in Jupiter FL, best date night in Palm Beach Gardens, and upscale dinner near Tequesta or Juno Beach. If your priority is finding a restaurant that feels special without wasting time, this page gives you the fastest route to the right picks.",
    ],
  },
  {
    slug: "family-friendly-restaurants-jupiter-fl",
    keyword: "Family Friendly Restaurants in Jupiter FL",
    title: "Family Friendly Restaurants in Jupiter FL",
    description:
      "Discover family friendly restaurants in Jupiter, FL, Tequesta, and nearby communities for casual local dining.",
    seoParagraphs: [
      "Families searching for family friendly restaurants in Jupiter FL usually need practical answers fast: where to eat with kids, where service is welcoming, and where the menu can satisfy different ages and preferences. This page is built around that real-world intent. It highlights restaurants across Jupiter and nearby communities that fit casual group dining, easy weeknight meals, weekend lunches, and low-stress gatherings. Instead of sorting through results that may be too formal or nightlife-focused, you can quickly find places that are better aligned with family routines, including approachable menus and neighborhoods that are easy to navigate.",
      "The Jupiter-area family dining scene includes everything from neighborhood grills and pizza spots to casual seafood, sushi, and American comfort options. That range matters because not every family outing is the same. Some nights call for a quick and affordable dinner after activities; others are about sitting down together for a longer meal where everyone can find something they like. This category includes restaurants in Jupiter, Tequesta, Juno Beach, and Palm Beach Gardens so you can widen your options without drifting too far from local convenience. You can compare cuisine types, price tiers, and locations to match your plans, whether you are staying close to home or meeting friends halfway.",
      "For the best experience, start by selecting a few listings based on cuisine and proximity, then check hours and map links before heading out. Family-friendly restaurants in Jupiter FL can be busiest during early dinner windows, school breaks, and weekends, so having backup choices helps reduce wait-time stress. As this guide expands, this category is intended to serve search terms like kid-friendly restaurants near Jupiter, casual family dining in Tequesta, and best places to eat with children in Palm Beach Gardens. If your main goal is reliable, local restaurants where groups and families can dine comfortably, this page is the strongest place to begin.",
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
  const keywordSource = `${restaurant.name} ${restaurant.tagline} ${restaurant.description} ${restaurant.neighborhood}`.toLowerCase();
  const hasWaterfrontKeyword = [
    "waterfront",
    "inlet",
    "marina",
    "intracoastal",
    "dock",
    "beach",
  ].some((keyword) => keywordSource.includes(keyword));

  return hasWaterfrontKeyword;
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
    default:
      return [];
  }
}
