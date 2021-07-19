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

export default GetInTouchButton;
