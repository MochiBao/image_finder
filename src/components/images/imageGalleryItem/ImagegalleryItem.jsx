import React from 'react'

const ImagegalleryItem = ({webformatURL}) => {
    return(
        <li className="gallery-item">
             <img src={webformatURL} alt="" />
        </li>
    );

}

export default ImagegalleryItem