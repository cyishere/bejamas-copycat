import { css } from "styled-components";

import { QUERIES } from "@/styles/constants";
import { ButtonProps } from "./Button";

export const ButtonStyles = css<ButtonProps>`
  border: none;
  font-size: 1rem;
  border-radius: 3rem;
  cursor: pointer;
  padding: ${(props) => (props.variant === "text" ? `0 0` : `1rem 1.5rem`)};
  background-color: ${(props) =>
    props.variant === "text"
      ? `transparent`
      : props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.bgGrayLight};
  color: ${(props) =>
    props.variant === "text"
      ? `currentColor`
      : props.variant === "primary"
      ? props.theme.colors.white
      : props.theme.colors.textButtonNormal};

  @media ${QUERIES.xlScreenAndLarger} {
    font-size: 1.125rem;
    border-radius: 3.125rem;
  }

  .icon {
    margin-left: 0.5rem;
  }
`;
