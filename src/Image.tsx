import React from 'react'

import ModalImage from 'react-modal-image'

interface IProps {
  thumbSrc: string
  imgSrc: string
}

function Image({ thumbSrc, imgSrc }: IProps) {
  return (
    <div className="max-w-sm mb-1">
      <ModalImage
        hideDownload
        hideRotate
        hideZoom
        imageBackgroundColor="white"
        small={thumbSrc}
        large={imgSrc}
      />
    </div>
  )
}

export default Image
