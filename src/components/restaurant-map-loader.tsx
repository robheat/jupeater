"use client";

import dynamic from "next/dynamic";

import type { Restaurant } from "@/lib/restaurants";

const RestaurantMap = dynamic(() => import("./restaurant-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#eff7f2] text-sm font-semibold text-teal-700">
      Loading map…
    </div>
  ),
});

export function RestaurantMapLoader({ restaurants }: { restaurants: Restaurant[] }) {
  return <RestaurantMap restaurants={restaurants} />;
}
