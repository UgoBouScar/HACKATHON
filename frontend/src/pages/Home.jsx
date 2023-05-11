import { useState } from "react";
import Modal from "@components/Modal";
import icon from "@assets/icons-marqueur.png";
import "@components/home.scss";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
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
  );
}
