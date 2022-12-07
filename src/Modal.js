import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-div">
        <div className="modal-div2">
          <button className="btn" onClick={() => closeModal(false)}>
            X
          </button>
          <h1>This is modal</h1>
          <h2>Do You want to continue ?</h2>
          <button className="btn">Continue</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
