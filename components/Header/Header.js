import { useState } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import MenuToggleButton from "./MenuToggleButton";
import { FlexBetween } from "@/styles/shared";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Wrapper>
      <FlexBetween>
        <div>
          <Logo />
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
`;

export default Header;
