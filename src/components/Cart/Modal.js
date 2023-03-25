import ReactDOM from 'react-dom'

import classes from "./Modal.module.css";


function Overlay(props) {
    return <div className={classes.overlay}>{props.children}</div>
}

function ModalOverlay(props){
    return <div className={classes.modalOverlay}>
        <div>{props.children}</div>
    </div>
}

function Modal (props){
    return <>
   {ReactDOM.createPortal(<Overlay />,document.getElementById("overlay"))};
    {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,document.getElementById("model"))};
    </>
  }
  
  export default Modal;