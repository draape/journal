import React from "react"

import { buildPersonsList } from "lib/helpers"

const Likes = ({ persons }) => (
  <div className="likes">
    {persons &&
      persons.length > 0 &&
      "Likt av " + buildPersonsList(persons.map(person => person.name))}
  </div>
)

export default Likes
