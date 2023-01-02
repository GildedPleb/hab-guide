import React from "react";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`;

const FirstBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (pointer: coarse) {
    font-size: 1.9rem;
    padding-top: 0;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`;

const BodyTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media (pointer: coarse) and (orientation: landscape) {
    flex-direction: row-reverse;
  }
  @media (max-height: 900px) and (pointer: fine) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 45vh;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const StyledImageFrame = styled.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledImagePic = styled.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0.45) translate(-0.4vw, 0);

  @media (max-width: 768px) {
    transform: scale(0.79) translate(-0.5vw, 0);
  }
  @media (max-height: 900px) and (pointer: fine) {
    transform: scale(0.79) translate(-0.5vw, 0);
  }
`;

const IntroBody = styled.div`
  flex: 2;
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.2rem;
    line-height: 1.4;
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

const Features = ({ pos: _pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <FirstBlock>
        <Header>Aesthetic Option</Header>
        <BodyTop>
          <ImageContainer>
            <StyledImagePic
              src={useBaseUrl("/img/feature_aesthetics_node.png")}
            />
            <StyledImageFrame src={useBaseUrl("/img/feature_aesthetics.png")} />
          </ImageContainer>
          <IntroBody>
            A HAB Node could truly be an equivalent entrant in 24 Hour Le Mans.
            They are the best candidates for externally beautiful nodes, because
            they have the most robust internal enginering. HAB Nodes play the
            man.
          </IntroBody>
        </BodyTop>
      </FirstBlock>
    </StyledContainer>
  );
};

export default Features;
