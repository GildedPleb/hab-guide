import React from "react";
import styled from "styled-components";

interface FadeType {
  end: number;
  from: number;
  pos: number | null;
  start: number;
  to: number;
  killAtZero: boolean;
}

const ScrollFade = styled.div.attrs<FadeType>(
  ({ from, to, start, end, pos, killAtZero }) => {
    if (pos || pos === 0) {
      const normalizedStart = pos - start;
      const diff: number = to - from;

      if (diff === 0)
        return {
          style: {
            opacity: `${from}`,
            ...(from === 0 && killAtZero && { display: "none" }),
          },
        };

      const dist = end - start;
      const percentThere = normalizedStart / dist;
      const calc =
        diff >= 0 ? diff * percentThere : from - Math.abs(diff * percentThere);

      const res = pos < start ? from : pos < end ? calc : to;

      return {
        style: {
          opacity: `${res}`,
          ...(res === 0 && killAtZero && { display: "none" }),
        },
      };
    }

    return {
      style: {
        opacity: `${from}`,
        ...(from === 0 && killAtZero && { display: "none" }),
      },
    };
  }
)<FadeType>`
  will-change: auto;
`;

export default React.memo(ScrollFade);
