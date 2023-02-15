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

      const getMaxWidth = () => {
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };

      getMaxWidth();

      gsap.to(sections, {
        x: () => `-${maxWidth}`,
        scrollTrigger: {
          trigger: "#smooth-wrapper",
          pin: true,
          scrub: true,
          start: "center center",
          end: () => `+=${maxWidth}`,
          invalidateOnRefresh: true,
        },
      });

      // gsap.to(sections, {
      //   x: `-${maxWidth}`,
      //   scrollTrigger: {
      //     start: "top center",
      //   },
      // });

      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".smooth-wrapper",
      //     pin: true,
      //     scrub: true,
      //     invalidateOnRefresh: true,
      //     end: () => `+=${maxWidth}`,
      //     markers: false,
      //   },
      // });

      // tl.to(sections, {
      //   x: () => `-${maxWidth}`,
      // });

      // tl.to(".landing_big_text_container", {
      //   scrollTrigger: {
      //     pin: ".landing_big_text_container",
      //     start: "top center",
      //     end: `+=${maxWidth + 2500}`,
      //   },
      // });

      // tl.to(".landing_big_text_container_1", {
      //   scrollTrigger: {
      //     pin: ".landing_big_text_container_1",
      //     start: "top center",
      //     end: `+=${maxWidth + 2500}`,
      //   },
      // });
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
              height: 5000,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
