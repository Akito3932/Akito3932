import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealAnimation = ({ children, targetClass, animationConfig }) => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Merge the animationConfig with default values
    const mergedAnimationConfig = {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
      easing: "ease-out",
      ...animationConfig, // Merge in custom animation properties
    };

    // Apply the scroll reveal animation to the element with the targetClass
    sr.reveal(`.${targetClass}`, mergedAnimationConfig);
  }, [targetClass, animationConfig]);

  return <>{children}</>;
};

export default ScrollRevealAnimation;
