import styled from "styled-components";

import { FONTS, QUERIES } from "@/styles/constants";
import { FlexStart } from "@/styles/shared";
import { default as TitleStyle } from "../Typography/Title";
import { StateProps } from "@/utils/types";

/**
 * Main Wrapper
 ---------------------------------------------- */
export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 3rem;

  > *:not(:last-child) {
    margin-bottom: 6rem;
  }

  ${TitleStyle} {
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${QUERIES.mdScreenAndLarger} {
    border-radius: 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 3rem;
    padding: 5rem 9rem;
  }
`;

/**
 * Header Section
 ---------------------------------------------- */
export const HeaderWrapper = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media ${QUERIES.mdScreenAndLarger} {
    text-align: center;

    ${FlexStart} {
      justify-content: center;
    }
  }
`;

/**
 * Link Section
 ---------------------------------------------- */
export const LinksGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;

  @media ${QUERIES.xxmdScreenAndLarger} {
    grid-template-columns: 1fr 5fr;
    gap: 3rem;
  }

  @media ${QUERIES.xlScreenAndLarger} {
    grid-template-columns: 2fr 6fr;
    gap: 3rem;
  }
`;

// ====== ICONS =====
export const IconsWrapper = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  > *:first-child {
    margin-bottom: 3rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FlexWithGap = styled(FlexStart)`
  column-gap: 1rem;
`;

export const FooterLogo = styled(FlexStart)`
  svg {
    width: 2rem;
    height: auto;
  }
`;

export const Button = styled.button<StateProps>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMain};
  padding: 0;

  ${(props) =>
    props.isThemeLight
      ? `
      .sun {
        color: hsl(0,0%,100%);
      }
    `
      : `
      .moon {
        color: hsl(0,0%,100%);
      }
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ToggleButton = styled.div<StateProps>`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.5s ease;
  }

  ${(props) =>
    !props.isThemeLight
      ? `
    &::before {
      transform: translateX(20px);
    }
    
  `
      : `
  &::before {
      transform: translateX(0);
    }
  `}
`;

export const FlexWithBigGap = styled(FlexStart)`
  column-gap: 1.5rem;
`;

// ===== LINKS =====
export const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media ${QUERIES.mdScreenAndLarger} {
    grid-template-columns: repeat(3, 1fr);
    font-size: ${FONTS.base};
  }

  @media ${QUERIES.xxmdScreenAndLarger} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LinkSet = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    color: ${({ theme }) => theme.colors.textMain};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  h3,
  li {
    margin-bottom: 1.5rem;
  }
`;

export const Badge = styled.span`
  display: inline-block;
  margin-left: 0.25rem;
  background-color: ${({ theme }) => theme.colors.textEmphasis};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${FONTS.smaller};
  width: 1.4em;
  height: 1.4em;
  line-height: 1.4em;
  border-radius: 50%;
  text-align: center;
`;
