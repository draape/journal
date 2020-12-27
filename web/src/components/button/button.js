import React from "react"
import cn from "classnames"

import Icon from "../icon/icon"

import "./button.scss"

const Button = ({ className, icon, children }) => (
  <button className={cn("button", className)}>
    {icon ? <Icon name={icon} /> : children}
  </button>
)

export default Button
