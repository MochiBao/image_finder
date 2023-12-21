import React from 'react'
import ImagegalleryItem from '../imageGalleryItem/ImagegalleryItem'


const ImageGallery = ({data}) => {
  return (
    <ul className="gallery">
        {data.map(({id, webformatURL}) => {
            console.log(webformatURL)

            return (
            <ImagegalleryItem  key={id} webformatURL={webformatURL}/>
            )
        })}
    </ul>
  )
}

export default ImageGallery