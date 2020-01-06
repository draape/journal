import React from "react"

import HeartIcon from "../../../static/heart.svg"
import CommentIcon from "../../../static/comment.svg"
import DownloadIcon from "../../../static/download.svg"
import "./controls.scss"

const Controls = () => (
  <div className={"controls"}>
    <a href={"#like"} className={"controls__button"}>
      <HeartIcon />
    </a>
    <a href={"#comment"} className={"controls__button"}>
      <CommentIcon />
    </a>
    <a href={"#download"} className={"controls__button"}>
      <DownloadIcon />
    </a>
  </div>
)

export default Controls
