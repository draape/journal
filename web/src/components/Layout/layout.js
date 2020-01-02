import React from "react"

import Header from "../header/header"

import "../../styles/site.scss"
import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <Header siteTitle={"Site title"} />
    <div className={"content"}>{children}</div>
  </>
)

export default Layout
