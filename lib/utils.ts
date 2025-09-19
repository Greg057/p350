import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  // Server-safe helper: re-exported here to consolidate utils
  // Use only in server components/actions
  // We inline a small guard to avoid importing next/navigation here
  // Consumers in server contexts should handle redirect via next/navigation
  return `${path}?${type}=${encodeURIComponent(message)}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function renderDescription(description: string | null): string {
  if (!description) return '';
  const lines = description.split('\n');
  const processed = lines
    .map((line) => {
      const t = line.trim();
      if (t.startsWith('• ')) return t;
      if (t.startsWith('- ') || t.startsWith('* ')) return '• ' + t.substring(2);
      if (t.length > 0) return t;
      return '';
    })
    .filter((l) => l.length > 0);
  return processed.join('<br>');
}

export function ensureAbsoluteUrl(url: string | null): string | null {
  if (!url) return url;
  if (url.startsWith('blob:')) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/')) return url; // Handle GitHub Pages paths
  if (url.includes('.') && !url.startsWith('/')) return `https://${url}`;
  if (url.match(/^[a-zA-Z0-9_-]+$/)) return `https://github.com/${url}`;
  if (url.match(/^[a-zA-Z0-9_-]+$/) && url.length > 3) return `https://linkedin.com/in/${url}`;
  if (url.match(/^[a-zA-Z0-9_]+$/) && url.length > 1) return `https://x.com/${url}`;
  return null;
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
