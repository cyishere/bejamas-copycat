import styled from "styled-components";
import { ButtonStyles } from "./Button.styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "text" | "normal" | "primary";
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.button<ButtonProps>`
  ${ButtonStyles}
`;
export default Button;
