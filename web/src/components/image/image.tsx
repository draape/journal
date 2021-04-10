import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import DownloadIcon from "../../../static/download.svg"

interface ImageProps {
  imageAsset: any
  alt: string
  url: string
}

const Image: React.FC<ImageProps> = ({ imageAsset, alt, url }) => {
  const img = getImage(imageAsset)

  return img ? (
    <div className="image">
      <GatsbyImage image={img} alt={alt} />
      <a href={url} className="image__download" download>
        <DownloadIcon />
      </a>
    </div>
  ) : null
}

export default Image
