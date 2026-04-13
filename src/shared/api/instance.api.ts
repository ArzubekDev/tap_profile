
export const MOCKUP_PROFILE_FAVORITES_PRODUCTS = 'https://fakestoreapi.com/products'

export const getFavoriteProducts = async () => {
  const res = await fetch(MOCKUP_PROFILE_FAVORITES_PRODUCTS);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};