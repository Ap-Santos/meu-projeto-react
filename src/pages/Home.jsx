import { Link } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";

export const Home = () => {
  return (

    <div>
       <Header title=" Pagina Inicial" />
       <br />
          <li><Link to='/'>Pagina Inicial</Link></li>
          <li> <Link to='/about'>Sobre</Link></li>
          <li><Link to='/contact'>Contato</Link></li> 
      <br />

      <div className="p-4">
    
      <Card title=" Bem-vindo ao Projeto React!" description="  
      Este é um projeto React que visa ensinar conceitos fundamentais de React, como componentes reutilizáveis, hooks e navegação entre páginas. 
       "
       />
    </div>

 
    </div>
  );
};
