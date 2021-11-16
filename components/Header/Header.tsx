import { useState } from "react";
import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/constants";
import Logo from "./Logo";
import { NavbarSmallScreen, NavbarWideScreen } from "./Navbar";
import useScrollVisible from "@/hooks/use-scroll-visible";
import GetInTouchButton from "./GetInTouchButton";
import SmallHeaderAtBottom from "./SmallHeaderAtBottom";
import SmallHeaderAtTop from "./SmallHeaderAtTop";
import { HeaderProps } from "@/utils/types";

const Header: React.FC<HeaderProps> = ({ isThemeLight }) => {
  const [isOpened, setIsOpened] = useState(false);
  const isVisible = useScrollVisible();

  return (
    <>
      {/* For Large Screen */}
      <Wrapper>
        <Grid>
          <div>
            <Logo isThemeLight={isThemeLight} />
          </div>

          <NavbarWideScreen />

          <StartRight>
            <GetInTouchButton isVisible={isVisible} />
          </StartRight>
        </Grid>
      </Wrapper>

      {/* For Small Screen */}
      <SmallHeaderAtTop isOpened={isOpened} setIsOpened={setIsOpened} />

      <SmallHeaderAtBottom
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        isVisible={isVisible}
      />

      {isOpened ? (
        <NavbarSmallScreen
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          isThemeLight={isThemeLight}
        />
      ) : null}
    </>
  );
};

const Wrapper = styled.header`
  display: none;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    display: block;
    width: calc(1400px - 6rem);
    padding: 1rem 3rem;
    margin-bottom: 5rem;
    position: fixed;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.bgHeader};
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
`;

const StartRight = styled.div`
  text-align: right;
`;

export default Header;
