"use server";

import { redirect } from "next/navigation";

import { createOwnerSubmission } from "@/lib/backend";

export async function submitRestaurantListing(formData: FormData) {
  const restaurantName = String(formData.get("restaurantName") ?? "");
  const contactEmail = String(formData.get("contactEmail") ?? "");
  const address = String(formData.get("address") ?? "");
  const changeNotes = String(formData.get("changeNotes") ?? "");
  const newsletterOptIn = formData.get("newsletterOptIn") === "on";

  const result = await createOwnerSubmission({
    restaurantName,
    contactEmail,
    address,
    changeNotes,
    newsletterOptIn,
  });

  if (!result.ok) {
    redirect(`/submit?status=error&message=${encodeURIComponent(result.message)}`);
  }

  redirect("/submit?status=success");
}