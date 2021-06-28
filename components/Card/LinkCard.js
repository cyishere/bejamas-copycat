import styled from "styled-components";
import Link from "next/link";

import { STYLES } from "@/styles/constants";

const LinkCard = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <Wrapper>{children}</Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  border-radius: 0.625rem;
  padding: 1.5rem;

  &:hover {
    box-shadow: ${STYLES.redShadow};
  }
`;

export default LinkCard;
