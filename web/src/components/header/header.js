import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import Button from "components/button"

const Header = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          siteName
          logo {
            asset {
              fixed(width: 200) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    `
  )

  return (
    <header className="header">
      <Button className="header__add-button" icon="add">
        Add
      </Button>
      <GatsbyImage
        fixed={sanitySiteSettings.logo.asset.fixed}
        alt={sanitySiteSettings.siteName}
      />
      <Button className="header__search-button" icon="search">
        Search
      </Button>
    </header>
  )
}

export default Header
