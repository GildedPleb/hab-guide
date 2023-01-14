import React from "react";
import styled, { css } from "styled-components";
import ScrollFade from "../../animations/Fade";
import ScrollTransform from "../../animations/TransformTranslate";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`;

const BasicBlock = css`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const ZeroBlock = styled.div`
  ${BasicBlock};
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstBlock = styled.div`
  ${BasicBlock};
  position: relative;
`;

const IntroHeader = styled.h1`
  font-size: 1.9rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  background: white;
  color: black;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SecondBlock = styled.div`
  ${BasicBlock};
  position: absolute;
`;

const BodyText = css`
  font-size: 1.5rem;
  line-height: 2;
  max-width: 35%;
  margin: 5%;
  @media (max-width: 1200px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0%;
  }
  @media (pointer: coarse) {
    max-width: 100%;
    margin: 0%;
    line-height: 1.6;
  }
  padding-left: 10px;
  padding-right: 10px;
`;

const BodyTextInner = styled.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`;

const IntroBody = styled.div`
  ${BodyText};
  text-align: left;
`;

const ThirdBlock = styled.div`
  ${BasicBlock};
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const FourthBlock = styled.div`
  ${BasicBlock};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroBodySecond = styled.div`
  ${BodyText};
  text-align: right;
  @media (pointer: coarse) {
    text-align: left;
  }
  align-self: flex-end;
  @media (pointer: coarse) and (orientation: landscape) {
    transform: translate(0px, 30px);
  }
`;

const IntroFinText = styled.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  background: black;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`;

const Image = styled.img``;

const StyledImage = styled(Image)`
  object-fit: contain;
  @media (orientation: landscape) {
    object-fit: cover;
  }
`;

const Intro = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <ZeroBlock>
        <StyledImage src={useBaseUrl("/img/intro_reveal.png")} loading="lazy" />
      </ZeroBlock>
      <FirstBlock>
        <ScrollTransform
          start={0}
          end={0.25}
          fromHorizontal={"0%"}
          fromVertical={"0%"}
          pos={pos}
          toHorizontal={"0%"}
          toVertical={"-100vh"}
          key={pos}
        >
          <IntroHeader>No Average Node</IntroHeader>
        </ScrollTransform>
      </FirstBlock>
      <SecondBlock>
        <IntroBody>
          <ScrollTransform
            start={0}
            end={0.75}
            fromHorizontal={"0%"}
            fromVertical={"110vh"}
            pos={pos}
            toHorizontal={"0%"}
            toVertical={"-190vh"}
          >
            <BodyTextInner>
              This is a photographed-in-operation, Highly Available Bitcoin
              node. It represents the final phase of responsible node operation{" "}
              <span style={{ fontStyle: "italic" }}>for everyone</span>. <br />{" "}
              <br /> Incrementally built from almost any consumer-grade
              electronics and automation software, a HAB Node is increasingly
              easy to set up, and the orchestration brilliance of
              Kubernetes means it <span style={{ fontStyle: "italic" }}>stays up</span>.
            </BodyTextInner>
          </ScrollTransform>
        </IntroBody>
      </SecondBlock>
      <ThirdBlock>
        <IntroBodySecond>
          <ScrollTransform
            start={0.25}
            end={1}
            fromHorizontal={"0%"}
            fromVertical={"120vh"}
            pos={pos}
            toHorizontal={"0%"}
            toVertical={"-180vh"}
          >
            <BodyTextInner>
              Only HAB Nodes can eliminate the most Single Points of Failure:
              hardware, software, internet provider, power source, and more. All while providing a
              litany of world class HA infrastructure, like improved privacy,
              security, and scaling.
            </BodyTextInner>
          </ScrollTransform>
        </IntroBodySecond>
      </ThirdBlock>
      <FourthBlock>
        <ScrollFade start={0.75} end={0.9} pos={pos} from={0} to={1}>
          <IntroFinText>HAB Nodes are</IntroFinText>
        </ScrollFade>
        <ScrollFade start={0.9} end={1} pos={pos} from={0} to={1}>
          <IntroFinText>Optionality</IntroFinText>
        </ScrollFade>
      </FourthBlock>
    </StyledContainer>
  );
};

export default Intro;
