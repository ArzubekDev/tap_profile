import OrdersDetails from "@/src/entities/orders/OrdersDetails/OrdersDetails";


interface IOrdersDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function OrdersDetailsPage({ params }: IOrdersDetailsPageProps) {
  const { slug } = await params;

  return (
    <OrdersDetails slug={slug} />
  )
}