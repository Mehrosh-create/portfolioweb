"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const appliedTheme = savedTheme || "dark";
        setTheme(appliedTheme);
        applyTheme(appliedTheme);
    }, []);

    const applyTheme = (mode: "light" | "dark") => {
        const root = document.documentElement;

        if (mode === "light") {
            root.style.setProperty("--background", "#ffffff");
            root.style.setProperty("--foreground", "#151515");
            root.style.setProperty("--gray-dark", "#e0e0e0");
            root.style.setProperty("--gray-light", "#252525");
        } else {
            root.style.setProperty("--background", "#151515");
            root.style.setProperty("--foreground", "#ffffff");
            root.style.setProperty("--gray-dark", "#252525");
            root.style.setProperty("--gray-light", "#e0f7fa");
        }

        localStorage.setItem("theme", mode);
    };

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-toggle-btn relative flex items-center rounded-full p-1 w-16 h-8 transition-all duration-200 ease-out transform hover:scale-105 active:scale-95"
            style={{
                backgroundColor: "rgba(23, 182, 178, 0.19)",
                border: "1px solid rgba(23, 182, 178, 0.5)",
                boxShadow: "rgba(23, 182, 178, 0.15) 0px 2px 8px",
            }}
        >
            {/* Sun Icon */}
            <div
                className={`absolute left-2 transition-all duration-300 ease-out ${theme === "dark"
                    ? "opacity-0 scale-75 -rotate-180"
                    : "opacity-100 scale-100 rotate-0"
                    }`}
            >
                <Sun className="w-4 h-4 text-yellow-500" />
            </div>

            {/* Moon Icon */}
            <div
                className={`absolute right-2 transition-all duration-300 ease-out ${theme === "dark"
                    ? "opacity-60 scale-90 rotate-0"
                    : "opacity-0 scale-75 rotate-180"
                    }`}
            >
                <Moon className="w-4 h-4 text-blue-400" />
            </div>

            {/* Toggle Knob */}
            <div
                className="absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ease-out transform"
                style={{
                    transform:
                        theme === "dark"
                            ? "translateX(32px) scale(1)"
                            : "translateX(0px) scale(1)",
                    backgroundColor: theme === "dark" ? "rgb(30,41,59)" : "white",
                    border: "2px solid rgb(23,182,178)",
                    boxShadow: "rgba(23,182,178,0.2) 0px 2px 10px",
                }}
            >
                {theme === "dark" ? (
                    <Moon className="w-4 h-4" style={{ color: "rgb(23,182,178)" }} />
                ) : (
                    <Sun className="w-4 h-4" style={{ color: "rgb(23,182,178)" }} />
                )}
            </div>
        </button>
    );
}
