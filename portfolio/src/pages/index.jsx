import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpeg";

import arrow from "../images/down-arrow.svg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Styledsmall = styled.small`
  text-align: center;
  margin-left: 50%;
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Jayanth.
        </BigTitle>
        <Subtitle>
          I'm a self taught front-end developer. I am building wesbos JS30 in
          ReactJS. <br /> <br /> <br />
          <Styledsmall>
            <img src={arrow} style={{ width: "50px" }} />{" "}
          </Styledsmall>
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Freiheit"
            link="#"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective
            contest.
          </ProjectCard>
          <ProjectCard
            title="Harry Potter"
            link="#"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired
            image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="#"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="#"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Jayanth Karri" />
          <AboutSub>
            I love working on web, have experience building websites and webapps
            with Vanilla JS, ReactJs and also a fan of flexBox.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Check out my other work</Title>
          <ContactText>
            Find me on other platforms:{" "}
            <a href="https://github.com/smileyKJ">GitHub</a> &{" "}
            <a href="https://jayanth.netlify.com/">Some Js apps</a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </>
);

export default Index;
