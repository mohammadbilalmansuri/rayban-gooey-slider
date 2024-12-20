window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    document
      .querySelector(".loader")
      .classList.add("-z-50", "pointer-events-none", "opacity-0");
  }, 500);
});

Shery.imageEffect("#banner-back", {
  style: 1,
  config: {
    a: { value: 1, range: [0, 30] },
    b: { value: 0.99, range: [-1, 1] },
    zindex: { value: 0, range: [-9999999, 9999999] },
    aspect: { value: 2 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.5, range: [0, 10] },
    metaball: { value: 0.15, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 50, range: [0, 100] },
  },
  gooey: true,
});

const tl = gsap.timeline();

tl.from("nav a, nav img", {
  delay: 0.3,
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  onComplete: function () {
    this._targets.forEach(function (target, index) {
      index > 0 && target.classList.add("transition-all", "duration-200");
    });
  },
})
  .from(
    ".banner-heading h1:nth-child(1), #banner-left button",
    {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      onComplete: function () {
        this._targets[3].classList.add("transition-all", "duration-200");
      },
    },
    "contentAnim"
  )
  .from(
    "#banner-right div:nth-child(1) *, #banner-right p:nth-child(2)",
    {
      xPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },
    "contentAnim"
  );

const banner = document.querySelector("#banner");
const bannerHeadingsElements = document.querySelectorAll(".banner-heading");

bannerHeadingsElements.forEach((elem) => {
  const h1s = elem.querySelectorAll("h1");
  let index = 0;
  let animating = false;

  banner.addEventListener("click", (e) => {
    if (
      !animating &&
      !(e.target.tagName === "A") &&
      !(e.target.tagName === "BUTTON")
    ) {
      animating = true;

      gsap.to(h1s[index], {
        top: "-=100%",
        opacity: 0,
        ease: "Expo.easeInOut",
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "-=100%",
        opacity: 1,
        ease: "Expo.easeInOut",
        duration: 1,
      });
    }
  });
});
