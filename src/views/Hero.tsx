import React from "react";
import Image from "next/image";
import HeroImage from "../../public/HeroImage.webp";
import HeroImage2 from "../../public/HeroImage2.webp";
import HeroImage3 from "../../public/HeroImage3.webp";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-col relative h-screen">
            <div className="flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                <Image
                  src={HeroImage}
                  alt="Main Image"
                  className="h-full w-full object-cover object-left-top md:object-center"
                  layout="fill"
                />
              </div>

              {/* Overlay Content */}
              <div className="flex flex-col h-screen justify-center z-10 text-center w-full md:text-start px-10 md:px-20 xl:px-28 2xl:px-0 max-w-7xl">
                <h1 className="text-2xl max-w-sm lg:text-4xl lg:max-w-lg xl:max-w-xl font-bold text-stone-900">
                  Experience Pure Sound: Elevate Your Audio Game
                </h1>
                <p className="mt-4 text-base max-w-sm lg:text-xl lg:max-w-lg xl:max-w-xl text-gray-600">
                  Discover crystal-clear sound and unmatched comfort with our
                  premium headphones. Elevate your listening experience today.
                </p>
                <Link href="/AllProducts">
                  <div className="inline-block mt-4 md:mt-8 bg-[#212121] md:text-lg text-white md:font-bold py-3 px-6 md:px-10 rounded shadow-md">
                    Discover More
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col lg:flex-row relative h-screen">
            <div className="flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                <Image
                  src={HeroImage2}
                  alt="Main Image"
                  layout="fill"
                  className="h-full w-full object-cover object-left-top md:object-center"
                />
              </div>

              {/* Overlay Content */}
              <div className="flex flex-col h-screen justify-center z-10 text-center w-full md:text-start px-10 md:px-20 xl:px-28 2xl:px-0 max-w-7xl">
                <h1 className="text-2xl lg:text-4xl max-w-sm lg:max-w-lg xl:max-w-xl font-bold text-stone-900">
                  Time Reimagined: Smart Connectivity on Your Wrist
                </h1>
                <p className="mt-4 text-base max-w-xs lg:text-xl lg:max-w-lg xl:max-w-xl text-gray-600">
                  Embrace seamless connectivity and style with our smartwatch.
                  Stay ahead, stay connected.
                </p>
                <Link href="/AllProducts">
                  <div className="inline-block mt-8 bg-[#212121] text-lg text-white font-bold py-3 px-10 rounded shadow-md">
                    Discover More
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col lg:flex-row relative h-screen">
            <div className="flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                <Image
                  src={HeroImage3}
                  alt="Main Image"
                  layout="fill"
                  className="h-full w-full object-cover object-left-top md:object-center"
                />
              </div>

              {/* Overlay Content */}
              <div className="flex flex-col h-screen justify-center z-10 text-center w-full md:text-start px-10 md:px-20 xl:px-28 2xl:px-0 max-w-7xl">
                <h1 className="text-2xl lg:text-4xl max-w-xs lg:max-w-lg xl:max-w-xl font-bold text-stone-900">
                  Power Up, WireFree, Charging Redefined
                </h1>
                <p className="mt-4 text-base lg:text-xl max-w-[250px] lg:max-w-sm xl:max-w-xl text-gray-600">
                  Experience the convenience of wire-free charging. Effortless
                  power, anytime, anywhere.
                </p>
                <Link href="/AllProducts">
                  <div className="inline-block mt-8 bg-[#212121] text-lg text-white font-bold py-3 px-10 rounded shadow-md">
                    Discover More
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hero;
