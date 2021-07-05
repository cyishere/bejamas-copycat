import Link from "next/link";

import { COLORS } from "@/styles/constants";
import { Wrapper } from "./Button.styles";

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
