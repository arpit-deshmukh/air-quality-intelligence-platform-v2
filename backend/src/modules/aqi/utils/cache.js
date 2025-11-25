const cache = new Map();

export function setCache(key, data) {
  cache.set(key, { data, time: Date.now() });
}

export function getCache(key, maxAge = 5 * 60 * 1000) { // 5 minutes
  const entry = cache.get(key);
  if (!entry) return null;

  if (Date.now() - entry.time > maxAge) {
    cache.delete(key);
    return null;
  }

  return entry.data;
}
