import styled from "styled-components";

import MenuToggleButton from "./MenuToggleButton";
import NavList from "./NavList";
import Logo from "./Logo";
import { FlexBetween } from "@/styles/shared";

export const NavbarSmallScreen = ({ isOpened, setIsOpened }) => {
  return (
    <SmallWrapper>
      <NavList />
      <Footer>
        <MenuToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />
        <Logo />
      </Footer>
    </SmallWrapper>
  );
};

export const NavbarWideScreen = () => {
  return (
    <WideWrapper>
      <NavList />
    </WideWrapper>
  );
};

const SmallWrapper = styled.nav`
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

const WideWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
