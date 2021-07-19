import styled from "styled-components";
import Link from "next/link";

import { BREAKPOINTS } from "@/styles/constants";
import { StateProps } from "@/utils/types";
import { Bejamas } from "../Logos";

const Logo: React.FC<StateProps> = ({ isThemeLight }) => {
  return (
    <Link href="/" passHref>
      <Anchor isThemeLight={isThemeLight}>
        <Bejamas />
      </Anchor>
    </Link>
  );
};

const Anchor = styled.a<StateProps>`
  display: inline-block;
  color: ${(props) =>
    props.isThemeLight ? props.theme.colors.black : props.theme.colors.white};
  width: 100px;
  height: 30px;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    width: 170px;
    height: 52px;
  }
`;

export default Logo;
