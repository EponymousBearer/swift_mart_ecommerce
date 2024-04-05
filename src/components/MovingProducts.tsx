/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useState, useEffect } from "react";
import ProductCart from "../components/ProductCart";
import FetchData from "../../sanity/FetchData";
import Link from "next/link";
import { IProduct } from "../../sanity/FetchData";

export default function MovingProducts() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Updated to show 4 items at a time

  useEffect(() => {
    async function fetchData() {
      const productData = await FetchData();
      setData(productData);
    }

    fetchData();
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % data.length);
    }, 3000); // Change products every 3 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, data.length, itemsToShow]);

  const displayedItems = data.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="">
      <div className="text-white flex justify-center flex-col md:grid-cols-[repeat(2,auto)] gap-y-8 md:grid xl:grid-cols-[repeat(4,auto)] md:gap-x-10">
        {displayedItems.map((item: IProduct , index:number) => (
          <Link href={`/product/${item.slug.current}`} key={index}>
            <ProductCart item={item} key={index} />
          </Link>
        ))}
      </div>
    </section>
  );
}
