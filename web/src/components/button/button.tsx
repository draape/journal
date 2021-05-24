import React from "react"
import cn from "classnames"

import Icon from "components/icon/icon"

interface ButtonProps {
  className: string
  icon: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  onClick,
  children,
}) => (
  <button className={cn("button", className)} onClick={onClick}>
    {icon ? <Icon name={icon} /> : children}
  </button>
)

export default Button
