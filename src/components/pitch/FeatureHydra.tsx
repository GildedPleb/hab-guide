import React from "react";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: rgb(203, 34, 49);
  color: black;
`;

const FirstBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1000px;
  margin: 5%;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Header = styled.h1`
  font-size: 1.9rem;
  line-height: 1.2;
  color: black;
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.9rem;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`;

const IntroBody = styled.div`
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
    margin-top: 0;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
    margin-top: 0;
  }
  @media (max-height: 900px) and (pointer: fine) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 12rem;
  height: 9rem;
  @media (max-width: 768px) {
    width: 4rem;
    height: 3rem;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    width: 4rem;
    height: 3rem;
  }
  @media (max-height: 730px) and (pointer: fine) {
    width: 4rem;
    height: 3rem;
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Features = ({ pos: _pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <FirstBlock>
        <Header>
          Hydra Option
          <ImageContainer>
            <StyledImage src={useBaseUrl("/img/feature_hydra2.png")} />
          </ImageContainer>
        </Header>
        <IntroBody>
          A HAB node accounts for bizarre and/or unlikely attacks. Designed
          correctly, it is decomposable into individual, self-sufficeint nodes,
          making it trivial to change from one to many nodes, or to slice off
          one or many parts, without taking down the cluster.
        </IntroBody>
        <IntroBody>
          Potential scenarios include: front-running supply chain collapse,
          diversifying location before foreseen kinetic attack, bootstrapping
          upon internet co-option, &ldquo;Version&rdquo; signalling sybil attack
          resistance, and more.
        </IntroBody>
      </FirstBlock>
    </StyledContainer>
  );
};

export default Features;
