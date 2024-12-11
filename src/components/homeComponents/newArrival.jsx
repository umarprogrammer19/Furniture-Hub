import React from 'react';
import Image from 'next/image';
import Asgaard from '../../../public/assets/asgaard.png';
import Link from 'next/link';  // Import Link for navigation

const NewArrival = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#FFF9E5] w-full px-4 py-8 md:px-6 lg:px-12">
        {/* Image Section */}
        <div className="w-full lg:w-2/3 max-w-[947px] mb-8 lg:mb-0">
            <Image
                src={Asgaard}
                alt="Asgaard Sofa"
                layout="responsive"
                width={1200}
                height={900}
                className="object-cover"
            />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center justify-center lg:w-1/3 px-4 lg:px-2">
            <h4 className="text-black text-xl sm:text-2xl font-medium text-center mb-4">New Arrivals</h4>
            <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">Asgaard Sofa</h1>
            
            {/* "Order Now" button with Link for navigation */}
            <Link href="/shop">
              <button className="text-black text-lg font-normal border border-black py-3 px-8 w-60 text-center hover:bg-[#f0f0b9] hover:text-white transition-all duration-300">
                Order Now
              </button>
            </Link>
        </div>
    </div>
  );
}

export default NewArrival;
