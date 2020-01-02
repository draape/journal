import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { imageUrlFor } from "../lib/image-url"

const mapEdgesToNodes = data => {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

const buildImageObj = source => {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

const PostPage = props => {
  const posts =
    props.data && props.data.posts && mapEdgesToNodes(props.data.posts)

  return (
    <>
      {posts &&
        posts.map(post => (
          <>
            {post.images &&
              post.images.map(image => (
                <img
                  src={imageUrlFor(buildImageObj(image))
                    .width(600)
                    .height(Math.floor((9 / 16) * 600))
                    .url()}
                />
              ))}

            <BlockContent blocks={post.text} />
          </>
        ))}
    </>
  )
}

export const query = graphql`
  query Posts {
    posts: allSanityPost {
      edges {
        node {
          id
          text: _rawText
          images {
            asset {
              _id
            }
          }
        }
      }
    }
  }
`

export default PostPage
