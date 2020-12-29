import React from "react"

import Header from "components/header"

import "../../styles/site.scss"

const Layout = ({ children }) => (
  <div class="site">
    <Header />
    <div className="content">{children}</div>
  </div>
)

export default Layout
