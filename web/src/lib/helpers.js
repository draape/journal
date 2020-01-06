export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function buildPersonsList(persons, prependComma = false) {
  return (
    (prependComma ? ", " : "") +
    [persons.slice(0, -1).join(", "), persons.slice(-1)[0]].join(
      persons.length < 2 ? "" : " og "
    )
  )
}
