import React from 'react'
import './style.scss'

export interface IframeProps {
  lazyValue: string // this is actually html
}

/**
 * Displays an Iframe of an url
 * @param lazyValue an url for the content, displayed only when in viewport
 * @returns
 */
const Iframe = ({ lazyValue }: IframeProps) => {
  return (
    <iframe
      className="kapix-frame"
      allowTransparency
      frameBorder="0"
      sandbox="allow-popups allow-forms allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      src={lazyValue}
    />
  )
}

export default Iframe
