import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "@/styles/constants";

import Logo from "./Logo";
import MenuToggleButton from "./MenuToggleButton";
import { FlexBetween, FlexStart } from "@/styles/shared";
import Navbar from "./Navbar";
import NavList from "./NavList";
import { ButtonLink } from "../Button";

const Header = () => {
  const isWideScreen = useMediaQuery({ minWidth: BREAKPOINTS.xxmd });

  const [isOpened, setIsOpened] = useState(false);

  if (isWideScreen) {
    return (
      <Wrapper>
        <FlexStartHelper>
          <LogoWrapper>
            <Logo isWideScreen={isWideScreen} />
          </LogoWrapper>

          <NavWrapper>
            <NavList />
          </NavWrapper>

          <ButtonLink variant="primary" href="/estimate-project">
            Get in touch
          </ButtonLink>
        </FlexStartHelper>
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
        <Navbar isOpened={isOpened} setIsOpened={setIsOpened} />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 1.5rem 3rem;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    padding: 1rem 3rem;
    margin-bottom: 5rem;
  }
`;

const FlexStartHelper = styled(FlexStart)`
  width: 100%;
`;

const LogoWrapper = styled.div`
  flex: 200px;
`;

const NavWrapper = styled.nav`
  flex: auto;
`;

export default Header;
