import React from 'react';
import '../src/app/globals.css';
import HeroBanner from '@/components/banner';
import ItemList from '@/components/shopComponents/itemList';
import Navbar from '@/components/navbar';
import Banner from '@/components/authComponents/authBanner/authBanner';
import Footer from '@/components/authComponents/authFooter/authFooter';

const Shop = () => {

  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <Navbar bgColor={'white'}/>
      <HeroBanner title={'Shop'}/>
      <ItemList itemsPerPage={12}/>     
      <Banner />
      <Footer />  
      <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
      <div className="justify-start items-start flex w-9/12">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reverved
          </p>
        </div>
    </main>
  );
}

export default Shop;