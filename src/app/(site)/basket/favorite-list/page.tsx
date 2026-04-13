import { getProducts } from '@/src/shared/api/instance.api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import FavoriteWithBoundary from './FavoriteWithFoundary';

export default async function FavoritePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['favorites'],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FavoriteWithBoundary/>
    </HydrationBoundary>
  );
}