import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/constants";

export const ButtonBase = styled.button`
  border: none;
  font-size: 1rem;
  border-radius: 3rem;
  cursor: pointer;

  @media (min-width: ${BREAKPOINTS.xl}) {
    font-size: 1.125rem;
    border-radius: 3.125rem;
  }
`;

export const Wrapper = styled(ButtonBase)`
  padding: var(--padding);
  background-color: var(--backgroundColor);
  color: var(--color);

  .icon {
    margin-left: 0.5rem;
  }
`;
