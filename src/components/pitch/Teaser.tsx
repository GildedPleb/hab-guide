import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import ScrollFade from "../../animations/Fade";
import ScrollScale from "../../animations/Scale";
import ScrollTranslate from "../../animations/TransformTranslate";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
`;

const BasicBlock = styled.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`;

const FlexBlock = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
`;

const NegativeOneBlock = styled(BasicBlock)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 25px;
`;

const ZeroBlock = styled(BasicBlock)`
  ${FlexBlock}
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FirstBlock = styled(BasicBlock)`
  ${FlexBlock}
  max-width: 800px;
  justify-content: center;
`;

const SecondBlock = styled(BasicBlock)`
  ${FlexBlock}
  padding: 10%;
  text-align: center;
`;

const FourthBlock = styled(BasicBlock)`
  width: 100%;
  max-height: 100vh;
`;

const OrangeBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f2a900;
`;

const WhiteBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
`;

const RedBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(203, 34, 49);
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

const BitcoinB = styled.span`
  display: inline-block;
  color: #f2a900;
  transform: rotate(14deg);
  animation: ${glow} 2s ease-in-out infinite alternate;
`;

const firstSentence =
  "Running a bare-bones full node is a minimum requirement to keep the lights on for bitcoin";

const Teaser = ({ pos }: { pos: number | null }) => {
  const refBitcoin = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);

  const [xOffset, setXOffset] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);

  const [xOffsetB, setXOffsetB] = useState<number>(0);
  const [yOffsetB, setYOffsetB] = useState<number>(0);
  const [bFixed, setBFixed] = useState(false);

  const isLessThanOne = Math.round(pos || 0);

  useEffect(() => {
    const handleResize = () => {
      if (refBitcoin.current) {
        const btcRect = refBitcoin.current.getBoundingClientRect();

        setXOffset(btcRect.left);
        setYOffset(btcRect.top);
      }
      if (refB.current) {
        const bRect = refB.current.getBoundingClientRect();

        setXOffsetB(bRect.left);
        setYOffsetB(bRect.top);
        setBFixed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [refBitcoin]);

  useEffect(() => {
    if (refBitcoin.current && isLessThanOne < 1) {
      const btcRect = refBitcoin.current.getBoundingClientRect();

      setXOffset(btcRect.left);
      setYOffset(btcRect.top);
    }
    if (refB.current && isLessThanOne < 1 && !bFixed) {
      const bRect = refB.current.getBoundingClientRect();

      setXOffsetB(bRect.left);
      setYOffsetB(bRect.top);
      setBFixed(true);
    }
  }, [isLessThanOne]);

  return (
    <StyledContainer>
      {pos < 0.66 && (
        <>
          <NegativeOneBlock>
            <ScrollFade start={0} end={0.025} pos={pos} from={0.5} to={0}>
              Scroll to Advance
            </ScrollFade>
          </NegativeOneBlock>
          <ZeroBlock>
            <ScrollTranslate
              ref={refB}
              start={0}
              end={0.18}
              pos={pos}
              fromHorizontal={"0px"}
              fromVertical={"0px"}
              toHorizontal={`${(xOffset - xOffsetB) / 1 + 0}px`}
              toVertical={`${(yOffset - yOffsetB) / 1 - 5}px`}
            >
              <ScrollFade start={0.44} end={0.5} pos={pos} from={1} to={0}>
                <ScrollScale start={0} end={0.18} pos={pos} from={8} to={1}>
                  <TeaserText>
                    <BitcoinB>₿</BitcoinB>
                  </TeaserText>
                </ScrollScale>
              </ScrollFade>
            </ScrollTranslate>
          </ZeroBlock>
          <FirstBlock>
            {firstSentence.split(" ").map((word, i, arr) => (
              <ScrollFade
                key={`${word}-${i}`}
                start={(0.1 / arr.length) * i * 2}
                end={(0.1 / arr.length) * (i + 1) * 2}
                pos={pos}
                from={0}
                to={1}
              >
                <ScrollFade
                  start={((0.1 / arr.length) * i + 0.1) * 2}
                  end={((0.1 / arr.length) * (i + 1) + 0.1) * 2}
                  pos={pos}
                  from={1}
                  to={0}
                >
                  {word === "bitcoin" ? (
                    <TeaserText ref={refBitcoin}>
                      <BitcoinB style={{ opacity: 0 }}>₿</BitcoinB>
                      itcoin
                    </TeaserText>
                  ) : (
                    <TeaserText>{word}</TeaserText>
                  )}
                </ScrollFade>
              </ScrollFade>
            ))}
          </FirstBlock>
          <SecondBlock>
            <ScrollFade start={0.5} end={0.56} pos={pos} from={0} to={1}>
              <ScrollFade start={0.66} end={0.7} pos={pos} from={1} to={0}>
                <TeaserText>
                  Since when were maximalists all about minimums?
                </TeaserText>
              </ScrollFade>
            </ScrollFade>
          </SecondBlock>
        </>
      )}
      {pos > 0.66 && (
        <FourthBlock>
          <ScrollTranslate
            start={0.66} // .33
            end={1} // fixed
            pos={pos}
            fromHorizontal={"0px"}
            fromVertical={"100%"}
            toHorizontal={"0px"}
            toVertical={"50%"}
          >
            <ScrollTranslate
              start={1} // fixed
              end={2}
              pos={pos}
              fromHorizontal={"0px"}
              fromVertical={"0%"}
              toHorizontal={"0px"}
              toVertical={"100%"}
            >
              <OrangeBox />
            </ScrollTranslate>
          </ScrollTranslate>

          <ScrollTranslate
            start={0.78} // .33
            end={1} // fixed
            pos={pos}
            fromHorizontal={"0px"}
            fromVertical={"0%"}
            toHorizontal={"0px"}
            toVertical={"-34%"}
          >
            <ScrollTranslate
              start={1} // fixed
              end={2.47}
              pos={pos}
              fromHorizontal={"0px"}
              fromVertical={"0%"}
              toHorizontal={"0px"}
              toVertical={"100%"}
            >
              <WhiteBox />
            </ScrollTranslate>
          </ScrollTranslate>

          <ScrollTranslate
            start={0.9} // .33
            end={1} // fixed
            pos={pos}
            fromHorizontal={"0px"}
            fromVertical={"-100%"}
            toHorizontal={"0px"}
            toVertical={"-118%"}
          >
            <ScrollTranslate
              start={1} // fixed
              end={3.78}
              pos={pos}
              fromHorizontal={"0px"}
              fromVertical={"0%"}
              toHorizontal={"0px"}
              toVertical={"100%"}
            >
              <RedBox />
            </ScrollTranslate>
          </ScrollTranslate>
        </FourthBlock>
      )}
    </StyledContainer>
  );
};

export default Teaser;
