import { getCollection } from "astro:content";

/** Published (non-draft) projects, sorted by ascending `order`. */
export async function getPublishedProjects() {
  return (await getCollection("projects", ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order
  );
}

/** Published (non-draft) blog posts, sorted newest first. */
export async function getPublishedPosts() {
  return (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/** Formats a date like "January 5, 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
