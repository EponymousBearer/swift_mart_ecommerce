import React from "react";
import FetchData from "../../../sanity/FetchData";
import Link from "next/link";
import ProductCart from "@/components/ProductCart";
import Wrapper from "@/components/shared/Wrapper";

interface IProductImage {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    url: string;
  };
}

interface IProduct {
  _type: string;
  _id: string;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
  description: string;
  price: number;
  images: IProductImage[];
  category: string;
  gender: string;
}

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
