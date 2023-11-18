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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc. 
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