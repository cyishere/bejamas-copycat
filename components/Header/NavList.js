import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { BREAKPOINTS, COLORS, FONTS } from "@/styles/constants";
import { Button } from "../Button";
import { SearchIcon, ChevronDownIcon } from "../Icons";
import Dropdown from "./Dropdown";
import { serviceLinks, blogLinks, blogSubLinks } from "@/data/headerLinks";

const NavList = () => {
  const [isShown, setIsShown] = useState(false);
  console.log("isShown:", isShown);

  return (
    <Wrapper>
      <ListItem>
        <TextIconWrapper onClick={() => setIsShown(!isShown)}>
          <Link href="/services" passHref>
            <a>Services</a>
          </Link>
          <ChevronDownIcon />
        </TextIconWrapper>

        <Dropdown menuLists={serviceLinks} isShown={isShown} />
      </ListItem>
      <ListItem>
        <TextIconWrapper>
          <Link href="/jamstack" passHref>
            <a>Jamstack</a>
          </Link>
          <ChevronDownIcon />
        </TextIconWrapper>

        <Dropdown menuLists={blogLinks} subLinks={blogSubLinks} />
      </ListItem>
      <ListItem>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </ListItem>
      <ListItem>
        <ButtonHelper variant="text" type="button">
          <span>Search</span>
          <SearchIcon />
        </ButtonHelper>
      </ListItem>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    flex-direction: row;
    font-size: ${FONTS.base};
  }
`;

const ListItem = styled.li`
  padding: 1.5rem;
  line-height: 1;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.border};

    @media (min-width: ${BREAKPOINTS.xxmd}) {
      border: none;
    }
  }

  > a {
    color: ${COLORS.textDark};

    &:hover {
      color: ${COLORS.primary};
    }
  }

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    &:hover {
      .dropdown {
        display: block;
      }
    }
  }
`;

const TextIconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    justify-content: center;
    margin-bottom: 0;
  }

  > a {
    color: ${COLORS.textDark};
  }
`;

const ButtonHelper = styled(Button)`
  @media (min-width: ${BREAKPOINTS.xxmd}) {
    font-size: ${FONTS.base};

    span {
      display: none;
    }
  }
`;

export default NavList;
