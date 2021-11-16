import { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import { ThemeContext } from "@/utils/theme-context";
import { QUERIES } from "@/styles/constants";
import { HeaderProps } from "@/utils/types";
import { Bejamas } from "../Logos";

const Logo: React.FC<HeaderProps> = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Link href="/" passHref>
      <Anchor isThemeLight={themeContext?.isThemeLight}>
        <Bejamas />
      </Anchor>
    </Link>
  );
};

const Anchor = styled.a<HeaderProps>`
  display: inline-block;
  color: ${(props) =>
    props.isThemeLight ? props.theme.colors.black : props.theme.colors.white};
  width: 100px;
  height: 30px;

  @media ${QUERIES.xxmdScreenAndLarger} {
    width: 170px;
    height: 52px;
  }
`;

export default Logo;
