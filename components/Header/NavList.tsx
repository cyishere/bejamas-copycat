import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { FONTS, QUERIES } from "@/styles/constants";
import { Button } from "../Button";
import { SearchIcon, ChevronDownIcon } from "../Icons";
import Dropdown from "./Dropdown";
import { serviceLinks, blogLinks, blogSubLinks } from "@/data/headerLinks";

const NavList = () => {
  const [servicesShow, setServicesShow] = useState(false);
  const [jamstackShow, setJamstackShow] = useState(false);

  return (
    <Wrapper>
      <ListItem>
        <TextIconWrapper onClick={() => setServicesShow(!servicesShow)}>
          <Link href="/services" passHref>
            <a>Services</a>
          </Link>
          <ChevronDownIcon />
        </TextIconWrapper>

        <Dropdown menuLists={serviceLinks} servicesShow={servicesShow} />
      </ListItem>
      <ListItem>
        <TextIconWrapper onClick={() => setJamstackShow(!jamstackShow)}>
          <Link href="/jamstack" passHref>
            <a>Jamstack</a>
          </Link>
          <ChevronDownIcon />
        </TextIconWrapper>

        <Dropdown
          menuLists={blogLinks}
          subLinks={blogSubLinks}
          jamstackShow={jamstackShow}
        />
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

  @media ${QUERIES.xxmdScreenAndLarger} {
    flex-direction: row;
    font-size: ${FONTS.base};
  }
`;

const ListItem = styled.li`
  padding: 1.5rem;
  line-height: 1;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    @media ${QUERIES.xxmdScreenAndLarger} {
      border: none;
    }
  }

  > a {
    color: ${({ theme }) => theme.styles.navLink};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media ${QUERIES.xxmdScreenAndLarger} {
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

  @media ${QUERIES.xxmdScreenAndLarger} {
    justify-content: center;
    margin-bottom: 0;
  }

  > a {
    color: ${({ theme }) => theme.styles.navLink};
  }
`;

const ButtonHelper = styled(Button)`
  @media ${QUERIES.xxmdScreenAndLarger} {
    font-size: ${FONTS.base};

    span {
      display: none;
    }
  }
`;

export default NavList;
