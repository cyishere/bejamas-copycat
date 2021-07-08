import { BREAKPOINTS, COLORS, FONTS } from "@/styles/constants";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../Button";
import { SearchIcon, ChevronDownIcon } from "../Icons";
import Dropdown from "./Dropdown";
import { serviceLinks, blogLinks, blogSubLinks } from "@/data/headerLinks";

const NavList = () => {
  return (
    <Wrapper>
      <ListItem>
        <Link href="/services" passHref>
          <ItemAnchor>
            Services <ChevronDownIcon />
          </ItemAnchor>
        </Link>

        <Dropdown menuLists={serviceLinks} />
      </ListItem>
      <ListItem>
        <Link href="/jamstack" passHref>
          <ItemAnchor>
            Jamstack <ChevronDownIcon />
          </ItemAnchor>
        </Link>

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
  display: block;
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

  &:hover {
    .dropdown {
      display: block;
    }
  }
`;

const ItemAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
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
