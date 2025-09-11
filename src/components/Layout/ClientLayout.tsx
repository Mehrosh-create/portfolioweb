// This is the new file you need to create
"use client";

import { useState, createContext, useContext } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

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
            <div className="flex min-h-screen">
                {/* Fixed Sidebar */}
                <Sidebar onSearchClick={handleSearchClick} />

                {/* Main content pushed right by sidebar width */}
                <main className="flex-1 ml-0 lg:ml-72 h-screen overflow-y-auto bg-white">
                    {children}
                </main>
            </div>
        </SearchContext.Provider>
    );
}