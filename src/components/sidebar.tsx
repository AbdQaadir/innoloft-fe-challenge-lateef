import { UnorderedList, ListItem } from "evergreen-ui";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/store";

const StyledSidebar = styled.div`
  padding: 20px 30px;
  height: 100%;
  position: relative;
  width: 100%;
  overflow-y: hidden;
  background: #eee;
  border-right: 1px solid #e6e6e6;
  transition: all 700ms ease-in-out;

  @media screen and (max-width: 799px) {
    width: 120px;
    height: 90%;
    position: absolute;
    bottom: 0;
    z-index: 99999;
    background: rgba(238, 238, 238, 0.95);
    margin-left: ${({ isMobileNavOpen }: { isMobileNavOpen: boolean }) =>
      isMobileNavOpen ? "0" : "-120px"};
  }
  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 20px 0;

      a {
        display: block;
        padding-right: 50px;
      }
    }
  }
`;
function Sidebar() {
  const { isMobileNavOpen } = useSelector((state: RootState) => state.sidebar);

  return (
    <>
      <StyledSidebar isMobileNavOpen={isMobileNavOpen}>
        <UnorderedList>
          <ListItem>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/product">
              <span> Product</span>
            </NavLink>
          </ListItem>
        </UnorderedList>
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
