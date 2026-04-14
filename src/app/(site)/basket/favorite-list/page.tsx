import { getProducts } from '@/src/shared/api/product.api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import FavoriteWithBoundary from './FavoriteWithFoundary';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';

export default async function FavoritePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FavoriteWithBoundary />
    </HydrationBoundary>
  );
}
