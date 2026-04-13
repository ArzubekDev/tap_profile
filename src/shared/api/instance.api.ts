
export const MOCKUP_PROFILE_FAVORITES_PRODUCTS = 'https://fakestoreapi.com/products'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getFavoriteProducts = async () => {
  await delay(2000);

  const res = await fetch(MOCKUP_PROFILE_FAVORITES_PRODUCTS);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};