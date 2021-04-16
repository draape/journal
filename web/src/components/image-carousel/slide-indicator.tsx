import React from "react"
import cn from "classnames"

interface SlideIndicatorProps {
  className?: string
  currentSlide: number
  totalSlides: number
}

const SlideIndicator: React.FC<SlideIndicatorProps> = ({
  className,
  currentSlide,
  totalSlides,
}) => {
  const marks = []
  for (let i = 0; i < totalSlides; i++) {
    marks.push({ current: i === currentSlide })
  }
  return (
    <div className={cn("slide-indicator", className)}>
      {marks.map((mark, key) => (
        <span
          className={cn("slide-indicator__mark", {
            "slide-indicator__mark--current": mark.current,
          })}
          key={key}
        ></span>
      ))}
    </div>
  )
}

export default SlideIndicator
