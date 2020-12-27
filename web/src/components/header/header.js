import React from "react"

import Button from "../button/button"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Button className="header__add-button" icon="add">
      Add
    </Button>
    <h1 className="header__site-title">{siteTitle}</h1>
    <Button className="header__search-button" icon="search">
      Search
    </Button>
  </header>
)

export default Header
