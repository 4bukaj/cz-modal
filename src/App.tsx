import React from "react";
import { useState } from "react";
import "./App.css";
import AddReviewModal from "./components/modal/AddReviewModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <AddReviewModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
