import React from 'react';
import styled from 'styled-components';
import { SiReact } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';  
import { SiCss3 } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaChartLine } from 'react-icons/fa';

const SkillsContainer = styled.section`
  padding: 80px 20px;
  background-color: #edf2f4;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const SkillItem = styled.li`
  background-color: #2b2d42;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }

  svg {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h2>Compétences</h2>
      <SkillList>
        <SkillItem>
          <SiReact size={50} color="#61dafb"/>
          <p>React</p>
        </SkillItem>
        <SkillItem>
        <SiHtml5 size={50} color="#e34f26" />
          <p>HTML5</p>
        </SkillItem>
        <SkillItem>
          <SiCss3 size={50} color="#264de4" />
          <p>CSS3</p>
        </SkillItem>
        <SkillItem>
          <TbBrandJavascript size={50} color="yellow"/>
          <p>JavaScript</p>
        </SkillItem>
        <SkillItem>
            <FaChartLine size={50} color="green"/>
            <p>SEO</p>
        </SkillItem>
      </SkillList>
    </SkillsContainer>
  );
};

export default Skills;