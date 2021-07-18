import styled from "styled-components";

import { BREAKPOINTS, COLORS } from "@/styles/constants";

const SectionWithBg: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.bgGrayLight};
  margin-left: -3rem;
  margin-right: -3rem;
  padding: 3rem;
  margin-bottom: 4.5rem;
  max-width: calc(1400px - 6rem);

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    border-radius: 1rem;
    margin-left: 0rem;
    margin-right: 0rem;
    padding: 6rem 12rem;
  }
`;

export default SectionWithBg;
