import styled from "styled-components";
import Link, { LinkProps } from "next/link";

import { ButtonStyles } from "./styles";

interface ButtonLinkProps extends LinkProps {
  variant: "text" | "normal" | "primary";
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  variant,
  children,
  ...rest
}) => {
  return (
    <Link href={href} {...rest} passHref>
      <Wrapper variant={variant}>{children}</Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  ${ButtonStyles}
  display: inline-block;
`;

export default ButtonLink;
