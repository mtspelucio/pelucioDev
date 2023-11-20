import React from 'react';
import { Container } from './styles';

import { Linkedin, Github } from '../../components/Icons'

export default function Navbar() {
    function goToAbout() {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        })
    }

    function goToSkills() {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        })
    }

    function goToProjects() {
        window.scrollTo({
            top: 1350,
            behavior: "smooth"
        })
    }


  return (
    <Container>
        <p>MATHEUS<span>PELUCIO</span></p>
        <nav id='navbar' className='flex'>
            <button onClick={goToAbout} >Sobre</button>
            <button onClick={goToSkills} >Habilidades</button>
            <button onClick={goToProjects} >Projetos</button>
        </nav>
        <div className='contacts'>
            <a className='flex' href='https://www.linkedin.com/in/matheus-pelucio/' target="_blank" rel="noopener noreferrer">
                <Linkedin />
                Linkedin
            </a>
            <a className='flex' href='https://github.com/mtspelucio' target="_blank" rel="noopener noreferrer">
                <Github />
                Github
            </a>
            {/* <button>
                <a className='flex'  target="_blank" rel="noopener noreferrer">
                    <Email />
                    Entre em contato
                </a>
            </button> */}
        </div>
    </Container>
  );
}