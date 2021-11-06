import React from "react";

export default function ScrollToTop({ currentStep, children }) {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentStep]);

  return children || null;
}
