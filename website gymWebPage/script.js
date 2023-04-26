"use strict";
const mainSection = document.querySelector(".main-section");
const nav = document.querySelector(".nav-bar");
const navDimensions = nav.getBoundingClientRect().height;
const goTop = document.querySelector(".go-top");
//
goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
const navObserver = new IntersectionObserver(
  function displayStickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
      goTop.classList.remove("hide");
    } else {
      nav.classList.remove("sticky");
      goTop.classList.add("hide");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navDimensions}px`,
  }
);
navObserver.observe(mainSection);
// First scroll into view
const aboutUs = document.querySelector(".about-us");
aboutUs.classList.add("section-hidden-left");
//
const observerAbout = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden-left");
      observerAbout.unobserve(aboutUs);
    }
  },
  {
    root: null,
    threshold: 0.6,
  }
);
observerAbout.observe(aboutUs);
// Second scroll  into view
const listSection = document.querySelector(".list-section");
listSection.classList.add("section-hidden-bottom");
//
const listObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden-bottom");
      listObserver.unobserve(listSection);
    }
  },
  {
    root: null,
    threshold: 0.2,
    rootMargin: "-250px",
  }
);
listObserver.observe(listSection);
// Third scroll into view
const statisticSection = document.querySelector(".statistic-section");
statisticSection.classList.add("section-hidden-opacity");
//
const staticticObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden-opacity");
      staticticObserver.unobserve(statisticSection);
    }
  },
  {
    root: null,
    threshold: 0.8,
  }
);
staticticObserver.observe(statisticSection);
//
const heightInput = document.querySelector(".height-input");
const weightInput = document.querySelector(".weight-input");
const calculateBtn = document.querySelector(".calculate-btn");
const resetBtn = document.querySelector(".reset-btn");
const bmiResult = document.querySelector(".bmi-result");
const select = document.querySelector("select");
//
const trainersImages = document.querySelectorAll(".trainer-photo");
trainersImages.forEach((img) => {
  const imgDimensions = img.getBoundingClientRect().height;
  img.classList.add("trainer-photo-blured");
  const trainersImagesObserver = new IntersectionObserver(
    function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.remove("trainer-photo-blured");
        trainersImagesObserver.unobserve(img);
      }
    },
    {
      root: null,
      threshold: 0.9,
      rootMargin: `-${imgDimensions / 2}px`,
    }
  );
  trainersImagesObserver.observe(img);
});
const calculateBmi = function () {
  const heightInputNum = +heightInput.value;
  const weightInputNum = +weightInput.value;
  const bmi = +Number((weightInputNum / (heightInputNum * 2)) * 100).toFixed(2);
  if (select.selectedIndex === 0 || !heightInputNum || !weightInputNum) {
    return;
  } else {
    bmiResult.value = bmi;
  }
};
calculateBtn.addEventListener("click", calculateBmi);
document.addEventListener("keypress", function (e) {
  if (e.code === "Period") {
    e.preventDefault();
  }
});
resetBtn.addEventListener("click", function () {
  const input = document.querySelectorAll("input");
  select.selectedIndex = 0;
  input.forEach((inp) => {
    inp.value = "";
  });
});
//
const testimonialsSection = document.querySelector(".testimonials-section");
testimonialsSection.classList.add("section-hidden-right");
const testimonialsSectionObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden-right");
      testimonialsSectionObserver.unobserve(testimonialsSection);
    }
  },
  {
    root: null,
    threshold: 0.4,
  }
);
testimonialsSectionObserver.observe(testimonialsSection);
//
const blogsSection = document.querySelector(".blog-gallery");
blogsSection.classList.add("section-hidden-top");
const blogsSectionObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.remove("section-hidden-top");
      blogsSectionObserver.unobserve(blogsSection);
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
blogsSectionObserver.observe(blogsSection);
//
const localPartnersSection = document.querySelector(".local-partners-section");
localPartnersSection.classList.add("section-hidden-opacity");
//
const localPartnersSectionObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden-opacity");
      localPartnersSectionObserver.unobserve(localPartnersSection);
    }
  },
  {
    root: null,
    threshold: 0.6,
    rootMargin: "-50px",
  }
);
localPartnersSectionObserver.observe(localPartnersSection);
