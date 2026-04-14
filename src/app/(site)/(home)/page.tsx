import Home from "@/src/components/pages/home";
import { getProducts } from "@/src/shared/api/product.api";
import { PRODUCT_KEYS } from "@/src/shared/api/query-keys";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function HomePage () {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: PRODUCT_KEYS.all,
        queryFn: getProducts,
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Home/>
        </HydrationBoundary>
    )
}