import React from "react"
import { graphql } from "gatsby"
import { imageUrlFor } from "../lib/image-url"
import { buildImageObj, mapEdgesToNodes } from "../lib/helpers"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout/Layout"
import Byline from "../components/byline/byline"
import Controls from "../components/controls/controls"
import Likes from "../components/likes/likes"
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
                    .height(600)
                    .url()}
                />
              ))}

            <Controls />

            <Likes persons={post.likes} />

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
