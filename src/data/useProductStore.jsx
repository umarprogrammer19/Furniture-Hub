import { create } from "zustand";
import items  from './data';
 
export const useProducts = create((set) => ({
  products: items,
}));
