"use server";

import { redirect } from "next/navigation";

import { createReview } from "@/lib/backend";

export async function submitRestaurantReview(formData: FormData) {
  const restaurantSlug = String(formData.get("restaurantSlug") ?? "");
  const reviewerName = String(formData.get("reviewerName") ?? "");
  const reviewerEmail = String(formData.get("reviewerEmail") ?? "");
  const rating = Number(formData.get("rating") ?? 0);
  const comment = String(formData.get("comment") ?? "");

  const result = await createReview({
    restaurantSlug,
    reviewerName,
    reviewerEmail,
    rating,
    comment,
  });

  if (!restaurantSlug) {
    redirect("/restaurants");
  }

  if (!result.ok) {
    redirect(
      `/restaurants/${restaurantSlug}?review=error&message=${encodeURIComponent(result.message)}`,
    );
  }

  redirect(`/restaurants/${restaurantSlug}?review=success`);
}