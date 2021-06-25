import styled from "styled-components";
import { COLORS } from "@/styles/constants";

const Marker = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.mark`
  background-image: linear-gradient(
    to bottom,
    ${COLORS.orange},
    ${COLORS.primary} 70%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default Marker;
