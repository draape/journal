import React from "react"

import HeartIcon from "../../../static/heart.svg"
import CommentIcon from "../../../static/comment.svg"
import DownloadIcon from "../../../static/download.svg"
import "./controls.scss"

const Controls = ({ isLiked, hasComments }) => (
  <div className={"controls"}>
    <a
      href={"#like"}
      className={`controls__button controls__button--like ${
        isLiked ? "active" : ""
      }`}
    >
      <HeartIcon />
    </a>
    <a
      href={"#comment"}
      className={`controls__button controls__button--comment ${
        hasComments ? "active" : ""
      }`}
    >
      <CommentIcon />
    </a>
    <a
      href={"#download"}
      className={"controls__button controls__button--download"}
    >
      <DownloadIcon />
    </a>
  </div>
)

export default Controls
