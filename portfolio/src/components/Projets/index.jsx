import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 80px 20px;
  background-color: #f7fafc;
  text-align: center;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Mes Projets</h2>
      <div>
        <ProjectCard>
          <ProjectTitle>Projet 1 - Ohmyfood</ProjectTitle>
          <ProjectDescription>
            En tant que développeur junior, j’ai intégré la startup Ohmyfood pour développer un site "mobile first"
            répertoriant les menus de restaurants gastronomiques à Paris. Le site est conçu pour être responsive et
            intègre des animations CSS soignées, permettant une expérience utilisateur fluide sur mobile, tablette et desktop.
            Le projet utilise SASS pour organiser le CSS et s’appuie sur les technologies modernes du web.
          </ProjectDescription>
          <ProjectLink href="https://lien-vers-le-projet.com" target="_blank">Voir le projet</ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Projet 2 - Site Portfolio de Sophie Bluel</ProjectTitle>
          <ProjectDescription>
            En tant que développeur front-end pour l’agence ArchiWebos, j’ai contribué à la création du portfolio de l'architecte
            d’intérieur Sophie Bluel. Mes principales missions incluaient la création de la page de présentation des travaux,
            la page de connexion de l'administrateur et le développement d’une modale pour l’upload de nouveaux médias.
          </ProjectDescription>
          <ProjectLink href="https://lien-vers-le-projet.com" target="_blank">Voir le projet</ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Projet 3 - Refonte du site de Kasa</ProjectTitle>
          <ProjectDescription>
            En tant que développeur front-end freelance pour Kasa, j’ai participé à la refonte complète du site de location d’appartements.
            Le projet impliquait de migrer le code legacy en ASP.NET vers une stack moderne JavaScript avec NodeJS côté back-end et React côté front-end.
            Une nouvelle interface a été conçue pour améliorer l'expérience utilisateur et renforcer la performance du site.
          </ProjectDescription>
          <ProjectLink href="https://lien-vers-le-projet.com" target="_blank">Voir le projet</ProjectLink>
        </ProjectCard>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
