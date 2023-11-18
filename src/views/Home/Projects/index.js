import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Container } from './styles';
import ProjectItem from '../../../components/ProjectItem';

export default function Projects() {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
    
  }
  const slideRight = () => {
    var slider = document.getElementById('slider').scrollLeft += 500
    console.log(slider)
  }

  return (
    <Container id='carrousel'>
      <p id='projects'><span>projetos</span>( )</p>
      <div id='slider'>
        <ProjectItem projectName="API TodoList Java" imageUrl="todoList.png" />
        <ProjectItem projectName="Landing page - Solução de Engenhario" imageUrl="clio.png" />
        <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
        <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
        <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
        <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
        <ProjectItem projectName="Em breve" imageUrl="projectExample.png" />
      </div>
      
      <MdChevronLeft id='chevronLeft' onClick={slideLeft} size={40} color='white'/>
      <MdChevronRight id='chevronRight' onClick={slideRight} size={40} color='white'/>
      
    </Container>
  );
}