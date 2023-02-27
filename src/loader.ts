import gsap from "gsap";

const initLoader = () => {
  const masterTl = gsap.timeline();
  const tlIn = gsap.timeline({
    defaults: {
      duration: 1,
    },
    onComplete: () => {
      $("body").removeClass("is-loading");
    },
  });
  const tlOut = gsap.timeline({
    delay: 1,
    defaults: {
      duration: 1,
    },
  });

  const loaderInner = $(".loader .inner");
  const image = $(".loader__image img");
  const loaderImageMask = $(".loader__image--mask");
  const loaderContent = $(".loader__content");
  const titles = $(".loader__title span");
  const titleMasks = $(".loader__title--mask");

  tlIn
    .set(loaderContent, {
      autoAlpha: 1,
    })
    .to(loaderInner, {
      scaleY: 1,
      transformOrigin: "bottom",
    })
    .from(
      loaderImageMask,
      {
        yPercent: 100,
      },
      "-=0.5"
    )
    .from(image, { yPercent: -80 }, "<")
    .from(
      titles,
      {
        yPercent: 100,
        stagger: 0.2,
      },
      "-=0.3"
    );

  const loader = $(".loader");

  tlOut
    .to(titleMasks, {
      stagger: 0.1,
      yPercent: -100,
    })
    .to(
      [loader, loaderContent],
      {
        yPercent: -100,
      },
      "-=0.5"
    );

  masterTl.add(tlIn).add(tlOut);
};

export { initLoader };
