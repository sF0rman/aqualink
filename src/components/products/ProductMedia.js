import React from 'react'
import ImageViewer from '../ImageViewer';

const ProductMedia = ({ images }) => {
  return (
    <div className="flex flex-space-evenly">
      {images && images.map(img => <ImageViewer url={`${process.env.REACT_APP_API_URL}/media/img/${img.image_url}`} key={img.id} />)}
    </div>
  )
}

export default ProductMedia;