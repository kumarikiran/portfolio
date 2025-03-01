import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";

// Import images properly
import MPI_2025 from "../../assets/images/MPI_2025.jpeg";
import APS_2023 from "../../assets/images/APS_2023.jpeg";
import PhD_2021 from "../../assets/images/PhD_2021.jpeg";
import Vienna_2021 from "../../assets/images/Vienna_2021.jpeg";
import Sydney_2017 from "../../assets/images/Sydney_2017.jpeg";

const GallerySection = () => {
  const images = [
    { id: 1, src: MPI_2025, title: "Lab retreat 2025" },
    { id: 2, src: APS_2023, title: "APS meeting, 2023" },
    { id: 3, src: PhD_2021, title: "PhD defence, 2021" },
    { id: 4, src: Vienna_2021, title: "Sydney, 2017" },
    { id: 5, src: Sydney_2017, title: "Vienna, 2021" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <SectionTitle>Gallery</SectionTitle>

      <div className="relative w-full h-[500px] flex flex-col justify-center items-center bg-gray-200 rounded-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="max-w-[90%] max-h-[90%] object-contain"
        />

        {/* Image Title */}
        <div className="absolute bottom-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-md">
          <h3 className="text-lg font-semibold">{images[currentIndex].title}</h3>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-3 py-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-3 py-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default GallerySection;
