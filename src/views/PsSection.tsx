import React from "react";
import Image from "next/image";
import PsSection from "../../public/PsSection.webp";
import Link from "next/link";

const Ps = () => {
    return (
        <div className="flex flex-col relative">
            <div className="flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0 h-96">
                    <Image
                        src={PsSection}
                        alt="Main Image"
                        className="h-full w-full object-cover object-left-top md:object-center"
                        layout="fill"
                    />
                </div>

                {/* Overlay Content */}
                <div className="flex flex-col h-96 justify-center z-10 text-center w-full md:text-start px-10 md:px-20 xl:px-28 2xl:px-96">
                    <h1 className="text-2xl lg:text-4xl font-semibold tracking-wider text-stone-900">
                        PlayStation 5 Console
                    </h1>
                    <p className="mt-4 text-base font-light text-gray-600">
                        Experiance an all-generation of incredible games.
                    </p>
                    <Link href="/AllProducts">
                        <div className="inline-block mt-4 md:mt-8 bg-blue-600 md:text-lg text-white py-3 px-6 md:px-10 rounded-lg shadow-md">
                            Shop More
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Ps;
