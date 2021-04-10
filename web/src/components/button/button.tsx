import React from "react"
import cn from "classnames"

import Icon from "components/icon/icon"

interface ButtonProps {
  className: string
  icon: string
}

const Button: React.FC<ButtonProps> = ({ className, icon, children }) => (
  <button className={cn("button", className)}>
    {icon ? <Icon name={icon} /> : children}
  </button>
)

export default Button
