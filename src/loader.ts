import gsap from "gsap";

const initLoader = () => {
  const timelineIn = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.out",
    },
    onComplete: () => {
      const bodyElement = $("body");
      bodyElement.removeClass("is-loading");
    },
  });

  //

  const timelineOut = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power2.inOut",
    },
    delay: 1,
  });

  const masterTimeline = gsap.timeline();

  const main = $("#main");
  const loaderInner = $(".loader .inner");
  const image = $(".loader__image img");
  const imageMask = $(".loader__image--mask");
  const line1 = $(".loader__title--mask:nth-child(1) span");
  const line2 = $(".loader__title--mask:nth-child(2) span");

  const lineMasks = gsap.utils.toArray(".loader__title--mask");
  const loader = $(".loader");
  const loaderContent = $(".loader__content");

  timelineIn
    .set(loaderContent, {
      autoAlpha: 1,
    })
    .from(
      loaderInner,
      {
        scaleY: 0,
        transformOrigin: "bottom",
      },
      0.2
    )
    .from(
      imageMask,
      {
        yPercent: 100,
      },
      "-=0.5"
    )
    .from(
      image,
      {
        yPercent: -80,
      },
      "<"
    )
    .from(
      [line1, line2],
      {
        yPercent: 100,
        stagger: 0.1,
      },
      "-=0.5"
    );

  timelineOut
    .to(lineMasks, { yPercent: -100, stagger: 0.2 })
    .to(
      [loader, loaderContent],
      {
        yPercent: -100,
      },
      "<"
    )
    .from(main, { y: 150 }, "<");

  masterTimeline.add(timelineIn).add(timelineOut);
};

export { initLoader };
