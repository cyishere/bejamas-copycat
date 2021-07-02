import styled from "styled-components";
import { BREAKPOINTS } from "@/styles/constants";

const OneNTwoColumns = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: 1fr 2fr;
  }
`;

export default OneNTwoColumns;
