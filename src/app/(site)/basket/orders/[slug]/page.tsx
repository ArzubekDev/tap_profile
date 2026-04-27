import OrdersDetails from "@/src/entities/orders/OrdersDetails/OrdersDetails";


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function OrdersDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  return <OrdersDetails slug={slug} />;
}