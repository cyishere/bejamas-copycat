import styled from "styled-components";

import { FlexBetween } from "@/styles/shared";
import MenuToggleButton from "./MenuToggleButton";
import Logo from "./Logo";
import { HeaderProps } from "@/utils/types";
import { BREAKPOINTS } from "@/styles/constants";

const SmallHeaderAtTop: React.FC<HeaderProps> = ({ isOpened, setIsOpened }) => {
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

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    display: none;
  }
`;

export default SmallHeaderAtTop;
