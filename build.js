gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true,
});

const mq = window.matchMedia("(min-width: 768px)");

//* NAV HEADER

function initNavigation() {
  const mainNavLinks = gsap.utils.toArray(".main-nav a");
  const mainNavLinksRev = gsap.utils.toArray(".main-nav a").reverse();

  mainNavLinks.forEach((link) => {
    link.addEventListener("mouseleave", (e) => {
      link.classList.add("animate-out");
      setTimeout(() => {
        link.classList.remove("animate-out");
      }, 300);
    });
  });

  function navAnimation(direction) {
    const isScrollDown = direction === 1;

    const links = direction === 1 ? mainNavLinks : mainNavLinksRev;

    return gsap.to(links, {
      duration: 0.3,
      stagger: 0.1,
      autoAlpha: () => (isScrollDown ? 0 : 1),
      y: () => (isScrollDown ? 20 : 0),
      ease: "Power4.out",
    });
  }

  ScrollTrigger.create({
    trigger: "body",
    start: 100,
    end: "bottom bottom-=10",
    toggleClass: {
      targets: "body",
      className: "has-scrolled",
    },
    onEnter: ({ direction }) => navAnimation(direction),
    onLeaveBack: ({ direction }) => navAnimation(direction),
    markers: false,
  });
}

function initHeaderTilt() {
  document.querySelector("header").addEventListener("mousemove", moveImages);
}

function moveImages(e) {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;

  const leftImages = gsap.utils.toArray(".hg__left .hg__image");
  const rightImages = gsap.utils.toArray(".hg__right .hg__image");

  const modifier = (index) => index * 1.2 + 0.5;

  leftImages.forEach((image, idx) => {
    gsap.to(image, {
      duration: 0.5,
      x: xPos * 20 * modifier(idx),
      y: yPos * 30 * modifier(idx),
      rotationX: yPos * 10,
      rotationY: xPos * 40,
      ease: "Power3.out",
    });
  });

  rightImages.forEach((image, idx) => {
    gsap.to(image, {
      duration: 0.5,
      x: xPos * 20 * modifier(idx),
      y: yPos * 30 * modifier(idx),
      rotationX: yPos * 10,
      rotationY: xPos * 40,
      ease: "Power3.out",
    });
  });

  gsap.to(".decor__circle", {
    duration: 1.7,
    x: 100 * xPos,
    y: 120 * yPos,
    ease: "Power4.out",
  });
}

//* PART 2

const initHoverReval = () => {
  const sections = gsap.utils.toArray(".rg__column");

  sections.forEach((section) => {
    const imageBlock = section.querySelector(".rg__image");
    const image = section.querySelector(".rg__image img");
    const mask = section.querySelector(".rg__image--mask");
    const text = section.querySelector(".rg__text");

    const textCopy = section.querySelector(".rg__text--copy");
    const textMask = section.querySelector(".rg__text--mask");

    const textHeight = textCopy.clientHeight;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: "Power4.out",
      },
    });

    function mouseEnterCb() {
      tl.to([imageBlock, mask], {
        yPercent: 0,
        duration: 0.7,
      })
        .to(
          image,
          {
            scale: 1,
            duration: 1.1,
          },
          "<"
        )
        .to(
          text,
          {
            y: -textHeight / 2,
          },
          "<"
        )
        .to(
          textMask,
          {
            yPercent: 0,
          },
          "<"
        );
    }

    function mouseLeaveCb() {
      tl.to([imageBlock, textMask], {
        yPercent: -100,
      })
        .to(
          mask,
          {
            yPercent: 100,
          },
          "<"
        )
        .to(
          text,
          {
            y: 0,
          },
          "<"
        )
        .to(
          image,
          {
            scale: 1.2,
          },
          "<"
        );
    }

    if (mq.matches) {
      gsap.set(imageBlock, {
        yPercent: -100,
      });

      gsap.set(image, {
        scale: 1.2,
      });

      gsap.set(mask, {
        yPercent: 100,
      });

      gsap.set(textMask, {
        yPercent: -100,
      });

      section.addEventListener("mouseenter", mouseEnterCb);

      section.addEventListener("mouseleave", mouseLeaveCb);
    }

    mq.addEventListener("change", ({ matches }) => {
      if (matches) {
        gsap.set(imageBlock, {
          yPercent: -100,
        });

        gsap.set(image, {
          scale: 1.2,
        });

        gsap.set(mask, {
          yPercent: 100,
        });

        gsap.set(textMask, {
          yPercent: -100,
        });

        section.addEventListener("mouseenter", mouseEnterCb);
        section.addEventListener("mouseleave", mouseLeaveCb);
      } else {
        [imageBlock, image, mask, text, textCopy, textMask].forEach((el) => {
          gsap.set(el, { clearProps: "all" });
          tl.killTweensOf(el);
        });

        section.removeEventListener("mouseenter", mouseEnterCb);
        section.removeEventListener("mouseleave", mouseLeaveCb);
      }
    });
  });
};

