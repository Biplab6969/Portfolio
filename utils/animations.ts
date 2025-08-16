import { MotionProps } from "framer-motion";

export const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInDown: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const staggerContainer: MotionProps = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const cardHover: MotionProps = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring" as const, stiffness: 300 }
};

export const cardHoverSmall: MotionProps = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 }
};


export const pageTransition: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export const slideInLeft: MotionProps = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideInRight: MotionProps = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const scaleIn: MotionProps = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};
