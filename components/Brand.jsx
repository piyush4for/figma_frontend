import React from "react";
import { Image} from "@nextui-org/react";

const Brand = () => {
  return (
    <>
    
      
      <div id="brand" className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 md:w-1/3 sm:w-1/3">
            <Image className="object-cover w-full h-full max-w-lg rounded-md" loading="lazy" src="/images/brand.png" alt="glasses photo"/>
        </div>

        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">OUR COLLABS</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consetur. Turpis interdum vitae cursus diam orci suspendisse ipsum phasellus. Scesque pharetra.Lorem ipsum dolor sit amet consetur. Turpis interdum vitae cursus diam orci suspendisse ipsum phasellus. Scesque pharetra.</p>
                <div className="grid gap-6 mt-8 grid-cols-2 sm:grid-cols-2">
                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <Image src="/images/smallBrand1.png" height={100} width={200}/>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                    <Image src="/images/smallBrand1.png" height={100} width={200}/>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                    <Image src="/images/smallBrand1.png" height={100} width={200}/>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                    <Image src="/images/smallBrand1.png" height={100} width={200}/>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                    <Image src="/images/smallBrand1.png" height={100} width={200}/>
                    </div>

                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                    <Image src="/images/smallBrand1.png" height={100} width={200}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
    </>
  );
};

export default Brand;
