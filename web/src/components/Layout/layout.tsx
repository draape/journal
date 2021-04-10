import React from "react"

import Header from "components/header/header"

import "../../styles/site.scss"

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <div className="content">{children}</div>
  </div>
)

export default Layout
