import axios from "axios";
import { Component } from "react";
import ImageGallery from "./components/images/imageGallery/ImageGallery";
import { ProgressBar } from "react-loader-spinner";
import SearchBar from "./components/searchbar/SearchBar";
import Modal from "./components/modal/Modal";
import Pagination from "./components/pagination/Pagination";
import { request } from "./API/Request";



class App extends Component {
  state = {
    images: [],
    isLoading: false,
    dataInput: "",
    page: 1,
    openModal: false,
    largeImage: "",
    snapshot: null,
  };

  async componentDidMount() {
    this.updateImages();
    
  };

  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight;
    
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.images !== this.state.images) {
      this.setState({snapshot})
      window.scrollTo({top: this.state.snapshot, behavior: "smooth"})
    }
    if (this.state.dataInput !== prevState.dataInput || this.state.page !== prevState.page) {
      this.updateImages();
    }; 
    
  }
   
   updateImages = async() => {
    this.setState({isLoading:true});
    const data= await request(this.state.dataInput, this.state.page);
    console.log(data);
    this.setState((prevState) => ({images: [...prevState.images, ...data]}));
    this.setState({isLoading: false});
  }
  plusPage = () => {
    this.setState((prevState) => ({page: prevState.page + 1}))
  };


  getLargeImage = (url) => {
    this.setState({
      largeImage: url,
    })
    this.changeModal()
  }
  plusInputValue = (dataInput) => {
    this.setState({images: [], page: 1})
    this.setState({dataInput})
   

  };

changeModal = () => {
  this.setState({
      openModal: !this.state.openModal
  });
}; 
 
  render() {
    const {isLoading} = this.state;
    return (
      <>
      {this.state.openModal && <Modal openModal={this.state.openModal} changeModal={this.changeModal} largeImage={this.state.largeImage}/>}
       
      <SearchBar plusInputValue={this.plusInputValue}/>
      {isLoading === true ?  <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/> :  <ImageGallery data={this.state.images} getLargeImage={this.getLargeImage}/> }
<Pagination plusPage={this.plusPage}/>

     
      
      </>
    )
  }
};

export default App;



