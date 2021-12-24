export const scrollToTop = (top = 0) => {
  window.scrollTo({
    top: top,
    left: 0,
    behavior: "smooth",
  });
};

export const scrollToError = () => {
  if (window.innerWidth < 900) {
    let top = document.querySelector(".banner-showcase")?.clientHeight;
    scrollToTop(top);
  } else {
    scrollToTop();
  }
};
