
import React from "react";
import Image, { StaticImageData } from "next/image";
import left_promotion from "../../public/summer_promotion.webp";
import ProductCart from "@/components/ProductCart";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanityClient";

import { urlForImage } from "../../sanity/lib/image";
import Wrapper from "@/components/shared/Wrapper";
interface IImage {
  asset: any;
  _id: string;
  url: string;
  title?: string;
}

interface IProduct {
  title: string;
  _id: string;
  price: number;
  description: string;
  images: IImage[];
  category: {
    name: string;
  };
}

const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']
  {
    price,
    _id,
    title,
    images[] {
      _key,
      asset -> {
        _ref,
        url
      }
    },
    description,
    category -> {
      name
    }
  }`);
  return res;
};

export default async function Promotions() {
  const productData: IProduct[] = await getProductData();

  return (
    <Wrapper>
      <section className="h-full mb-32">
        <div className="text-blue-600 font-bold text-sm text-center mb-4">
          PROMOTIONS
        </div>
        <div className="font-bold text-4xl text-center mb-8">
          Our Promotions Events
        </div>
        <div className="flex gap-x-9 gap-y-5 flex-col lg:flex-row">
          {/* left */}
          <div className="basis-[45%] lg:basis-[50%] 2xl:basis-[65%] space-y-4">
            <div className="flex-1 bg-[#d6d6d8] flex flex-col 2xl:justify-between lg:flex-row items-center text-center lg:text-start">
              <div className="mt-10 lg:mt-0 lg:ml-9">
                <div className=" text-3xl lg:text-[26px] font-bold flex items-baseline">
                  GET UP TO <span className="text-4xl ml-2 lg:ml-4"> 60%</span>
                </div>
                <div className="text-lg">For the summer season</div>
              </div>
              <div>
                <Image src={left_promotion} alt="promotion"></Image>
              </div>
            </div>
            <div className="flex-1 flex-col justify-center items-center bg-[#212121] pt-8 pb-9 text-white">
              <div className="items-center text-center">
                <h1 className="text-4xl font-extrabold m-3 tracking-wide font-PT_Serif">
                  GET 30% Off
                </h1>
                <div className="text-md">USE PROMO CODE</div>
                <button className="tracking-[0.35em] font-bold py-[6px] px-8 mt-1 rounded-lg border-spacing-0 bg-[#474747]">
                  DINEWEEKENDSALE
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="basis-[55%] lg:basis-[50%] 2xl:basis-[35%] flex flex-col lg:flex-row justify-center gap-4 ">
            <div className="bg-gray-300 flex-1 w-[100%]">
              {productData
                .filter((item) => item.title == "Flex Sweatshirt")
                .map((item) => (
                  <div key={item._id}>
                    <h3 className="mt-6 ml-5">{item.title}</h3>
                    <div className="flex ml-5">
                      <p className="line-through text-lg">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="bold text-xl ml-4 font-bold">$150.00</p>
                    </div>
                    <Image
                      height={500}
                      width={400}
                      className="max-h-[290px] object-cover object-top"
                      src={item.images[0]?.asset?.url}
                      alt="product"
                    />
                    
                  </div>
                ))}
            </div>
            <div className="bg-gray-300 flex-1 w-[100%]">
              {productData
                .filter((item) => item.title == "Flex Push Button Bomber")
                .map((item) => (
                  <div key={item._id} className="flex flex-col">
                    <h3 className="mt-6 ml-5">{item.title}</h3>
                    <div className="flex ml-5">
                      <p className="line-through text-lg">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="bold text-xl ml-4 font-bold">$190.00</p>
                    </div>
                    <Image
                      height={500}
                      width={400}
                      className="max-h-[290px] object-cover object-top"
                      src={item.images[0]?.asset?.url}
                      alt="product"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
