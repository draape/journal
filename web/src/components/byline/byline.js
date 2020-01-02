import React from "react"

import { imageUrlFor } from "../../lib/image-url"
import { buildImageObj } from "../../lib/helpers"

import "./byline.scss"

const buildPersonsList = persons => {
  return (
    ", " +
    [persons.slice(0, -1).join(", "), persons.slice(-1)[0]].join(
      persons.length < 2 ? "" : " og "
    )
  )
}

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
        buildPersonsList(taggedPersons.map(person => person.name))}
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
