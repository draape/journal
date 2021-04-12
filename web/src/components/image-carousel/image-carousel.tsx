import React from "react"
import ReactSwipe from "react-swipe"

import Image from "components/image/image"

interface ImageCarouselProps {
  images: { asset: any; alt: string }[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  let reactSwipeEl: any

  return (
    <div className="image-carousel">
      <ReactSwipe
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {images.map((image, key) => (
          <div>
            <Image
              imageAsset={image.asset}
              alt={image.alt}
              url={image.asset.url}
              key={key}
            />
          </div>
        ))}
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
    </div>
  )
}

export default ImageCarousel
