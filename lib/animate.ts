import { Variants, Transition, Easing } from "motion/react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type AnimationDirection = "up" | "down" | "left" | "right";
export type AnimationType = "fade" | "slide" | "zoom" | "scale" | "rotate" | "flip";
export type EasingType = "linear" | "easeIn" | "easeOut" | "easeInOut" | "easeInBack" | "easeOutBack" | "easeInElastic" | "easeOutElastic";

export interface AnimationOptions {
  // Timing
  delay?: number;
  duration?: number;
  stagger?: number;
  staggerChildren?: number;
  
  // Distance/Scale
  distance?: number;
  scale?: number;
  rotation?: number;
  
  // Effects
  includeBlur?: boolean;
  includeScale?: boolean;
  includeRotation?: boolean;
  
  // Transitions
  ease?: EasingType;
  bounce?: number;
  damping?: number;
  stiffness?: number;
  mass?: number;
  
  // Advanced
  repeat?: number;
  repeatType?: "loop" | "reverse" | "mirror";
  repeatDelay?: number;
}

export type TransitionConfig = {
  duration?: number;
  delay?: number;
  ease?: Easing;
  type?: "spring" | "tween" | "inertia";
  damping?: number;
  stiffness?: number;
  mass?: number;
  repeat?: number;
  repeatType?: "loop" | "reverse" | "mirror";
  repeatDelay?: number;
}

// ============================================================================
// EASING FUNCTIONS
// ============================================================================

const createEasing = (type: EasingType, bounce?: number): Easing => {
  switch (type) {
    case "linear":
      return "linear";
    case "easeIn":
      return "easeIn";
    case "easeOut":
      return "easeOut";
    case "easeInOut":
      return "easeInOut";
    case "easeInBack":
      return [0.6, -0.28, 0.735, 0.045];
    case "easeOutBack":
      return [0.175, 0.885, 0.32, 1.275];
    case "easeInElastic":
      return [0.64, 0, 0.78, 0];
    case "easeOutElastic":
      return [0.16, 1, 0.3, 1];
    default:
      return "easeInOut";
  }
};

// ============================================================================
// TRANSITION HELPERS
// ============================================================================

const createTransition = (options: AnimationOptions): TransitionConfig => {
  const {
    duration = 0.4,
    delay = 0,
    ease = "easeInOut",
    bounce,
    damping,
    stiffness,
    mass,
    repeat,
    repeatType,
    repeatDelay,
  } = options;

  const transition: TransitionConfig = {
    duration,
    delay,
    ease: createEasing(ease, bounce),
  };

  // Spring physics
  if (damping !== undefined || stiffness !== undefined || mass !== undefined) {
    transition.type = "spring";
    if (damping !== undefined) transition.damping = damping;
    if (stiffness !== undefined) transition.stiffness = stiffness;
    if (mass !== undefined) transition.mass = mass;
  }

  // Repeat options
  if (repeat !== undefined) transition.repeat = repeat;
  if (repeatType !== undefined) transition.repeatType = repeatType;
  if (repeatDelay !== undefined) transition.repeatDelay = repeatDelay;

  return transition;
};

// ============================================================================
// CORE ANIMATION GENERATORS
// ============================================================================

const createFadeVariants = (options: AnimationOptions = {}): Variants => {
  const transition = createTransition(options);
  
  return {
    hidden: {
      opacity: 0,
      filter: options.includeBlur ? "blur(10px)" : "none",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: transition as any,
    },
    exit: {
      opacity: 0,
      filter: options.includeBlur ? "blur(10px)" : "none",
      transition: { ...transition, duration: transition.duration! * 0.6 } as any,
    },
  };
};

const createSlideVariants = (direction: AnimationDirection, options: AnimationOptions = {}): Variants => {
  const { distance = 20, includeBlur = false, includeScale = false } = options;
  const transition = createTransition(options);
  
  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const directionValue = direction === "up" || direction === "left" ? distance : -distance;
  
  return {
    hidden: {
      [axis]: directionValue,
      opacity: 0,
      scale: includeScale ? 0.95 : 1,
      filter: includeBlur ? "blur(10px)" : "none",
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition,
    },
    exit: {
      [axis]: directionValue,
      opacity: 0,
      scale: includeScale ? 0.95 : 1,
      filter: includeBlur ? "blur(10px)" : "none",
      transition: { ...transition, duration: transition.duration! * 0.6 },
    },
  };
};

