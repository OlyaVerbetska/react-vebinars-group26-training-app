import { Component } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    // console.log('click backdrop');
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
 this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick = {this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
