import React from 'react'
import ImagegalleryItem from '../imageGalleryItem/ImagegalleryItem'


const ImageGallery = ({data, getLargeImage}) => {
  return (
    <ul className="gallery">
        {data.map(({id, webformatURL, largeImageURL}) => {

            return (
            <ImagegalleryItem  key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} getLargeImage={getLargeImage}/>
            )
        })}
    </ul>
  )
}

export default ImageGallery