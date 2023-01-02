import React from "react";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`;

const FirstBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  height: 100%;
  margin: 5%;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Header = styled.h1`
  font-size: 1.9rem;
  line-height: 1.2;
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
  @media (pointer: coarse) {
    font-size: 1.9rem;
    padding-top: 0;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`;

const IntroBody = styled.div`
  font-size: 1.5rem;
  line-height: 2;
  margin-bottom: 1.2rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    line-height: 1.4;
  }

  @media (pointer: coarse) and (orientation: landscape) {
    margin-bottom: 0;
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
  @media (pointer: coarse) {
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
          Induction Option
          <ImageContainer>
            <StyledImage src={useBaseUrl("/img/feature_baptismal.png")} />
          </ImageContainer>
        </Header>
        <IntroBody>
          Today, K8s can still run on any entry-level consumer hardware which
          can run a modern linux distribution: RPis, SBCs, NUCs, etc. As such,
          it can allow a Bitcoin node to baptize nearly any idle compute or
          storage into the cluster, making all services more robust.
        </IntroBody>
        <IntroBody>
          The grandfather of k8s was internally called “Borg” at Google, as it
          assimilated all. Inheriting this quality, HAB Nodes can scale budgets
          from 0 to anything and expand or contract compute and storage without
          downtime.
        </IntroBody>
      </FirstBlock>
    </StyledContainer>
  );
};

export default Features;
