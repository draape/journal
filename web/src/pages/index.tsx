import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout/layout"
import Post, { PostProps } from "components/post/post"

interface IndexProps {
  data: {
    posts: {
      nodes: PostProps[]
    }
  }
}

const Index: React.FC<IndexProps> = ({ data: { posts } }) => (
  <Layout>
    {posts && posts.nodes.map((post, key) => <Post {...post} key={key} />)}
  </Layout>
)

export const query = graphql`
  query Posts {
    posts: allSanityPost {
      nodes {
        id
        published
        taggedPersons {
          name
        }
        text: _rawText
        images {
          asset {
            gatsbyImageData(width: 550, aspectRatio: 1)
            url
          }
        }
      }
    }
  }
`

export default Index
