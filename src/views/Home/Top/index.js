import React from 'react';
import { Container } from './styles';

import IconNpc from '../../../assets/npc.svg'
import IconJava from '../../../assets/java.png'
import {Node, ReactIcon } from '../../../components/Icons';

export default function Top() {
  return (
    <Container>
        <main>
            <div className='hello flex'>
                <p>Hello world, eu sou </p>
                <span>{"< Matheus"}</span>
                <span>{"Pelucio />"}</span>
                <p>Desenvolvedor Fullstack</p>
            </div>
            <div className='avatar flex'>
                <span className='flex'>
                    <ReactIcon />
                    <Node /> 
                    <img src={IconJava} alt='Java' />
                    <img src={IconNpc} alt='Perfil' />
                </span> 
            </div> 
            
        </main>
        {/* <div className='about'>
            <div>
                <span>sobre()</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc. 
                </p>
            </div>
            <div className='services'>
                <div className='fullstack'>
                    <p>Desenvolvedor Fullstack</p>
                    <img src={TagIcon} alt='Icone tag' /> 
                </div>
                <div className='frellancer'>
                    <p>Freelancer</p>
                    <img src={ObjectIcon} alt='Icone objeto' /> 
                </div>
            </div>
        </div> */}
            
    </Container>
  );
}