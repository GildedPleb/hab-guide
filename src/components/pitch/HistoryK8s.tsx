import React from "react";
import Link from "@docusaurus/Link";
import ScrollFade from "../../animations/Fade";
import ScrollScale from "../../animations/Scale";
import ScrollTransform from "../../animations/TransformPosition";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`;

const BasicBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const FirstBlock = styled.div`
  ${BasicBlock};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const IntroBody = styled.div`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  padding-top: 2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
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

type SecondBlockType = {
  pos: number | null;
};

const SecondBlock = styled.div<SecondBlockType>`
  ${BasicBlock};
  position: absolute;
  display: ${({ pos }) => (pos && pos < 0.35 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ZeroBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const ImageContainer = styled.div`
  height: 20vh;
  width: 20vh;
  position: fixed;
  top: calc(15vh);
  left: calc(50% - 10vh);
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TitleBlock = styled.div`
  font-family: "Ubuntu", sans-serif;
  width: 100vw;
  text-align: center;
  position: fixed;
  top: 25vh;
  left: 0;
  font-size: 5vh;
`;

const StyledLink = styled(Link)`
  color: #f2a900;
`;

const History = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <ZeroBlock>
        <ScrollFade start={-1.5} end={-1} pos={pos} from={0} to={1}>
          <ImageContainer>
            <ScrollScale
              start={-1}
              end={0}
              pos={pos}
              from={1}
              to={0.8}
              style={{ height: "100%", width: "100%" }}
            >
              <ScrollTransform
                start={-1}
                end={0}
                fromLeft={"0px"}
                fromTop={"0px"}
                pos={pos}
                toLeft={"0px"}
                toTop={"-10vh"}
                style={{ height: "100%", width: "100%" }}
              >
                <StyledImage src={useBaseUrl("/img/k8s_logo.png")} />
              </ScrollTransform>
            </ScrollScale>
          </ImageContainer>
        </ScrollFade>
        <ScrollFade start={-0.25} end={0} pos={pos} from={0} to={1}>
          <TitleBlock>kubernetes</TitleBlock>
        </ScrollFade>
      </ZeroBlock>
      <FirstBlock>
        <IntroBody>
          <ScrollFade start={0} end={0.35} pos={pos} from={1} to={0}>
            <BodyTextInner>
              Over{" "}
              <StyledLink to="https://github.com/kubernetes/kubernetes">
                100,000 commits
              </StyledLink>
              , thousands of contributors, and{" "}
              <StyledLink to="https://landscape.cncf.io/card-mode?grouping=no&sort=amount">
                billions
              </StyledLink>{" "}
              in funding later, k8s can orchestrate the smallest IoT clusters to
              the biggest server farms on earth.{" "}
              <StyledLink to="https://k8s.devstats.cncf.io/d/9/companies-table?orgId=1">
                And does
              </StyledLink>
              . It is no stretch to assume everyone online, unknowingly, depends
              on it every day.
            </BodyTextInner>
          </ScrollFade>
        </IntroBody>
      </FirstBlock>
      <SecondBlock pos={pos}>
        <IntroBody>
          <ScrollFade start={0.35} end={0.7} pos={pos} from={0} to={1}>
            <ScrollFade start={0.8} end={1} pos={pos} from={1} to={0}>
              <BodyTextInner>
                Today, k8s is the market leader for companies and institutions
                worldwide which rely on highly available infrastructure. It
                could easily be argued that it is the most important piece of
                engineering Google ever created, as it defends, in total,{" "}
                <StyledLink to="https://enlyft.com/tech/products/kubernetes">
                  trillions in value
                </StyledLink>
                .
              </BodyTextInner>
            </ScrollFade>
          </ScrollFade>
        </IntroBody>
      </SecondBlock>
    </StyledContainer>
  );
};

export default History;
