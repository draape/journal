import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className={"header"}>
    <h1 className={"header__site-title"}>{siteTitle}</h1>
  </header>
)

export default Header
