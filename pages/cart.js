import React from 'react';
import '../src/app/globals.css';
import CartPage from '@/components/cartComponents/cartPage';
import { SearchProvider } from '../context/searchContext';

const Cart = () => {
  return (
    <SearchProvider>
      <CartPage />
    </SearchProvider>
  )
}

export default Cart;