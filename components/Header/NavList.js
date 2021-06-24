import { COLORS } from "@/styles/constants";
import Link from "next/link";
import styled from "styled-components";
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
        <button type="button">
          Search <SearchIcon />
        </button>
      </ListItem>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: block;
  padding: 1.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.border};
  }

  a {
    color: ${COLORS.textDark};

    &:hover {
      color: ${COLORS.primary};
    }
  }
`;

export default NavList;
