import React from 'react';
import { Container } from './styles';

import IconReact from '../../../assets/react.svg'
import IconNode from '../../../assets/nodejs.svg'
import IconNpc from '../../../assets/npc.svg'
import TagIcon from '../../../assets/tagIcon.svg'
import ObjectIcon from '../../../assets/objectIcon.svg'

export default function Top() {
    console.log(IconReact)
  return (
    <Container>
        <div className='content'>
            <div className='hello'>
                <p>Oi, eu sou </p>
                <span>{"< Matheus Pelucio />"}</span>
                <p>Desenvolvedor Fullstack</p>
            </div>
            <div className='avatar'>
                <img src={IconReact} alt='React' />
                <img src={IconNode} alt='Node' /> 
                <img src={IconNpc} alt='Perfil' /> 
            </div> 
            <div className='about'>
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
        </div>
    </Container>
  );
}