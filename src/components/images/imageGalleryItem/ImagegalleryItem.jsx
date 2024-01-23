import React from 'react'
import s from './imageGalleryItem.module.css';

const ImagegalleryItem = ({webformatURL, largeImageURL, getLargeImage}) => {
    return(
        <li className={s.ImageGalleryItem} onClick={() => getLargeImage(largeImageURL)}>
             <img src={webformatURL} alt="" />
        </li>
    );

}

export default ImagegalleryItem