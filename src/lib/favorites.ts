const STORAGE_KEY = "getfitai_favorites";

export function getFavorites(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export function addFavorite(id: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(id: string): void {
  const favorites = getFavorites();
  const index = favorites.indexOf(id);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id);
}
