import { useState } from "react";
import Modal from "@components/Modal";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import icon from "@assets/icons-marqueur.png";
import "../sass/home.scss";
import alcools from "@components/alcools_db";
import cheeses from "@components/Cheese_db";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="background-container" />{" "}
        <div className="map-container">
          {alcools.map((alcool) => (
            <button
              type="button"
              className={`openModalBtn ${alcool.class}`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <img src={icon} alt="icon" />
            </button>
          ))}
          {cheeses.map((cheese) => (
            <button
              type="button"
              className={`openModalBtn ${cheese.class}`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <img src={icon} alt="icon" />
            </button>
          ))}
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
}
