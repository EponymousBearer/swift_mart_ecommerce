/* eslint-disable react/jsx-key */

"use client";
import getStripePromise from "@/lib/stripe";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export default function CartItems() {
  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { isSignedIn } = useAuth();
  const { userId } = useAuth();
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>(
    {}
  );

  useEffect(() => {
    fetch(`api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // Initialize quantities state with fetched data
        const initialQuantities: { [productId: string]: number } = {};
        data.forEach((item: any) => {
          initialQuantities[item.product_id] = item.product_quantity;
        });
        setQuantities(initialQuantities);
      });
  }, [isSignedIn, userId, state]);

  const handleCheckout = async () => {
    const stripePromise = await getStripePromise();
    const response = await fetch("api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({
        products: products,
      }),
    });
    const data = await response.json();
    if (data.session) {
      stripePromise?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  async function deleteProduct(product_title: any) {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title,
      }),
    });
    setState(!state);
  }

  // Calculate the total quantity and subtotal
  let totalQuantity = 0;
  let totalSubtotal = 0;

  if (products) {
    totalQuantity = Object.values(quantities).reduce(
      (acc, curr) => acc + curr,
      0
    );
    totalSubtotal = products.reduce(
      (
        acc: number,
        item: {
          product_price: number;
          product_quantity: number;
          product_id: string | number;
        }
      ) => {
        const pricePerItem = item.product_price / item.product_quantity;
        const itemSubtotal = pricePerItem * (quantities[item.product_id] || 1);
        return acc + itemSubtotal;
      },
      0
    );
  }

  return (
    <Wrapper>
      <section className="px-2 my-8 md:my-16 flex flex-col h-full 2xl:px-96 2xl:mx-36">
        <h1 className="font-bold text-3xl text-center w-full">My Shopping Cart</h1>
        {totalQuantity != 0 ? (
          <div className="flex flex-col md:flex-row mt-12 lg:px-16 py-4 border border-slate-300">
            {/* Cart Items */}

            <div className="flex-1 ">
              {isSignedIn ? (
                <div>
                  <div className="mt-6 hidden capitalize md:flex w-full px-6 py-4 border-b-2 justify-end gap-x-7 xl:gap-x-20">
                    <div className="justify-center flex w-full">
                      <p>description</p>
                    </div>
                    <p>price</p>
                    <p>quantity</p>
                    <p>remove</p>
                  </div>
                  {products?.map((item: any) => (
                    <div className="flex flex-col md:flex-row p-6 gap-x-8 border-b-2">
                      <div className="h-44 w-48">
                        <Image
                          src={item.image_url} // Use the image URL here
                          height={500}
                          width={400}
                          className="h-full w-full object-cover rounded-lg"
                          alt={item.product_title}
                        />
                      </div>
                      <div className="text-lg flex flex-col md:flex-row items-center justify-between md:px-4 w-full">
                        {/* TITLE CATEGORY */}
                        <div className="flex flex-col">
                          <span className="text-lg md:text-xl mt-2 md:mt-0 font-light flex max-w-sm">{item.product_title}</span>
                          <h2 className=" capitalize font-PT_Serif text-lg text-gray-500">
                            {item.product_category}
                          </h2>
                        </div>
                        {/* Price */}
                        <div className="flex justify-between w-full mt-2 xl:max-w-xs">
                          <span className="italic text-xl">
                            $
                            {(item.product_price / item.product_quantity) *
                              (quantities[item.product_id] || 1)}
                          </span>
                          {/* Quantity */}
                          <div className="flex items-center gap-x-2">
                            <div
                              className="border rounded-full h-8 w-8 text-center bg-slate-200 text-2xl cursor-pointer"
                              onClick={() => {
                                const newQuantity =
                                  (quantities[item.product_id] || 1) - 1;
                                setQuantities((prevQuantities) => ({
                                  ...prevQuantities,
                                  [item.product_id]:
                                    newQuantity >= 1 ? newQuantity : 1,
                                }));
                              }}
                            >
                              -
                            </div>
                            <span>{quantities[item.product_id] || 1}</span>
                            <div
                              className="border rounded-full h-8 w-8 text-center bg-slate-200 text-xl cursor-pointer"
                              onClick={() => {
                                const newQuantity =
                                  (quantities[item.product_id] || 1) + 1;
                                setQuantities((prevQuantities) => ({
                                  ...prevQuantities,
                                  [item.product_id]: newQuantity,
                                }));
                              }}
                            >
                              +
                            </div>
                          </div>
                          {/* DELETE */}
                          <button
                            onClick={() => deleteProduct(item.product_title)}
                          >
                            <Trash2 />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Please Login In</p>
              )}
            </div>

            {/* Order Summary */}

            <div className="fixed  flex flex-col md:flex-row justify-between items-center left-0 right-0 bottom-0 bg-stone-100 w-full px-6 md:px-16 xl:px-32 2xl:px-[520px] py-4 gap-y-4 md:space-y-7 gap-x-4">
              <div className="flex md:w-3/5 text-sm gap-x-4 md:text-xl items-center md:justify-between justify-center">
                <div>Quantity: {totalQuantity} Products</div>
                <div>Sub Total: ${totalSubtotal}</div>
              </div>
              <Button
                onClick={handleCheckout}
                className="text-white px-2 md:px-3 py-2 md:py-3"
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex-col items-center flex mt-20">
            <ShoppingBag height={120} width={120} />
            <p className="font-bold text-3xl mt-6 mb-10 text-center">
              Your shopping bag is empty
            </p>
          </div>
        )}
      </section>
    </Wrapper>
  );
}
