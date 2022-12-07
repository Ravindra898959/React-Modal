import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [state, setState] = useState(false);

  const handlemodal = () => {
    setState(true);
  };

  return (
    <>
      <div className="main-div">
        <h1>Click the button to open the Modal</h1>
        <button className="btn" onClick={handlemodal}>
          Open
        </button>
        {state ? <Modal closeModal={setState} /> : <h1>"MODAL CLOSED"</h1>}
      </div>
    </>
  );
};

export default App;
