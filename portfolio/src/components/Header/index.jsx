import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2b2d42;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
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
    transition: color 0.3s;
    
    &:hover {
      color: #e63946;
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