//* PART 3

const initPortfolioHover = () => {
  const allLinks = gsap.utils.toArray(".portfolio__categories a");
  const pageBackground = document.querySelector(".fill-background");
  const largeImage = document.querySelector(".portfolio__image--l");
  const smallImage = document.querySelector(".portfolio__image--s");
  const lInside = document.querySelector(".portfolio__image--l .image_inside");
  const sInside = document.querySelector(".portfolio__image--s .image_inside");

  allLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      const { color, imagelarge, imagesmall } = e.target.dataset;

      const tl = gsap.timeline();

      const siblingLinks = allLinks.filter((link) => link !== e.target);

      tl.set(lInside, { backgroundImage: `url(${imagelarge})` })
        .set(sInside, {
          backgroundImage: `url(${imagesmall})`,
        })
        .to([largeImage, smallImage], {
          duration: 1,
          autoAlpha: 1,
        })
        .to(
          siblingLinks,
          {
            duration: 1,
            autoAlpha: 0.2,
          },
          "<"
        )
        .to(
          e.target,
          {
            color: "#FFF",
            duration: 1,
          },
          "<"
        )
        .to(
          pageBackground,
          {
            backgroundColor: color,
            duration: 0.5,
          },
          "<"
        );
    });

    link.addEventListener("mousemove", (e) => {
      const { clientY } = e;

      const portfolioContainer = document.querySelector(".portfolio__categories");

      const containerHeight = portfolioContainer.clientHeight;

      gsap.to(largeImage, {
        y: -(clientY - containerHeight) / 5,
        duration: 1,
        ease: "Power3.inOut",
      });

      gsap.to(smallImage, {
        y: -(clientY - containerHeight) / 3,
        duration: 1.5,
        ease: "Power3.inOut",
      });

      // portfolio__categories
    });

    link.addEventListener("mouseleave", (e) => {
      const tl = gsap.timeline();

      tl.to([largeImage, smallImage], {
        duration: 0.7,
        autoAlpha: 0,
      })
        .to(
          allLinks,
          {
            autoAlpha: 1,
            duration: 0.7,
            color: "#000",
          },
          "<"
        )
        .to(
          pageBackground,
          {
            backgroundColor: "#ACB7AB",
          },
          "<"
        );
    });
  });
};

//* PART 4

const initImageParallax = () => {
  const parallaxList = gsap.utils.toArray(".with-parallax");

  parallaxList.forEach((el) => {
    const image = el.querySelector("img");

    gsap.to(image, {
      yPercent: 20,
      scrollTrigger: {
        trigger: el,
        scrub: 1,
        markers: false,
      },
    });
  });
};

