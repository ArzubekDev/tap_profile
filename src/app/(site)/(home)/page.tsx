import Home from "@/src/components/pages/home";
import { getProducts, MOCKUP_PROFILE_FAVORITES_PRODUCTS } from "@/src/shared/api/instance.api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function HomePage () {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Home/>
        </HydrationBoundary>
    )
}