import React from "react";

import ServerStyle from "../components/ServerStyles";

function Root({ children }) {
  return (
    <>
      <ServerStyle from={children} />
      {children}
    </>
  );
}

export default Root;
