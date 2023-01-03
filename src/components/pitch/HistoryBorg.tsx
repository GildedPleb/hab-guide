import React from "react";
import ScrollFade from "../../animations/Fade";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
`;

const BasicBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const FirstBlock = styled.div`
  ${BasicBlock};
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroBody = styled.div`
  max-width: 600px;
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

const ZeroBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledLink = styled.a`
  color: #f2a900;
`;

const History = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <ZeroBlock>
        <ScrollFade start={1} end={2} pos={pos} from={0} to={1} killAtZero>
          <Overlay />
        </ScrollFade>
      </ZeroBlock>
      <FirstBlock>
        <IntroBody>
          <ScrollFade start={0.5} end={1} pos={pos} from={1} to={0}>
            Google continued to build upon this foundation, and did so in tandem
            with every one of its massive catalog of eligable products,
            providing them all, over the last 20+ years, as Highly Available.
          </ScrollFade>
        </IntroBody>
        <IntroBody>
          <ScrollFade start={0.0} end={0.5} pos={pos} from={0} to={1}>
            <ScrollFade start={1.33} end={1.66} pos={pos} from={1} to={0}>
              In the early twenty teens, wanting to integrate new container
              technology, and improve upon lessons learned, Google rebuilt this
              software as general purpose, and in 2015, released it as a free
              and open source project called{" "}
              <StyledLink href="https://kubernetes.io/">Kubernetes</StyledLink>,
              or k8s for short.
            </ScrollFade>
          </ScrollFade>
        </IntroBody>
      </FirstBlock>
    </StyledContainer>
  );
};

export default History;
