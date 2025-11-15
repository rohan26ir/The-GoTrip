import React, { useEffect, useState, useRef } from "react";

const Counter = ({ Number, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const end = parseInt(Number);
    if (!counterRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true); // Ensure animation runs only once
            let startTime = null;

            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);

              // Ease-out effect
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setCount(Math.floor(easeOut * end));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [Number, duration, hasAnimated]);

  return <div ref={counterRef}>{count}</div>;
};

export default Counter;