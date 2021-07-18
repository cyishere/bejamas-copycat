import Link from "next/link";
import { CSSProperties } from "styled-components";

import { COLORS } from "@/styles/constants";
import { Wrapper } from "./Button.styles";

const STYLES = {
  text: {
    "--padding": "0 0",
    "--backgroundColor": "none",
    "--color": "currentColor",
  } as CSSProperties,
  normal: {
    "--padding": "1rem 1.5rem",
    "--backgroundColor": COLORS.bgGrayLight,
    "--color": COLORS.black,
  } as CSSProperties,
  primary: {
    "--padding": "1rem 1.5rem",
    "--backgroundColor": COLORS.primary,
    "--color": COLORS.white,
  } as CSSProperties,
};

interface buttonProps {
  variant: "text" | "normal" | "primary";
  href?: string;
}

export const Button: React.FC<buttonProps> = ({
  variant = "normal",
  children,
  ...rest
}) => {
  const classes = STYLES[variant];

  return (
    <Wrapper style={classes} {...rest}>
      {children}
    </Wrapper>
  );
};

export const ButtonLink: React.FC<buttonProps> = ({
  variant = "normal",
  href,
  children,
  ...rest
}) => {
  const classes = STYLES[variant];

  return (
    <Link href={href!}>
      <Wrapper style={classes} {...rest}>
        {children}
      </Wrapper>
    </Link>
  );
};
