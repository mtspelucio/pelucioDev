import React from 'react';
import { Container } from './styles';

import { Linkedin, Github, Email } from '../../components/Icons'

export default function Navbar() {
  return (
    <Container>
        <p>MATHEUS<span>PELUCIO</span></p>
        <div className='info flex'>
            <a href='go' target="_blank" rel="noopener noreferrer">Sobre</a>
            <a href='go' target="_blank" rel="noopener noreferrer">Habilidades</a>
            <a href='go' target="_blank" rel="noopener noreferrer">Projetos</a>
        </div>
        <div className='contacts'>
            <a className='flex' href='https://www.linkedin.com/in/matheus-pelucio/' target="_blank" rel="noopener noreferrer">
                <Linkedin />
                Linkedin
            </a>
            <a className='flex' href='https://github.com/mtspelucio' target="_blank" rel="noopener noreferrer">
                <Github />
                Github
            </a>
            <button>
                <a className='flex' href='go' target="_blank" rel="noopener noreferrer">
                    <Email />
                    Entre em contato
                </a>
            </button>
        </div>
    </Container>
  );
}