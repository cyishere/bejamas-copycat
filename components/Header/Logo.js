import styled from "styled-components";
import Link from "next/link";

import { BREAKPOINTS } from "@/styles/constants";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Img src="/images/logos/bejamas-logo-full.svg" alt="Bejamas" />
      </a>
    </Link>
  );
};

const Img = styled.img`
  width: 100px;
  height: 30px;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    width: 170px;
    height: 52px;
  }
`;

export default Logo;
