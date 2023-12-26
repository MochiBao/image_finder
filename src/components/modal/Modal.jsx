import { Component } from "react"
import { createPortal } from "react-dom";
import s from './modal.module.css'
const modalRoot = document.querySelector("#modal-root");
const overlay = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(199, 41, 41, 0.8)",
    zIndex: "1200",
};

// modal = {
//     background-color: crimson,
//     max-width: calc(100vw - 48px),
//     max-height: calc(100vh - 24px),
// }
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
    render () {
        console.log(this.props.largeImage)
        return createPortal(
        <>
            <div className={s.overlay} onClick={this.props.changeModal}>
                <div className={s.modal}>
                        <img src={this.props.largeImage} alt="" />
                </div>  
            </div>
        </>
          ,modalRoot 
        )

    }
}


// if (this.state.openModal === true) {
    
// }
export default Modal 