import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

const Lesson1 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}></div>;
};

export default Lesson1;
