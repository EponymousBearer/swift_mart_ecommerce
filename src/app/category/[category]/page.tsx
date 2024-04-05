import React from "react";
import FetchData from "../../../../sanity/FetchData";
import ProductCart from "@/components/ProductCart";
import Link from "next/link";
import { IProduct } from "../../../../sanity/FetchData";

export default async function CategoryPage({ params }: { params: any }) {
  const data = await FetchData();

  const filteredData = data.filter(
    (item: IProduct) => item.category === params.category
  );

  if (filteredData.length === 0) {
    return <div className="text-center mt-20 font-bold">No Products found</div>;
  }

  return (
    <section>
      <div className="my-28 grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] xl:grid-cols-[repeat(4,auto)] gap-14 justify-center">
        {filteredData.map((product: IProduct, index: number) => (
          <Link href={`/product/${product.slug.current}`} key={index}>
            <ProductCart item={product} key={product._id} />
          </Link>
        ))}
      </div>
    </section>
  );
}
