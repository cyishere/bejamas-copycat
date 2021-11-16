import styled from "styled-components";

import { SubTitle } from "../Typography";

export const ToolsGroupWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px dashed ${({ theme }) => theme.colors.bgGrayLight};
  background: linear-gradient(
        ${({ theme }) => theme.colors.bgGrayLight},
        ${({ theme }) => theme.colors.bgGrayLight}
      )
      padding-box,
    ${({ theme }) => theme.styles.linearGradientPrimary} border-box;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const ToolsGroupTitle = styled(SubTitle)`
  background-image: ${({ theme }) => theme.styles.linearGradientPrimary};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const ToolsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const ToolBox = styled.div`
  position: relative;
  padding: 0.5em 2em;
  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.1);
  }

  a {
    color: ${({ theme }) => theme.styles.logo};
  }
`;
