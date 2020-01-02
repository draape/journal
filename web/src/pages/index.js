import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { imageUrlFor } from "../lib/image-url"
import { buildImageObj, mapEdgesToNodes } from "../lib/helpers"
import Layout from "../components/layout/Layout"
import Byline from "../components/byline/byline"

const PostPage = props => {
  const posts =
    props.data && props.data.posts && mapEdgesToNodes(props.data.posts)

  return (
    <Layout>
      {posts &&
        posts.map(post => (
          <>
            <Byline
              author={post.author}
              taggedPersons={post.taggedPersons}
              publishedDate={post.published}
            />
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
    </Layout>
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
          published
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
