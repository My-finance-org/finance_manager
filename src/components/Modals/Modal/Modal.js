import React from "react";
import classNames from "classnames";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children, className }) => {
  const clss = classNames("modal-content", {}, className);

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className={clss}>
            <button
              className="close-button"
              onClick={closeModal}
            >
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
