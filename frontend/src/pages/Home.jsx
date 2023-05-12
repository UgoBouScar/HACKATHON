import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Apropos from "@components/Apropos";
import "../sass/home.scss";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import cheeses from "@components/Cheese_db";
import alcools from "@components/alcools_db";
import "../sass/markers.scss";

export default function Home() {
  const position = [46.6, 2.3];

  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="background-container" />{" "}
        <MapContainer center={position} zoom={6} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=McYADq7lgecAAVwN3GCeSwc0WCe3wJfiJ24b9ZPih0E4lvvz1nunyyZU3zcBk9Si"
          />
          {cheeses.map((cheese) => (
            <Marker
              position={cheese.position_marker}
              key={cheese.id}
              className="cheeses"
            >
              <Popup>
                <h2>{cheese.name}</h2>
                <img src={cheese.image} alt="cheese" className="product-img" />
                <p>{cheese.description}</p>
              </Popup>
            </Marker>
          ))}
          {alcools.map((alcool) => (
            <Marker
              position={alcool.position_marker}
              key={alcool.id}
              className="alcools"
            >
              <Popup>
                <h2>{alcool.nom}</h2>
                <img src={alcool.image} alt="alcool" className="product-img" />
                <p> {alcool.description} </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <Apropos id="aboutUs" />
      <Footer id="footer" />
    </div>
  );
}
