// components/AnimatedOnVisible.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

function AnimatedOnVisible({ children, animation = "fade", delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const animationMap = {
    fade: {
      from: { opacity: 0 },
      to: { opacity: inView ? 1 : 0 },
    },
    slideUp: {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" },
    },
    zoom: {
      from: { opacity: 0, transform: "scale(0.95)" },
      to: { opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.95)" },
    },
  };

  const spring = useSpring({
    ...(animationMap[animation] || animationMap.fade),
    delay,
    config: { mass: 1, tension: 210, friction: 26 },
  });

  return (
    <animated.div ref={ref} style={{ ...spring, width: "100%" }}>
      {children}
    </animated.div>
  );
}

export default AnimatedOnVisible;