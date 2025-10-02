"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, PanInfo } from "framer-motion";

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
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const animationRef = useRef<any>(null);

    const speedValue = speed === "slow" ? 20 : speed === "fast" ? 80 : 40;

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    }, []);

    // Start continuous animation
    const startAnimation = () => {
        if (width <= 0) return;

        const currentX = x.get();
        const targetX = direction === "right" ? -width : width;
        const distance = direction === "right"
            ? Math.abs(targetX - currentX)
            : Math.abs(currentX - targetX);
        const duration = distance / speedValue;

        animationRef.current = controls.start({
            x: targetX,
            transition: {
                duration: duration,
                ease: "linear",
            },
        }).then(() => {
            // Reset position and continue loop
            x.set(direction === "right" ? 0 : 0);
            if (!isDragging) {
                startAnimation();
            }
        });
    };

    useEffect(() => {
        if (width > 0 && !isDragging) {
            startAnimation();
        }

        return () => {
            if (animationRef.current) {
                controls.stop();
            }
        };
    }, [width, direction, speedValue, isDragging]);

    const handleDragStart = () => {
        setIsDragging(true);
        controls.stop();
    };

    const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        let currentX = x.get();

        // Normalize position for seamless loop
        if (direction === "right") {
            while (currentX <= -width) {
                currentX += width;
            }
            while (currentX > 0) {
                currentX -= width;
            }
        } else {
            while (currentX >= width) {
                currentX -= width;
            }
            while (currentX < 0) {
                currentX += width;
            }
        }

        x.set(currentX);
        setIsDragging(false);

        // Small delay to ensure state updates before restarting
        setTimeout(() => {
            startAnimation();
        }, 10);
    };

    const handleDrag = () => {
        let currentX = x.get();

        // Handle looping during drag
        if (direction === "right") {
            if (currentX <= -width) {
                x.set(currentX + width);
            } else if (currentX > 0) {
                x.set(currentX - width);
            }
        } else {
            if (currentX >= width) {
                x.set(currentX - width);
            } else if (currentX < 0) {
                x.set(currentX + width);
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className="flex space-x-6 px-6 overflow-hidden cursor-grab active:cursor-grabbing"
        >
            <motion.div
                animate={controls}
                style={{ x }}
                className="flex space-x-6"
                drag="x"
                dragConstraints={{ left: -width * 2, right: width * 2 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrag={handleDrag}
                dragElastic={0.1}
                dragMomentum={false}
            >
                {items.concat(items).map((service, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#252525] 
                            p-6 
                            rounded-lg 
                            border border-gray-700 
                            hover:border-[#0fb8af] 
                            transition-all duration-300 
                            group 
                            cursor-grab
                            active:cursor-grabbing
                            flex-shrink-0 
                            w-72
                            h-40
                            flex flex-col 
                            justify-center
                            text-center
                            relative
                            select-none
                        "
                    >
                        <div
                            className="text-[#0fb8af] text-2xl font-bold mb-3 group-hover:text-[#0fb8af] transition-colors pointer-events-none"
                            style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                        >
                            {((index % items.length) + 1).toString().padStart(2, '0')}
                        </div>
                        <h3
                            className="text-lg font-semibold text-white group-hover:text-[#e0f7fa] transition-colors leading-tight px-2 pointer-events-none"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                hyphens: 'auto'
                            }}
                        >
                            {service}
                        </h3>
                        <div className="mt-4 h-1 w-0 bg-[#0fb8af] group-hover:w-full transition-all duration-300 absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none"></div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};