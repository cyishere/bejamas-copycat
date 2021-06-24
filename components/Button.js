import styled from "styled-components";
import Link from "next/link";

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

export const Button = ({ variant = "normal", children, ...rest }) => {
  const classes = STYLES[variant];

  return (
    <Wrapper style={classes} {...rest}>
      {children}
    </Wrapper>
  );
};

export const ButtonLink = ({ variant = "normal", href, children, ...rest }) => {
  const classes = STYLES[variant];

  return (
    <Link href={href}>
      <Wrapper style={classes} {...rest}>
        {children}
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled(ButtonBase)`
  padding: var(--padding);
  background-color: var(--backgroundColor);
  color: var(--color);
  border-radius: 25px;

  .icon {
    margin-left: 0.5rem;
  }
`;
