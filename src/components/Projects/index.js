import React, { useState } from 'react'
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';


const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px 100px 0;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media (max-sidth: 768px){
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor; pointer;
    border-radius: 6px;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;


const Projects = ({openModal,setOpenModal}) => {

    const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc>
            I have worked on a wide range of projects. From web apps to android appa. Here are some of my rpojects.
            </Desc>

            <ToggleGroup>
                {toggle === 'all' ?
                    <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    :
                    <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                }
                <Divider />
                {toggle === 'web app' ?
                    <ToggleButton active value="web app" onClick={() => setToggle('web app')}>MERN APP'S</ToggleButton>
                    :
                    <ToggleButton value="web app" onClick={() => setToggle('web app')}>MERN APP'S</ToggleButton>
                }
                <Divider />
                {toggle === 'android app' ?
                    <ToggleButton active value="android app" onClick={() => setToggle('android app')}>WEB APP'S</ToggleButton>
                    :
                    <ToggleButton value="android app" onClick={() => setToggle('android app')}>WEB APP'S</ToggleButton>
                }
            </ToggleGroup>

            <CardContainer>
                {toggle === 'all' && projects
                    .map((project) => (
                    <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                    ))}
                {projects
                    .filter((item) => item.category === toggle)
                    .map((project) => (
                    <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
            </CardContainer>
        </Wrapper>
    </Container>
  );
};

export default Projects
