import PropTypes from "prop-types";
import "@components/modal.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Modal({ setOpenModal }) {
  const [fact, setFact] = useState("");

  useEffect(() => {
    axios
      .get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((res) => setFact(res.data.text))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Nom du fromage</h1>
        </div>
        <div className="body">
          <p>description du fromage</p>
        </div>
        <p>{fact}</p>
        <div className="footer">
          <button
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};

export default Modal;
