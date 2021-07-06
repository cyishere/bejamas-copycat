import { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { BREAKPOINTS } from "@/styles/constants";
import { FlexBetween } from "@/styles/shared";
import Logo from "./Logo";
import MenuToggleButton from "./MenuToggleButton";
import { NavbarSmallScreen, NavbarWideScreen } from "./Navbar";
import { ButtonLink } from "../Button";

const Header = () => {
  const isWideScreen = useMediaQuery({ minWidth: BREAKPOINTS.xxmd });

  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    if (window.scrollY > 650) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleVisible);

    return () => document.removeEventListener("scroll", handleVisible);
  }, []);

  if (isWideScreen) {
    return (
      <Wrapper>
        <Grid>
          <div>
            <Logo isWideScreen={isWideScreen} />
          </div>

          <NavbarWideScreen />

          <StartRight>
            <ButtonHelper
              variant="primary"
              href="/estimate-project"
              isVisible={isVisible}
            >
              Get in touch
            </ButtonHelper>
          </StartRight>
        </Grid>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <FlexBetween>
        <div>
          <Logo isWideScreen={isWideScreen} />
        </div>

        <MenuToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />
      </FlexBetween>

      {isOpened ? (
        <NavbarSmallScreen isOpened={isOpened} setIsOpened={setIsOpened} />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 1.5rem 3rem;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    width: calc(1400px - 6rem);
    padding: 1rem 3rem;
    margin-bottom: 5rem;
    position: fixed;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.95);
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

const ButtonHelper = styled(ButtonLink)`
  transition: transform 0.5s ease;
  transform: scale(0);

  ${(props) =>
    props.isVisible
      ? `
    transform: scale(1);
  `
      : `
    transform: scale(0);
  `}
`;

export default Header;
