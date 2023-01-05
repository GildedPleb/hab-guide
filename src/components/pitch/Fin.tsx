import React from "react";
import styled, { css } from "styled-components";
import ScrollFade from "../../animations/Fade";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  color: white;
  background: black;
`;

const BasicBlock = css`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const BlackBackgroundText = css`
  background: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 black, -10px 0 0 black;
`;

const FirstBlock = styled.div`
  ${BasicBlock};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroBody = styled.div`
  align-self: center;

  font-size: 1.5rem;
  max-width: 35%;
  margin: 5%;
  @media (max-width: 1200px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 5%;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    max-width: 100%;
  }
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  line-height: 2;
  position: absolute;
  z-index: 1000;
`;

const BodyTextInner = styled.span`
  ${BlackBackgroundText};
`;

const SecondBlock = styled.div`
  ${BasicBlock};
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ThirdBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BodyTextInnerFin = styled.span`
  ${BlackBackgroundText};
  margin-bottom: 10px;
`;

const BodyTextInnerFinLink = styled.span`
  ${BlackBackgroundText};
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 900;
  ${BasicBlock}
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  color: #f2a900;
`;

const Media = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <FirstBlock>
        <IntroBody>
          <ScrollFade start={0} end={0.11} from={1} pos={pos} to={0}>
            <BodyTextInner>However...</BodyTextInner>
          </ScrollFade>
        </IntroBody>
      </FirstBlock>
      <SecondBlock>
        <ScrollFade start={0.11} end={0.22} pos={pos} from={0} to={1}>
          <ScrollFade start={0.22} end={0.33} pos={pos} from={1} to={0}>
            <ImageContainer>
              <StyledImage
                src={useBaseUrl("/img/casestudy_white1.png")}
                loading="lazy"
              />
            </ImageContainer>
          </ScrollFade>
        </ScrollFade>
        <ScrollFade start={0.22} end={0.33} pos={pos} from={0} to={1}>
          <ScrollFade start={0.33} end={0.44} pos={pos} from={1} to={0}>
            <ImageContainer>
              <StyledImage
                src={useBaseUrl("/img/casestudy_orange.png")}
                loading="lazy"
              />
            </ImageContainer>
          </ScrollFade>
        </ScrollFade>
        <ScrollFade start={0.33} end={0.44} pos={pos} from={0} to={1}>
          <ScrollFade start={0.44} end={0.55} pos={pos} from={1} to={0}>
            <ImageContainer>
              <StyledImage
                src={useBaseUrl("/img/casestudy_blue.png")}
                loading="lazy"
              />
            </ImageContainer>
          </ScrollFade>
        </ScrollFade>
        <ScrollFade start={0.44} end={0.55} pos={pos} from={0} to={1}>
          <ScrollFade start={0.55} end={0.66} pos={pos} from={1} to={0}>
            <ImageContainer>
              <StyledImage
                src={useBaseUrl("/img/casestudy_yellow.png")}
                loading="lazy"
              />
            </ImageContainer>
          </ScrollFade>
        </ScrollFade>
        <ScrollFade start={0.55} end={0.66} pos={pos} from={0} to={1}>
          <ScrollFade start={0.66} end={0.77} pos={pos} from={1} to={0}>
            <ImageContainer>
              <StyledImage
                src={useBaseUrl("/img/casestudy_white2.png")}
                loading="lazy"
              />
            </ImageContainer>
          </ScrollFade>
        </ScrollFade>
        <IntroBody>
          <ScrollFade start={0.22} end={0.33} from={0} pos={pos} to={1}>
            <ScrollFade start={0.55} end={0.66} pos={pos} from={1} to={0}>
              <BodyTextInner>
                No Highly Available Bitcoin Node will be the same.
                <br />
                <br /> Each one is as individualized as its builder, modularized
                as its supply chain allows, and unique as its physical location.
                <br />
                <br />
                No other node will be like this proof of concept...
              </BodyTextInner>
            </ScrollFade>
          </ScrollFade>
        </IntroBody>
      </SecondBlock>
      <ThirdBlock>
        <ImageContainer>
          <ScrollFade
            start={0.66}
            end={0.77}
            pos={pos}
            from={0}
            to={1}
            style={{ height: "100%", width: "100%" }}
          >
            <StyledImage
              src={useBaseUrl("/img/fin_black.png")}
              loading="lazy"
            />
          </ScrollFade>
        </ImageContainer>
        <IntroBody>
          <ScrollFade start={0.77} end={0.88} from={0} pos={pos} to={1}>
            <BodyTextInnerFin>
              What will your HAB Node be like?
            </BodyTextInnerFin>
          </ScrollFade>
          <ScrollFade start={0.88} end={1} from={0} pos={pos} to={1}>
            <StyledLink to="/why">
              <BodyTextInnerFinLink>
                ➤ Why HAB Nodes?
              </BodyTextInnerFinLink>
            </StyledLink>
            <StyledLink to="/how">
              <br />
              <BodyTextInnerFinLink>➤ How Does It Work?</BodyTextInnerFinLink>
            </StyledLink>
            <StyledLink to="/poc">
              <br />
              <BodyTextInnerFinLink>
                ➤ PoC Design and Specs
              </BodyTextInnerFinLink>
            </StyledLink>
            <StyledLink to="docs/Introduction/intro">
              <br />
              <BodyTextInnerFinLink>➤ Build Your Own</BodyTextInnerFinLink>
            </StyledLink>
          </ScrollFade>
        </IntroBody>
      </ThirdBlock>
    </StyledContainer>
  );
};

export default Media;
