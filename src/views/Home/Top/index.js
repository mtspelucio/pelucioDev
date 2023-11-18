import React from 'react';
import { Container } from './styles';

// import IconNpc from '../../../assets/icons/npc.svg'
import IconJava from '../../../assets/icons/java.png'
import {Node, ReactIcon, JavascriptIcon, HtmlIcon, CssIcon } from '../../../components/Icons';

export default function Top() {
  return (
    <Container>
        <main>
            <div className='hello flex'>
                <p>Hello World! Eu sou </p>
                <span>{"< Matheus"}</span>
                <span>{"Pelucio />"}</span>
                <p>Desenvolvedor Fullstack</p>
            </div>
            <div className='avatar flex'>
                <span className='flex'>
                    <ReactIcon />
                    <Node /> 
                    <img src={IconJava} alt='Java' />
                    {/* <img src={IconNpc} alt='Perfil' /> */}
                </span> 
            </div> 
            
        </main>
        <div className='about'>
            <div className='aboutText'>
                <p><span>sobre</span>( )</p>
                <p>
                    Formado em Análise e Desenvolvimento de
                    Sistemas. Apaixonado por desafios, gosto de “pensar 
                    fora da caixa”, pesquisar, inovar, usar a criatividade, 
                    fazer diferente, conversar sobre tecnologia e ajudar 
                    as pessoas (acredito que essa seja a melhor forma 
                    de aprender).
                </p>
            </div>
            <div className='skills flex'>
                <p><span>habilidades</span>( )</p>
                <div className='flex'>
                    <HtmlIcon />
                    <CssIcon />
                    <JavascriptIcon />
                    <img src={IconJava} alt='Java' />
                    <Node />
                    <ReactIcon />
                </div>
            </div>
        </div>
            
    </Container>
  );
}