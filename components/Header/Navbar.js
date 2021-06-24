import styled from "styled-components";

import MenuToggleButton from "./MenuToggleButton";
import NavList from "./NavList";
import Logo from "./Logo";
import { FlexBetween } from "@/styles/flex";

const Navbar = ({ isOpened, setIsOpened }) => {
  return (
    <Wrapper>
      <NavList />
      <Footer>
        <MenuToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />
        <Logo />
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 1.5rem;
`;

const Footer = styled(FlexBetween)`
  padding: 0 1.5rem;
`;

export default Navbar;
