import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Navbar from "../Navbar";
import ProjectItem from "../../components/ProjectItem";
import { Container } from "./styles";

import IconJava from "../../assets/icons/java.png";
import {
  Node,
  ReactIcon,
  JavascriptIcon,
  HtmlIcon,
  CssIcon,
} from "../../components/Icons";

export default function Home() {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 350;
  };
  const slideRight = () => {
    var slider = (document.getElementById("slider").scrollLeft += 350);
    console.log(slider);
  };

  return (
    <Container>
      <Navbar />
      <main>
        <div className="hello flex">
          <p>Hello World! Eu sou </p>
          <span>{"< Matheus"}</span>
          <span>{"Pelucio />"}</span>
          <p>Desenvolvedor Fullstack</p>
        </div>

        <div className="avatar flex">
          <span className="flex">
            <ReactIcon />
            <Node />
            <img src={IconJava} alt="Java" />
            {/* <img src={IconNpc} alt='Perfil' /> */}
          </span>
        </div>
      </main>

      <div className="about">
        <div className="aboutText">
          <p>
            <span>sobre</span>( )
          </p>
          <p>
            Formado em Análise e Desenvolvimento de Sistemas. Apaixonado por
            desafios, gosto de “pensar fora da caixa”, pesquisar, inovar, usar a
            criatividade, fazer diferente, conversar sobre tecnologia e ajudar
            as pessoas (acredito que essa seja a melhor forma de aprender).
          </p>
        </div>
        <div className="skills flex">
          <p>
            <span>habilidades</span>( )
          </p>
          <div className="flex">
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
            <img src={IconJava} alt="Java" />
            <Node />
            <ReactIcon />
          </div>
        </div>
      </div>

      <div id="carrousel">
        <p id="projects">
          <span>projetos</span>( )
        </p>
        <div id="slider">
          <ProjectItem
            url="https://todolist-java-jrkd.onrender.com/swagger-ui/index.html"
            projectName="API TodoList Java"
            imageUrl="todoList.png"
          />
          <ProjectItem
            url="https://clio.vercel.app/"
            projectName="Landing page - Solução de Engenhario"
            imageUrl="clio.png"
          />
          <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
          <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
          <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
          <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
          <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
        </div>

        <MdChevronLeft
          id="chevronLeft"
          onClick={slideLeft}
          size={40}
          color="white"
        />
        <MdChevronRight
          id="chevronRight"
          onClick={slideRight}
          size={40}
          color="white"
        />
      </div>
    </Container>
  );
}
