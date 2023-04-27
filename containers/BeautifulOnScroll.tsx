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
      let maxWidth = 3000;

      // sections.forEach((section) => {
      //   maxWidth += section.offsetWidth;
      // });

      gsap.to(sections, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          scrub: true,
        },
      });

      gsap.to(".landing_big_text_container", {
        scrollTrigger: {
          trigger: ".landing_big_text_container",
          pin: ".landing_big_text_container",
          start: "top center",
          end: maxWidth,
        },
      });

      gsap.to(".landing_big_text_container_1", {
        scrollTrigger: {
          trigger: ".landing_big_text_container_1",
          pin: ".landing_big_text_container_1",
          start: "top center",
          end: maxWidth,
        },
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
              height: 4000,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
