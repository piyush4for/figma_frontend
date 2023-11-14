import React from 'react'
import { Image } from '@nextui-org/react'

const HomePageStats = () => {
  return (
    <div>
        <section className="bg-transparent">
      <div className="container px-6 pb-10 mx-auto">
        <div className="flex items-center justify-between">
          {/* <Nav /> */}
        </div>

        {/* <hr className="mt-8 border-gray-200 dark:border-gray-700" /> */}

        <div className="mt-10 pt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
          <div className="hidden md:block">
            <div className="px-20 ">
              <Image
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="/images/homepageIcon1.png"
                alt=""
                loading='lazy'
              />
            </div>

            <div className="mt-20 py-40">
              {/* stats */}
              <div className="px-4 py-16 mx-auto sm:max-w-l md:max-w-md lg:max-w-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 sm:grid-cols-3">
        <div className="text-center">
          <h6 className="text-l font-bold text-white">98K</h6>
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

          <div className="text-center">
            
            <h1 className="text-[100px] px-10 font-extrabold font- tracking-tighter">THE WINE</h1>
            <div className="mt-8">
              <h1 className=" text-3xl font-semibold text-gray-800 dark:text-white">
                & Spirits Web3 Marketplace
              </h1>

              {/* <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p> */}

              <div className="flex items-center justify-between mt-4 gap-x-3">
                <div>
                  <div className="text-sm text-left font-normal  text-default-700">
                    Lorem ipsum dolor sit amet consetur. Turpis interdum vitae
                    cursus diam orci suspendisse ipsum phasellus. Scesque
                    pharetra.
                  </div>
                </div>

                <div className="text-sm text-left font-normal text-default-700 ">
                  Lorem ipsum dolor sit amet consetur. Turpis interdum vitae
                  cursus diam orci suspendisse ipsum phasellus. Scesque
                  pharetra.
                </div>
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
            <Image
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src="/images/homepageIcon2.png"
              alt=""
            />

            <div className="mt-8 pt-40 hidden md:block">
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