import styled from "styled-components";

import MenuToggleButton from "./MenuToggleButton";
import NavList from "./NavList";
import Logo from "./Logo";
import { FlexBetween } from "@/styles/shared";
import { HeaderProps } from "@/utils/types";

export const NavbarSmallScreen: React.FC<HeaderProps> = ({
  isOpened,
  setIsOpened,
}) => {
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
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.styles.navBottomBg};
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
