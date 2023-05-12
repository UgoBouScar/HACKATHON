import "../sass/aboutus.scss";

export default function AboutUs() {
  return (
    <div className="container">
      <h2>A propos</h2>
      <div className="description">
        <img src="./src/assets/img-aboutus.jpg" alt="cheese and drink" />
        <p>
          Nous sommes enchantés de vous présenter Cheese and Cheers, notre site
          de conseils pour vos prochaines vacances gastronomiques ! Profitez
          pleinement de vos vacances en découvrant les saveurs uniques de nos
          régions grâce à notre expérience de dégustation de fromages et de
          vins. <br /> <br />
          Nous vous emmènerons dans un voyage culinaire à travers les
          différentes régions productrices, où vous pourrez déguster les
          meilleurs produits locaux. Nos experts ont créé une carte interactive
          regroupant les différentes spécialités de vos destinations préférées,
          vous permettant ainsi de profiter pleinement de la richesse de notre
          patrimoine culinaire. <br /> <br />
          Alors, n'attendez plus, préparez vos valises et partez dès maintenant
          pour des vacances inoubliables !
        </p>
      </div>
      <h3>Notre équipe</h3>
      <div className="team">
        <img
          className="photo"
          src="./src/assets/VignetteAlaric.png"
          alt="Alaric"
        />
        <img className="photo" src="./src/assets/VignetteUgo.png" alt="Ugo" />
        <img
          className="photo"
          src="./src/assets/VignetteAmani.png"
          alt="Amani"
        />
        <img
          className="photo"
          src="./src/assets/VignetteYoucef.png"
          alt="Youcef"
        />
        <img
          className="photo"
          src="./src/assets/VignetteQuantin.png"
          alt="Quantin"
        />
      </div>
    </div>
  );
}
