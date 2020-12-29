import React from "react"
import { graphql } from "gatsby"

import { mapEdgesToNodes } from "lib/helpers"

import Layout from "components/layout"
import Post from "components/post"

const PostPage = props => {
  const posts =
    props.data && props.data.posts && mapEdgesToNodes(props.data.posts)

  return (
    <Layout>
      {posts && posts.map((post, key) => <Post post={post} key={key} />)}
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
