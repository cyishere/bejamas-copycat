import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/constants";

const SectionHeader = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;

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
