import React from "react";
import { Link } from "react-router-dom";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import HamburgerIcon from "../assets/hamburger.png";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/features/sidebar/sidebarSlice";

const StyledHeader = styled.header`
  padding: 0 35px;
  height: 97%;
  display: flex;
  gap: 20px;
  align-items: center;
  background: ${({ theme }: any) => theme.mainColor || "#fff"};
  border-bottom: 2px solid #e6e6e6;

  .toggle-btn {
    padding: 5px 9px;
    cursor: pointer;
    display: flex;
    height: 40px;
    background: #fff;
    border: 1px solid #cecece;
    outline: none;
    align-items: center;
    border-radius: 5px;

    @media screen and (min-width: 800px) {
      display: none;
    }
  }
  a {
    svg {
      width: 120px;
    }
  }
`;

function Header() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <StyledHeader>
      <button className="toggle-btn" onClick={() => dispatch(toggleSidebar())}>
        <img src={HamburgerIcon} alt="toggle icon" />
      </button>
      <Link to="/">
        <Pane background="#fff" padding={9} borderRadius={12}>
          <Logo />
        </Pane>
      </Link>
    </StyledHeader>
  );
}

export default Header;
