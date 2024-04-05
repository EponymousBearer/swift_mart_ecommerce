import FetchData from "../../../../sanity/FetchData";
import Wrapper from "@/components/shared/Wrapper";
import ProductDetails from "@/components/ProductDetails";
import { IProduct } from "../../../../sanity/FetchData";

export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

export default async function page({ params }: { params: any }) {
  const data = await FetchData();
  const foundData = data.find(
    (item: IProduct) => item.slug.current == params.product
  );

  return (
    <Wrapper>
      <ProductDetails foundData={foundData} />
    </Wrapper>
  );
}
