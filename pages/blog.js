import React from 'react';
import '../src/app/globals.css';
import BlogPage from '@/components/blogComponents/blogPage';
import { SearchProvider } from '../context/searchContext';

const Blog = () => {
  return (
    <SearchProvider>

    <BlogPage />
    </SearchProvider>
  );
}

export default Blog;