import styled from "react-emotion";
import { NavLink as Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 0 32px;
  letter-spacing: 4px;

  :hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: line-through;
  }
`;

export default NavLink;
