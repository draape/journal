import React, { useState } from "react"

import Truncate from "react-truncate"
import BlockContent from "@sanity/block-content-to-react"

interface PostBodyProps {
  text: any[]
}

const PostBody: React.FC<PostBodyProps> = ({ text }) => {
  const [expanded, setExpanded] = useState(false)

  const showMore = (e: React.MouseEvent) => {
    e.preventDefault()
    setExpanded(true)
  }

  return (
    <div className="post-body">
      <Truncate
        lines={!expanded && 3}
        ellipsis={
          <span>
            ...{" "}
            <a
              className="post-body__show-more"
              href="#show-more"
              onClick={showMore}
            >
              mer
            </a>
          </span>
        }
      >
        <BlockContent blocks={text} />
      </Truncate>
    </div>
  )
}

export default PostBody
