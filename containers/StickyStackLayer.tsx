import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Lesson = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const panels = gsap.utils.toArray<HTMLDivElement>(".panel");

    const ctx = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: "body",
        // markers: true,
        scrub: true,
        snap: 1 / (panels.length - 1),
      });

      panels.forEach((panel, idx) => {
        ScrollTrigger.create({
          trigger: panel,
          // onLeave: () => {
          //   setCurrentSection(idx);
          // },
          // onLeaveBack: () => {
          //   setCurrentSection(idx);
          // },
          onEnter: () => {
            setCurrentSection(idx);
          },
          onEnterBack: () => {
            setCurrentSection(idx);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onGoUpHandler = useCallback(() => {
    const scrollTrigger = scrollTriggerRef.current;

    if (!scrollTrigger) return;
    const nextSection = currentSection - 1;

    console.log("UP", currentSection, nextSection);

    const { end } = scrollTrigger;

    gsap.to(window, {
      duration: 0.5,
      scrollTo: {
        y: (end * nextSection) / 5,
      },
    });
  }, [currentSection]);

  const onGoDownHandler = useCallback(() => {
    const scrollTrigger = scrollTriggerRef.current;

    if (!scrollTrigger) return;
    const nextSection = currentSection + 1;

    console.log("DOWN", currentSection, nextSection);

    const { end } = scrollTrigger;

    gsap.to(window, {
      duration: 0.5,
      scrollTo: {
        y: (end * nextSection) / 5,
      },
    });
  }, [currentSection]);

  return (
    <div
      style={{
        userSelect: "none",
      }}
      ref={containerRef}
    >
      <div className="controls">
        <div
          className={`up ${currentSection === 0 ? "disabled" : ""}`}
          onClick={onGoUpHandler}
        >
          ↑
        </div>
        <div
          className={`up ${currentSection === 5 ? "disabled" : ""}`}
          onClick={onGoDownHandler}
        >
          ↓
        </div>
      </div>
      <span className="note">
        <span className="activeSlide">{currentSection + 1}</span> /
        <span className="slideTotal">6</span>
      </span>
      <div className="panels" id="panelContainer">
        <div className="panel one" id="panel_1">
          <div className="clip">
            <h2>
              <a>1. Project Title</a>
            </h2>
            <span className="tint" />
            <div className="video_clip">
              <iframe
                src="https://player.vimeo.com/video/468155263?&api=1&controls=0&background=1&autoplay=1&loop=1&mute=1"
                allow="autoplay;"
              />
            </div>
          </div>
        </div>
        <div className="panel two" id="panel_2">
          <div className="clip">
            <h2>
              <a>2. Project Title</a>
            </h2>
            <span className="tint" />
            <img src="https://source.unsplash.com/800x600?ocean" alt="" />
          </div>
        </div>
        <div className="panel three" id="panel_3">
          <div className="clip">
            <h2>
              <a>3. Project Title</a>
            </h2>
            <span className="tint" />
            <img src="https://source.unsplash.com/800x600?river" alt="" />
          </div>
        </div>
        <div className="panel four" id="panel_4">
          <div className="clip">
            <h2>
              <a>4. Project Title</a>
            </h2>
            <span className="tint" />
            <img src="https://source.unsplash.com/800x600?waterfall" alt="" />
          </div>
        </div>
        <div className="panel five" id="panel_5">
          <div className="clip">
            <h2>
              <a>5. Project Title</a>
            </h2>
            <span className="tint" />
            <img src="https://source.unsplash.com/800x600?glacier" alt="" />
          </div>
        </div>
        <div className="panel six" id="panel_6">
          <div className="clip">
            <h2>
              <a>6. Project Title</a>
            </h2>
            <span className="tint" />
            <img src="https://source.unsplash.com/800x600?snow" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
