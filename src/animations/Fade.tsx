import styled from "styled-components";

interface FadeType {
  end: number;
  from: number;
  pos: number | null;
  start: number;
  to: number;
}

const ScrollFade = styled.div.attrs<FadeType>(
  ({ from, to, start, end, pos }) => {
    if (pos || pos === 0) {
      const normalizedStart = pos - start;
      const diff: number = to - from;

      if (diff === 0)
        return {
          style: {
            opacity: `${from}`,
          },
        };

      const dist = end - start;
      const percentThere = normalizedStart / dist;
      const calc =
        diff >= 0 ? diff * percentThere : from - Math.abs(diff * percentThere);

      return {
        style: {
          opacity: `${pos < start ? from : pos < end ? calc : to}`,
        },
      };
    }

    return {
      style: {
        opacity: `${from}`,
      },
    };
  }
)<FadeType>`
  will-change: auto;
`;

export default ScrollFade;
