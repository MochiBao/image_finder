import { Component } from "react"

class Modal extends Component {

    closeModal = (e) => {
        if(e.code ==="Escape" ){
            this.props.changeModal()
        };
    };
   
    componentDidMount() {
        window.addEventListener("keydown", this.closeModal)
    };

    componentWillUnmount() {
        window.removeEventListener("keydown", this.closeModal)
    }
    render ({images}) {
        return (
        <>
            <div class="overlay" onClick={this.props.changeModal}>
                <div class="modal">
                    {images.map(({largeImageURL}) => {
                        <img src={largeImageURL} alt="" />
                    })}
                </div>  
            </div>
        </>
           
        )
    }
}


// if (this.state.openModal === true) {
    
// }
export default Modal 