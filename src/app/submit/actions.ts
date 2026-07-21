"use server";

import { redirect } from "next/navigation";

import { createOwnerSubmission } from "@/lib/backend";
import { getRequestIp, isRateLimited } from "@/lib/rate-limit";

export async function submitRestaurantListing(formData: FormData) {
  if (String(formData.get("website") ?? "").length > 0) {
    redirect("/submit?status=success");
  }

  const ip = await getRequestIp();
  if (isRateLimited(`submit:${ip}`, 5, 10 * 60 * 1000)) {
    redirect("/submit?status=error&message=Too+many+submissions.+Try+again+later.");
  }

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