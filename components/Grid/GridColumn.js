import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/constants";

const GridColumn = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  ${(props) =>
    props.hidden
      ? `
    display: none;

    @media (min-width: ${BREAKPOINTS.md}) {
      display: block;
    }
  `
      : null}
`;

export default GridColumn;
