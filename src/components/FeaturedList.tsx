'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react";
import FetchData from "../../sanity/FetchData";
import { Link } from "lucide-react";
import ProductCart from "./ProductCart";

const FeaturedList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const productData = await FetchData();
            setData(productData);
        }

        fetchData();
    }, []);
    return (
        <Carousel className="w-full max-w-screen-xl mx-auto">
            <CarouselContent className="-ml-1">
                {data.map((item:any, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center p-6 h-full w-full">
                                    <Link href={`/product/${item.slug.current}`} key={index}>        
                                        <ProductCart item={item} key={index} />
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default FeaturedList