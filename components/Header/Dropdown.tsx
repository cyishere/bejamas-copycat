import styled from "styled-components";
import Link from "next/link";

import { BREAKPOINTS, COLORS, FONTS, STYLES } from "@/styles/constants";
import { ChevronRightIcon } from "../Icons";
import { blogSubLinksType, linkType } from "@/utils/types";

/**
 * Sub Component
 */
interface listItemProps {
  item: linkType;
}

const ListItem: React.FC<listItemProps> = ({ item }) => (
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
  @media (min-width: ${BREAKPOINTS.xxmd}) {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const ListItemWrapper = styled.a`
  display: block;
  padding: 1.5rem;
  background-color: ${COLORS.textMain};
  color: ${COLORS.white};
  border: 1px solid ${COLORS.white};

  p {
    display: none;
  }

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    border-radius: 0.5rem;
    box-shadow: ${STYLES.lgShadow};
    transition: all 0.5s ease;
    color: ${COLORS.textMain};
    background-color: ${COLORS.white};
    border: none;

    p {
      display: block;
    }
  }

  &:hover {
    background-color: ${COLORS.primary};

    p {
      color: ${COLORS.bgGrayLight};
    }
  }
`;

const Title = styled.h3`
  font-family: ${FONTS.main};
  font-size: ${FONTS.base};
  font-weight: ${FONTS.regular};
  color: ${COLORS.white};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    font-size: ${FONTS.md};
    font-weight: ${FONTS.bold};
    margin-bottom: 0.5rem;
    color: ${COLORS.textDark};
    justify-content: flex-start;

    .icon {
      display: none;
    }
  }

  ${ListItemWrapper}:hover & {
    color: ${COLORS.white};
  }
`;

/**
 * Main Component
 */
interface dropdownProps {
  menuLists: linkType[];
  subLinks?: blogSubLinksType[];
  servicesShow?: boolean;
  jamstackShow?: boolean;
}

const Dropdown: React.FC<dropdownProps> = ({
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

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    margin-top: 0;
    background-color: ${COLORS.white};
    border-radius: 1rem;
    box-shadow: ${STYLES.xlShadow};
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

  @media (min-width: ${BREAKPOINTS.xxmd}) {
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

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    font-size: ${FONTS.base};
  }
`;

const SubListItem = styled.li`
  @media (min-width: ${BREAKPOINTS.xxmd}) {
    padding: 0.5rem 0;
  }
`;

const Anchor = styled(ListItemWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    box-shadow: none;
    color: ${COLORS.textMain};
    padding: 0 0 0 1rem;
    justify-content: flex-start;

    &:hover {
      color: ${COLORS.black};
      background-color: ${COLORS.white};
    }
  }
`;

export default Dropdown;
