import logo from "/public/main-logo-2.png";
import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const Footer = () => {
  return (
    <section className=" bg-stone-900 text-white ">
      <div className="flex py-16 lg:py-28 gap-y-10 lg:flex-row flex-col px-28">
        {/* Left Div */}
        <div className="basis-1/4">
          <Image
            className="items-center h-10 w-44 mb-6"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col tracking-wider gap-y-2">
            <div className="text-white flex gap-x-3 mb-4 items-center font-bold lg:text-lg">
              <MapPin color="#ffffff" size={25} strokeWidth={1} />
              Our Store Location
            </div>
            <div className="text-white w-52 lg:w-72 xl:w-96 2xl:w-[800px]">
              01. NASTP, Karachi
            </div>
            <div className="text-white w-52 lg:w-72 xl:w-96 2xl:w-[800px]">
              02. NASTP, Lahore
            </div>
          </div>
          <div className="flex space-x-9 mt-10">
            <Twitter />
            <Facebook />
            <Linkedin />
          </div>
        </div>
        {/* Right Div */}
        <div className="basis-3/4 flex-col flex lg:flex-row lg:justify-between gap-y-10 text-white">
          <div>
            <h3 className="font-bold text-xl tracking-wide">
              Company
            </h3>
            <button>
              <ul className="space-y-3 mt-5 lg:text-lg text-start">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>How it Works</li>
                <li>Contact Us</li>
              </ul>
            </button>
          </div>
          <div>
            <h3 className="font-bold text-xl tracking-wide">
              Support
            </h3>
            <button>
            <ul className="space-y-3 mt-5 lg:text-lg text-start">
                <li>Support Carrer</li>
                <li>24h Service</li>
                <li>Quick Chat</li>
              </ul>
            </button>
          </div>
          <div>
            <section className="">
            <h3 className="font-bold text-xl tracking-wide">
              Newsletter
            </h3>
              <p className="font-light tracking-wide mt-5">
                Get the latest information and promo offers directly
              </p>
              <div className="flex flex-col lg:flex-row gap-x-3 gap-y-4 items-center text-center justify-center mt-6">
                <Input
                  placeholder="Input email address"
                  className="2xl:w-[250px] py-5 px-4 rounded-none bg-white text-black opacity-70 tracking-tighter text-sm align-middle"
                />
                <Button className="text-white px-6">Get Started</Button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="border-t-white border-t-[0.75px] w-full"></div>

      {/* Bottom */}
      <div className="bg-stone-800 w-full flex lg:flex-row flex-col gap-y-6 justify-between text-white py-4 lg:py-6 px-20">
        <div className="text-base lg:text-2xl xl:text-base">
          Copyright © 2022 Swift Mart
        </div>
        <div className="lg:text-2xl xl:text-base">
          Design by: Muhammad Adnan
        </div>
        <div className="lg:text-2xl xl:text-base">
          Code by: EponymousBearer on github
        </div>
      </div>
    </section>
  );
};

export default Footer;
