import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout/layout"
import Post from "components/post/post"

interface IndexProps {
  data: {
    posts: {
      nodes: {
        id: string
        published: Date
        taggedPersons: { name: string }
        text: object[]
      }[]
    }
  }
}

const Index: React.FC<IndexProps> = ({ data: { posts } }) => (
  <Layout>
    {posts && posts.nodes.map((post, key) => <Post post={post} key={key} />)}
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
      }
    }
  }
`

export default Index