const createZoomVariants = (direction: AnimationDirection, options: AnimationOptions = {}): Variants => {
  const { scale = 0.8, includeBlur = false, includeRotation = false, rotation = 0 } = options;
  const transition = createTransition(options);
  
  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const directionValue = direction === "up" || direction === "left" ? 20 : -20;
  
  return {
    hidden: {
      [axis]: directionValue,
      scale,
      opacity: 0,
      rotate: includeRotation ? rotation : 0,
      filter: includeBlur ? "blur(10px)" : "none",
    },
    visible: {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition,
    },
    exit: {
      [axis]: directionValue,
      scale,
      opacity: 0,
      rotate: includeRotation ? rotation : 0,
      filter: includeBlur ? "blur(10px)" : "none",
      transition: { ...transition, duration: transition.duration! * 0.6 },
    },
  };
};

const createScaleVariants = (options: AnimationOptions = {}): Variants => {
  const { scale = 0.8, includeBlur = false, includeRotation = false, rotation = 0 } = options;
  const transition = createTransition(options);
  
  return {
    hidden: {
      scale,
      opacity: 0,
      rotate: includeRotation ? rotation : 0,
      filter: includeBlur ? "blur(10px)" : "none",
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition,
    },
    exit: {
      scale,
      opacity: 0,
      rotate: includeRotation ? rotation : 0,
      filter: includeBlur ? "blur(10px)" : "none",
      transition: { ...transition, duration: transition.duration! * 0.6 },
    },
  };
};

const createRotateVariants = (options: AnimationOptions = {}): Variants => {
  const { rotation = 180, includeBlur = false, includeScale = false } = options;
  const transition = createTransition(options);
  
  return {
    hidden: {
      rotate: rotation,
      scale: includeScale ? 0.8 : 1,
      opacity: 0,
      filter: includeBlur ? "blur(10px)" : "none",
    },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition,
    },
    exit: {
      rotate: rotation,
      scale: includeScale ? 0.8 : 1,
      opacity: 0,
      filter: includeBlur ? "blur(10px)" : "none",
      transition: { ...transition, duration: transition.duration! * 0.6 },
    },
  };
};

const createFlipVariants = (options: AnimationOptions = {}): Variants => {
  const { includeBlur = false, includeScale = false } = options;
  const transition = createTransition(options);
  
  return {
    hidden: {
      rotateY: 90,
      scale: includeScale ? 0.8 : 1,
      opacity: 0,
      filter: includeBlur ? "blur(10px)" : "none",
    },
    visible: {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition,
    },
    exit: {
      rotateY: -90,
      scale: includeScale ? 0.8 : 1,
      opacity: 0,
      filter: includeBlur ? "blur(10px)" : "none",
      transition: { ...transition, duration: transition.duration! * 0.6 },
    },
  };
};

// ============================================================================
// MAIN ANIMATION EXPORTS
// ============================================================================

// Fade animations
export const fade = {
  in: (options?: AnimationOptions) => createFadeVariants(options),
  up: (options?: AnimationOptions) => createSlideVariants("up", { ...options, distance: options?.distance || 10 }),
  down: (options?: AnimationOptions) => createSlideVariants("down", { ...options, distance: options?.distance || 10 }),
  left: (options?: AnimationOptions) => createSlideVariants("left", { ...options, distance: options?.distance || 10 }),
  right: (options?: AnimationOptions) => createSlideVariants("right", { ...options, distance: options?.distance || 10 }),
};

// Slide animations
export const slide = {
  up: (options?: AnimationOptions) => createSlideVariants("up", { ...options, distance: options?.distance || 30 }),
  down: (options?: AnimationOptions) => createSlideVariants("down", { ...options, distance: options?.distance || 30 }),
  left: (options?: AnimationOptions) => createSlideVariants("left", { ...options, distance: options?.distance || 30 }),
  right: (options?: AnimationOptions) => createSlideVariants("right", { ...options, distance: options?.distance || 30 }),
};

// Zoom animations
export const zoom = {
  in: (options?: AnimationOptions) => createScaleVariants(options),
  out: (options?: AnimationOptions) => createScaleVariants({ ...options, scale: options?.scale || 1.2 }),
  up: (options?: AnimationOptions) => createZoomVariants("up", options),
  down: (options?: AnimationOptions) => createZoomVariants("down", options),
  left: (options?: AnimationOptions) => createZoomVariants("left", options),
  right: (options?: AnimationOptions) => createZoomVariants("right", options),
};

