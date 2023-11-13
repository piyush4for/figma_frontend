import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Wineries = () => {
  return (
    <div id="wineries" className="flex flex-col lg:flex-row">
      {/* Left Side (Image) */}
      <div className="w-full h-auto lg:w-full lg:h-full">
        <div className="flex items-center justify-center h-full">
          <Image className="rounded-none" src='/images/feature2.png' alt='Your Image' />
        </div>
      </div>

      {/* Right Side (Text) */}
      <div className="lg:w-1/2 bg-black p-8 w-full mr-10">
        <div className="max-w-xl mb-6 flex flex-col items-center">
          <div>
            <Image src='/images/featureWineLogo.png' alt="form white blur iamge" height={200} width={200} className="rounded-full bg-opacity-50 bg-neutral-600 " />
          </div>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
            Hermitage La Chapelle (Paul Jaboulet Ainé)
          </h2>
          <p className="text-white text-base md:text-lg">
            Lorem ipsum dolor sit amet consetur. Turpis interdum vitae cursus diam orci suspendisse ipsum phasellus. Scesque pharetra.Lorem ipsum dolor sit amet consetur. Turpis interdum vitae cursus diam orci suspendisse ipsum phasellus. Scesque pharetra.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button as={Link} color="primary" href='#marketplace'>View Our Collection</Button>
        </div>
      </div>
    </div>
  );
};
