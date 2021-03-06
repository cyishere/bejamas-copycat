import styled from "styled-components";

import { QUERIES } from "@/styles/constants";

interface GridProps {
  hidden?: boolean;
}

const GridColumn: React.FC<GridProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export const Wrapper = styled.div<GridProps>`
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  ${(props) =>
    props.hidden
      ? `
    display: none;

    @media ${QUERIES.mdScreenAndLarger} {
      display: block;
    }
  `
      : null}
`;

export default GridColumn;
