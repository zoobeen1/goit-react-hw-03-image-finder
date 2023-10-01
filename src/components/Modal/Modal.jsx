import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import { createPortal } from 'react-dom';
// const modalRoot = document.getElementById('modal-root');
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('Escape pressed');
      }
    });
  }

  componentWillUnmount() {}

  render() {
    const { children } = this.props;
    return createPortal(
      <StyledOverlay>
        <StyledModal>{children}</StyledModal>
      </StyledOverlay>,
      modalRoot
    );
  }
}
