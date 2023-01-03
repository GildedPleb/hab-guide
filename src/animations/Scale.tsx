import React from "react";
import styled from "styled-components";

interface ScaleType {
  end: number;
  from: number;
  pos: number | null;
  start: number;
  to: number;
}

const ScrollScale = styled.div.attrs<ScaleType>(
  ({ from, to, start, end, pos }) => {
    if (pos || pos === 0) {
      const normalizedStart = pos - start;
      const diff: number = to - from;

      if (diff === 0)
        return {
          style: {
            transform: `scale(${from})`,
          },
        };

      const dist = end - start;
      const percentThere = normalizedStart / dist;
      const calc =
        diff >= 0
          ? from + diff * percentThere
          : from - Math.abs(diff * percentThere);

      return {
        style: {
          transform: `scale(${pos < start ? from : pos < end ? calc : to})`,
        },
      };
    }

    return {
      style: {
        transform: `scale(${from})`,
      },
    };
  }
)<ScaleType>`
  will-change: auto;
`;

export default React.memo(ScrollScale);
