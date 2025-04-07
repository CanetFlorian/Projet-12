import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: #2b2d42;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Canet Florian - Développeur Front-End</p>
    </FooterContainer>
  );
};
export default Footer;