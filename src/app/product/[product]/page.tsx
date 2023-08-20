/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import FetchData from "../../../../sanity/FetchData";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Wrapper from "@/components/shared/Wrapper";
import { urlForImage } from "../../../../sanity/lib/image";
import { useCart } from "@/components/CartContext";

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

export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

export default function page({ params }: { params: any }) {
  const { setCartItemCount } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [filteredData, setFilteredData] = useState<IProduct | null>(null);

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: "qwerty",
          product_id: filteredData?._id,
          product_title: filteredData?.title,
          image_url: "filteredData?.images[0].asset.url",
          product_price: filteredData?.price
            ? filteredData.price * quantity
            : 0,
          product_quantity: quantity,
        }),
      });
      // Update the cart item count
      setCartItemCount((prevCount: number) => prevCount + 1);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await FetchData();
      const foundData = data.find(
        (item: IProduct) => item.slug.current == params.product
      );
      setFilteredData(foundData || null);
    }

    fetchData();
  }, [params.product]);

  return (
    <Wrapper>
      <div className="flex mt-16">
        {filteredData && (
          <div key={filteredData._id}>
            {/* First Row */}
            <div className="flex">
              {/* 1st Div */}

              <div className="grid grid-cols-1 mr-8">
                {filteredData.images.map((imageObj, index) => {
                  return (
                    <Image
                      key={index} // Use the index as the key
                      src={urlForImage(imageObj.asset).url()} // Use imageObj.url to get the URL of each image
                      alt={`Product ${filteredData.title}`}
                      height={100}
                      width={100}
                    />
                  );
                })}
              </div>

              {/* 2nd Div */}

              <div className="w-[600px]">
                {filteredData.images.map((imageObj, index) => {
                  return (
                    <Image
                      key={index} // Use the index as the key
                      src={urlForImage(imageObj.asset).url()} // Use imageObj.url to get the URL of each image
                      alt={`Product ${filteredData.title}`}
                      height={500}
                      width={350}
                      className="h-full w-full object-cover"
                    />
                  );
                })}
                {/* <Image
                    src={filteredData.images[0].url}
                    height={500}
                    width={400}
                    className="h-full w-full object-cover"
                    alt={filteredData.title}
                  /> */}
              </div>

              {/* 3rd Div */}

              <div className="mt-16 ml-5">
                <h1 className="text-2xl leading-8 -tracking-tighter">
                  {filteredData.title}
                </h1>
                <h2 className="text-lg text-gray-500 font-semibold opacity-50">
                  {filteredData.category}
                </h2>
                <h3 className="font-bold mt-6">SELECT SIZE</h3>
                <span className="flex font-bold justify-between ml-4 mt-5 text-gray-800 opacity-80">
                  {sizes.map((size) => (
                    <button key={size}>{size}</button>
                  ))}
                </span>
                <div className="flex align-middle mt-10">
                  <h3 className="font-bold mr-6">Quantity: </h3>
                  {/* <Quantity /> */}
                  <section className="flex items-center gap-x-2">
                    <button
                      className="border rounded-full h-8 w-8 text-center bg-slate-200 text-2xl"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="border rounded-full h-8 w-8 text-center bg-slate-200 text-xl"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </section>
                </div>
                <div className="flex mt-8 gap-x-5 items-center">
                  <Button
                    onClick={handleAddToCart}
                    className=" bg-[#212121] text-white font-bold py-6 px-30 gap-x-3 text-sm w-[45%] border-2  border-solid shadow-md lg:max-w-[250px]"
                  >
                    <ShoppingCart className="h-6 w-6" color="#ffffff" />
                    <div>Add to Cart</div>
                  </Button>
                  {showNotification && (
                    <div className="notification absolute top-0 left-0 bg-green-500 text-white p-2 rounded-md shadow-md">
                      Product added to cart!
                    </div>
                  )}
                  <div className="font-bold text-2xl">
                    ${filteredData.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}

            <div className="my-20 space-y-10 relative">
              <div className="border-b-4 h-24">
                <h3
                  className="font-extrabold text-[7.5rem] leading-[151px] text-paragraph opacity-[0.06] w-1/4
               -z-10 absolute top-0"
                >
                  Overview
                </h3>
                <h2 className="tracking-wider font-extrabold text-xl mt-1">
                  Product Information
                </h2>
              </div>

              <div className="flex">
                <div className="basis-1/3 tracking-wider font-bold text-grey">
                  PRODUCT DETAILS
                </div>
                <div className="basis-2/3 text-justify tracking-wider text-lg font-light">
                  {filteredData.description}
                </div>
              </div>

              <div className="flex">
                <div className="basis-1/3 tracking-wider font-bold text-grey">
                  PRODUCT CARE
                </div>
                <ul className="basis-2/3 list-disc ml-7 font-bold text-justify tracking-wider text-lg">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
