import styled from "styled-components";

import { ButtonLink } from "../Button";
import { headerProps } from "@/utils/types";

const GetInTouchButton: React.FC<headerProps> = ({ isVisible }) => {
  return (
    <ButtonHelper
      variant="primary"
      href="/estimate-project"
      isVisible={isVisible}
    >
      Get in touch
    </ButtonHelper>
  );
};

const ButtonHelper = styled(ButtonLink)<headerProps>`
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
