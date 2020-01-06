import React from "react"

import { imageUrlFor } from "../../lib/image-url"
import { buildImageObj, buildPersonsList } from "../../lib/helpers"

import "./byline.scss"

const Byline = ({ author, taggedPersons, publishedDate }) => (
  <header className={"byline"}>
    <img
      className={"byline__author_image"}
      src={imageUrlFor(buildImageObj(author.image))
        .width(200)
        .height(200)
        .url()}
      alt={author.name}
    />
    <h2>
      <span className={"byline__author"}>{author.name}</span>
      {taggedPersons &&
        taggedPersons.length > 0 &&
        buildPersonsList(
          taggedPersons.map(person => person.name),
          true
        )}
      <br />
      {publishedDate &&
        new Date(publishedDate).toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
    </h2>
  </header>
)

export default Byline
