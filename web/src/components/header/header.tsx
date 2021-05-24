import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Button from "components/button/button"

const Header: React.FC = () => {
  const { siteSettings } = useStaticQuery(
    graphql`
      query {
        siteSettings: sanitySiteSettings {
          siteName
          siteUrl
          logo {
            asset {
              url
            }
          }
        }
      }
    `
  )

  return (
    <header className="header">
      <Helmet>
        <link
          rel="icon"
          type="image/svg+xml"
          href={siteSettings.logo.asset.url}
        />
      </Helmet>
      <Button
        className="header__add-button"
        icon="add"
        onClick={() => window.location.assign(siteSettings.siteUrl)}
      >
        Add
      </Button>
      <img src={siteSettings.logo.asset.url} alt={siteSettings.siteName} />
      <Button className="header__search-button" icon="search">
        Search
      </Button>
    </header>
  )
}

export default Header
