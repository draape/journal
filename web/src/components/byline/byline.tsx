import React from "react"

import { buildPersonsList } from "lib/helpers"

interface BylineProps {
  taggedPersons: any
  publishedDate: Date
}

const Byline: React.FC<BylineProps> = ({ taggedPersons, publishedDate }) => (
  <header className="byline">
    <h2 className="byline__date">
      {publishedDate &&
        new Date(publishedDate).toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
    </h2>
    <span className="byline__persons">
      —{" "}
      {taggedPersons &&
        taggedPersons.length > 0 &&
        buildPersonsList(
          taggedPersons.map(person => person.name),
          false
        )}
    </span>
  </header>
)

export default Byline
