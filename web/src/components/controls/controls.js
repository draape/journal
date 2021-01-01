import React from "react"

import { ReactComponent as DownloadIcon } from "static/download.svg"

const Controls = () => (
  <div className="controls">
    <a href="#download" className="controls__download-button">
      <DownloadIcon />
    </a>
  </div>
)

export default Controls
