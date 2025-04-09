import React from 'react';
import styled from 'styled-components';
import Profilphoto from '../../assets/dev-web.jpg'


const AboutContainer = styled.section`
  padding: 80px 20px;
  background-color: #f1faee;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 600px;
  height: 100%;
  border-radius:10%;
  object-fit: cover;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>À propos de moi</h2>
      <ImageContainer>
        <ProfileImage src={Profilphoto} alt="Photo de profil" />
      </ImageContainer>
      <AboutContent>
        <p>Je suis un développeur web passionné par l’intégration front-end. J'aime créer des expériences utilisateurs intuitives et esthétiques tout en respectant les standards du web moderne.</p>
        <p>Mon expertise inclut HTML5, CSS3, JavaScript, React.js, ainsi que le développement d'applications
        web responsives et performantes.</p>
        <p>
          De plus, je suis passionné par l'optimisation pour les moteurs de recherche (SEO) et l'amélioration
          des performances des sites. Je travaille constamment pour m'assurer que les sites que je développe
          sont optimisés pour le référencement naturel.
        </p>
        <p>
          Compétences supplémentaires : SEO, performance web, audits de site, analyse de données et amélioration
          de la visibilité sur les moteurs de recherche.
        </p>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;