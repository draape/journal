import React from "react"

import Header from "components/header"

import "../../styles/site.scss"

const Layout = ({ children }) => (
  <div className="site">
    <Header />
    <div className="content">{children}</div>
  </div>
)

export default Layout
