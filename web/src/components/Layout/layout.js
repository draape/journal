import React from "react"

import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <div className={"content"}>{children}</div>
  </>
)

export default Layout
