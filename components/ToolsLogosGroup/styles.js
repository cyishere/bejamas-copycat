import styled from "styled-components";

import { COLORS, STYLES } from "@/styles/constants";
import { SubTitle } from "../Typography";

export const ToolsGroupWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px dashed ${COLORS.bgGrayLight};
  background: linear-gradient(${COLORS.bgGrayLight}, ${COLORS.bgGrayLight})
      padding-box,
    ${STYLES.linearGradientPrimary} border-box;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const ToolsGroupTitle = styled(SubTitle)`
  background-image: ${STYLES.linearGradientPrimary};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const ToolsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;

export const ToolBox = styled.div`
  position: relative;
  transition: transform 0.75s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
