import React from 'react';
import { Container } from './styles';

export default function ProjectItem({ url = "", imageUrl, projectName }) {
  return (
    <Container href={url} id='item' target="_blank" rel="noopener noreferrer">
        <p>{projectName}</p>
        <img src={require(`../../assets/viewProjects/${imageUrl}`)} alt='Imagem do projeto' />
    </Container>
  );
}