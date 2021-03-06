import styled from "styled-components";

import SubTitle from "./SubTitle";

const SubTitleColorful = styled(SubTitle)`
  background-image: ${({ theme }) => theme.styles.linearGradientPrimary};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default SubTitleColorful;
