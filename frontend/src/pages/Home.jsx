import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import "../sass/home.scss";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

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
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Footer id="footer" />
    </div>
  );
}
