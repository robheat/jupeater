"use server";

import { redirect } from "next/navigation";

import { createReview } from "@/lib/backend";
import { getRequestIp, isRateLimited } from "@/lib/rate-limit";

export async function submitRestaurantReview(formData: FormData) {
  const restaurantSlug = String(formData.get("restaurantSlug") ?? "");

  if (String(formData.get("website") ?? "").length > 0) {
    redirect(`/restaurants/${restaurantSlug}?review=success`);
  }

  const ip = await getRequestIp();
  if (isRateLimited(`review:${ip}`, 5, 10 * 60 * 1000)) {
    redirect(
      `/restaurants/${restaurantSlug}?review=error&message=Too+many+reviews.+Try+again+later.`,
    );
  }

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