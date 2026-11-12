import { getCollection } from 'astro:content';

/** Products visible on the site: status "active" only, ordered by priority. */
export async function getActiveProducts() {
  const all = await getCollection('products');
  return all.filter((p) => p.data.status === 'active').sort((a, b) => a.data.priority - b.data.priority);
}
