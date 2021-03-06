import { useContext } from "react";
import Link from "next/link";

import footerLinks from "@/data/footerLinks";
import { ThemeContext } from "@/utils/theme-context";
import { FlexStart } from "@/styles/shared";
import { SectionHeader } from "../Layout";
import { Title, SubTitle, Marker } from "../Typography";
import { ButtonLink } from "../Button";
import {
  PartnerIcon,
  SunIcon,
  MoonIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
} from "../Icons";
import {
  Wrapper,
  HeaderWrapper,
  LinksGroup,
  IconsWrapper,
  FooterLogo,
  FlexWithGap,
  Button,
  ToggleButton,
  FlexWithBigGap,
  FooterNav,
  LinkSet,
  Badge,
} from "./Footer.styles";

const Footer: React.FC = () => {
  const themeContext = useContext(ThemeContext);

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
            <Button
              type="button"
              isThemeLight={themeContext?.isThemeLight}
              onClick={themeContext?.toggleTheme}
            >
              <SunIcon />
            </Button>

            <ToggleButton
              isThemeLight={themeContext?.isThemeLight}
              onClick={themeContext?.toggleTheme}
            />

            <Button
              type="button"
              isThemeLight={themeContext?.isThemeLight}
              onClick={themeContext?.toggleTheme}
            >
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

export default Footer;
