import styled from "styled-components";
import Link from "next/link";

import { COLORS, FONTS, STYLES } from "@/styles/constants";
import { ChevronRightIcon } from "../Icons";

const Dropdown = ({ menuLists, subLinks = [] }) => {
  return (
    <DropdownWrapper className="dropdown">
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
  background-color: ${COLORS.white};
  border-radius: 1rem;
  box-shadow: ${STYLES.xlShadow};
  padding: 1.5rem;
  position: absolute;
  z-index: 11;
  top: 4rem;
  left: -1rem;
  width: max-content;
  display: none;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const SubTitle = styled.h4`
  font-family: ${FONTS.main};
  text-transform: uppercase;
  font-weight: ${FONTS.bold};
  margin-bottom: 0.5rem;
`;

const SubListItem = styled.li`
  padding: 0.5rem 0;
`;

const Anchor = styled.a`
  color: ${COLORS.textMain};
  display: flex;
  align-items: center;

  &:hover {
    color: ${COLORS.black};
  }
`;

const ListItem = ({ item }) => (
  <Link href={item.link} passHref>
    <ListItemWrapper>
      <Title>{item.title}</Title>
      <p>{item.desc}</p>
    </ListItemWrapper>
  </Link>
);

const ListItemWrapper = styled.a`
  display: block;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${STYLES.lgShadow};
  transition: all 0.5s ease;
  color: ${COLORS.textMain};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: ${COLORS.primary};

    p {
      color: ${COLORS.bgGrayLight};
    }
  }
`;

const Title = styled.h3`
  font-size: ${FONTS.md};
  font-family: ${FONTS.main};
  font-weight: ${FONTS.bold};
  margin-bottom: 0.5rem;

  ${ListItemWrapper}:hover & {
    color: ${COLORS.white};
  }
`;

export default Dropdown;
