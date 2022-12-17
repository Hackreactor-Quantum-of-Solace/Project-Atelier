import React from "react";
import ReactDOM from "react-dom";



export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.el = document.createElement('div');
    this.state = {
      modal: document.createElement('div')
    }
  }
  componentDidMount() {
    const modalRoot = document.getElementsByClassName('modal-container')[0];
    modalRoot.appendChild(this.state.modal);

  }
  componentWillUnmount() {
    const modalRoot = document.getElementsByClassName('modal-container')[0];
    modalRoot.removeChild(this.state.modal);

  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.state.modal
    );
  }
}