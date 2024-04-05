/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useUser } from "@clerk/clerk-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";
import Quantity from "./Quantity";
import { useAuth } from "@clerk/nextjs";

const ProductDetails = ({ foundData }: { foundData: any }) => {
  const [num, setNum] = useState(1);
  const { setCartItemCount } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const sizes = ["XS", "S", "M", "L", "XL"];
  const { userId } = useAuth();
  const { isSignedIn } = useUser();

  const handleAddToCart = async () => {
    if (!isSignedIn) {
      // If user is not signed in, show an error toast
      toast.error("You must be signed in to add products to the cart.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      try {
        const res = await fetch("/api/cart", {
          method: "POST",
          body: JSON.stringify({
            user_id: userId,
            product_id: foundData?._id,
            product_title: foundData?.title,
            product_price: foundData?.price ? foundData.price * num : 0,
            product_quantity: num,
            image_url: urlForImage(foundData.images[0].asset).url(),
            product_category: foundData?.category,
          }),
        });

        // Update the cart item count
        setCartItemCount((prevCount: number) => prevCount + 1);
        setShowNotification(true);

        // Use toast to show a notification
        toast.success("Product added to cart!", {
          autoClose: 3000, // Close the notification after 3 seconds
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex mt-16 max-w-7xl mx-auto">
      {foundData && (
        <div key={foundData._id}>
          {/* First Row */}
          <div className="flex flex-col-reverse max-w-[240px] md:max-w-none gap-x-8 md:flex-row">
            {/* 1st Div */}
            <div className="mt-8  md:mt-16 ml-2 flex-1">
              <h1 className="text-2xl font-bold tracking-wider mb-4">
                {foundData.title}
              </h1>
              <div className="flex w-full items-center justify-between max-w-lg">
                <h2 className="text-lg capitalize text-gray-500 font-semibold opacity-50">
                  {foundData.category}
                </h2>
                <div className="font-PT_Serif text-3xl font-light">
                  ${foundData.price.toFixed(2)}
                </div>
              </div>
              <p className="text-slate-800 py-6 max-w-lg text-justify">{foundData.description}</p>
              <h3 className="font-bold mt-6">SELECT SIZE</h3>
              <span className="flex justify-between lg:w-2/3 rounded-sm mt-4 text-gray-800 opacity-80">
                {sizes.map((size) => (
                  <button className="border border-black text-black hover:text-white hover:bg-black text-sm h-10 w-10 rounded-full" key={size}>{size}</button>
                ))}
              </span>
              <div className="flex flex-col-reverse md:flex-row gap-y-5 mt-4 md:mt-12 gap-x-5 items-center">
                <div className="flex align-middle">
                  <section className="flex justify-center items-center gap-x-4 rounded-full border border-black">
                    <div
                      className=" h-9 w-9 text-center  text-2xl"
                      onClick={() => {
                        setNum(num <= 1 ? 1 : num - 1);
                      }}
                    >
                      -
                    </div>
                    <span className="text-lg">{num}</span>
                    <div
                      className=" h-9 w-9 text-center text-xl mt-1"
                      onClick={() => {
                        setNum(num + 1);
                      }}
                    >
                      +
                    </div>
                  </section>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className=" bg-stone-800 animate-bounce text-white font-bold py-2 rounded-full gap-x-3 text-sm md:px-4 lg:px-8 lg:max-w-[250px]"
                >
                  <div>ADD TO CART</div>
                </Button>
                <ToastContainer />

              </div>
            </div>

            {/* 3rd Div */}
            <div className="flex flex-col flex-1">
              <div className="w-64 md:w-full">
                <Image
                  src={urlForImage(foundData.images[0].asset).url()}
                  height={500}
                  width={400}
                  className="h-full w-full object-cover shadow-md shadow-stone-800"
                  alt={foundData.title}
                />
              </div>

              {/* 2nd Div */}
              <div className="hidden md:grid md:grid-cols-4 mt-4">
                {foundData.images.map((_imageObj: any) => {
                  return (
                    <Image
                      key={_imageObj.asset.id}
                      src={urlForImage(_imageObj.asset).url()}
                      alt={_imageObj.alt}
                      width={100}
                      height={100}
                      className="shadow-md h-96 md:h-full w-full shadow-stone-800"
                    />
                  );
                })}
              </div>
            </div>

          </div>

          {/* Second Row */}

          <div className="my-20 space-y-10">
            <div className="border-b-2 h-12">
              <h2 className="tracking-wider font-extrabold text-xl mt-1">
                Product Information
              </h2>
            </div>
            <div className="flex flex-col mdLflex-row gap-y-6 gap-x-6">
              <div className="flex-1">
                <div className="mb-3 basis-1/3 tracking-wider font-bold text-grey">
                  PRODUCT DETAILS
                </div>
                <div className="basis-2/3 text-justify tracking-wider text-lg font-light">
                  {foundData.description}
                </div>
              </div>

              <div className="flex-1">
                <div className=" mb-3 basis-1/3 tracking-wider font-bold text-grey">
                  PRODUCT CARE
                </div>
                <ul className="basis-2/3 list-disc ml-7 font-bold text-justify tracking-wider text-lg">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>consectetur adipiscing elit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
