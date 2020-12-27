import React from "react"

import Header from "../header/header"

import "../../styles/site.scss"
import "./layout.scss"

const Layout = ({ children }) => (
  <div class="site">
    <Header />
    <div className="content">{children}</div>
  </div>
)

export default Layout
