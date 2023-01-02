import styled from "styled-components";

interface TransformType {
  end: number;
  from: number;
  horizontal?: boolean;
  pos: number | null;
  start: number;
  to: number;
}

const ScrollClipPath = styled.div.attrs<TransformType>(
  ({ from, to, start, end, pos, horizontal = false }) => {
    if (pos || pos === 0) {
      const normalizedStart = pos - start;
      const diff = from - to;

      const dist = end - start;
      const percentThere = normalizedStart / dist;
      const calc = to + diff - diff * percentThere;
      const res = pos < start ? from : pos < end ? calc : to;

      return {
        style: {
          clipPath: `inset(${horizontal ? res : 0} ${horizontal ? 0 : res}% ${
            horizontal ? res : 0
          } ${horizontal ? 0 : res}%)`,
        },
      };
    }

    return {
      style: {
        clipPath: `inset(0 ${from}% 0 ${from}%)`,
      },
    };
  }
)<TransformType>`
  will-change: auto;
`;

export default ScrollClipPath;
