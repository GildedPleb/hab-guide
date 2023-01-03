import React from "react";
import ScrollFade from "../../animations/Fade";
import ScrollTransform from "../../animations/TransformTranslate";
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
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (pointer: coarse) {
    justify-content: center;
  }
`;

const ZeroBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100vw;
  position: absolute;
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

const History = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <ZeroBlock>
        <ScrollFade start={-1} end={0} pos={pos} from={1} to={0}>
          <Overlay pos={pos} />
        </ScrollFade>
      </ZeroBlock>
      <FirstBlock>
        <IntroBody>
          <ScrollFade start={0.33} end={0.66} pos={pos} from={1} to={0}>
            And thank God the incentives work. Thermodynamics ensures uptime for{" "}
            <span style={{ fontStyle: "italic" }}>any</span> physical computing,
            including individual nodes, and all HA hardware is a perennial
            problem.
          </ScrollFade>
        </IntroBody>
        <IntroBody>
          <ScrollFade start={0} end={0.33} pos={pos} from={0} to={1}>
            <ScrollFade start={0.66} end={1} pos={pos} from={1} to={0}>
              Over the decades, billions of dollars and millions of hours have
              been spent by nearly every major player in tech on research,
              development, and deployment of dually centralized and highly
              available computer systems.
            </ScrollFade>
          </ScrollFade>
        </IntroBody>
        <IntroBody>
          <ScrollFade start={0.33} end={0.66} pos={pos} from={0} to={1}>
            And yet computers still
            <ScrollTransform
              start={1.05}
              end={2.05}
              fromHorizontal={"0px"}
              fromVertical={"0px"}
              pos={pos}
              toHorizontal={"0%"}
              toVertical={"100vh"}
              style={{ display: "inline-block" }}
              key={pos}
            >
              <div
                style={{
                  display: "inline-block",
                  marginLeft: "-10px",
                  textIndent: "0",
                }}
              >
                fail{" "}
              </div>{" "}
            </ScrollTransform>{" "}
            all the time.
          </ScrollFade>
        </IntroBody>
      </FirstBlock>
    </StyledContainer>
  );
};

export default History;
