
import React from "react";
import styled, { keyframes } from "styled-components";

const l4 = keyframes`
  to {
    clip-path: inset(0 -1ch 0 0);
  }
`;

const Loader = styled.div`
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: ${l4} 1s steps(4) infinite;

  &:before {
    content: "SkyCast...";
  }
`;

function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
      <Loader />
    </div>
  );
}

export default Spinner;
