import styled from "styled-components";

import { BREAKPOINTS, FONTS } from "@/styles/constants";

const SubTitle: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.h3`
  color: ${({ theme }) => theme.colors.textMain};
  font-family: ${FONTS.main};
  font-size: ${FONTS.smaller};
  font-weight: ${FONTS.bold};
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (min-width: ${BREAKPOINTS.md}) {
    font-size: ${FONTS.small};
  }
`;

export default SubTitle;
