import { MOCKUP_PROFILE_FAVORITES_PRODUCTS } from "./instance.api";

export const getProducts = async () => {
  const res = await fetch(MOCKUP_PROFILE_FAVORITES_PRODUCTS, {
    next: { revalidate: 300 }
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};