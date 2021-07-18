import styled from "styled-components";

import { STYLES } from "@/styles/constants";
import SubTitle from "./SubTitle";

const SubTitleColorful: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled(SubTitle)`
  background-image: ${STYLES.linearGradientPrimary};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default SubTitleColorful;
