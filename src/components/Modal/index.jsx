import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import i from './index.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyUp);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyUp);
  }
  handelKeyUp = e => {
    if (e.code === 'Escape') {
      this.addCloseClass();
      setTimeout(() => {
        this.props.onClose();
      }, 1000);
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.addCloseClass();
      setTimeout(() => {
        this.props.onClose();
      }, 1000);
    }
  };
  addCloseClass = () => {
    const Overlay = document.querySelector('#CloseAnimateOverlay');
    const Modal = document.querySelector('#CloseAnimateModal');
    Overlay.classList.add(`${i.CloseAnimate}`);
    Modal.classList.add(`${i.CloseAnimate}`);
  };
  render() {
    return createPortal(
      <div
        id="CloseAnimateOverlay"
        className={i.Overlay}
        onClick={this.handleBackdropClick}
      >
        <div id="CloseAnimateModal" className={i.Modal}>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
