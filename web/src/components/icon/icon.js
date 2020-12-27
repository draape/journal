import React from "react"
import cn from "classnames"

import "./icon.scss"

const Icon = ({ className, name }) =>
  !name ? null : <div className={cn("icon", `icon--${name}`, className)} />

export default Icon
