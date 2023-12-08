import { useEffect } from "react";

const ImageHover = () => {
  useEffect(() => {
    handleImageHover();
  }, []);

  const handleImageHover = () => {
    document.querySelectorAll(".bimage").forEach((elem) => {
      let x, y, width, height;
      elem.onmouseenter = () => {
        const size = elem.getBoundingClientRect();
        x = size.x;
        y = size.y;
        width = size.width;
        height = size.height;
      };
      elem.onmousemove = (e) => {
        const horizontal = ((e.clientX - x) / width) * 100;
        const vertical = ((e.clientY - y) / height) * 100;
        elem.style.setProperty("--x", horizontal + "%");
        elem.style.setProperty("--y", vertical + "%");
      };
    });
  };

  return null;
};

export default ImageHover;
