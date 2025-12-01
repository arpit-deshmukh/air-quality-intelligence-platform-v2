
const cache = new Map();

export function setCache(key, value, ttlMs = 5 * 60 * 1000) {
  cache.set(key, {
    value,
    expires: Date.now() + ttlMs
  });
}

export function getCache(key) {
  const item = cache.get(key);
  if (!item) return null;

  if (Date.now() > item.expires) {
    cache.delete(key);
    return null;
  }

  return item.value;
}

export function clearCache() {
  cache.clear();
}
