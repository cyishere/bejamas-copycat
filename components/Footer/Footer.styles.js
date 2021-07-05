import styled from "styled-components";

import { BREAKPOINTS, COLORS, FONTS } from "@/styles/constants";
import { FlexStart } from "@/styles/shared";
import { Wrapper as TitleStyle } from "../Typography/Title";

/**
 * Main Wrapper
 ---------------------------------------------- */
export const Wrapper = styled.footer`
  background-color: ${COLORS.black};
  padding: 3rem;

  > *:not(:last-child) {
    margin-bottom: 6rem;
  }

  ${TitleStyle} {
    color: ${COLORS.white};
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    border-radius: 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 3rem;
  }
`;

/**
 * Header Section
 ---------------------------------------------- */
export const HeaderWrapper = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
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

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    grid-template-columns: 1fr 5fr;
    gap: 3rem;
  }

  @media (min-width: ${BREAKPOINTS.xl}) {
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
    color: ${COLORS.white};
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

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${COLORS.textMain};
  padding: 0;

  ${(props) =>
    props.isLight
      ? `
      .sun {
        color: ${COLORS.white};
      }
    `
      : `
      .moon {
        color: ${COLORS.white};
      }
    `}

  &:hover {
    color: ${COLORS.white};
  }
`;

export const ToggleButton = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: ${COLORS.primary};
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${COLORS.white};
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.5s ease;
  }

  ${(props) =>
    !props.isLight
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

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LinkSet = styled.div`
  h3 {
    color: ${COLORS.white};
  }

  a {
    color: ${COLORS.textMain};

    &:hover {
      color: ${COLORS.white};
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
  background-color: ${COLORS.textDark};
  color: ${COLORS.white};
  font-size: ${FONTS.smaller};
  width: 1.4em;
  height: 1.4em;
  line-height: 1.4em;
  border-radius: 50%;
  text-align: center;
`;
