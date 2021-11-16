import styled from "styled-components";

import { ButtonLink } from "../Button";
import { HeaderProps } from "@/utils/types";

const GetInTouchButton: React.FC<HeaderProps> = ({ isVisible }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <ButtonLink variant="primary" href="/estimate-project">
        Get in touch
      </ButtonLink>
    </Wrapper>
  );
};

const Wrapper = styled.div<HeaderProps>`
  transition: transform 500ms ease, filter 300ms ease;
  transform: scale(0);
  filter: blur(12px);

  ${(props) =>
    props.isVisible
      ? `
    transform: scale(1);
    filter: blur(0px);
  `
      : `
    transform: scale(0);
    filter: blur(12px);
  `}
`;

export default GetInTouchButton;
