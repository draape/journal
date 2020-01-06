import React from "react"
import { graphql } from "gatsby"
import { imageUrlFor } from "../lib/image-url"
import {
  buildImageObj,
  mapEdgesToNodes,
  buildPersonsList,
} from "../lib/helpers"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout/Layout"
import Byline from "../components/byline/byline"
import PostBody from "../components/post-body/post-body"

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
                  src={imageUrlFor(buildImageObj(image.image))
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

            <div className={"likes"}>
              {post.likes &&
                post.likes.length > 0 &&
                "Likt av " +
                  buildPersonsList(post.likes.map(likes => likes.name))}
            </div>

            <PostBody text={post.text} />

            <div className={"comments"}>
              {post.comments &&
                post.comments.map(comment => (
                  <>
                    <h3>{comment.author.name}</h3>
                    <BlockContent blocks={comment.text} />
                  </>
                ))}
            </div>
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
            image {
              asset {
                _id
              }
            }
          }
          comments: _rawComments(resolveReferences: { maxDepth: 3 })
          likes {
            name
          }
        }
      }
    }
  }
`

export default PostPage
