import "./style.css";
import iconFacebook from "../../assets/facebook.png";
import iconBehance from "../../assets/behance.png";
import iconTwitter from "../../assets/twitter.png";
import iconGoogle from "../../assets/google-plus.png";
import iconLinkedin from "../../assets/linkedin.png";
import iconDribble from "../../assets/dribble.png";
import logo from "../../assets/logo.png";

export default function Footer(props) {
  return (
    <footer className={props.temaEscuro ? 'rodape-modo-escuro ' : 'rodape-modo-claro'}>
      <img className="logo" src={logo} />
      <p className="paragrafo">
        judamos a criar uma personalidade digital construindo sua marca no
        ambiente online utilizando estratégias, ferramentas e tecnologias
        personalizadas.
      </p>
      <div className="icones-rodape">
        <img src={iconFacebook} />
        <img src={iconBehance} />
        <img src={iconTwitter} />
        <img src={iconGoogle} />
        <img src={iconLinkedin} />
        <img src={iconDribble} />
      </div>
      <span>Copyright 2022 nome do Anderson Tech</span>
    </footer>
  );
}
