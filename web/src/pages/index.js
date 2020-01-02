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
            <header className={"people"}>
              <img
                src={imageUrlFor(buildImageObj(post.author.image))
                  .width(50)
                  .height(50)
                  .url()}
                alt={post.author.name}
              />
              <h2>
                <span className={"author"}>{post.author.name}</span>
                {post.taggedPersons.map(person => {
                  return person.name
                })}
              </h2>
            </header>
            {post.images &&
              post.images.map(image => (
                <img
                  src={imageUrlFor(buildImageObj(image))
                    .width(600)
                    .height(Math.floor((9 / 16) * 600))
                    .url()}
                />
              ))}

            <div className={"controls"}>
              <a href="#like">Like</a>
              <a href="#comment">Comment</a>
              <a href="#download">Download</a>
            </div>

            <div className={"likers"}>Someone likes this</div>

            <BlockContent blocks={post.text} />

            <div className={"comments"}>No comments yet</div>
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
          author {
            name
            image {
              asset {
                _id
              }
            }
          }
          taggedPersons {
            name
          }
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