const initPinSteps = () => {
  ScrollTrigger.create({
    trigger: ".fixed-nav",
    endTrigger: "#stage4",
    start: "top center",
    end: "center center",
    pin: true,
    markers: false,
    pinReparent: true,
  });

  // fixed-nav

  const stages = gsap.utils.toArray(".stage");
  const navLinks = gsap.utils.toArray(".fixed-nav li");

  const windowHeight = window.innerHeight;

  stages.forEach((el, idx, arr) => {
    const { color } = el.dataset;

    ScrollTrigger.create({
      trigger: el,
      start: "top center",
      markers: false,
      end: `+=${el.clientHeight + windowHeight / 10}`,
      toggleClass: {
        targets: navLinks[idx],
        className: "is-active",
      },
      onEnter: () => {
        gsap.to(".fill-background", {
          backgroundColor: color,
        });
      },
      onEnterBack: () => {
        gsap.to(".fill-background", {
          backgroundColor: color,
        });
      },
      onLeave: () => {
        if (idx === arr.length - 1) {
          gsap.to(".fill-background", {
            backgroundColor: "#acb7ae",
          });
        }
      },
      onLeaveBack: () => {
        if (idx === 0) {
          gsap.to(".fill-background", {
            backgroundColor: "#acb7ae",
          });
        }
      },
    });
  });
};

//* PART 5

const viewport = document.querySelector("#viewport");

const bodyScrollBar = Scrollbar.init(viewport, {
  damping: 0.07,
});

bodyScrollBar.track.xAxis.element.remove();

const initScrollTo = () => {
  gsap.utils.toArray(".fixed-nav a").forEach((el) => {
    const target = el.getAttribute("href");

    el.addEventListener("click", (e) => {
      e.preventDefault();

      bodyScrollBar.scrollIntoView(document.querySelector(target), {
        damping: 0.07,
      });

      // gsap.to(viewport, { duration: 1, scrollTo: target, ease: "Power2.out" });
    });
  });
};

//* PART 6

//* BARBA

function init() {
  const container = document.querySelector("#main");
  const loader = document.querySelector(".loader");
  const loaderInner = document.querySelector(".loader .inner");
  const progressBar = document.querySelector(".loader .inner .progress");

  const progressTween = gsap.to(progressBar, {
    scaleX: 0,
    ease: "none",
    transformOrigin: "right",
    paused: true,
  });

  let loadedImageCount = 0;
  let imageCount;

  const imageLoad = imagesLoaded(container);

  imageCount = imageLoad.images.length;

  function updateProgress(value) {
    gsap.to(progressTween, {
      progress: value / imageCount,
      duration: 0.3,
      ease: "power1.out",
    });
  }

  imageLoad.on("progress", () => {
    updateProgress(++loadedImageCount);
  });

  imageLoad.on("done", () => {
    setTimeout(() => {
      gsap.set(progressBar, {
        autoAlpha: 0,
        onComplete: initPageTransition,
      });
    }, 300);
  });

  updateProgress(0);

  gsap.set(loader, { autoAlpha: 1 });
  gsap.set(loaderInner, { scaleY: 0.01, transformOrigin: "bottom" });

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value; // setter
      }
      return bodyScrollBar.scrollTop; // getter
    },
  });

  bodyScrollBar.addListener(ScrollTrigger.update);

  // const containerHeight = viewport.clientHeight;

  // document.body.style.height = `${containerHeight}px`;

  // gsap.to(container, {
  //   y: () => {
  //     return -(containerHeight - window.innerHeight);
  //   },
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: document.body,
  //     markers: true,
  //     scrub: 1,
  //     start: "top top",
  //     end: "bottom bottom",
  //     // end: `+=${containerHeight}`,
  //     invalidateOnRefresh: true,
  //   },
  // });

  // ScrollTrigger.addEventListener("refreshInit", () => {
  //   document.body.style.height = `${containerHeight}px`;
  // });

  initPageTransition();

  initNavigation();
  initHeaderTilt();
  initHoverReval();
  initPortfolioHover();

  initImageParallax();
  initPinSteps();

  initScrollTo();

  // start here

  GSDevTools.create();
}

window.addEventListener("load", init);
