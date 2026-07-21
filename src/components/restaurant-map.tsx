"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import type { Restaurant } from "@/lib/restaurants";

type RestaurantMapProps = {
  restaurants: Restaurant[];
};

const MAP_CENTER: [number, number] = [26.921, -80.0965];

function createMarkerIcon(number: number) {
  return L.divIcon({
    className: "",
    html: `<span class="flex h-9 w-9 items-center justify-center rounded-full border border-white/90 bg-[var(--teal-900)] text-sm font-bold text-white shadow-lg shadow-teal-950/20">${number}</span>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });
}

export default function RestaurantMap({ restaurants }: RestaurantMapProps) {
  return (
    <MapContainer center={MAP_CENTER} zoom={12} scrollWheelZoom className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {restaurants.map((restaurant, index) => (
        <Marker
          key={restaurant.slug}
          position={[restaurant.location.lat, restaurant.location.lon]}
          icon={createMarkerIcon(index + 1)}
        >
          <Popup>
            <p className="font-semibold text-teal-900">{restaurant.name}</p>
            <p className="text-xs text-slate-600">{restaurant.neighborhood}</p>
            <a
              href={`/restaurants/${restaurant.slug}`}
              className="mt-1 inline-block text-xs font-semibold text-teal-700 underline"
            >
              View listing
            </a>
            {" · "}
            <a
              href={restaurant.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-teal-700 underline"
            >
              Get directions
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
