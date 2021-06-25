import styled from "styled-components";

import { COLORS } from "@/styles/constants";

const SectionWithBg = ({ children }) => {
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

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export default SectionWithBg;
