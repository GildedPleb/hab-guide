import React from "react";
import Link from "@docusaurus/Link";
import ScrollFade from "../../animations/Fade";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
`;

const BasicBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const FirstBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100%;
  background: white;
  color: black;
  position: absolute;
  z-index: 10;
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
  position: absolute;
  object-position: center center;
`;

const SecondBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100%;
  color: white;
  z-index: 20;
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 60%;
  margin-left: 5%;
  @media (pointer: coarse) {
    max-width: 100%;
    margin-left: 0;
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
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 2.2;
  }
  @media (max-height: 730px) {
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

const BodyTextInner = styled.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`;

const StyledLink = styled(Link)`
  color: #f2a900;
`;

const History = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <FirstBlock>
        <ImageContainer>
          <StyledImage src={useBaseUrl("/img/google_prod_server.jpg")} />
        </ImageContainer>
      </FirstBlock>
      <SecondBlock>
        <IntroBody>
          <ScrollFade start={0.3} end={1} pos={pos} from={1} to={0}>
            <BodyTextInner>
              To solve this problem, in the late 90s, the prevailing wisdom was
              to only put critical infrastructure on top-of-the-line hardware.
              Google put this on its head by creating a software abstraction
              layer for server reliability, allowing their first production
              server,{" "}
              <StyledLink to="https://www.flickr.com/photos/jurvetson/157722937/">
                shown here
              </StyledLink>
              , composed of cheap consumer hardware which was expected to fail,
              to be highly fault-tolerant.
            </BodyTextInner>
          </ScrollFade>
        </IntroBody>
      </SecondBlock>
    </StyledContainer>
  );
};

export default History;
