"use client";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
