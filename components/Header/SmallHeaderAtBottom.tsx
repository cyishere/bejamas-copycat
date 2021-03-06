import styled from "styled-components";

import { FlexBetween, FlexStart } from "@/styles/shared";
import { QUERIES } from "@/styles/constants";
import Logo from "./Logo";
import MenuToggleButton from "./MenuToggleButton";
import GetInTouchButton from "./GetInTouchButton";
import { HeaderProps } from "@/utils/types";

const SmallHeaderAtBottom: React.FC<HeaderProps> = ({
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

const Wrapper = styled.header<HeaderProps>`
  padding: 1rem 3rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.styles.navBottomBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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

  @media ${QUERIES.xxmdScreenAndLarger} {
    display: none;
  }
`;

const FlexStartHelder = styled(FlexStart)`
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default SmallHeaderAtBottom;
