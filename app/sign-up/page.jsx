import wine_bg from "@/public/images/FormBg.png";
import React from "react";
import SignUpFormCard from "@/components/SignUp/SignUpFormCard";
// style={{backgroundImage:`url(${wine_bg.src})`}}
{
  /* <div className="container h-full px-20 py-24 bg-gradient-to-br from-red-900 via-red-900 via-black via-black via-black to-black" > */
}

const page = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-br from-red-950 via-black via-black via-black via-black to-black relative min-h-screen  grid">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
              <div className="max-w-xl w-full space-y-12">
                <div className="lg:text-left text-center">
                  <div className="flex items-center justify-center ">
                    <div className=" flex flex-col w-80 border-none rounded-lg px-8 py-10">
                      <SignUpFormCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="brightness-50 border-3 border-l-pink-900 border-t-transparent border-r-transparent border-b-transparent rounded-l-full relative sm:w-1/2 xl:w-3/5  h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
            style={{backgroundImage:`url(${wine_bg.src})`}}>
              <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
              <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center "></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default page;

//     <div className="flex flex-col items-center md:flex-row md:h-screen">
//       <div className="flex items-center justify-center w-full md:w-1/2">
//         <SignUpForm/>
//       </div>
//       <div className="flex flex-col rounder-full items-center justify-center w-full md:w-full ">
//         <Image src="/images/wine.png" alt="Login Image" className="w-100 h-100 --tw-border-opacity: 0.2;
// " style={{objectFit: 'cover', objectPosition: 'left'}} width={800} height={600} />
//       </div>
//       {/* <Image src='/images/wine.png ' className="  h-auto max-w-lg ml-auto"/> */}
//     </div>
