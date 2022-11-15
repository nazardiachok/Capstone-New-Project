import { NavLink } from "react-router-dom";
import homeIcon from "../components/images/home-outline.png";
import shoppingBag from "../components/images/shopping-bag.png";
import history from "../components/images/documents.png";
import favourites from "../components/images/favourites.png";

import styled from "styled-components";

function FooterNavigation({ shoppingCard }) {
  return (
    <>
      <StyledNavBar>
        <StyledNavLink to="/" end>
          <img src={homeIcon} alt="home"></img>
          <p>Home </p>
        </StyledNavLink>

        <StyledNavLink to="/warenkorb">
          <img src={shoppingBag} alt="shopping Bag"></img>
          <p>
            Cards <b>{shoppingCard.length}</b>{" "}
          </p>
        </StyledNavLink>

        <StyledNavLink to="/history">
          <img src={history} alt="history"></img>
          <p>History </p>
        </StyledNavLink>

        <StyledNavLink to="/favourites">
          <img src={favourites} alt="favourites"></img>
          <p>Favourites </p>
        </StyledNavLink>
      </StyledNavBar>
    </>
  );
}

const StyledNavBar = styled.nav`
  position: relative;
  background-color: aliceblue;
  width: 100%;
  left: 0;
  min-width: 350px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
`;

const StyledNavLink = styled(NavLink)`
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;

  img {
    width: 25px;
    height: 25px;
  }

  &.active {
    background-color: #fc6b03;
    b {
      color: black;
    }
  }
  p {
    font-size: 15px;
    color: black;
    margin: 0px;
  }
  b {
    color: red;
  }
`;

export default FooterNavigation;
