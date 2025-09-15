"use client";

import { useState, createContext, useContext } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Global/Footer"; // Import Footer

// Create Search Context
interface SearchContextType {
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
}

const SearchContext = createContext<SearchContextType>({
    showSearch: false,
    setShowSearch: () => { },
});

export const useSearch = () => useContext(SearchContext);

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(true);
    };

    return (
        <SearchContext.Provider value={{ showSearch, setShowSearch }}>
            <div className="flex min-h-screen flex-col">
                {/* Fixed Sidebar */}
                <Sidebar onSearchClick={handleSearchClick} />

                {/* Main content pushed right by sidebar width */}
                <main className="flex-1 ml-0 lg:ml-72 bg-white">
                    {children}
                </main>

                {/* Footer outside main to span full width */}
                <Footer />
            </div>
        </SearchContext.Provider>
    );
}