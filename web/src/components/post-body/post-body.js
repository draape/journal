import React, { useState } from "react"
import Truncate from "react-truncate"
import blocksToHtml from "@sanity/block-content-to-html"

import "./post-body.scss"

const PostBody = ({ text }) => {
  const [expanded, setExpanded] = useState(false)

  const showMore = e => {
    e.preventDefault()
    setExpanded(true)
  }

  return (
    <div className={"post-body"}>
      <Truncate
        lines={!expanded && 3}
        ellipsis={
          <span>
            ...{" "}
            <a
              className={"post-body__show-more"}
              href="#show-more"
              onClick={showMore}
            >
              mer
            </a>
          </span>
        }
      >
        <div
          dangerouslySetInnerHTML={{
            __html: blocksToHtml({
              blocks: text,
            }),
          }}
        />
      </Truncate>
    </div>
  )
}

export default PostBody
