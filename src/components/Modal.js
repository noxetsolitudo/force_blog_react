import React from 'react';

const Modal = ({ show, children, onClose }) => {
  return (
    <div>
      {show ? (
        <div className="modal-backdrop">
          <div className="flex-col ">
            <button className="btn close-button myt-25vw" onClick={onClose}>
              x
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
