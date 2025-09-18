"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Global/Footer";
import { X } from "lucide-react";

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
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchClick = () => setShowSearch(true);
    const handleSearchClose = () => {
        setShowSearch(false);
        setSearchQuery("");
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        // Add your search logic here
    };

    // ESC key closes search
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleSearchClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <SearchContext.Provider value={{ showSearch, setShowSearch }}>
            <div className="flex min-h-screen flex-col">
                {/* Fixed Sidebar */}
                <Sidebar onSearchClick={handleSearchClick} />

                {/* Search Overlay */}
                {showSearch && (
                    <div className="fixed inset-0 bg-black py-16 px-8 z-40">
                        <div className="max-w-7xl mx-auto lg:ml-64">
                            <div className="relative mt-6">
                                <form onSubmit={handleSearchSubmit}>
                                    <input
                                        type="text"
                                        placeholder="SEARCH"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-transparent text-white border-0 text-3xl font-bold focus:outline-none focus:ring-0 py-4 placeholder-white tracking-wider pr-16"
                                        autoFocus
                                        style={{
                                            fontSize: "2.5rem",
                                            fontWeight: 900,
                                            letterSpacing: "0.1em",
                                        }}
                                    />
                                    {/* Green underline */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#02B600]" />

                                    {/* Close button aligned to input right */}
                                    <button
                                        type="button"
                                        onClick={handleSearchClose}
                                        className="absolute top-1/2 right-0 -translate-y-1/2 text-white hover:text-gray-300 group transition-colors duration-300"
                                    >
                                        <X className="w-8 h-8 transition-transform duration-300 group-hover:rotate-90" />
                                    </button>
                                </form>
                            </div>

                            {/* Search instruction text */}
                            <p className="text-gray-400 text-lg mt-6 font-light">
                                Hit <span className="font-semibold">Enter</span> to search or{" "}
                                <span className="font-semibold">ESC</span> to close
                            </p>
                        </div>
                    </div>
                )}

                {/* Main content (pushed by sidebar on desktop) */}
                <main className="flex-1 ml-0 lg:ml-64">{children}</main>

                {/* Footer */}
                <Footer />
            </div>
        </SearchContext.Provider>
    );
}