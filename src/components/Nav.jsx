import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  margin-right: 30px;
  text-decoration: none;
  color: black;
  &.${(props) => props.activeClassName} {
    color: blue;
  }
`;

export const Divider = styled.div`
  width: 100%;
  margin: 20px 0px;
  border: 1px solid #ebe6df;
`;

const Nav = () => {
  return (
    <Container>
      <Links>
        <StyledLink activeClassName="active" exact to="/">
          Home
        </StyledLink>
        <StyledLink activeClassName="active" to="/search">
          Search
        </StyledLink>
      </Links>
      <Divider />
    </Container>
  );
};

export default Nav;
