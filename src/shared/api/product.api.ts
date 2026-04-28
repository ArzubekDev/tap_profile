import { PRODUCTS_API_URL } from "./instance.api";

export const getProducts = async () => {
  const res = await fetch(PRODUCTS_API_URL, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
};