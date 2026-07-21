import { createHash, createHmac, randomBytes, timingSafeEqual } from "crypto";

import { cookies } from "next/headers";

const adminPassword = process.env.ADMIN_DASHBOARD_PASSWORD;
const sessionSalt = process.env.ADMIN_SESSION_SALT;
const cookieName = "jupeater_admin_session";
const sessionTtlMs = 60 * 60 * 8 * 1000;

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function constantTimeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

function passwordMatches(attempt: string, expected: string): boolean {
  const attemptHash = createHash("sha256").update(attempt).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(attemptHash, expectedHash);
}

/** Signed, expiring token — random per login so it can't be recomputed or reused after expiry. */
function buildSessionToken(salt: string): string {
  const nonce = randomBytes(16).toString("hex");
  const expiresAt = Date.now() + sessionTtlMs;
  const payload = `${nonce}.${expiresAt}`;
  return `${payload}.${sign(payload, salt)}`;
}

function verifySessionToken(token: string, salt: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 3) {
    return false;
  }

  const [nonce, expiresAtRaw, signature] = parts;
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) {
    return false;
  }

  return constantTimeEqual(signature, sign(`${nonce}.${expiresAtRaw}`, salt));
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

  return verifySessionToken(current, sessionSalt);
}

export async function createAdminSession(passwordAttempt: string): Promise<boolean> {
  if (!adminPassword || !sessionSalt) {
    return false;
  }

  if (!passwordMatches(passwordAttempt, adminPassword)) {
    return false;
  }

  const store = await cookies();
  store.set(cookieName, buildSessionToken(sessionSalt), {
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