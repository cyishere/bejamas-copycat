import { BREAKPOINTS, COLORS, FONTS } from "@/styles/constants";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../Button";
import { SearchIcon } from "../Icons";

const NavList = () => {
  return (
    <Wrapper>
      <ListItem>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/jamstack">
          <a>Jamstack</a>
        </Link>
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

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.border};

    @media (min-width: ${BREAKPOINTS.xxmd}) {
      border: none;
    }
  }

  a {
    color: ${COLORS.textDark};

    &:hover {
      color: ${COLORS.primary};
    }
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
