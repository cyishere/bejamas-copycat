import { BREAKPOINTS } from "@/styles/constants";
import styled from "styled-components";

const Section = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export const Wrapper = styled.section`
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
