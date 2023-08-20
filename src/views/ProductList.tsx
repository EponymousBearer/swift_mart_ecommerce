/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useState, useEffect } from "react";
import ProductCart from "../components/ProductCart";
import { client } from "@/lib/sanityClient";
import Wrapper from "@/components/shared/Wrapper";
import FetchData from "../../sanity/FetchData";
import Link from "next/link";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Number of items to show at a time

  useEffect(() => {
    async function fetchData() {
      const productData = await FetchData();
      setData(productData);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % data.length);
    }, 3000); // Change products every 3 second

    return () => clearTimeout(timer);
  }, [currentIndex, data.length, itemsToShow]);

  const displayedItems = data.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <Wrapper>
      <section className="">
        <div className="text-blue-600 font-bold text-sm text-center mb-4">
          PRODUCTS
        </div>
        <div className="font-bold text-4xl text-center mb-16">
          Check What We Have
        </div>
        <div className="flex justify-center items-center flex-col gap-y-6 lg:grid lg:grid-cols-[repeat(3,auto)] lg:gap-x-16 2xl:gap-x-96 ">
          {displayedItems.map((item: any, index) => (
            <Link href={`/product/${item.slug.current}`} key={index}>
              <ProductCart item={item} key={index} />
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
