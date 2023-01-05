import React from "react";
import styled, { css, keyframes } from "styled-components";
import ScrollClipPath from "../../animations/VerticalClipPath";
import ScrollFade from "../../animations/Fade";
import ScrollScale from "../../animations/Scale";

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

const ZeroBlock = styled.div`
  ${BasicBlock};
  height: 100vh;
  width: 100vw;
  position: absolute;
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
    margin-bottom: 0;
    margin-top: 0;
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

const SecondBlock = styled.div`
  ${BasicBlock};
  display: flex;
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
  color: black;
  padding-left: 10px;
  padding-right: 10px;
`;

const FourthBlock = styled.div`
  ${BasicBlock};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const IntroFinTextMap = styled.div`
  place-self: center;
  display: grid;
  gap: 0 10px;
  width: 100%;
`;

const IntroFinTextItem = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const InnerText = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  color: black;
`;

const FifthBlock = styled.div`
  ${BasicBlock};
  height: 110vh;
  position: absolute;
`;

const VideoContainer = styled.div`
  height: 110vh;
  width: 100vw;
  overflow: hidden;
`;

const Video = styled.video`
  object-fit: cover;
  height: 110vh;
  width: 100vw;
`;

const SpecialBlock = styled(BasicBlock)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 0 10px;
  max-width: 660px;
  height: 100vh;
  color: black;
  z-index: 1000;
  padding-left: 10px;
  padding-right: 10px;
`;

const TeaserText = styled.span`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
`;

const glow = keyframes`
from {
  text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 10px #f2a900, 0 0 15px #f2a900,
    0 0 25px #f2a900, 0 0 80px #f2a900;
  }
  to {
    text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #f2a900, 0 0 10px #f2a900,
    0 0 20px #f2a900;
  }
`;

type GlowType = {
  pos: number | null;
};

const Glow = styled.span<GlowType>`
  display: inline-block;
  color: ${({ pos }) => (pos && pos > 0.542 ? "#f2a900" : "black")};
  ${({ pos }) =>
    pos && pos > 0.542
      ? css`
          animation: ${glow} 2s ease-in-out infinite alternate;
        `
      : ""}
  text-indent: 0;
`;

const wordMap =
  "Composable Resilient Serene Distinguished Enduring Inimitable Tenacious Maximized Decentralized Fault-tolerant Highly_Available";

const firstSentence =
  "But we are not here to merely keep the lights on, we are here to re-light civilization";

const History = ({ pos }: { pos: number | null }) => {
  return (
    <StyledContainer>
      <FirstBlock>
        <IntroBody style={{textAlign: "center"}}>
          <ScrollFade start={0} end={0.08} pos={pos} from={1} to={0}>
            So, since when were Bitcoin Maximalists all about node minimalism?
          </ScrollFade>
        </IntroBody>
      </FirstBlock>
      <SecondBlock>
        <IntroBody>
          <ScrollFade start={0.08} end={0.16} pos={pos} from={0} to={1}>
            Since the block size wars, where it was revealed that any more
            liberal a stance than keeping block size as low as possible, for as
            long as possible while scaling Bitcoin, might be a centralizing
            force of evil.
          </ScrollFade>
        </IntroBody>
        <IntroBody>
          <ScrollFade start={0.16} end={0.24} pos={pos} from={0} to={1}>
            Years on from winning these wars, and preserving zero-cost-to-entry
            node architecture—upon which all Hydra enabled HAB Nodes are
            explicitly reliant—node minimalism remains just as important today
            as it ever was to ensure the lights stay on for Bitcoin.
          </ScrollFade>
        </IntroBody>
      </SecondBlock>
      <ZeroBlock>
        <ScrollFade start={0.24} end={0.32} pos={pos} from={0} to={1}>
          <Overlay pos={pos} />
        </ScrollFade>
      </ZeroBlock>
      <SpecialBlock>
        {firstSentence.split(" ").map((word, i, arr) => (
          <ScrollFade
            key={`${word}-${i}`}
            start={(0.1 / arr.length) * i * 2 + 0.32}
            end={(0.1 / arr.length) * (i + 1) * 2 + 0.32}
            pos={pos}
            from={0}
            to={1}
          >
            <ScrollFade start={0.57} end={0.64} pos={pos} from={1} to={0}>
              {word === "civilization" && (
                <TeaserText>
                  <Glow pos={pos}>{word}</Glow>{" "}
                </TeaserText>
              )}
              {word !== "civilization" && <TeaserText>{word} </TeaserText>}
            </ScrollFade>
          </ScrollFade>
        ))}
      </SpecialBlock>
      <FourthBlock>
        <ScrollScale start={0.75} end={1} pos={pos} from={1} to={1.25}>
          <ScrollFade start={0.64} end={0.7} pos={pos} from={0} to={1}>
            <IntroFinText>Your Bitcoin Node</IntroFinText>
          </ScrollFade>
          <IntroFinTextMap>
            {wordMap.split(" ").map((word, i, arr) => (
              <IntroFinTextItem key={`${word}-${i}`}>
                <ScrollFade
                  key={`${word}-${i}`}
                  start={(0.2 / arr.length) * i + 0.7}
                  end={(0.2 / arr.length) * (i + 1) + 0.7}
                  pos={pos}
                  from={0}
                  to={1}
                >
                  <ScrollFade
                    start={(0.2 / arr.length) * i + 0.2 / arr.length + 0.7}
                    end={(0.2 / arr.length) * (i + 1) + 0.2 / arr.length + 0.7}
                    pos={pos}
                    from={1}
                    to={i === arr.length - 1 ? 1 : 0}
                  >
                    <InnerText>
                      {word.includes("_") ? word.replace("_", " ") : word}
                    </InnerText>
                  </ScrollFade>
                </ScrollFade>
              </IntroFinTextItem>
            ))}
          </IntroFinTextMap>
        </ScrollScale>
      </FourthBlock>
      <FifthBlock>
        <ScrollClipPath start={0.925} end={1} from={50} to={0} pos={pos}>
          <VideoContainer>
            <Video id="ForcePlay" autoPlay autoplay loop muted playsinline playsInline>
              <source src="blue-node.mp4" type="video/mp4" />
            </Video>
          </VideoContainer>
        </ScrollClipPath>
      </FifthBlock>
    </StyledContainer>
  );
};

export default History;
