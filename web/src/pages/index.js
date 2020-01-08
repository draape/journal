import React from "react"
import { graphql } from "gatsby"

import { mapEdgesToNodes } from "../lib/helpers"

import Layout from "../components/layout/Layout"
import Byline from "../components/byline/byline"
import ImageCarousel from "../components/image-carousel/image-carousel"
import Controls from "../components/controls/controls"
import Likes from "../components/likes/likes"
import PostBody from "../components/post-body/post-body"
import CommentList from "../components/comment-list/comment-list"

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
            <ImageCarousel images={post.images} />
            <Controls />
            <Likes persons={post.likes} />
            <PostBody text={post.text} />
            <CommentList comments={post.comments} />
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
