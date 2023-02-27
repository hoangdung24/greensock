import "./css/normalize.css";
import "./css/main.css";
import "./css/app.css";

import gsap from "gsap";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { initNavbar } from "navbar";
import { initHeaderTilt } from "header";
// import { initPageTransition } from "pageTransition";

gsap.registerPlugin(ScrollTrigger, GSDevTools);

window.addEventListener("load", () => {
  // initPageTransition();

  const viewport = document.querySelector<HTMLDivElement>("#viewport");

  if (viewport) {
    const bodyScrollBar = Scrollbar.init(viewport, {
      damping: 0.5,
    });
    bodyScrollBar.track.xAxis.element.remove();

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);
  }

  $("body").removeClass("is-loading");
  $(".loader").css({
    visibility: "hidden",
  });

  initNavbar();
  initHeaderTilt();

  // GSDevTools.create();
});
