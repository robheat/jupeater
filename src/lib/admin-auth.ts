import { createHash } from "crypto";

import { cookies } from "next/headers";

const adminPassword = process.env.ADMIN_DASHBOARD_PASSWORD;
const sessionSalt = process.env.ADMIN_SESSION_SALT;
const cookieName = "jupeater_admin_session";

function buildSessionToken(password: string, salt: string): string {
  return createHash("sha256").update(`${password}:${salt}`).digest("hex");
}

export function isAdminConfigured(): boolean {
  return Boolean(adminPassword && sessionSalt);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  if (!adminPassword || !sessionSalt) {
    return false;
  }

  const store = await cookies();
  const current = store.get(cookieName)?.value;
  if (!current) {
    return false;
  }

  return current === buildSessionToken(adminPassword, sessionSalt);
}

export async function createAdminSession(passwordAttempt: string): Promise<boolean> {
  if (!adminPassword || !sessionSalt) {
    return false;
  }

  if (passwordAttempt !== adminPassword) {
    return false;
  }

  const store = await cookies();
  store.set(cookieName, buildSessionToken(adminPassword, sessionSalt), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return true;
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(cookieName);
}