import gsap from "gsap";
import barba from "@barba/core";
import { initLoader } from "loader";

function initPageTransition() {
  const loaderInner = $(".loader .inner");
  const loaderProgress = $(".loader .progress");

  gsap.set(loaderInner, {
    scaleY: 0.005,
    transformOrigin: "bottom",
  });

  gsap.to(loaderProgress, {
    scaleX: 0,
    transformOrigin: "right",
    ease: "Power3.easeOut",
    duration: 1,
    onComplete: () => {
      barba.init({
        transitions: [
          {
            once() {
              initLoader();
            },
            async enter() {
              return transactionOut().then();
            },
            async leave() {
              return transactionIn().then();
            },
          },
        ],
      });
    },
  });
}

const transactionIn = async () => {
  const loader = $(".loader");

  const loaderInner = $(".loader .inner");
  gsap.set(loaderInner, {
    autoAlpha: 0,
  });

  const tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: "power1.inOut",
    },
  });

  tl.to(loader, {
    yPercent: 0,
  });

  return tl;
};
const transactionOut = async () => {
  const loader = $(".loader");

  const tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: "power1.inOut",
    },
  });

  tl.to(loader, {
    yPercent: -100,
  });

  return tl;
};

export { initPageTransition };
