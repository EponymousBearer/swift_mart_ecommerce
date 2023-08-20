/* eslint-disable react/jsx-key */

import React from "react";
import { cookies } from "next/headers";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Quantity from "@/components/Quantity";
import ProductQuantity from "@/components/ProductQuantity";

export default async function cart() {
  const setCookies = cookies();
  const uid = setCookies.get("user_id")?.value;

  const res = await fetch(`http://localhost:3000/api/cart?user_id=${uid}`);
  const data = await res.json();

  // const handleDelete = async () => {
  //   try {
  //     const response = await fetch(`/api/your-delete-api-endpoint?product_id=${product.product_id}&user_id=${user_id}`, {
  //       method: "DELETE",
  //     });

  //     if (response.ok) {
  //       // Refresh the page or update the cart context if needed
  //       console.log("Product deleted successfully");
  //     } else {
  //       console.log("Error deleting product");
  //     }
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  return (
    <Wrapper>
      <section className="px-12 my-16">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>

        <div className=" flex mt-2 gap-x-10">
          <div className="basis-[70%]">
            {data.map((item: any) => (
              <div className=" flex p-8 gap-x-8">
                <div className=" h-48 w-44">Image</div>
                <div className="font-bold w-full ">
                  <div className="text-xl font-light flex items-center justify-between">
                    <span>{item.product_title}</span>
                    <button><Trash2 /></button>
                  </div>
                  <h2 className="mt-5 text-gray-500">Dress</h2>
                  <div className="mt-4">Delivery Estimation</div>
                  <div className="mt-4 text-yellow-400">5 Working Days</div>
                  <div className="mt-4 text-lg flex items-center justify-between">
                    <span>$ {item.product_price}</span>
                    <div className="font-light"><Quantity/></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 basis-[30%] p-9 space-y-7">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="text-lg flex">Quantity: <ProductQuantity/></div>
            <div className="text-lg">Sub Total</div>
            <Button className="text-white w-full py-3">
              Proceed To Checkout
            </Button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
