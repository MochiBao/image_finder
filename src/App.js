import React, { useEffect, useState } from 'react'
import ImageGallery from "./components/images/imageGallery/ImageGallery";
import { ProgressBar } from "react-loader-spinner";
import SearchBar from "./components/searchbar/SearchBar";
import Modal from "./components/modal/Modal";
import Pagination from "./components/pagination/Pagination";
import { request } from "./API/Request";


const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataInput, setDataInput] = useState("");
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  
  const updateImages = async() => {
    setIsLoading(true);
    const data= await request(dataInput, page);
    setImages([...images, ...data]);
    setIsLoading(false);
  };

  
  useEffect(() => {
    updateImages();
  }, []);

  useEffect(() => {
    if (dataInput === "") return;
    updateImages()
  }, [dataInput, page])
  
   
 

  const plusPage = () => {
    setPage(page + 1)
  };


  const getLargeImage = (url) => {
    setLargeImage(url)
    changeModal()
  }
  const plusInputValue = (dataInput) => {
    setImages([]);
    setPage(1)
    setDataInput(dataInput)
  };

  const changeModal = () => {
  setOpenModal(!openModal);
}; 

 return (
  <>
  {openModal && <Modal openModal={openModal} changeModal={changeModal} largeImage={largeImage}/>}
   
  <SearchBar plusInputValue={plusInputValue}/>
  {isLoading === true ?  <ProgressBar
height="80"
width="80"
ariaLabel="progress-bar-loading"
wrapperStyle={{}}
wrapperClass="progress-bar-wrapper"
borderColor = '#F4442E'
barColor = '#51E5FF'
/> :  <ImageGallery data={images} getLargeImage={getLargeImage}/> }
<Pagination plusPage={plusPage}/>
  </>
 )
 
}

export default App





