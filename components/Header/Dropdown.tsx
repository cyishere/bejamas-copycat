import styled from "styled-components";
import Link from "next/link";

import { FONTS, QUERIES } from "@/styles/constants";
import { ChevronRightIcon } from "../Icons";
import { BlogSubLinkTypes, LinkTypes } from "@/utils/types";

/**
 * Sub Component
 */
interface ListItemProps {
  item: LinkTypes;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => (
  <List>
    <Link href={item.link} passHref>
      <ListItemWrapper>
        <Title>
          {item.title}
          <ChevronRightIcon />
        </Title>
        <p>{item.desc}</p>
      </ListItemWrapper>
    </Link>
  </List>
);

const List = styled.li`
  @media ${QUERIES.xxmdScreenAndLarger} {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const ListItemWrapper = styled.a`
  display: block;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.textMain};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};

  p {
    display: none;
  }

  @media ${QUERIES.xxmdScreenAndLarger} {
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.styles.lgShadow};
    transition: all 0.5s ease;
    color: ${({ theme }) => theme.colors.textMain};
    background-color: ${({ theme }) => theme.styles.dropdownLinkBg};
    border: none;

    p {
      display: block;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.styles.dropdownSubLinkHover};

    p {
      color: ${({ theme }) => theme.colors.bgGrayLight};
    }
  }
`;

const Title = styled.h3`
  font-family: ${FONTS.main};
  font-size: ${FONTS.base};
  font-weight: ${FONTS.regular};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.xxmdScreenAndLarger} {
    font-size: ${FONTS.md};
    font-weight: ${FONTS.bold};
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.styles.dropdownTitle};
    justify-content: flex-start;

    .icon {
      display: none;
    }
  }

  ${ListItemWrapper}:hover & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

/**
 * Main Component
 */
interface DropdownProps {
  menuLists: LinkTypes[];
  subLinks?: BlogSubLinkTypes[];
  servicesShow?: boolean;
  jamstackShow?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  menuLists,
  subLinks = [],
  servicesShow,
  jamstackShow,
}) => {
  return (
    <DropdownWrapper
      className={`dropdown ${servicesShow ? "services" : ""} ${
        jamstackShow ? "jamstack" : ""
      }`}
    >
      <ul>
        {menuLists.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>

      {subLinks.length > 0 ? (
        <Grid>
          {subLinks.map((sub) => (
            <div key={sub.category}>
              <SubTitle>{sub.category}</SubTitle>
              <ul>
                {sub.links.map((link) => (
                  <SubListItem key={link.title}>
                    <Link href={link.link} passHref>
                      <Anchor>
                        {link.title} <ChevronRightIcon />
                      </Anchor>
                    </Link>
                  </SubListItem>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      ) : null}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  display: none;
  margin-top: 1.5rem;

  &.services,
  &.jamstack {
    display: block;
  }

  @media ${QUERIES.xxmdScreenAndLarger} {
    margin-top: 0;
    background-color: ${({ theme }) => theme.styles.dropdownBg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.styles.xlShadow};
    padding: 1.5rem;
    position: absolute;
    z-index: 11;
    top: 4rem;
    left: -1rem;
    width: max-content;

    &.services,
    &.jamstack {
      display: none;
    }

    > *:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${QUERIES.xxmdScreenAndLarger} {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SubTitle = styled.h4`
  font-size: ${FONTS.small};
  font-family: ${FONTS.main};
  font-weight: ${FONTS.bold};
  text-transform: uppercase;
  padding: 1rem;

  @media ${QUERIES.xxmdScreenAndLarger} {
    font-size: ${FONTS.base};
  }
`;

const SubListItem = styled.li`
  @media ${QUERIES.xxmdScreenAndLarger} {
    padding: 0.5rem 0;
  }
`;

const Anchor = styled(ListItemWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.xxmdScreenAndLarger} {
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textMain};
    background-color: ${({ theme }) => theme.styles.dropdownBg};
    padding: 0 0 0 1rem;
    justify-content: flex-start;

    &:hover {
      color: ${({ theme }) => theme.styles.dropdownSubLinkHover};
      background-color: ${({ theme }) => theme.styles.dropdownBg};
    }
  }
`;

export default Dropdown;
