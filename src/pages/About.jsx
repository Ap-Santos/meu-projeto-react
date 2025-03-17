import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";

export const About = () => {
  return (
    <div>
      <Header title=" Sobre" />
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
        title="Objetivo do projeto"
        description="   
      Este projeto foi desenvolvido para demonstrar conceitos fundamentais do React, 
      como:"
      />

      <li>Estruturação de Projeto</li>
      <li>Navegação de paginas com React Routerr</li>
      <li> Hooks (useState, useEffect, useContext)</li>
      <br />
    </div>
  );
};
