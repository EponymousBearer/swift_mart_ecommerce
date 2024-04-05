import React from "react";
import FetchData from "../../../sanity/FetchData";
import Link from "next/link";
import ProductCart from "@/components/ProductCart";
import Wrapper from "@/components/shared/Wrapper";
import { IProduct } from "../../../sanity/FetchData";
export default async function page() {
  const data = await FetchData();
  return (
    <Wrapper>
      <section>
        <div className="my-28 grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] xl:grid-cols-[repeat(4,auto)] gap-14 justify-center">
          {data.map((product: IProduct, index: number) => (
            <Link href={`/product/${product.slug.current}`} key={index}>
              <ProductCart item={product} key={product._id} />
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
