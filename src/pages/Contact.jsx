import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    console.log(nome);
    console.log(email);
    console.log(mensagem);
    
    setStatus('Enviando...');

    setEmail(" ");
    setNome(" ");
    setMensagem(" ");
  };

  useEffect(()=>{
    if(status ==='Enviando...'){
      setTimeout(()=>{
        setStatus('Mensagem enviada com sucesso!')
      }, 2000);
    }
  }, [status]);




  return (
    <div>
      <Header title=" Contato" />
      <br />
      <li>
        <Link to="/">Pagina Inicial</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">Sobre</Link>
      </li>
      <li>
        <Link to="/contact">Contato</Link>
      </li>
      <br />

      <Card
        title="Formulario para contato:"
        description="Prencha os campos abaixo para entrar em contato conosco"   
    
      />

      <form>
        Nome:
        <input
          placeholder="insira um nome..."
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        Email:
        <input
          placeholder="insira um e-mail..."
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Menssagem:
        <input
          placeholder="insira uma mensagem..."
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <Button text="Enviar" onClick={handleClick} />
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};
