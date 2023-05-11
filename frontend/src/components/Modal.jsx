import PropTypes from "prop-types";
import "@components/modal.scss";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Nom du fromage</h1>
        </div>
        <div className="body">
          <p>description du fromage</p>
        </div>
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
