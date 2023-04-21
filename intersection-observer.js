const $element1 = $(".intersection-observer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      $(entry.target).toggleClass("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
  }
);

$element1.each(function () {
  observer.observe(this);
});

// const element1 = document.querySelectorAll(".intersection-observer");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("show", entry.isIntersecting);
//       if (entry.isIntersecting) observer.unobserve(entry.target);
//     });
//   },
//   {
//     threshold: 0.1,
//   }
// );

// element1.forEach((element) => observer.observe(element));

// // let contentElem = document.getElementsByClassName("body-content-1");
// // let sectionElem = document.getElementsByClassName("animation-section")[0];
// // let imageHolderElem = document.getElementsByClassName("changing-image")[0];

// // let options = {
// //   rootMargin: "-100px 0px -100px 0px",
// // };

// // const iObserver = new IntersectionObserver((items) => {
// //   for (let item of items) {
// //     if (item.isIntersecting) {
// //       item.target.classList.add("body-content-1");

// //       let imageId = item.target.className.match(/\d/);
// //       console.log("here", imageId);

// //       //   imageHolderElem.src = `/images/scrolling-mockup/neopop-fold${imageId}.webp`;
// //     } else {
// //       item.target.classList.remove("content-section-visible");
// //     }
// //   }
// // }, options);

// // for (i = 0; i < contentElem.length; i++) {
// //   iObserver.observe(contentElem[i]);
// // }
