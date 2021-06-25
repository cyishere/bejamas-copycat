import styled from "styled-components";
import { FONTS } from "@/styles/constants";

const SubTitle = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.h3`
  font-family: ${FONTS.main};
  font-size: ${FONTS.smaller};
  font-weight: ${FONTS.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export default SubTitle;
