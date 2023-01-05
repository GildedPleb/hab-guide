import React from "react";
import ScrollFade from "../../animations/Fade";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`;

const BasicBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const FirstBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  @media (pointer: coarse) {
    justify-content: center;
  }
`;

type DisplayBlockType = {
  pos: number | null;
};

const ZeroBlock = styled.div<DisplayBlockType>`
  ${BasicBlock};
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: ${({ pos }) => (pos && pos > 0 ? "none" : "block")};
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
  @media (pointer: coarse) and (orientation: landscape) {
    margin-top: 0rem;
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

type OverlayType = {
  pos: number | null;
};

const Overlay = styled.div<OverlayType>`
  height: 100vh;
  width: 100vw;
  background: ${({ pos }) => (pos === 0 ? "none" : "white")};
`;

const SecondBlock = styled.div<DisplayBlockType>`
  ${BasicBlock};
  display: ${({ pos }) => (pos && pos < 0.15 ? "none" : "flex")};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const IntroFinText = styled.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  background: black;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

const ThirdBlock = styled.div<DisplayBlockType>`
  ${BasicBlock};
  display: ${({ pos }) => (pos && pos < 0.15 ? "none" : "flex")};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const StyledLink = styled.a`
  color: #f2a900;
`;

const History = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <ZeroBlock pos={pos}>
        <ScrollFade start={-0.5} end={0} pos={pos} from={1} to={0}>
          <Overlay pos={pos} />
        </ScrollFade>
      </ZeroBlock>
      <FirstBlock>
        <IntroBody>
          <ScrollFade start={0} end={0.15} pos={pos} from={1} to={0}>
            As the Bitcoin ecosystem grows with higher layers, base layer node
            architecture will increasingly need to reliably support
            ever-expanding, self-hosted, p2p apps, services, marketplaces, and
            income streams.
          </ScrollFade>
        </IntroBody>
        <IntroBody>
          <ScrollFade start={0} end={0.15} pos={pos} from={1} to={0}>
            Indeed, for some nodes, downtime already means loses. And if
            it&rsquo;s a Raspberry Pi node with a bricked hard drive, downtime
            means loses for weeks, or having to trust the infamous "Trusted
            Third Party", which will forever be a problem with{" "}
            <StyledLink
              href="
            https://medium.com/breez-technology/introducing-lightning-service-providers-fe9fb1665d5f"
            >
              LSPs
            </StyledLink>
            .
          </ScrollFade>
        </IntroBody>
      </FirstBlock>
      <SecondBlock pos={pos}>
        <IntroBody>
          <ScrollFade start={0.15} end={0.3} pos={pos} from={0} to={1}>
            <ScrollFade start={0.55} end={0.7} pos={pos} from={1} to={0}>
              Honey Badger is getting thirsty...
            </ScrollFade>
          </ScrollFade>
        </IntroBody>

        <IntroBody>
          <ScrollFade start={0.3} end={0.45} pos={pos} from={0} to={1}>
            <ScrollFade start={0.55} end={0.7} pos={pos} from={1} to={0}>
              ...and the wider tech industry has been spending the last few
              decades building, testing, and actively deploying, in defense of{" "}
              <span style={{ fontStyle: "italic" }}>trillions</span> in value,
              the very solution to quench that thirst.
            </ScrollFade>
          </ScrollFade>
        </IntroBody>
      </SecondBlock>
      <ThirdBlock pos={pos}>
        <ScrollFade start={0.7} end={0.85} pos={pos} from={0} to={1}>
          <IntroFinText>Your Bitcoin Node</IntroFinText>
        </ScrollFade>
        <ScrollFade start={0.85} end={1} pos={pos} from={0} to={1}>
          <IntroFinText>Highly Available</IntroFinText>
        </ScrollFade>
      </ThirdBlock>
    </StyledContainer>
  );
};

export default History;
