import React from "react"
import { graphql } from "gatsby"
import ReactSwipe from "react-swipe"

import Image from "components/image/image"

interface IndexProps {
  data: {
    sanityPost: {
      images: any[]
    }
  }
}

const Test: React.FC<IndexProps> = ({ data: { sanityPost } }) => {
  let reactSwipeEl

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {sanityPost.images.map((image, key) => (
          <div>
            <Image
              imageAsset={image.asset}
              alt={image.alt}
              url={image.asset.url}
              key={key}
            />
          </div>
        ))}
        {/* <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div> */}
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
    </div>
  )
}

export const query = graphql`
  query Images {
    sanityPost(id: { eq: "-b880c89a-4a12-5043-a9d0-a06483b2f02b" }) {
      id
      images {
        alt
        asset {
          gatsbyImageData(width: 550, aspectRatio: 1)
          url
        }
      }
    }
  }
`

export default Test
