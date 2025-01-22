import React from 'react';
import '../src/app/globals.css';
import CheckoutPage from '@/components/checkoutComponents/checkoutPage';
import { SearchProvider } from '../context/searchContext';

const Checkout = () => {
  return (
    <SearchProvider>
      <CheckoutPage />
    </SearchProvider>
  )
}

export default Checkout;