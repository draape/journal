import React from "react"

import { imageUrlFor } from "../../lib/image-url"
import { buildImageObj } from "../../lib/helpers"
//import "./image-carousel.scss"

const ImageCarousel = ({ images }) => (
  <div className={"image-carousel"}>
    {images &&
      images.map(image => (
        <img
          src={imageUrlFor(buildImageObj(image.image))
            .width(600)
            .height(600)
            .url()}
        />
      ))}
  </div>
)

export default ImageCarousel
