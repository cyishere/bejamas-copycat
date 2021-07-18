import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/constants";

const GridColumn: React.FC = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

interface GridProps {
  readonly hidden?: boolean;
}

export const Wrapper = styled.div<GridProps>`
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
