import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(30, 30, 30, 0.8));
  padding: 10px 20px;

  .container-fluid {
    display: flex;
    justify-content: center;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

function Navbar() {
  return (
    <StyledNav className="navbar navbar-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">SkyCast</span>
      </div>
    </StyledNav>
  );
}

export default Navbar;
