import styled from "styled-components";
import { FONTS } from "@/styles/constants";

const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.h2`
  font-size: ${FONTS.xxl};
`;

export default Title;
