export const PRODUCTS_API_URL = process.env.NEXT_PUBLIC_PRODUCTS_API_URL!;

if (!PRODUCTS_API_URL) {
  throw new Error('Missing PRODUCTS_API_URL');
}