// Scale animations
export const scale = {
  in: (options?: AnimationOptions) => createScaleVariants(options),
  out: (options?: AnimationOptions) => createScaleVariants({ ...options, scale: options?.scale || 1.1 }),
  bounce: (options?: AnimationOptions) => createScaleVariants({ 
    ...options, 
    scale: options?.scale || 0.3,
    ease: "easeOutBack",
    bounce: options?.bounce || 0.4
  }),
  elastic: (options?: AnimationOptions) => createScaleVariants({ 
    ...options, 
    scale: options?.scale || 0.3,
    ease: "easeOutElastic"
  }),
};

// Rotate animations
export const rotate = {
  in: (options?: AnimationOptions) => createRotateVariants(options),
  out: (options?: AnimationOptions) => createRotateVariants({ ...options, rotation: options?.rotation || -180 }),
  spin: (options?: AnimationOptions) => createRotateVariants({ ...options, rotation: 360 }),
  flip: (options?: AnimationOptions) => createFlipVariants(options),
};

// ============================================================================
// STAGGER ANIMATIONS
// ============================================================================

export const stagger = {
  container: (staggerChildren: number = 0.1): Variants => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren },
    },
    exit: {
      transition: { staggerChildren, staggerDirection: -1 },
    },
  }),
  
  item: (options?: AnimationOptions): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: createTransition(options),
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: createTransition({ ...options, duration: (options?.duration || 0.4) * 0.6 }),
    },
  }),
};

// ============================================================================
// PRESET ANIMATIONS
// ============================================================================

export const presets = {
  // Subtle entrance
  subtle: fade.in({ duration: 0.3, ease: "easeOut" }),
  
  // Smooth entrance
  smooth: fade.up({ duration: 0.5, ease: "easeInOut", distance: 15 }),
  
  // Bouncy entrance
  bouncy: scale.bounce({ duration: 0.6, ease: "easeOutBack", bounce: 0.4 }),
  
  // Elastic entrance
  elastic: scale.elastic({ duration: 0.8, ease: "easeOutElastic" }),
  
  // Dramatic entrance
  dramatic: zoom.up({ duration: 0.7, ease: "easeOutBack", distance: 40, scale: 0.7 }),
  
  // Flip entrance
  flip: rotate.flip({ duration: 0.6, ease: "easeInOut" }),
  
  // Staggered entrance
  staggered: {
    container: stagger.container(0.1),
    item: stagger.item({ duration: 0.4, ease: "easeOut" }),
  },
};

// ============================================================================
// VIEWPORT CONFIGURATIONS
// ============================================================================

export const viewport = {
  once: { once: true },
  always: { once: false, margin: "-100px" },
  partial: { once: false, margin: "-50px", amount: 0.3 },
  full: { once: false, margin: "0px", amount: 1 },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const createCustomVariants = (
  hidden: Record<string, any>,
  visible: Record<string, any>,
  options?: AnimationOptions
): Variants => {
  const transition = createTransition(options);
  
  return {
    hidden: { ...hidden },
    visible: { ...visible, transition },
    exit: { ...hidden, transition: { ...transition, duration: transition.duration! * 0.6 } },
  };
};

export const combineVariants = (...variants: Variants[]): Variants => {
  const combined: Variants = {};
  
  variants.forEach(variant => {
    Object.keys(variant).forEach(key => {
      if (!combined[key]) combined[key] = {};
      Object.assign(combined[key] as any, variant[key]);
    });
  });
  
  return combined;
};

// ============================================================================
// COMMON TRANSITION PRESETS
// ============================================================================

export const transitions = {
  smooth: { duration: 0.4, ease: "easeInOut" },
  fast: { duration: 0.2, ease: "easeOut" },
  slow: { duration: 0.8, ease: "easeInOut" },
  bouncy: { duration: 0.6, ease: "easeOutBack", bounce: 0.4 },
  elastic: { duration: 0.8, ease: "easeOutElastic" },
  spring: { type: "spring", damping: 20, stiffness: 300 },
  springBouncy: { type: "spring", damping: 15, stiffness: 200 },
  springStiff: { type: "spring", damping: 25, stiffness: 400 },
};
