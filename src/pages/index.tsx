import React, { useRef, useLayoutEffect, useState } from "react";
import GlobalStyle from "../styles/globalStyles";
import styled from "styled-components";
import FAB from "../components/nav/FAB";
import Aesthetics from "../components/pitch/FeatureAesthetics";
import Assimilate from "../components/pitch/FeatureAssimilate";
import Fin from "../components/pitch/Fin";
import HALX from "../components/pitch/FeatureHALX";
import History1 from "../components/pitch/HistoryWhatIsHA";
import History2 from "../components/pitch/HistoryProblemsOfHA";
import History3 from "../components/pitch/HistoryGoogle";
import History4 from "../components/pitch/HistoryBorg";
import History5 from "../components/pitch/HistoryK8s";
import History6 from "../components/pitch/HistoryBitcoin";
import Hydra from "../components/pitch/FeatureHydra";
import Intro from "../components/pitch/Intro";
import MinMax from "../components/pitch/MinMax";
import Sovereign from "../components/pitch/FeatureSoverign";
import StaticScroll from "../animations/StaticScroll";
import Teaser from "../components/pitch/Teaser";

const HideAddressBarScroller = styled.section`
  /* padding-top: 1px; */
`;

const Pitch = styled.section`
  overflow-y: scroll;
  height: 100vh; 
`;

export default function Home(): JSX.Element {
  const refOuter = useRef<HTMLDivElement>(null);
  const [fullScreen, setFullScreen] = useState(false)

  // const onScroll = ()=>{
  //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) && !document.fullscreenElement && document.documentElement && document.documentElement.requestFullscreen && !fullScreen) {
  //     document.documentElement.requestFullscreen();
  //     setFullScreen(true);
  //   }
  //   return ()=>{
  //     if (document.exitFullscreen){
  //       document.exitFullscreen();
  //       setFullScreen(false);
  //     }
  //   }
  // }

  useLayoutEffect(() => {
    if (!fullScreen)
      setTimeout(function () {
        if (!window.pageYOffset) {
          window.scrollTo(0, 1);
          setFullScreen(true);
        }
      }, 1000);
    // if (refOuter && refOuter.current) {
    //   refOuter.current.addEventListener("scroll", onScroll);
    // }
    return () => {
      // if (refOuter && refOuter.current) {
      //   refOuter.current.removeEventListener("scroll", onScroll);
      // }
      setFullScreen(false);
    };
  }, [refOuter]);

  return (
    <>
      <GlobalStyle />
      <HideAddressBarScroller>
        <FAB />
        <Pitch ref={refOuter}>
          <StaticScroll
            refOuter={refOuter}
            child={Teaser}
            height={"300vh"}
            minPos={0}
            maxPos={1.5}
          />
          <StaticScroll
            refOuter={refOuter}
            child={History1}
            height={"200vh"}
            minPos={-1.5}
            maxPos={1.2}
          />
          <StaticScroll
            refOuter={refOuter}
            child={History2}
            height={"200vh"}
            maxPos={1.5}
          />
          <StaticScroll
            refOuter={refOuter}
            child={History3}
            height={"150vh"}
            minPos={0}
            maxPos={1}
          />
          <StaticScroll
            refOuter={refOuter}
            child={History4}
            height={"200vh"}
            minPos={-0.5}
            maxPos={2}
          />
          <StaticScroll
            refOuter={refOuter}
            child={History5}
            height={"200vh"}
            minPos={-2}
            maxPos={1.5}
          />
          <StaticScroll
            refOuter={refOuter}
            child={History6}
            height={"300vh"}
            minPos={-0.5}
            maxPos={1}
          />
          <StaticScroll
            refOuter={refOuter}
            child={Intro}
            height={"500vh"}
            minPos={0}
            maxPos={1}
          />
          <StaticScroll
            refOuter={refOuter}
            child={Assimilate}
            height={"100vh"}
            minPos={0}
            maxPos={0}
          />
          <StaticScroll
            refOuter={refOuter}
            child={Sovereign}
            height={"100vh"}
            minPos={0}
            maxPos={0}
          />
          <StaticScroll
            refOuter={refOuter}
            child={HALX}
            height={"100vh"}
            minPos={0}
            maxPos={0}
          />
          <StaticScroll
            refOuter={refOuter}
            child={Hydra}
            height={"100vh"}
            minPos={0}
            maxPos={0}
          />
          <StaticScroll
            refOuter={refOuter}
            child={Aesthetics}
            height={"100vh"}
            minPos={0}
            maxPos={0}
          />
          <StaticScroll
            refOuter={refOuter}
            child={MinMax}
            height={"600vh"}
            minPos={0}
            maxPos={1.2}
          />
          <StaticScroll
            refOuter={refOuter}
            child={Fin}
            height={"300vh"}
            minPos={-0.5}
            maxPos={1}
          />
        </Pitch>
      </HideAddressBarScroller>
    </>
  );
}
