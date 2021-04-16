import React, { useState, useRef, useMemo } from "react"
import ReactSwipe from "react-swipe"

import Image from "components/image/image"
import SlideIndicator from "./slide-indicator"

import ArrowLeft from "../../../static/arrow-left.svg"
import ArrowRight from "../../../static/arrow-right.svg"

interface ImageCarouselProps {
  images: { asset: any; alt: string }[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const reactSwipeEl = useRef<ReactSwipe>()

  const [position, setPosition] = useState(0)

  const swipeOptions = useMemo(
    () => ({
      continuous: false,
      transitionEnd() {
        setPosition(reactSwipeEl.current?.getPos() || 0)
      },
    }),
    []
  )

  return (
    <div className="image-carousel">
      <ReactSwipe swipeOptions={swipeOptions} ref={reactSwipeEl}>
        {images.map((image, key) => (
          <div key={key}>
            <Image
              imageAsset={image.asset}
              alt={image.alt}
              url={image.asset.url}
            />
          </div>
        ))}
      </ReactSwipe>
      <div className="image-carousel__navigation">
        <SlideIndicator
          className="image-carousel__slide-indicator"
          currentSlide={position}
          totalSlides={images.length}
        />
        <div className="image-carousel__navigation-buttons">
          <button
            className="image-carousel__prev-button"
            onClick={() => reactSwipeEl.current?.prev()}
          >
            <ArrowLeft />
          </button>
          <button
            className="image-carousel__next-button"
            onClick={() => reactSwipeEl.current?.next()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
