import gsap from "gsap";
import barba from "@barba/core";
import { initLoader } from "loader";

function initPageTransition() {
  barba.init({
    transitions: [
      {
        once: () => {
          initLoader();
        },
        leave: async () => {
          console.log("LEAVE");
          return pageTransitionIn();
        },
        enter: async () => {
          return pageTransitionOut().then();
        },
      },
    ],
  });
}

async function pageTransitionIn() {
  const loader = $(".loader");
  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power1.inOut",
    },
  });
  tl.to(loader, {
    yPercent: 0,
  });

  return tl;
}

async function pageTransitionOut() {
  const loader = $(".loader");
  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power1.inOut",
    },
  });
  tl.to(loader, {
    yPercent: -100,
  });

  return tl;
}

export { initPageTransition };
