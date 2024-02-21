
import './App.css';
import Topo from './componentes/Topo';
import SecaoBaner from './componentes/SecaoBaner';
import SecaoExperiencia from './componentes/SecaoExperienciaTrabalho';
import Footer from './componentes/Rodape';
import { useState } from 'react';



function App() {

  const [temaEscuro, setTemaEscuro] = useState(false)

  function alterarTema() {
    setTemaEscuro(!temaEscuro)
  }


  return (
    <div className="App">
      <Topo alterarTema={alterarTema} temaEscuro={temaEscuro}/>
      <SecaoBaner temaEscuro={temaEscuro}/>
      <SecaoExperiencia temaEscuro={temaEscuro}/>
      <Footer temaEscuro={temaEscuro}/>
    </div>
  );
}

export default App;
