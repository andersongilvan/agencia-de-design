import "./style.css";

export default function SecaoBaner(props) {
  return (
    <section id="secao-baner">
      <div id="imagemFundo" className={props.temaEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}></div>
      <div className="texto-secao-baner">
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}
