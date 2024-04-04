import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { FC } from "react";
import Link from "next/link";

const ProductCart: FC<{ item: any }> = ({ item }) => {
  // console.log("item cart",urlForImage(item.images[0]).url())
  return (
    // <Link href={`/products/${item._id}`}>
    <div className="">
      <div className="h-[290px] w-[270px] lg:h-[280px] lg:w-[260px] xl:h-[270px] xl:w-[250px]">
        <Image
          src={urlForImage(item.images[0]).url()}
          alt="Product"
          height={500}
          width={400}
          className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover object-top"
        />
      </div>
      <div className="lg:space-y-1 text-base">
        <div className="flex gap-x-6 mt-4 max-w-[250px]">
          <h2 className="max-w-[250px]">{item.title}</h2>
          <h1 className='font-semibold'>${item.price}</h1>
        </div>
        <h5 className="text-[#888] text-base capitalize">{item.category}</h5>
      </div>
    </div>
    // </Link>
  );
};

export default ProductCart;
function useShoppingCart(): {
  addItem: any;
  incrementItem: any;
  cartDeatils: any;
} {
  throw new Error("Function not implemented.");
}
