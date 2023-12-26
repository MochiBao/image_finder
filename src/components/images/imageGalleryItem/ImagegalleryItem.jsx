import React from 'react'

const ImagegalleryItem = ({webformatURL, largeImageURL, getLargeImage}) => {
    return(
        <li className="gallery-item" onClick={() => getLargeImage(largeImageURL)}>
             <img src={webformatURL} alt="" />
        </li>
    );

}

export default ImagegalleryItem