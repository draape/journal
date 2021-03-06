import React from "react"

import DownloadIcon from "../../../static/download.svg"

const Controls = ({ imageUrl }) => (
  <div className="controls">
    <a href={imageUrl} className="controls__download-button" download>
      <DownloadIcon />
    </a>
  </div>
)

export default Controls
