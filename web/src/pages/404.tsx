import React from "react"

import Layout from "components/layout/layout"
import ArticleContent from "components/article-content/article-content"

const NotFound: React.FC = () => (
  <Layout>
    <ArticleContent>
      <h1>Fant ikke siden</h1>
      <p>Siden du prøver å nå finnes ikke.</p>
    </ArticleContent>
  </Layout>
)

export default NotFound
