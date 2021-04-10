import React from "react"
import cn from "classnames"

interface IconProps {
  className?: string
  name: string
}

const Icon: React.FC<IconProps> = ({ className, name }) =>
  !name ? null : <div className={cn("icon", `icon--${name}`, className)} />

export default Icon
