import styled from "styled-components";

import NavList from "./NavList";

const NavbarWideScreen = () => {
  return (
    <Wrapper>
      <NavList />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NavbarWideScreen;
