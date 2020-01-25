import React, { useState, useEffect } from "react"

import { imageUrlFor } from "../../lib/image-url"
import { buildImageObj } from "../../lib/helpers"

import "./image-carousel.scss"

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [movement, setMovement] = useState(0)
  const [lastTouch, setLastTouch] = useState(0)
  const [transitionDuration, setTransitionDuration] = useState("0s")
  const maxLength = images.length - 1
  const maxMovement = maxLength * 600

  useEffect(() => {
    const wheelTimeout = setTimeout(() => {
      handleMovementEnd()
    }, 100)
    return () => clearTimeout(wheelTimeout)
  }, [movement])

  const handleWheel = e => {
    handleMovement(e.deltaX)
  }

  const handleTouchStart = e => {
    setLastTouch(e.nativeEvent.touches[0].clientX)
  }

  const handleTouchMove = e => {
    const delta = lastTouch - e.nativeEvent.touches[0].clientX
    setLastTouch(e.nativeEvent.touches[0].clientX)
    handleMovement(delta)
  }

  const handleTouchEnd = () => {
    handleMovementEnd()
    setLastTouch(0)
  }

  const handleMovement = delta => {
    let nextMovement = movement + delta

    if (nextMovement < 0) {
      nextMovement = 0
    }

    if (nextMovement > maxLength * 600) {
      nextMovement = maxLength * 600
    }

    console.log(movement + " " + delta + " " + nextMovement)
    setMovement(nextMovement)
    setTransitionDuration("0s")
  }

  const handleMovementEnd = () => {
    const endPosition = movement / 600
    const endPartial = endPosition % 1
    const endingIndex = endPosition - endPartial
    const deltaInteger = endingIndex - currentIndex

    let nextIndex = endingIndex

    if (deltaInteger >= 0) {
      if (endPartial >= 0.1) {
        nextIndex += 1
      }
    } else if (deltaInteger < 0) {
      nextIndex = currentIndex - Math.abs(deltaInteger)
      if (endPartial > 0.9) {
        nextIndex += 1
      }
    }

    transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)))
  }

  const transitionTo = (index, duration) => {
    setCurrentIndex(index)
    setMovement(index * 600)
    setTransitionDuration(`${duration}s`)
  }

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setTransitionDuration("0s")
    }, transitionDuration * 100)
    return () => clearTimeout(transitionTimeout)
  }, [currentIndex])

  return (
    <div
      className={"image-carousel"}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={"image-carousel__swiper"}
        style={{
          transform: `translateX(${movement * -1}px)`,
          transitionDuration: transitionDuration,
        }}
      >
        {images.map(image => (
          <img
            className={"image-carousel__image"}
            src={imageUrlFor(buildImageObj(image.image))
              .width(600)
              .height(600)
              .url()}
          />
        ))}
      </div>
      {movement !== 0 && (
        <button
          className={"image-carousel__back"}
          onClick={() => {
            transitionTo(currentIndex - 1, 0.5)
          }}
        >
          ←
        </button>
      )}
      {movement !== maxMovement && (
        <button
          className={"image-carousel__next"}
          onClick={() => {
            transitionTo(currentIndex + 1, 0.5)
          }}
        >
          →
        </button>
      )}
    </div>
  )
}

export default ImageCarousel
