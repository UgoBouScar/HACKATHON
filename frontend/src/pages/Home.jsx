import { useState } from "react";
import Modal from "@components/Modal";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import icon from "@assets/icons-marqueur.png";
import "@components/home.scss";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <NavBar />
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
      <Footer id="footer" />
    </div>
  );
}
