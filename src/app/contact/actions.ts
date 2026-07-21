"use server";

import { redirect } from "next/navigation";

import { createContactMessage } from "@/lib/backend";
import { getRequestIp, isRateLimited } from "@/lib/rate-limit";

export async function submitContactMessage(formData: FormData) {
  if (String(formData.get("website") ?? "").length > 0) {
    redirect("/contact?status=success");
  }

  const ip = await getRequestIp();
  if (isRateLimited(`contact:${ip}`, 5, 10 * 60 * 1000)) {
    redirect("/contact?status=error&message=Too+many+messages.+Try+again+later.");
  }

  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const topic = String(formData.get("topic") ?? "");
  const message = String(formData.get("message") ?? "");

  const result = await createContactMessage({
    name,
    email,
    topic,
    message,
  });

  if (!result.ok) {
    redirect(`/contact?status=error&message=${encodeURIComponent(result.message)}`);
  }

  redirect("/contact?status=success");
}