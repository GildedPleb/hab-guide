import React from "react";
import Link from "@docusaurus/Link";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Container = styled(Link)`
  position: fixed;
  top: 1rem;
  left: 1.2rem;
  display: flex;
  flex-direction: column;
  z-index: 200;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  opacity: 0.5;
`;

const Nav = (_props: unknown) => {
  return (
    <Container to="/why">
      <img src={useBaseUrl("/img/ionico.png")} />
    </Container>
  );
};

export default React.memo(Nav);
