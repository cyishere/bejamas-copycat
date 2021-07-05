import { BREAKPOINTS } from "@/styles/constants";
import styled from "styled-components";

export const ButtonBase = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;

  @media (min-width: ${BREAKPOINTS.xl}) {
    font-size: 1.125rem;
  }
`;

export const Wrapper = styled(ButtonBase)`
  padding: var(--padding);
  background-color: var(--backgroundColor);
  color: var(--color);
  border-radius: 25px;

  .icon {
    margin-left: 0.5rem;
  }
`;
