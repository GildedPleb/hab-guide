import styled from "styled-components";

interface TransformType {
  end: number;
  fromLeft: string;
  fromTop: string;
  pos: number | null;
  start: number;
  toLeft: string;
  toTop: string;
}

const ScrollTransform = styled.div.attrs<TransformType>(
  ({ fromLeft, fromTop, toLeft, toTop, start, end, pos }) => {
    if (pos || pos === 0) {
      const normalizedStart = pos - start;
      const diffLeft = `calc(${fromLeft} - ${toLeft})`;
      const diffTop = `calc(${fromTop} - ${toTop})`;
      const dist = end - start;
      const percentThere = normalizedStart / dist;
      const calcLeft = `calc(${toLeft} + calc(${diffLeft} - calc(${diffLeft} * ${percentThere})))`;
      const calcTop = `calc(${toTop} + calc(${diffTop} - calc(${diffTop} * ${percentThere})))`;

      return {
        style: {
          left: `${pos < start ? fromLeft : pos < end ? calcLeft : toLeft}`,
          top: `${pos < start ? fromTop : pos < end ? calcTop : toTop}`,
        },
      };
    }

    return {
      style: {
        top: fromTop,
        left: fromLeft,
      },
    };
  }
)<TransformType>`
  will-change: auto;
  position: absolute;
`;

export default ScrollTransform;
