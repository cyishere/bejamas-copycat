import styled from "styled-components";
import Link from "next/link";

import { BREAKPOINTS, COLORS, FONTS, STYLES } from "@/styles/constants";
import { ChevronRightIcon } from "../Icons";

const Dropdown = ({ menuLists, subLinks = [], isShown }) => {
  console.log("isShown:", isShown);

  return (
    <DropdownWrapper className="dropdown" isShown={isShown}>
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
  @media (min-width: ${BREAKPOINTS.xxmd}) {
    background-color: ${COLORS.white};
    border-radius: 1rem;
    box-shadow: ${STYLES.xlShadow};
    padding: 1.5rem;
    position: absolute;
    z-index: 11;
    top: 4rem;
    left: -1rem;
    width: max-content;
    display: ${(props) => (props.isShown ? "block" : "none")};

    > *:not(:last-child) {
      margin-bottom: 1.5rem;
    }
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
      <Title>
        {item.title}
        <ChevronRightIcon />
      </Title>
      <p>{item.desc}</p>
    </ListItemWrapper>
  </Link>
);

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

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

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

export default Dropdown;
