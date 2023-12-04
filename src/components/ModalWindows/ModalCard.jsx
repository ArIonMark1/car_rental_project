import { createPortal } from 'react-dom';
import css from './ModalCard.module.css';
import SvgIcons from '../SvgIcons/SvgIcons';
import { ModalContent } from '../ModalContent/ModalContent';
import { useEffect } from 'react';

export const Modal = ({ isOpen, closeFunc }) => {
  if (!isOpen) return null;
  const handleClose = (evt) => {
    if (evt.target.className === css.bg_window) {
      closeFunc();
    }
  };

  useEffect(() => {
    const handleKeyPress = (evt) => {
      if (evt.key === 'Escape') closeFunc();
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return createPortal(
    <div className={css.bg_window} onClick={handleClose}>
      <div className={css.modal}>
        <button className={css.close_btn} onClick={closeFunc}>
          <span>
            <SvgIcons styles={css.btn_icon} id="close" />
          </span>
        </button>
        <ModalContent />
      </div>
    </div>,
    document.body
  );
};
