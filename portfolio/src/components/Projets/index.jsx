import React from 'react';
import styled from 'styled-components';
import ohmyfood from '../../assets/ohmyfood.png';
import kasa from '../../assets/kasa.png';
import sophiebluel from '../../assets/sophiebluel.png';

const ProjectsContainer = styled.section`
  padding: 80px 20px;
  background-color: #f7fafc;
  text-align: center;
`;


const ProjectCard = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  min-height: 300px;
  color: #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

    @media (max-width: 768px) {
    flex-direction: column;
    align-items:center;}
`;


const ImageContainer = styled.div`
  width: 40%;
  padding-right: 20px; 

  @media (max-width:768px) {
  width:80%;
  padding-right:0;}
`;

const ProjectImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  width: 60%;
  text-align: left;

  @media (max-width:768px) {
  width:100%;
  text-align: center;
  margin-top:20px;}
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;

  @media (max-width:768px) {
  font-size: 1.5rem;}
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;

  @media (max-width: 768px) {
  font-size: 0.9rem;}
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width:768px) {
  font-size: 1rem;}
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Mes Projets</h2>
      <div>
        <ProjectCard>
            <ImageContainer>
                <ProjectImageStyled src={ohmyfood} alt="Photo du site OhmyFood"/>
            </ImageContainer>
            <TextContainer>
                <ProjectTitle>Projet 1 - Ohmyfood</ProjectTitle>
                <ProjectDescription>
              En tant que développeur junior, j’ai intégré la startup Ohmyfood pour développer un site "mobile first"
              répertoriant les menus de restaurants gastronomiques à Paris. Le site est conçu pour être responsive et
              intègre des animations CSS soignées, permettant une expérience utilisateur fluide sur mobile, tablette et desktop.
              Le projet utilise SASS pour organiser le CSS et s’appuie sur les technologies modernes du web.
                </ProjectDescription>
                <ProjectLink href="https://canetflorian.github.io/Projet-4-OhMyFood/" target="_blank">Voir le projet</ProjectLink>
            </TextContainer>
        </ProjectCard>

        <ProjectCard>
            <ImageContainer>
                <ProjectImageStyled src={sophiebluel} alt="Photo du site de Sophie Bluel"/>
            </ImageContainer>
            <TextContainer>
                <ProjectTitle>Projet 2 - Sophie Bluel</ProjectTitle>
                <ProjectDescription>
                En tant que développeur front-end pour l’agence ArchiWebos, j’ai contribué à la création du portfolio de l'architecte
              d’intérieur Sophie Bluel. Mes principales missions incluaient la création de la page de présentation des travaux,
              la page de connexion de l'administrateur et le développement d’une modale pour l’upload de nouveaux médias.
                </ProjectDescription>
                <ProjectLink href="" target="_blank">Voir le projet</ProjectLink>
            </TextContainer>
        </ProjectCard>

        <ProjectCard>
            <ImageContainer>
                <ProjectImageStyled src={kasa} alt="Photo du site de Kasa"/>
            </ImageContainer>
            <TextContainer>
                <ProjectTitle>Projet 3 - Kasa</ProjectTitle>
                <ProjectDescription>
                En tant que développeur front-end freelance pour Kasa, j’ai participé à la refonte complète du site de location d’appartements.
              Le projet impliquait de migrer le code legacy en ASP.NET vers une stack moderne JavaScript avec NodeJS côté back-end et React côté front-end.
              Une nouvelle interface a été conçue pour améliorer l'expérience utilisateur et renforcer la performance du site.
                </ProjectDescription>
                <ProjectLink href="" target="_blank">Voir le projet</ProjectLink>
            </TextContainer>
        </ProjectCard>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
