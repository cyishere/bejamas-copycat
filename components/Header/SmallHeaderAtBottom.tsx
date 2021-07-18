import styled from "styled-components";

import { FlexBetween, FlexStart } from "@/styles/shared";
import { BREAKPOINTS, STYLES } from "@/styles/constants";
import Logo from "./Logo";
import MenuToggleButton from "./MenuToggleButton";
import GetInTouchButton from "./GetInTouchButton";
import { headerProps } from "@/utils/types";

const SmallHeaderAtBottom: React.FC<headerProps> = ({
  isOpened,
  setIsOpened,
  isVisible,
}) => {
  return (
    <Wrapper isVisible={isVisible}>
      <FlexBetween>
        <FlexStartHelder>
          <MenuToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />

          <GetInTouchButton isVisible={isVisible!} />
        </FlexStartHelder>

        <Logo />
      </FlexBetween>
    </Wrapper>
  );
};

const Wrapper = styled.header<headerProps>`
  padding: 1rem 3rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-image: ${STYLES.linearGradientBlur}; */
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 10;
  transition: transform 0.5s ease;

  ${(props) =>
    props.isVisible
      ? `
    transform: translateY(0);
  `
      : `
    transform: translateY(200%);
  `}

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    display: none;
  }
`;

const FlexStartHelder = styled(FlexStart)`
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default SmallHeaderAtBottom;