import React from "react"
import cn from "classnames"

import Icon from "../icon/icon"
import "./controls.scss"

const Controls = ({ isLiked, hasComments }) => (
  <div className="controls">
    <a
      href="#like"
      className={cn("controls__button", {
        "controls__button--like-filled": isLiked,
        "controls__button--like": !isLiked,
      })}
    >
      {isLiked ? <Icon name="heart-filled" /> : <Icon name="heart" />}
    </a>
    <a
      href="#comment"
      className={cn("controls__button", "controls__button--comment", {
        active: hasComments,
      })}
    >
      <Icon name="comment" />
    </a>
    <a
      href="#download"
      className={cn("controls__button", "controls__button--download")}
    >
      <Icon name="download" />
    </a>
  </div>
)

export default Controls
