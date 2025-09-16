"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        document.addEventListener("mousemove", updatePosition);
        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", updatePosition);
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed z-50"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
                transition: "transform 0.1s ease-out",
            }}
        >
            <div
                className="w-4 h-4 rounded-full bg-[#FFEA00]/50 border-2 border-[#FFEA00]"
                style={{
                    boxShadow: isHovering ? "0 0 10px #FFEA00" : "none",
                }}
            />
        </div>
    );
};

export default Cursor;