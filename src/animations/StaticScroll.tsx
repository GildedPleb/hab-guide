import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface OuterType {
  height: string;
}

const Outer = styled.div<OuterType>`
  height: ${({ height }) => height};
  position: relative;
`;

const Inner = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
`;

function StaticScroll({
  refOuter,
  child,
  height = "300vh",
  minPos = -1,
  maxPos = 2,
}: {
  child: React.FC<{ pos: number | null }>;
  height?: string;
  refOuter: React.RefObject<HTMLDivElement> | null;
  minPos?: number;
  maxPos?: number;
}) {
  const refInner = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState<number | null>(null);

  function onScrollW(_e: Event) {
    if (refInner.current !== null) {
      const innerRect = refInner.current.getBoundingClientRect();
      const offTop = 0 - innerRect.y;
      const oHeight = window.innerHeight;

      const iHeight = innerRect.height;
      const diff = iHeight - oHeight;

      const newPos =
        offTop / (diff > 0 ? diff : oHeight + (offTop < 0 ? 0 : 1));
      const rounded = parseFloat(newPos.toFixed(3));
      if (rounded >= minPos && rounded <= maxPos) setPos(rounded);
    }
  }

  useEffect(() => {
    if (refOuter && refOuter.current) {
      document.addEventListener("scroll", onScrollW);
    }
    return () => {
      if (refOuter && refOuter.current) {
        document.removeEventListener("scroll", onScrollW);
      }
    };
  }, [refOuter]);

  return (
    <Outer height={height} ref={refInner}>
      <Inner>{child({ pos })}</Inner>
    </Outer>
  );
}

export default React.memo(StaticScroll);
