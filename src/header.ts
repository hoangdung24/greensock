import gsap from "gsap";

const MULTIPLY = 15;

const initHeaderTilt = () => {
  const header = document.querySelector("header");

  if (header == undefined) return;

  header.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY, target } = e;

    const { clientWidth, clientHeight } = target as HTMLElement;

    const xPos = offsetX / clientWidth - 0.5;
    const yPos = offsetY / clientHeight - 0.5;

    const leftImages = gsap.utils.toArray<HTMLDivElement>(".hg__left .hg__image");
    const rightImages = gsap.utils.toArray<HTMLDivElement>(".hg__right .hg__image");

    leftImages.forEach((el, idx) => {
      gsap.to(el, {
        x: xPos * MULTIPLY * (idx + 1),
        y: yPos * MULTIPLY * (idx + 1),
        rotateX: xPos * 15,
        rotateY: yPos * 25,
      });
    });

    rightImages.forEach((el, idx) => {
      gsap.to(el, {
        x: xPos * MULTIPLY * (idx + 1),
        y: yPos * MULTIPLY * (idx + 1),
        rotateX: xPos * 15,
        rotateY: yPos * 25,
      });
    });

    gsap.to(".decor__circle", {
      x: xPos * 120,
      y: yPos * 120,
      duration: 1.5,
    });
  });
};

export { initHeaderTilt };
