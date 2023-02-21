import "./css/normalize.css";
import "./css/main.css";
import "./css/app.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initPageTransition } from "pageTransition";

gsap.registerPlugin(ScrollTrigger, GSDevTools);

window.addEventListener("load", () => {
  initPageTransition();

  // f
  // GSDevTools.create();
});
