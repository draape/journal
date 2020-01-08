import React, { useState } from "react"
import BlockContent from "@sanity/block-content-to-react"

import { imageUrlFor } from "../../lib/image-url"
import { buildImageObj } from "../../lib/helpers"

import "./comment-list.scss"

const CommentList = ({ comments }) => {
  const [isCommentsVisible, showComments] = useState(false)

  const show = e => {
    e.preventDefault()
    showComments(true)
  }

  return (
    <>
      {comments &&
        comments.length > 0 &&
        (isCommentsVisible === false ? (
          <div className={"comment-summary"}>
            <a href="#showComments" onClick={show}>
              Vis {comments.length}{" "}
              {comments.length === 1 ? "kommentar" : "kommentarer"}
            </a>
          </div>
        ) : (
          <div className={"comment-list"}>
            {comments &&
              comments.map(comment => (
                <div className={"comment"}>
                  <img
                    className={"comment__author_image"}
                    src={imageUrlFor(buildImageObj(comment.author.image))
                      .width(60)
                      .height(60)
                      .url()}
                    alt={comment.author.name}
                  />
                  <h3 className={"comment__byline"}>
                    {comment.author.name}&nbsp;
                    <span className={"comment__published"}>
                      {new Date(comment.published).toLocaleDateString(
                        undefined,
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </h3>
                  <BlockContent blocks={comment.text} />
                </div>
              ))}
          </div>
        ))}
    </>
  )
}

export default CommentList
