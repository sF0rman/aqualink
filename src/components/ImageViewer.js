import React, { useState } from 'react'

const ImageViewer = ({ url }) => {
  const [full, setFull] = useState(false);

  const open = () => setFull(true);
  const close = () => setFull(false);

  return (
    <div>
      {full && (
        <div className="fullImg">
          <button className="x" onClick={close}>X</button>
          <img className="media_image" src={url} alt={url} />
        </div>
      )}
      <div className="media_img" onClick={open}>
        <img className="media_image" src={url} alt={url} />
      </div>
    </div>
  )
}

export default ImageViewer;