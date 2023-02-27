import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const initNavbar = () => {
  const links = $(".main-nav a");
  const main = $("#main");

  links.toArray().forEach((link) => {
    link.addEventListener("mouseleave", () => {
      $(link).addClass("animate-out");
    });

    link.addEventListener("transitionend", () => {
      $(link).removeClass("animate-out");
    });
  });

  const animateLink = (direction: number) => {
    const isScrollDown = direction === 1;

    const elements = isScrollDown ? links.toArray() : links.toArray().reverse();

    gsap.to(elements, {
      stagger: 0.05,
      duration: 0.3,
      autoAlpha: isScrollDown ? 0 : 1,
      y: isScrollDown ? 20 : 0,
      ease: "power4.out",
    });
  };

  ScrollTrigger.create({
    trigger: main,
    markers: true,
    start: "top+=100 top",
    end: "bottom bottom-=20",
    toggleClass: {
      targets: "body",
      className: "has-scrolled",
    },
    onEnter: ({ direction }) => {
      animateLink(direction);
    },
    onLeaveBack: ({ direction }) => {
      animateLink(direction);
    },
  });
};

export { initNavbar };
