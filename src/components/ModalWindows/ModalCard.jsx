import { createPortal } from "react-dom";
import css from "./ModalCard.module.css";
import SvgIcons from "../SvgIcons/SvgIcons";
import { ModalContent } from "../ModalContent/ModalContent";

export const Modal = ({ carData, isOpen, closeFunc, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={css.bg_window}>
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
