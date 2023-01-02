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
  margin: 5%;
  max-width: 1000px;
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
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const IntroBody = styled.div`
  min-height: 250px;
  flex: 2;
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4;
    margin-left: 0;
    margin-top: 0;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.2rem;
    line-height: 1.4;
    margin-left: 0;
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

const Features = ({ pos: _pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <FirstBlock>
        <Header>H.A.L.X. Option</Header>
        <BodyTop>
          <ImageContainer>
            <StyledImage src={useBaseUrl("/img/feature_HALX2.png")} />
          </ImageContainer>
          <IntroBody>
            Not only does high availability on layer 1 ensure layer X is more
            stable, HA at higher, self-hosted, p2p layers is predicated on
            highly available lower layers. Running multiple instances of
            Lightning from one Bitcoin instance, running on one computer, is not
            a HA Lightning Node. Only H.A.B.N. can enable H.A.L.X.
          </IntroBody>
        </BodyTop>
      </FirstBlock>
    </StyledContainer>
  );
};

export default Features;
