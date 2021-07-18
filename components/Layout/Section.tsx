import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/constants";
import { sectionProps } from "@/utils/types";

const Section: React.FC<sectionProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export const Wrapper = styled.section<sectionProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.5rem;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .button-group {
    margin-bottom: 3rem;
  }

  ${(props) =>
    !props.special
      ? `
    @media (min-width: ${BREAKPOINTS.md}) {
      padding: 6rem;
    }
  `
      : null}
`;

export default Section;
