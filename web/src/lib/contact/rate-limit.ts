/**
 * Small in-memory sliding-window limiter. It is per server instance: on serverless each warm instance
 * keeps its own counters, so this blunts bursts and scripted floods but is not a global guarantee.
 * Turnstile (single-use tokens) is the primary bot control; use a Vercel WAF rate-limit rule for a hard cap.
 */
const hits = new Map<string, number[]>();

export interface Limit {
  limit: number;
  windowMs: number;
}

export function allow(key: string, { limit, windowMs }: Limit, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < windowMs)) hits.delete(k);
  return true;
}

export const PER_CLIENT: Limit = { limit: 3, windowMs: 10 * 60 * 1000 };
export const GLOBAL: Limit = { limit: 40, windowMs: 60 * 60 * 1000 };

export function allowSubmission(clientKey: string, now = Date.now()): boolean {
  // Check both before recording either, so a global block does not burn a client's allowance.
  return allow(`c:${clientKey}`, PER_CLIENT, now) && allow('global', GLOBAL, now);
}

export function resetRateLimits() {
  hits.clear();
}
