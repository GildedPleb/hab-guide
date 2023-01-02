import styled from "styled-components";

interface TransformType {
  end: number;
  fromHorizontal: string;
  fromVertical: string;
  pos: number | null;
  start: number;
  toHorizontal: string;
  toVertical: string;
}

const ScrollTransform = styled.div.attrs<TransformType>(
  ({
    fromHorizontal,
    fromVertical,
    toHorizontal,
    toVertical,
    start,
    end,
    pos,
  }) => {
    if (pos || pos === 0) {
      const normalizedStart = pos - start;
      const diffHorizontal = `calc(${fromHorizontal} - ${toHorizontal})`;
      const diffVertical = `calc(${fromVertical} - ${toVertical})`;
      const dist = end - start;
      const percentThere = normalizedStart / dist;
      const calcHorizontal = `calc(${toHorizontal} + calc(${diffHorizontal} - calc(${diffHorizontal} * ${percentThere})))`;
      const calcVertical = `calc(${toVertical} + calc(${diffVertical} - calc(${diffVertical} * ${percentThere})))`;

      return {
        style: {
          transform: `translate(${
            pos < start
              ? fromHorizontal
              : pos < end
              ? calcHorizontal
              : toHorizontal
          }, ${
            pos < start ? fromVertical : pos < end ? calcVertical : toVertical
          })`,
        },
      };
    }

    return {
      style: {
        transform: `translate(${fromHorizontal}, ${fromVertical})`,
      },
    };
  }
)<TransformType>`
  will-change: auto;
`;

export default ScrollTransform;
