import React from "react"
import loadable from "@loadable/component"

interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const Component = loadable(() => import(`../../../static/${name}.svg`))
  return <Component />
}

export default Icon
