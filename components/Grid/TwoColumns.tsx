import styled from "styled-components";
import { BREAKPOINTS } from "@/styles/constants";

const THRESHOLD = {
  small: BREAKPOINTS.sm,
  normal: BREAKPOINTS.md,
  special: BREAKPOINTS.xmd,
};

interface ColumnProps {
  break?: "small" | "special";
  counter?: boolean;
}

const TwoColumns: React.FC<ColumnProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div<ColumnProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${(props) =>
      props.break === "small"
        ? THRESHOLD.small
        : props.break === "special"
        ? THRESHOLD.special
        : THRESHOLD.normal}) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) =>
    props.counter
      ? `
    counter-reset: numbers;
  `
      : null}
`;

export default TwoColumns;
