import { getCollection } from "astro:content";

export async function getPublishedProjects() {
  return (await getCollection("projects", ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order
  );
}
