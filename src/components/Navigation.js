import { NavLink } from "react-router-dom";

import styled from "styled-components";

function FooterNavigation({ shoppingCard }) {
  return (
    <Nav>
      <ul>
        <li>
          <StyledNavlink to="/warenkorb">Warenkorb</StyledNavlink>
          <b>{shoppingCard.length}</b>
        </li>

        <li>
          <StyledNavlink to="/">Home</StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/history">History</StyledNavlink>
        </li>
      </ul>
    </Nav>
  );
}

const StyledNavlink = styled(NavLink)`
  background: transparent;
  border: none;
  font-size: 1em;
  padding: 1.5em 0.5em;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  border-top: 1px solid black;
  background-color: aliceblue;
  height: 40px;
  ul {
    padding: 0;
    display: flex;
    justify-content: space-around;

    li {
      list-style: none;
    }
  }
`;
export default FooterNavigation;
