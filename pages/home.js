import HomeBanner from '@/components/homeComponents/homeBanner';
import HomeExamples from '@/components/homeComponents/homeExamples';
import NewArrival from '@/components/homeComponents/newArrival';
import OurBlogs from '@/components/homeComponents/blogs/ourBlogs';
import TopPicks from '@/components/homeComponents/topPicks';
import React from 'react'
import OurInstagram from '@/components/homeComponents/ourInstagram';
import Footer from '@/components/authComponents/authFooter/authFooter';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <HomeBanner />
      <HomeExamples />
      <TopPicks title={'Top Picks For You'} desc={'Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.'}/>
      <NewArrival />
      <OurBlogs />
      <OurInstagram />
      <Footer />
      <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
      <div className="justify-start items-start flex w-9/12">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reverved
          </p>
        </div>
    </div>
  )
}

export default HomePage;