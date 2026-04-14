import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import Basket from '@/src/components/pages/basket'
import { getProducts } from '@/src/shared/api/product.api'
import { PRODUCT_KEYS } from '@/src/shared/api/query-keys'

const BasketPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Basket/>
    </HydrationBoundary>
  )
}

export default BasketPage