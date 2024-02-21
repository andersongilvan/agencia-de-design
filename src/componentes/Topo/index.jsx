import "./style.css";
import logo from "../../assets/logo.png";
import iconLua from "../../assets/moon.png";
import inconSol from "../../assets/sun.png";



export default function Topo(props) { 
      

  return (
    <header className={props.temaEscuro ? 'topo-modo-escuro' : 'topo-modo-claro'}>
      
      <img className="logo" src={logo} />
      <button onClick={props.alterarTema} className={props.temaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
        <img className="icon-btn" src={props.temaEscuro ? inconSol : iconLua} />
      </button>
    </header>
  );
}
