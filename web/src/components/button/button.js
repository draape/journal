import React from "react"
import cn from "classnames"

import Icon from "components/icon"

const Button = ({ className, icon, children }) => (
  <button className={cn("button", className)}>
    {icon ? <Icon name={icon} /> : children}
  </button>
)

export default Button
