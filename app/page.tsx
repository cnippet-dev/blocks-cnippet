"use client";
import dynamic from "next/dynamic";
import { ReactLenis } from "lenis/react";

const Nav1 = dynamic(() => import("@/components/shared/navbar/nav-1"));
const Hero = dynamic(() => import("@/components/routes/home/hero"));
const Faq = dynamic(() => import("@/components/routes/home/faq"));
const Footer = dynamic(() => import("@/components/shared/footer"));
const Cta = dynamic(() => import("@/components/routes/home/cta"));
const Sections = dynamic(() => import("@/components/shared/all-sections"));

import { useRef, useState } from "react";
import { Cursor } from "@/components/motion/cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";

export default function Cursor1() {
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);
    const targetRef2 = useRef<HTMLDivElement>(null);
    const targetRef3 = useRef<HTMLDivElement>(null);

    const handlePositionChange = (x: number, y: number) => {
        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            const isInside =
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom;
            setIsHovering(isInside);
        }
        if (targetRef2.current) {
            const rect = targetRef2.current.getBoundingClientRect();
            const isInside =
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom;
            setIsHovering2(isInside);
        }
        if (targetRef3.current) {
            const rect = targetRef3.current.getBoundingClientRect();
            const isInside =
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom;
            setIsHovering3(isInside);
        }
    };

    return (
        <ReactLenis root>
            <div className="">
                <Cursor
                    attachToParent
                    variants={{
                        initial: { scale: 0.3, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.3, opacity: 0 },
                    }}
                    // springConfig={{
                    //     bounce: 0.001,
                    // }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.15,
                    }}
                    onPositionChange={handlePositionChange}
                >
                    <motion.div
                        animate={{
                            width: isHovering || isHovering2 ? 80 : 16,
                            height: isHovering || isHovering2 ? 32 : 16,
                        }}
                        className={`flex items-center justify-center rounded-[24px] ${isHovering3 ? "bg-white backdrop-blur-md dark:bg-gray-300/40" : "bg-blue-600 backdrop-blur-md dark:bg-gray-300/40"} transition-all duration-500`}
                    >
                        <AnimatePresence>
                            {isHovering ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className="inline-flex w-full items-center justify-center"
                                >
                                    <div className="inline-flex items-center text-sm text-white dark:text-black">
                                        More{" "}
                                        <PlusIcon className="ml-1 h-4 w-4" />
                                    </div>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                        <AnimatePresence>
                            {isHovering2 ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                >
                                    <div className="inline-flex items-center text-sm text-white dark:text-black">
                                        Moreeeeee{" "}
                                        <PlusIcon className="ml-1 h-4 w-4" />
                                    </div>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </motion.div>
                </Cursor>

                <Nav1 />
                <main className="">
                    <Hero ref={targetRef3} />
                    <Sections count={6} />
                    <Faq />
                    <Cta />
                </main>
                <Footer />
            </div>
        </ReactLenis>
    );
}

// import Component from '@/registry/default/sections/login/login1'
// import React from 'react'

// const page = () => {
//   return (
//     <Component/>
//   )
// }

// export default page
