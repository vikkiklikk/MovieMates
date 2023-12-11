import { useState, useEffect } from "react";

interface Slide {
  url: string;
}
const slides: Slide[] = [
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-[390px] h-[200px] relative bg-[#282828] overflow-hidden">
      <div className="flex items-center justify-center h-full">
        {/* Left Slide */}
        <div
          className="absolute left-0 w-[130px] h-[160px] transform scale-90 opacity-70"
          style={{ transition: "transform 0.5s, opacity 0.5s" }}
          onClick={() => goToSlide(prevIndex)}
        >
          <img
            src={slides[prevIndex].url}
            alt={`Slide ${prevIndex + 1}`}
            className="w-full h-full rounded-2xl object-cover"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </div>

        {/* Current Slide */}
        <div className="z-10" onClick={() => goToSlide(currentIndex)}>
          <img
            src={currentSlide.url}
            alt={`Slide ${currentIndex + 1}`}
            className="max-w-full h-[180px]"
            style={{ objectFit: "contain", borderRadius: "16px" }}
          />
        </div>

        {/* Right Slide */}
        <div
          className="absolute right-0 w-[130px] h-[160px] transform scale-90 opacity-70"
          style={{ transition: "transform 0.5s, opacity 0.5s" }}
          onClick={() => goToSlide(nextIndex)}
        >
          <img
            src={slides[nextIndex].url}
            alt={`Slide ${nextIndex + 1}`}
            className="w-full h-full rounded-2xl object-cover"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-0 bottom-0 flex items-center">
        {/* <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 cursor-pointer"
          onClick={goToPreviousSlide}
        >
          <BsChevronCompactLeft size={30} color="white" />
        </div> */}

        {/* <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 cursor-pointer"
          onClick={goToNextSlide}
        >
          <BsChevronCompactRight size={30} color="white" />
        </div> */}
      </div>
    </div>
  );
}
