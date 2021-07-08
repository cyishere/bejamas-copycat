import styled from "styled-components";

import { FlexBetween } from "@/styles/shared";
import MenuToggleButton from "./MenuToggleButton";
import Logo from "./Logo";

const SmallHeaderAtTop = ({ isOpened, setIsOpened }) => {
  return (
    <Wrapper>
      <FlexBetween>
        <div>
          <Logo />
        </div>

        <MenuToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />
      </FlexBetween>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 1.5rem 3rem;
`;

export default SmallHeaderAtTop;
