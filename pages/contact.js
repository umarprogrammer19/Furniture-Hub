import ContactPage from '@/components/contactComponents/contact';
import React from 'react';
import '../src/app/globals.css';
import { SearchProvider } from '../context/searchContext';

const Contact = () => {
  return (
    <SearchProvider>

    <ContactPage />
    </SearchProvider>
  )
}

export default Contact;