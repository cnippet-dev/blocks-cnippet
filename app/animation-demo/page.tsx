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
  combineVariants
} from "@/lib/animate";

export default function AnimationDemoPage() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  
  const cards = [
    { title: "Card 1", color: "bg-blue-100", animation: fade.in() },
    { title: "Card 2", color: "bg-green-100", animation: slide.up() },
    { title: "Card 3", color: "bg-purple-100", animation: zoom.in() },
    { title: "Card 4", color: "bg-yellow-100", animation: scale.bounce() },
    { title: "Card 5", color: "bg-red-100", animation: rotate.flip() },
    { title: "Card 6", color: "bg-indigo-100", animation: presets.dramatic },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <motion.div
          variants={presets.dramatic}
          initial="hidden"
          whileInView="visible"
          viewport={viewport.once}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold text-gray-900">
            Animation System Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the comprehensive animation system with professional transitions, 
            spring physics, and customizable effects.
          </p>
        </motion.div>

        {/* Basic Animations */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Basic Animations
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fade.in()}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Fade In</h3>
              <p className="text-sm text-gray-600">Simple opacity transition</p>
            </motion.div>

            <motion.div
              variants={slide.up()}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Slide Up</h3>
              <p className="text-sm text-gray-600">Smooth upward movement</p>
            </motion.div>

            <motion.div
              variants={zoom.in()}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Zoom In</h3>
              <p className="text-sm text-gray-600">Scale with opacity</p>
            </motion.div>

            <motion.div
              variants={rotate.in()}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Rotate In</h3>
              <p className="text-sm text-gray-600">Rotation animation</p>
            </motion.div>
          </div>
        </section>

        {/* Advanced Animations */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Advanced Animations
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={scale.bounce()}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Bouncy Scale</h3>
              <p className="text-sm text-gray-600">Elastic bounce effect</p>
            </motion.div>

            <motion.div
              variants={scale.elastic()}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Elastic Scale</h3>
              <p className="text-sm text-gray-600">Rubber band effect</p>
            </motion.div>

            <motion.div
              variants={rotate.flip()}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">3D Flip</h3>
              <p className="text-sm text-gray-600">Y-axis rotation</p>
            </motion.div>
          </div>
        </section>

        {/* Stagger Animations */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Stagger Animations
          </motion.h2>
          
          <motion.div
            variants={stagger.container(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={stagger.item({ 
                  duration: 0.5,
                  ease: "easeOut" 
                })}
                whileHover={{ 
                  scale: 1.05,
                  transition: transitions.bouncy 
                }}
                className="p-4 bg-white rounded-lg shadow-sm border cursor-pointer"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Preset Animations */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Preset Animations
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={presets.subtle}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Subtle</h3>
              <p className="text-sm text-gray-600">Gentle entrance</p>
            </motion.div>

            <motion.div
              variants={presets.smooth}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Smooth</h3>
              <p className="text-sm text-gray-600">Elegant movement</p>
            </motion.div>

            <motion.div
              variants={presets.bouncy}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Bouncy</h3>
              <p className="text-sm text-gray-600">Playful entrance</p>
            </motion.div>

            <motion.div
              variants={presets.elastic}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Elastic</h3>
              <p className="text-sm text-gray-600">Rubber band effect</p>
            </motion.div>

            <motion.div
              variants={presets.dramatic}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Dramatic</h3>
              <p className="text-sm text-gray-600">Bold entrance</p>
            </motion.div>

            <motion.div
              variants={presets.flip}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Flip</h3>
              <p className="text-sm text-gray-600">3D rotation</p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Cards */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Interactive Cards
          </motion.h2>
          
          <motion.div
            variants={stagger.container(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  y: -5,
                  transition: transitions.bouncy 
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: transitions.fast 
                }}
                className={`p-6 ${card.color} rounded-xl shadow-sm border cursor-pointer`}
              >
                <h3 className="font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">Hover and click me!</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Custom Variants */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Custom Variants
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={createCustomVariants(
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
              )}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Custom Animation</h3>
              <p className="text-sm text-gray-600">Rotation + blur + scale</p>
            </motion.div>

            <motion.div
              variants={combineVariants(
                fade.in({ duration: 0.5 }),
                slide.up({ distance: 30, duration: 0.5 }),
                scale.in({ scale: 0.9, duration: 0.5 })
              )}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Combined Effects</h3>
              <p className="text-sm text-gray-600">Fade + slide + scale</p>
            </motion.div>
          </div>
        </section>

        {/* Spring Physics */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Spring Physics
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fade.in({ 
                type: "spring",
                damping: 25,
                stiffness: 400,
                mass: 1
              })}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Stiff Spring</h3>
              <p className="text-sm text-gray-600">Quick, responsive</p>
            </motion.div>

            <motion.div
              variants={fade.in({ 
                type: "spring",
                damping: 15,
                stiffness: 200,
                mass: 1
              })}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Bouncy Spring</h3>
              <p className="text-sm text-gray-600">Oscillating motion</p>
            </motion.div>

            <motion.div
              variants={fade.in({ 
                type: "spring",
                damping: 30,
                stiffness: 100,
                mass: 2
              })}
              initial="hidden"
              whileInView="visible"
              viewport={viewport.once}
              className="p-6 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Heavy Spring</h3>
              <p className="text-sm text-gray-600">Slow, weighted</p>
            </motion.div>
          </div>
        </section>

        {/* Performance Tips */}
        <section className="space-y-8">
          <motion.h2
            variants={fade.in()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport.once}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Performance Tips
          </motion.h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">✅ Best Practices</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Use <code>viewport.once</code> for one-time animations</li>
                  <li>• Reduce viewport margin for better performance</li>
                  <li>• Limit stagger delays to reasonable values</li>
                  <li>• Use spring physics sparingly</li>
                  <li>• Combine similar animations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">❌ Avoid</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Animating on every scroll</li>
                  <li>• Excessive blur effects</li>
                  <li>• Too many simultaneous springs</li>
                  <li>• Long stagger delays</li>
                  <li>• Complex combined animations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          variants={fade.in()}
          initial="hidden"
          whileInView="visible"
          viewport={viewport.once}
          className="text-center py-8"
        >
          <p className="text-gray-600">
            Built with ❤️ using Framer Motion v11 and the new animation system
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
