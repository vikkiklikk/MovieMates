import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const slides = [
  {
    url: "https://kvikmyndir.is/images/poster/x16119_500.jpg.pagespeed.ic.sA04q_-DOC.webp",
  },
  {
    url: "https://kvikmyndir.is/images/poster/x1718083_500-1700473458.jpg.pagespeed.ic.aboIvRwnLL.webp",
  },
  {
    url: "https://kvikmyndir.is/images/poster/x1717074_500-1697129266.jpg.pagespeed.ic.oav7RbIVmL.webp",
  },
  {
    url: "https://kvikmyndir.is/images/poster/x16169_500.jpg.pagespeed.ic.xLgzNbibOm.webp",
  },
  {
    url: "https://kvikmyndir.is/images/poster/x16492_500.jpg.pagespeed.ic.wGK8jh6MDL.webp",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment currentIndex to move to the next image
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Switch to the next image every 10 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    // Carousel container
    <div className="w-[390px] h-[200px] relative bg-blue-500">
      <div
        // Movie posters - need to reposition some of the posters to show more importart part of the poster
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-cover bg-[50%] duration-500"
      ></div>
      {/* Left Arrow */}
      <div
        className="absolute top[50%] translate-x-0 translate-y-[-120px] left-2 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
          )
        }
      >
        <BsChevronCompactLeft size={30} color="white" />
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top[50%] translate-x-0 translate-y-[-120px] right-2 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        <BsChevronCompactRight size={30} color="white" />
      </div>
    </div>
  );
}
