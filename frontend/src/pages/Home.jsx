import { useState } from "react";
import Modal from "@components/Modal";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="background-container" />{" "}
        <div className="map-container">
          <button
            type="button"
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <img src={icon} alt="icon" />
          </button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
}
