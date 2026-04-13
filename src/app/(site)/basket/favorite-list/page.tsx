import Favorite from '@/src/components/pages/profile/favorite';
import { getFavoriteProducts, MOCKUP_PROFILE_FAVORITES_PRODUCTS } from '@/src/shared/api/instance.api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

async function FavoritePage() {
  const res = await fetch(MOCKUP_PROFILE_FAVORITES_PRODUCTS);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getFavoriteProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Favorite />
    </HydrationBoundary>
  );
}