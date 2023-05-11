import axios from "axios";
import { useState, useEffect } from "react";

export default function Footer() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    axios
      .get("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((res) => setFact(res.data.text))
      .catch((err) => console.error(err));
  }, []);

  return (
    <footer id="footer">
      <h2>{fact}</h2>
    </footer>
  );
}
