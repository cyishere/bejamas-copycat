import styled from "styled-components";

import { QUERIES } from "@/styles/constants";
import { SectionProps } from "@/utils/types";

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export const Wrapper = styled.section<SectionProps>`
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
    @media ${QUERIES.mdScreenAndLarger} {
      padding: 6rem;
    }
  `
      : null}
`;

export default Section;
