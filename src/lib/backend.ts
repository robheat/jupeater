import { z } from "zod";

import {
  getSupabaseAdminClient,
  getSupabaseClient,
  isSupabaseAdminConfigured,
  isSupabaseConfigured,
} from "@/lib/supabase";

const ownerSubmissionSchema = z.object({
  restaurantName: z.string().trim().min(2).max(120),
  contactEmail: z.string().trim().email(),
  address: z.string().trim().min(6).max(220),
  changeNotes: z.string().trim().min(10).max(1600),
  newsletterOptIn: z.boolean().default(false),
});

const reviewSchema = z.object({
  restaurantSlug: z.string().trim().min(2).max(120),
  reviewerName: z.string().trim().min(2).max(80),
  reviewerEmail: z.string().trim().email(),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().trim().min(10).max(1200),
});

export type ReviewRecord = {
  id: string;
  reviewer_name: string;
  rating: number;
  comment: string;
  created_at: string;
};

export type PendingSubmissionRecord = {
  id: string;
  restaurant_name: string;
  contact_email: string;
  address: string;
  change_notes: string;
  newsletter_opt_in: boolean;
  status: string;
  created_at: string;
};

export type PendingReviewRecord = {
  id: string;
  restaurant_slug: string;
  reviewer_name: string;
  reviewer_email: string;
  rating: number;
  comment: string;
  status: string;
  created_at: string;
};

export async function createOwnerSubmission(input: {
  restaurantName: string;
  contactEmail: string;
  address: string;
  changeNotes: string;
  newsletterOptIn: boolean;
}) {
  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      message:
        "Backend is not configured yet. Add Supabase environment variables to enable submissions.",
    };
  }

  const parsed = ownerSubmissionSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please provide valid submission details." };
  }

  const supabase = getSupabaseClient();
  const { error } = await supabase.from("owner_submissions").insert({
    restaurant_name: parsed.data.restaurantName,
    contact_email: parsed.data.contactEmail,
    address: parsed.data.address,
    change_notes: parsed.data.changeNotes,
    newsletter_opt_in: parsed.data.newsletterOptIn,
    status: "pending",
  });

  if (error) {
    return { ok: false, message: "Unable to save your submission right now." };
  }

  if (parsed.data.newsletterOptIn) {
    await subscribeNewsletter(parsed.data.contactEmail);
  }

  return { ok: true, message: "Submission received and queued for moderation." };
}

export async function subscribeNewsletter(email: string) {
  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      message:
        "Backend is not configured yet. Add Supabase environment variables to enable newsletter subscriptions.",
    };
  }

  const parsedEmail = z.string().trim().email().safeParse(email);
  if (!parsedEmail.success) {
    return { ok: false, message: "A valid email address is required." };
  }

  const supabase = getSupabaseClient();
  const { error } = await supabase.from("newsletter_subscribers").upsert(
    {
      email: parsedEmail.data,
      source: "jupeater-web",
      is_active: true,
    },
    { onConflict: "email" },
  );

  if (error) {
    return { ok: false, message: "Unable to save your newsletter preference." };
  }

  return { ok: true, message: "Newsletter preference saved." };
}

export async function createReview(input: {
  restaurantSlug: string;
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
  comment: string;
}) {
  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      message:
        "Backend is not configured yet. Add Supabase environment variables to enable reviews.",
    };
  }

  const parsed = reviewSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please provide valid review details." };
  }

  const supabase = getSupabaseClient();
  const { error } = await supabase.from("restaurant_reviews").insert({
    restaurant_slug: parsed.data.restaurantSlug,
    reviewer_name: parsed.data.reviewerName,
    reviewer_email: parsed.data.reviewerEmail,
    rating: parsed.data.rating,
    comment: parsed.data.comment,
    status: "pending",
  });

  if (error) {
    return { ok: false, message: "Unable to submit your review right now." };
  }

  return { ok: true, message: "Review submitted and pending moderation." };
}

export async function getPublishedReviews(
  restaurantSlug: string,
): Promise<ReviewRecord[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("restaurant_reviews")
    .select("id, reviewer_name, rating, comment, created_at")
    .eq("restaurant_slug", restaurantSlug)
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error || !data) {
    return [];
  }

  return data as ReviewRecord[];
}

export async function getPendingOwnerSubmissions(): Promise<PendingSubmissionRecord[]> {
  if (!isSupabaseAdminConfigured()) {
    return [];
  }

  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("owner_submissions")
    .select(
      "id, restaurant_name, contact_email, address, change_notes, newsletter_opt_in, status, created_at",
    )
    .eq("status", "pending")
    .order("created_at", { ascending: true });

  if (error || !data) {
    return [];
  }

  return data as PendingSubmissionRecord[];
}

export async function getPendingReviews(): Promise<PendingReviewRecord[]> {
  if (!isSupabaseAdminConfigured()) {
    return [];
  }

  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("restaurant_reviews")
    .select(
      "id, restaurant_slug, reviewer_name, reviewer_email, rating, comment, status, created_at",
    )
    .eq("status", "pending")
    .order("created_at", { ascending: true });

  if (error || !data) {
    return [];
  }

  return data as PendingReviewRecord[];
}

export async function moderateOwnerSubmission(id: string, decision: "approved" | "rejected") {
  if (!isSupabaseAdminConfigured()) {
    return { ok: false, message: "Supabase admin client is not configured." };
  }

  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("owner_submissions")
    .update({ status: decision })
    .eq("id", id);

  if (error) {
    return { ok: false, message: "Unable to update submission status." };
  }

  return { ok: true, message: `Submission ${decision}.` };
}

export async function moderateReview(id: string, decision: "approved" | "rejected") {
  if (!isSupabaseAdminConfigured()) {
    return { ok: false, message: "Supabase admin client is not configured." };
  }

  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("restaurant_reviews")
    .update({ status: decision })
    .eq("id", id);

  if (error) {
    return { ok: false, message: "Unable to update review status." };
  }

  return { ok: true, message: `Review ${decision}.` };
}