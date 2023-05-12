import React, { useEffect, useState } from "react";
import "../sass/Footer.scss";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [fact, setFact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-syntax
    console.log(name, email, message);
  };
  useEffect(() => {
    axios
      .get("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((res) => setFact(res.data.text))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="footer">
      <div className="contact-info">
        <h2>Contactez nous</h2>
        <form onSubmit={handleSubmit}>
          <div className="nameSection">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mailSection">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="msgSection">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <p>Do you know that {fact}</p>
    </div>
  );
}
