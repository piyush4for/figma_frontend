import React from 'react'
import { Image } from '@nextui-org/react'

const HomePageStats = () => {
  return (
    <div>
        <section className="bg-transparent">
      <div className="container px-6 pb-35 mx-auto">
        {/* <div className="flex items-center justify-between">
          <Nav />
        </div> */}

        {/* <hr className="mt-8 border-gray-200 dark:border-gray-700" /> */}

        <div className="mb-0  grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
          <div className="hidden lg:block">
            <div className="">
              <Image
                className=" object-scale-down w-full h-64 rounded-lg lg:h-80 lg:ml-20 lg:-mt-20"
                src="/images/homepageIcon1.png"
                alt=""
                loading='lazy'
                sizes='50vw'
              />
            </div>

            <div className="mt-10 py-5">
              {/* stats */}
              <div className="px-4 py-16 mx-auto sm:max-w-l md:max-w-md lg:max-w-xl md:px-24 lg:px-8 lg:py-10">
      <div className="grid row-gap-8 px-20 sm:grid-cols-3">
        <div className="text-center">
          <h6 className="text-l font-bold text-white">98K+</h6>
          <p className="text-default-400">Artwork</p>
        </div>
        <div className="text-center">
          <h6 className="text-l font-bold text-white">12K+</h6>
          <p className="text-default-400">Auction</p>
        </div>
        <div className="text-center">
          <h6 className="text-l font-bold text-white">15K+</h6>
          <p className="text-default-400">Artist</p>
        </div>
      </div>
    </div>
              
            </div>
          </div>

          <div className="text-center mx-auto sm:text-center">
            
            <h1 className="text-[130px] px-10 font-extrabold -mb-20 uppercase">𝖙𝖍𝖊 </h1>
            <h1 className="text-[130px] px-10 font-extrabold -mb-10 uppercase"> 𝖜𝖎𝖓𝖊</h1>
            <div className="mt-8">
              <h1 className=" text-3xl text-center font-semibold text-gray-800 dark:text-white">
                & Spirits Web3 Marketplace
              </h1>

              {/* <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p> */}

              <div className="flex items-center justify-between mt-4 gap-x-3">
                <div>
                  <div className="text-xs text-left font-normal  text-default-700">
                    Lorem ipsum dolor sit amet consetur. Turpis interdum vitae
                    cursus diam orci suspendisse ipsum phasellus. Scesque
                    pharetra.
                  </div>
                </div>

                <div className="text-xs text-left font-normal text-default-700 ">
                  Lorem ipsum dolor sit amet consetur. Turpis interdum vitae
                  cursus diam orci suspendisse ipsum phasellus. Scesque
                  pharetra.
                </div>
              </div>
            </div>
                <Image className="hidden xl:block px-40 py-10" src='/images/carousal.png'/>
          </div>

          <div className='hidden xl:block'>
            <Image
              className="object-cover object-center w-full h-64 rounded-lg lg:h-40"
              src="/images/homepageIcon2.png"
              alt=""
              
            />

            <div className=" pt-40 ">
              <Image src="/images/homepageIcon3.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomePageStats