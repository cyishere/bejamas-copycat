import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { BREAKPOINTS, COLORS, FONTS } from "@/styles/constants";
import { FlexStart } from "@/styles/shared";
import { SectionHeader } from "./Layout";
import { Title, SubTitle, Marker } from "./Typography";
import { ButtonLink } from "./Button";
import {
  PartnerIcon,
  SunIcon,
  MoonIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
} from "./Icons";
import { Wrapper as TitleStyle } from "./Typography/Title";
import footerLinks from "@/data/footerLinks";

const Footer = () => {
  const [isLight, setIsLight] = useState(true);

  const handleToggle = () => setIsLight(!isLight);

  return (
    <Wrapper>
      {/* Footer Header */}
      <HeaderWrapper>
        <SectionHeader>
          <SubTitle>
            <Marker>Jamstack Developers For Hire</Marker>
          </SubTitle>
          <Title>Ready to join Jamstack revolution?</Title>
          <p>
            Start your super-fast project with us or take your existing product
            to the next level.
          </p>
        </SectionHeader>

        <FlexStart>
          <ButtonLink href="/estimate-project" variant="primary">
            Get in touch
          </ButtonLink>
        </FlexStart>
      </HeaderWrapper>

      <LinksGroup>
        {/* Footer Icons */}
        <IconsWrapper>
          <FooterLogo>
            <PartnerIcon />
          </FooterLogo>

          <FlexWithGap>
            <Button type="button" isLight={isLight} onClick={handleToggle}>
              <SunIcon />
            </Button>

            <ToggleButton isLight={isLight} onClick={handleToggle} />

            <Button type="button" isLight={isLight} onClick={handleToggle}>
              <MoonIcon />
            </Button>
          </FlexWithGap>

          <FlexWithBigGap>
            <a
              href="https://www.facebook.com/bejamas.io"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://twitter.com/bejamas_io"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com/bejamasteam/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/bejamas/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/bejamas"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </FlexWithBigGap>
        </IconsWrapper>

        {/* Footer Links */}
        <FooterNav>
          {footerLinks.map((data) => (
            <LinkSet key={data.category}>
              <h3>{data.category}</h3>
              <ul>
                {data.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href}>
                      <a>
                        {link.title}{" "}
                        {link.extra ? <Badge>{link.extra}</Badge> : null}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </LinkSet>
          ))}
        </FooterNav>
      </LinksGroup>

      <p>&copy; Bejamas.io - All rights reserved.</p>
    </Wrapper>
  );
};

/**
 * Main Wrapper
 ---------------------------------------------- */
const Wrapper = styled.footer`
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
const HeaderWrapper = styled.div`
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
const LinksGroup = styled.div`
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
const IconsWrapper = styled.div`
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

const FlexWithGap = styled(FlexStart)`
  column-gap: 1rem;
`;

const FooterLogo = styled(FlexStart)`
  svg {
    width: 2rem;
    height: auto;
  }
`;

const Button = styled.button`
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

const ToggleButton = styled.div`
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

const FlexWithBigGap = styled(FlexStart)`
  column-gap: 1.5rem;
`;

// ===== LINKS =====
const FooterNav = styled.nav`
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

const LinkSet = styled.div`
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

const Badge = styled.span`
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

export default Footer;
