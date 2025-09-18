// src/ui/infinite-moving-cards.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface InfiniteMovingCardsProps {
    items: string[];
    direction?: "left" | "right";
    speed?: "slow" | "medium" | "fast";
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
    items,
    direction = "right",
    speed = "medium",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const controls = useAnimation();

    const speedValue = speed === "slow" ? 20 : speed === "fast" ? 80 : 40;

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);

            const animation = async () => {
                await controls.start({
                    x: direction === "right" ? [0, -width] : [0, width],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: width / speedValue,
                            ease: "linear",
                        },
                    },
                });
            };

            animation();
        }
    }, [width, direction, controls, speedValue]);

    return (
        <div
            ref={containerRef}
            className="flex space-x-6 px-6 overflow-hidden"
        >
            <motion.div animate={controls} className="flex space-x-6">
                {items.concat(items).map((service, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#252525] 
                            p-6 
                            rounded-lg 
                            border border-gray-700 
                            hover:border-[#FFEA00] 
                            transition-all duration-300 
                            group 
                            cursor-pointer 
                            flex-shrink-0 
                            w-72
                            h-40
                            flex flex-col 
                            justify-center
                            text-center
                            relative
                        "
                    >
                        <div
                            className="text-[#FFEA00] text-2xl font-bold mb-3 group-hover:text-[#02B600] transition-colors"
                            style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                        >
                            {((index % items.length) + 1).toString().padStart(2, '0')}
                        </div>
                        <h3
                            className="text-lg font-semibold text-white group-hover:text-[#e0f7fa] transition-colors leading-tight px-2"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                hyphens: 'auto'
                            }}
                        >
                            {service}
                        </h3>
                        <div className="mt-4 h-1 w-0 bg-[#02B600] group-hover:w-full transition-all duration-300 absolute bottom-4 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};