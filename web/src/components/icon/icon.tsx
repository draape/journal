import React, { lazy, Suspense } from "react"

interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const Component = lazy(() => import(`../../../static/${name}.svg`))
  return (
    <Suspense fallback="">
      <Component />
    </Suspense>
  )
}

export default Icon
