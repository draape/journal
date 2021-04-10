export function buildPersonsList(persons: string[], prependComma = false) {
  return (
    (prependComma ? ", " : "") +
    [persons.slice(0, -1).join(", "), persons.slice(-1)[0]].join(
      persons.length < 2 ? "" : " og "
    )
  )
}
