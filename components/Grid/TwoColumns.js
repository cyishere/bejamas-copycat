import styled from "styled-components";
import { BREAKPOINTS } from "@/styles/constants";

const THRESHOLD = {
  small: BREAKPOINTS.sm,
  normal: BREAKPOINTS.md,
  special: BREAKPOINTS.xmd,
};

const TwoColumns = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: ${(props) =>
      props.break === "small"
        ? THRESHOLD.small
        : props.break === "special"
        ? THRESHOLD.special
        : THRESHOLD.normal}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default TwoColumns;
