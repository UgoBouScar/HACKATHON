import React, { useState } from "react";
import "../sass/Footer.scss";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-syntax
    console.log(email, message);
  };

  return (
    <div className="footer">
      <img
        className="footer--img"
        src="../src/assets/image_footer.jpg"
        alt="imagefooter"
      />
      <div className="contact-info">
        <h2>Contactez nous</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="contact-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
