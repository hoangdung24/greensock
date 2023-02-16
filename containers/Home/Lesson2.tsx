import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Lesson = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        markers: true,
      });

      const sections = gsap.utils.toArray<HTMLDivElement>("section");

      let maxWidth = 0;

      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });

      gsap.to(sections, {
        x: `-${maxWidth}`,
        scrollTrigger: {
          trigger: "body",
          scrub: true,
          end: () => `+=${maxWidth}`,
          markers: false,
        },
      });

      ScrollTrigger.create({
        trigger: ".landing_big_text_container",
        pin: true,
        scrub: true,
        start: "top center",
        end: `+=${maxWidth}`,
      });

      ScrollTrigger.create({
        trigger: ".landing_big_text_container_1",
        pin: true,
        scrub: true,
        start: "top center",
        end: `+=${maxWidth}`,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section>
            <video className="landing_vid" playsInline autoPlay muted loop>
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                type="video/mp4"
              />
            </video>

            <div className="landing_circle"></div>
          </section>

          <div className="landing_big_text_container">
            <div className="landing_big_text_1">Beautiful</div>
            <div className="landing_big_text_1_right">Dev</div>
          </div>

          <div className="landing_big_text_container_1">
            <div className="landing_big_text_2">Beautiful</div>
            <div className="landing_big_text_2_right">Dev</div>
          </div>

          <div
            className="padding_className"
            style={{
              height: 2000,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
