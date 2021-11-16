import { useEffect, useState } from "react";

const useScrollVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    if (window.scrollY > 650) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleVisible);

    return () => document.removeEventListener("scroll", handleVisible);
  }, []);

  return isVisible;
};

export default useScrollVisible;
