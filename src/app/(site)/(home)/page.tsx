import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import Home from '@/src/components/pages/home';
import { getProducts } from '@/src/shared/api/product.api';
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys';

export default async function HomePage() {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: PRODUCT_KEYS.all,
      queryFn: getProducts,
    });
  } catch (error) {}

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
