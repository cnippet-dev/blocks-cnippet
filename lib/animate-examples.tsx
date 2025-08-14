"use client";

import { motion } from "motion/react";
import { 
  fade, 
  slide, 
  zoom, 
  scale, 
  rotate, 
  stagger, 
  presets, 
  viewport,
  transitions,
  createCustomVariants,
  combineVariants,
  type AnimationOptions 
} from "./animate";

// ============================================================================
// BASIC USAGE EXAMPLES
// ============================================================================

export function BasicFadeExample() {
  return (
    <motion.div
      variants={fade.in({ distance: 40 })}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="p-4 bg-blue-100 rounded-lg"
    >
      Basic fade in animation
    </motion.div>
  );
}

export function CustomFadeExample() {
  return (
    <motion.div
      variants={fade.in({ 
        duration: 0.8, 
        ease: "easeOutBack",
        includeBlur: true 
      })}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="p-4 bg-green-100 rounded-lg"
    >
      Custom fade with blur effect
    </motion.div>
  );
}

export function SlideExample() {
  return (
    <motion.div
      variants={slide.up({ 
        distance: 50, 
        duration: 0.6,
        ease: "easeOutBack" 
      })}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="p-4 bg-purple-100 rounded-lg"
    >
      Slide up with custom distance
    </motion.div>
  );
}

export function ZoomExample() {
  return (
    <motion.div
      variants={zoom.in({ 
        scale: 0.5, 
        duration: 0.7,
        ease: "easeOutElastic" 
      })}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="p-4 bg-yellow-100 rounded-lg"
    >
      Zoom in with elastic effect
    </motion.div>
  );
}

// ============================================================================
// STAGGER ANIMATIONS
// ============================================================================

export function StaggerExample() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  
  return (
    <motion.div
      variants={stagger.container(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="space-y-2"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={stagger.item({ 
            duration: 0.5,
            ease: "easeOut" 
          })}
          className="p-3 bg-red-100 rounded-lg"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}

// ============================================================================
// PRESET ANIMATIONS
// ============================================================================

export function PresetExample() {
  return (
    <div className="space-y-4">
      <motion.div
        variants={presets.subtle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.once}
        className="p-4 bg-blue-100 rounded-lg"
      >
        Subtle preset
      </motion.div>
      
      <motion.div
        variants={presets.bouncy}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.once}
        className="p-4 bg-green-100 rounded-lg"
      >
        Bouncy preset
      </motion.div>
      
      <motion.div
        variants={presets.dramatic}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.once}
        className="p-4 bg-purple-100 rounded-lg"
      >
        Dramatic preset
      </motion.div>
    </div>
  );
}

// ============================================================================
// ADVANCED EXAMPLES
// ============================================================================

export function SpringAnimationExample() {
  return (
    <motion.div
      variants={fade.in({ 
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: undefined // Remove duration for spring
      })}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="p-4 bg-orange-100 rounded-lg"
    >
      Spring-based animation
    </motion.div>
  );
}

export function CustomVariantsExample() {
  const customVariants = createCustomVariants(
    { 
      opacity: 0, 
      scale: 0.8, 
      rotate: -45,
      filter: "blur(20px)" 
    },
    { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      filter: "blur(0px)" 
    },
    { 
      duration: 1, 
      ease: "easeInOut",
      includeBlur: true 
    }
  );
  
  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="p-4 bg-pink-100 rounded-lg"
    >
      Custom variants with rotation and blur
    </motion.div>
  );
}

export function CombinedVariantsExample() {
  const combinedVariants = combineVariants(
    fade.in({ duration: 0.5 }),
    slide.up({ distance: 30, duration: 0.5 }),
    scale.in({ scale: 0.9, duration: 0.5 })
  );
  
  return (
    <motion.div
      variants={combinedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="p-4 bg-indigo-100 rounded-lg"
    >
      Combined fade, slide, and scale
    </motion.div>
  );
}

// ============================================================================
// INTERACTIVE EXAMPLES
// ============================================================================

export function HoverAnimationExample() {
  return (
    <motion.div
      variants={fade.in()}
      initial="hidden"
      whileInView="visible"
      whileHover={{ 
        scale: 1.05, 
        rotate: 5,
        transition: transitions.bouncy 
      }}
      viewport={viewport.once}
      className="p-4 bg-teal-100 rounded-lg cursor-pointer"
    >
      Hover me for interactive animation
    </motion.div>
  );
}

export function ClickAnimationExample() {
  return (
    <motion.div
      variants={fade.in()}
      initial="hidden"
      whileInView="visible"
      whileTap={{ 
        scale: 0.95,
        transition: transitions.fast 
      }}
      viewport={viewport.once}
      className="p-4 bg-cyan-100 rounded-lg cursor-pointer"
    >
      Click me for tap animation
    </motion.div>
  );
}

// ============================================================================
// COMPLEX LAYOUT EXAMPLES
// ============================================================================

export function CardGridExample() {
  const cards = [
    { title: "Card 1", color: "bg-blue-100" },
    { title: "Card 2", color: "bg-green-100" },
    { title: "Card 3", color: "bg-purple-100" },
    { title: "Card 4", color: "bg-yellow-100" },
    { title: "Card 5", color: "bg-red-100" },
    { title: "Card 6", color: "bg-indigo-100" },
  ];
  
  return (
    <motion.div
      variants={stagger.container(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.once}
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={stagger.item({ 
            duration: 0.6,
            ease: "easeOutBack",
            includeScale: true 
          })}
          whileHover={{ 
            scale: 1.05,
            transition: transitions.bouncy 
          }}
          className={`p-4 ${card.color} rounded-lg cursor-pointer`}
        >
          {card.title}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function HeroSectionExample() {
  return (
    <div className="space-y-6">
      {/* Main title with dramatic entrance */}
      <motion.h1
        variants={presets.dramatic}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.once}
        className="text-4xl font-bold text-center"
      >
        Welcome to Our Platform
      </motion.h1>
      
      {/* Subtitle with smooth entrance */}
      <motion.p
        variants={presets.smooth}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.once}
        className="text-xl text-center text-gray-600"
      >
        Discover amazing features with beautiful animations
      </motion.p>
      
      {/* CTA button with bouncy entrance */}
      <motion.div
        variants={presets.bouncy}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.once}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

// ============================================================================
// PERFORMANCE OPTIMIZED EXAMPLES
// ============================================================================

export function PerformanceOptimizedExample() {
  return (
    <motion.div
      variants={fade.in({ duration: 0.3 })}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: "-50px",
        amount: 0.3 
      }}
      className="p-4 bg-gray-100 rounded-lg"
    >
      Performance optimized with reduced viewport margin
    </motion.div>
  );
}

// ============================================================================
// EXPORT ALL EXAMPLES
// ============================================================================

export const AnimationExamples = {
  BasicFadeExample,
  CustomFadeExample,
  SlideExample,
  ZoomExample,
  StaggerExample,
  PresetExample,
  SpringAnimationExample,
  CustomVariantsExample,
  CombinedVariantsExample,
  HoverAnimationExample,
  ClickAnimationExample,
  CardGridExample,
  HeroSectionExample,
  PerformanceOptimizedExample,
};
