import { Variants, Transition } from "motion/react";

export type AnimationOptions = {
    delay?: number;
    duration?: number;
    ease?: Transition["ease"];
    once?: boolean;
    amount?: number;
    type?: "spring" | "tween" | "inertia";
    stiffness?: number;
    damping?: number;
    mass?: number;
    bounce?: number;
    repeat?: number;
    repeatType?: "loop" | "reverse" | "mirror";
};

const baseTransition = (options?: AnimationOptions): Transition => ({
    delay: options?.delay || 0,
    duration: options?.duration || 0.6,
    ease: options?.ease || "easeOut",
    type: options?.type || "tween",
    stiffness: options?.stiffness || 100,
    damping: options?.damping || 10,
    mass: options?.mass || 1,
    bounce: options?.bounce || 0,
    repeat: options?.repeat || 0,
    repeatType: options?.repeatType || "loop",
});

// Fade animations
export const fadeIn = (options?: AnimationOptions): Variants => ({
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: baseTransition(options)
    }
});

export const fadeUp = (options?: AnimationOptions, y?: number, scroll?: boolean): Variants => ({
    initial: { opacity: 0, y: y ?? 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: baseTransition(options)
    },
    // animate: {
    //     opacity: 1,
    //     y: 0,
    //     transition: baseTransition(options)
    // }
});

export const fadeDown = (options?: AnimationOptions, y?: number): Variants => ({
    initial: { opacity: 0, y: y ?? -30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: baseTransition(options)
    }
});

export const fadeLeft = (options?: AnimationOptions, x?: number): Variants => ({
    initial: { opacity: 0, x: x ?? 30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: baseTransition(options)
    }
});

export const fadeRight = (options?: AnimationOptions, x?: number): Variants => ({
    initial: { opacity: 0, x: x ?? -30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: baseTransition(options)
    }
});

// Zoom animations
export const zoomIn = (options?: AnimationOptions): Variants => ({
    initial: { scale: 0, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            ...baseTransition(options),
            // type: "spring",
            // stiffness: 100
        }
    }
});

export const zoomOut = (options?: AnimationOptions): Variants => ({
    initial: { scale: 1.2, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: baseTransition(options)
    }
});

// Specialized animations
export const scaleIn = (options?: AnimationOptions, scale?: number): Variants => ({
    initial: { scale: scale ?? 0 },
    animate: {
        scale: 1,
        transition: {
            ...baseTransition(options),
            type: "spring",
            bounce: 0.4
        }
    }
});

export const rotateIn = (options?: AnimationOptions, rotate?: number): Variants => ({
    initial: { rotate: rotate ?? -45, opacity: 0 },
    animate: {
        rotate: 0,
        opacity: 1,
        transition: baseTransition(options)
    }
});

// Stagger animations for children
export const staggerContainer = (
    options?: AnimationOptions & { staggerChildren?: number }
): Variants => ({
    animate: {
        transition: {
            staggerChildren: options?.staggerChildren || 0.1,
            ...baseTransition(options)
        }
    }
});