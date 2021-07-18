import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/constants";
import { SectionProps } from "@/utils/types";

const SectionHeader: React.FC<SectionProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.header<SectionProps>`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;

  h3 {
    order: -1;
    margin-bottom: 1.5rem;
  }

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  ${(props) =>
    !props.special
      ? `
    @media (min-width: ${BREAKPOINTS.md}) {
      text-align: center;
    }
  `
      : null}
`;

export default SectionHeader;
