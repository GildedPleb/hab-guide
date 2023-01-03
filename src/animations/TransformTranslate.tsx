import React from "react";
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
      const diffHorizontal = `(${fromHorizontal} - ${toHorizontal})`;
      const diffVertical = `(${fromVertical} - ${toVertical})`;
      if (end === start)
        throw new Error(
          `End and Start must be differnt values. Got ${end} for both.`
        );
      const dist = end - start;
      const percentThere = normalizedStart / dist;
      const calcHorizontal = `calc(${toHorizontal} + (${diffHorizontal} - (${diffHorizontal} * ${percentThere})))`;
      const calcVertical = `calc(${toVertical} + (${diffVertical} - (${diffVertical} * ${percentThere})))`;

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

export default React.memo(ScrollTransform);
