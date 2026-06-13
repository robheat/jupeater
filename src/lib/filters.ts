import type { PriceTier, Restaurant } from "@/lib/restaurants";

export type RestaurantFilters = {
  query?: string;
  cuisine?: string;
  neighborhood?: string;
  priceTier?: PriceTier | "";
};

export function filterRestaurants(
  restaurants: Restaurant[],
  filters: RestaurantFilters,
): Restaurant[] {
  return restaurants.filter((restaurant) => {
    const query = filters.query?.trim().toLowerCase();
    const cuisine = filters.cuisine?.trim().toLowerCase();
    const neighborhood = filters.neighborhood?.trim().toLowerCase();
    const priceTier = filters.priceTier;

    const matchesQuery =
      !query ||
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.tagline.toLowerCase().includes(query) ||
      restaurant.description.toLowerCase().includes(query);

    const matchesCuisine =
      !cuisine ||
      restaurant.cuisines.some(
        (restaurantCuisine) => restaurantCuisine.toLowerCase() === cuisine,
      );

    const matchesNeighborhood =
      !neighborhood || restaurant.neighborhood.toLowerCase() === neighborhood;

    const matchesPriceTier = !priceTier || restaurant.priceTier === priceTier;

    return (
      matchesQuery &&
      matchesCuisine &&
      matchesNeighborhood &&
      matchesPriceTier
    );
  });
}