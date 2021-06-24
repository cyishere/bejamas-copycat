import styled from "styled-components";
import { ButtonBase } from "@/styles/shared";
import { COLORS } from "@/styles/constants";

const STYLES = {
  text: {
    "--padding": "0 0",
    "--backgroundColor": "none",
    "--color": "currentColor",
  },
  normal: {
    "--padding": "1rem 1.5rem",
    "--backgroundColor": COLORS.bgGrayLight,
    "--color": COLORS.black,
  },
  primary: {
    "--padding": "1rem 1.5rem",
    "--backgroundColor": COLORS.primary,
    "--color": COLORS.white,
  },
};

const Button = ({ variant = "normal", children, ...rest }) => {
  const classes = STYLES[variant];

  return (
    <Wrapper style={classes} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(ButtonBase)`
  padding: var(--padding);
  background-color: var(--backgroundColor);
  color: var(--color);
  border-radius: 50%;

  .icon {
    margin-left: 0.5rem;
  }
`;

export default Button;
