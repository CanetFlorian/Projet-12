import React from 'react';
import styled from 'styled-components';
import Banner from '../../assets/banner4.jpg'

const HeaderContainer = styled.header`
  position: relative;
  background-color: #2b2d42;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 50vh;
  width:100%;
  background-image: url(${Banner});
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  z-index: 1;

  &::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  }

  * {
  position: relative;
  z-index: 1;
  }

  h1 {
  font-size: 3rem;
  margin: 0;
  font-weight: bold;
  color: #f1f1f1;
  }

  p {
    font-size: 1.4rem;
    color: #dddddd;
    margin-top: 10px;
  }

    @media (max-width: 768px) {
    height: 50vh;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }


`;

const Nav = styled.nav`
  margin-top: 30px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 40px;
    flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s;
    
    &:hover {
      color: #fcd34d;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Canet Florian</h1>
      <p>Développeur Front-End</p>
      <Nav>
        <NavList>
          <NavItem><a href="#about">À propos</a></NavItem>
          <NavItem><a href="#skills">Compétences</a></NavItem>
          <NavItem><a href="#projects">Projets</a></NavItem>
          <NavItem><a href="#contact">Contact</a></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;