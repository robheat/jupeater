"use client";

import { useState } from "react";
import { APIProvider, InfoWindow, Map, Marker } from "@vis.gl/react-google-maps";

import type { Restaurant } from "@/lib/restaurants";

type RestaurantMapProps = {
  restaurants: Restaurant[];
};

const MAP_CENTER = { lat: 26.921, lng: -80.0965 };
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

function markerIconUrl(number: number): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#08145f" stroke="#ffffff" stroke-width="2" /><text x="18" y="23" font-family="sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">${number}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function RestaurantMap({ restaurants }: RestaurantMapProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeRestaurant = restaurants.find((restaurant) => restaurant.slug === activeSlug) ?? null;

  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#eff7f2] p-6 text-center text-sm font-semibold text-teal-700">
        Map unavailable - set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable it.
      </div>
    );
  }

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
        defaultCenter={MAP_CENTER}
        defaultZoom={12}
        gestureHandling="greedy"
        disableDefaultUI={false}
        className="h-full w-full"
      >
        {restaurants.map((restaurant, index) => (
          <Marker
            key={restaurant.slug}
            position={{ lat: restaurant.location.lat, lng: restaurant.location.lon }}
            icon={{ url: markerIconUrl(index + 1) }}
            onClick={() => setActiveSlug(restaurant.slug)}
          />
        ))}

        {activeRestaurant && (
          <InfoWindow
            position={{ lat: activeRestaurant.location.lat, lng: activeRestaurant.location.lon }}
            onCloseClick={() => setActiveSlug(null)}
          >
            <div className="min-w-[160px]">
              <p className="font-semibold text-teal-900">{activeRestaurant.name}</p>
              <p className="text-xs text-slate-600">{activeRestaurant.neighborhood}</p>
              <a
                href={`/restaurants/${activeRestaurant.slug}`}
                className="mt-1 inline-block text-xs font-semibold text-teal-700 underline"
              >
                View listing
              </a>
              {" · "}
              <a
                href={activeRestaurant.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-teal-700 underline"
              >
                Get directions
              </a>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
