import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { BREAKPOINTS } from "@/styles/constants";
import Logo from "./Logo";
import { NavbarSmallScreen, NavbarWideScreen } from "./Navbar";
import useScrollVisible from "@/utils/useScrollVisible";
import GetInTouchButton from "./GetInTouchButton";
import SmallHeaderAtBottom from "./SmallHeaderAtBottom";
import SmallHeaderAtTop from "./SmallHeaderAtTop";

const Header = () => {
  const isWideScreen = useMediaQuery({ minWidth: BREAKPOINTS.xxmd });
  console.log("isWideScreen:", isWideScreen);

  const [isOpened, setIsOpened] = useState(false);
  const isVisible = useScrollVisible();

  if (isWideScreen) {
    return (
      <Wrapper>
        <Grid>
          <div>
            <Logo />
          </div>

          <NavbarWideScreen />

          <StartRight>
            <GetInTouchButton isVisible={isVisible} />
          </StartRight>
        </Grid>
      </Wrapper>
    );
  }

  return (
    <>
      <SmallHeaderAtTop isOpened={isOpened} setIsOpened={setIsOpened} />

      <SmallHeaderAtBottom
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        isVisible={isVisible}
      />

      {isOpened ? (
        <NavbarSmallScreen isOpened={isOpened} setIsOpened={setIsOpened} />
      ) : null}
    </>
  );
};

const Wrapper = styled.header`
  padding: 0 3rem;
  width: calc(1400px - 6rem);
  padding: 1rem 3rem;
  margin-bottom: 5rem;
  position: fixed;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.95);
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
