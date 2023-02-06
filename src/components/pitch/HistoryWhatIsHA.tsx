import React from "react";
import ScrollFade from "../../animations/Fade";
import ScrollScale from "../../animations/Scale";
import ScrollTransform from "../../animations/TransformTranslate";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
`;

const FirstBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  height: 100vh;
  width: 100%;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (pointer: coarse) {
    justify-content: center;
  }
`;

const IntroBody = styled.div`
  max-width: 800px;

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
    line-height: 1.4;
    margin: 1rem;
  }

  @media (pointer: coarse) and (orientation: landscape) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
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

const ImageViewPort = styled.div`
  align-self: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
  width: 95vw;
  margin-top: 5%;
  margin-bottom: 5%;
  @media (pointer: coarse) and (orientation: landscape) {
    height: 30vh;
    width: 85vw;
    margin: 0;
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  top: 0px;
  box-shadow: inset 0px 0px 10px 10px white;
`;

const ImageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vh;
`;

const StyledImage = styled.img`
  object-fit: contain;
  position: absolute;
`;

const History = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <FirstBlock>
        <IntroBody>
          High Availability (HA) is the process of eliminating as much downtime
          as possible in providing a remote service. The Bitcoin protocol is
          designed to be Highly Available:
        </IntroBody>
        <ImageViewPort>
          <ScrollTransform
            start={0}
            end={0.33}
            fromHorizontal={"calc(-42px * .65)"}
            fromVertical={"21vh"}
            pos={pos}
            toHorizontal={"0px"}
            toVertical={"0px"}
          >
            <ScrollScale start={0.33} end={0.66} pos={pos} from={0.65} to={1.2}>
              <ImageContainer>
                <StyledImage src={useBaseUrl("/img/white_paper2.png")} />
              </ImageContainer>
            </ScrollScale>
          </ScrollTransform>
          <Filter />
        </ImageViewPort>
        <IntroBody>
          <ScrollFade start={0.66} end={1} pos={pos} from={0} to={1}>
            Although most nodes are not HA, meaning it is unlikely to
            persistently connect to one minimally run Bitcoin node, the
            incentives in Bitcoin as a whole ensure many nodes will always be
            available.
          </ScrollFade>
        </IntroBody>
      </FirstBlock>
    </StyledContainer>
  );
};

export default History;
