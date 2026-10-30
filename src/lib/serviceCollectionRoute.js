import { cache } from "react";

export const getServiceCollectionData = cache(async (slug) => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product`);
    url.searchParams.set("slug", slug);
    const response = await fetch(url, { cache: "no-store" });
    const data = response.ok ? await response.json() : null;
    return Array.isArray(data?.data?.product) ? data.data : null;
  } catch {
    return null;
  }
});
