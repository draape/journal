import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Button from "components/button/button"

const Header: React.FC = () => {
  const { siteSettings } = useStaticQuery(
    graphql`
      query {
        siteSettings: sanitySiteSettings {
          siteName
          logo {
            asset {
              gatsbyImageData(height: 32, placeholder: NONE)
            }
          }
        }
      }
    `
  )

  const logo = getImage(siteSettings.logo?.asset)

  return (
    <header className="header">
      <Button className="header__add-button" icon="add">
        Add
      </Button>
      {logo ? (
        <GatsbyImage image={logo} alt={siteSettings.siteName} />
      ) : (
        <h1>{siteSettings.siteName}</h1>
      )}
      <Button className="header__search-button" icon="search">
        Search
      </Button>
    </header>
  )
}

export default Header
