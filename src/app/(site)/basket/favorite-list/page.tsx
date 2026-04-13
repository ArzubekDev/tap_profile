import Favorite from '@/src/components/pages/profile/favorite';
import { getProducts, MOCKUP_PROFILE_FAVORITES_PRODUCTS } from '@/src/shared/api/instance.api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export default async function FavoritePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Favorite />
    </HydrationBoundary>
  );
}