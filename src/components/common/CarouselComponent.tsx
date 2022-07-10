/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  className?: string;
  children: React.ReactChild[];
  scrollButtons?: boolean;
  classNameButtons?: string;
  currentIndex?: (index: number) => void;
}
interface ButtonRendererProps {
  index: number;
  isSelected: boolean;
  selectIndex: (index: number) => void;
  scrollButtons?: boolean;
}

const ButtonRenderer = ({
  index,
  isSelected,
  selectIndex,
  scrollButtons,
}: ButtonRendererProps) => {
  if (scrollButtons) {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={`carousel-button ${isSelected ? "selected" : ""}`}
        onClick={() => selectIndex(index)}
      ></div>
    );
  }
  return (
    <button
      className={`carousel-button ${isSelected ? "selected" : ""}`}
      onClick={() => selectIndex(index)}
    ></button>
  );
};

const CarouselComponent = ({
  className,
  children,
  scrollButtons,
  classNameButtons,
  currentIndex,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const updateCarousel = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
      currentIndex && currentIndex(index);
    }
  };

  return (
    <>
      <Carousel
        className={className ?? ""}
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={updateCarousel}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={40}
      >
        {children}
      </Carousel>
      <div
        className={`carousel-buttons-wrapper ${classNameButtons ?? ""}  ${
          scrollButtons ? "scroll" : ""
        }`}
      >
        {children.map((c, i) => {
          return (
            <ButtonRenderer
              key={i}
              isSelected={currentSlide === i}
              selectIndex={updateCarousel}
              index={i}
              scrollButtons={scrollButtons}
            />
          );
        })}
      </div>
    </>
  );
};

export default CarouselComponent;
