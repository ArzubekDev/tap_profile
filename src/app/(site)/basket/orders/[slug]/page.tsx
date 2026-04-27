import OrdersDetails from "@/src/entities/orders/OrdersDetails/OrdersDetails";


interface PageProps {
  params: { slug: string };
}

export default async function OrdersDetailsPage({ params }: PageProps) {
  return <OrdersDetails slug={params.slug} />;
}