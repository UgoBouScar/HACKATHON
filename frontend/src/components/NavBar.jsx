import "../sass/NavBar.scss";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <header>
      <nav>
        <img src="./src/assets/logo.png" alt="CHEESE N CHEERS" />
        <Link className="linkFooter" to="footer" spy smooth duration={500}>
          A propos
        </Link>
      </nav>
      <h1>Pour des vacances savoureuses...</h1>
    </header>
  );
}
