"use server";

import { redirect } from "next/navigation";

import { createContactMessage } from "@/lib/backend";

export async function submitContactMessage(formData: FormData) {
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