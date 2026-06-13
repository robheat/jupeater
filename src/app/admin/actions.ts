"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { moderateOwnerSubmission, moderateReview } from "@/lib/backend";
import {
  clearAdminSession,
  createAdminSession,
  isAdminAuthenticated,
} from "@/lib/admin-auth";

export async function adminSignIn(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const ok = await createAdminSession(password);

  if (!ok) {
    redirect("/admin?status=error&message=Invalid+password");
  }

  redirect("/admin?status=signed-in");
}

export async function adminSignOut() {
  await clearAdminSession();
  redirect("/admin?status=signed-out");
}

export async function moderateSubmissionAction(formData: FormData) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    redirect("/admin?status=error&message=Authentication+required");
  }

  const id = String(formData.get("id") ?? "");
  const decision = formData.get("decision");
  if (decision !== "approved" && decision !== "rejected") {
    redirect("/admin?status=error&message=Invalid+decision");
  }

  const result = await moderateOwnerSubmission(id, decision);
  revalidatePath("/admin");

  if (!result.ok) {
    redirect(`/admin?status=error&message=${encodeURIComponent(result.message)}`);
  }

  redirect(`/admin?status=success&message=${encodeURIComponent(result.message)}`);
}

export async function moderateReviewAction(formData: FormData) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    redirect("/admin?status=error&message=Authentication+required");
  }

  const id = String(formData.get("id") ?? "");
  const decision = formData.get("decision");
  if (decision !== "approved" && decision !== "rejected") {
    redirect("/admin?status=error&message=Invalid+decision");
  }

  const result = await moderateReview(id, decision);
  revalidatePath("/admin");

  if (!result.ok) {
    redirect(`/admin?status=error&message=${encodeURIComponent(result.message)}`);
  }

  redirect(`/admin?status=success&message=${encodeURIComponent(result.message)}`);
}