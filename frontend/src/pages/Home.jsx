import { useState } from "react";
import Modal from "@components/Modal";

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
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}
