import axios from "axios";
import { Component } from "react";
import ImageGallery from "./components/images/imageGallery/ImageGallery";
import { ProgressBar } from "react-loader-spinner";
import SearchBar from "./components/searchbar/SearchBar";
import Modal from "./components/modal/Modal";


class App extends Component {
  state = {
    images: [],
    isLoading: false,
    dataInput: "cat",
    page: 1,
    openModal: false,
  };

  async componentDidMount() {
    this.setState({isLoading:true});
    const fetch= await axios.get(`https://pixabay.com/api/?q="cat"&key=35543000-cc8a37d4e982ce557296d34e8&image_type=photo&orientation=horizontal`)
    const data = fetch.data.hits;
    this.setState({images: data, isLoading: false})
    console.log(data)
    
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.dataInput !== prevState.dataInput ) {
      console.log(prevState)
      this.setState({isLoading:true});
      const fetch= await axios.get(`https://pixabay.com/api/?q=${this.state.dataInput}&key=35543000-cc8a37d4e982ce557296d34e8&image_type=photo&orientation=horizontal`)
      const data = fetch.data.hits;
      this.setState({images: data, isLoading: false})
    }
    
  }
  plusInputValue = (dataInput) => {
    console.log(dataInput);
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
      <SearchBar plusInputValue={this.plusInputValue}/>
      {isLoading === true ?  <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/> :  <ImageGallery data={this.state.images}/>}

      <Modal openModal={this.state.openModal} changeModal={this.changeModal} images={this.state.images}>
      <button onClick={() => this.changeModal}>Close</button>
      </Modal>
      <button onClick={() => this.changeModal}>Open</button>
      </>
    )
  }
};

export default App;



