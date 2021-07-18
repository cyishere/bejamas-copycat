import styled from "styled-components";

import { BREAKPOINTS, FONTS } from "./constants";

/**
 * Flex Style Set
 ---------------------------------------------- */
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FlexBetween = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
`;

export const FlexStart = styled(FlexRow)`
  justify-content: flex-start;
`;

export const FlexCenter = styled(FlexRow)`
  justify-content: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColCenter = styled(FlexCol)`
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

export const FlexEvenly = styled(FlexRow)`
  justify-content: space-evenly;
  align-items: center;
`;

/**
 * Quote Block
 ---------------------------------------------- */
export const QuoteWrapper = styled.div`
  margin-top: -4.5rem;
  padding-top: 4.5rem;
`;

export const QuoteBlock = styled.blockquote`
  padding: 1.5rem 4.75rem 1.5rem 1.75rem;
  background-image: ${({ theme }) => theme.styles.linearGradient};
  border-radius: 1rem;
  position: relative;

  &::before {
    content: "”";
    font-family: ui-serif;
    font-size: 18rem;
    position: absolute;
    top: -13rem;
    right: 1rem;
    color: ${({ theme }) => theme.colors.blueLight};
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    padding: 3rem 6rem 3rem 5rem;

    &::before {
      right: -3rem;
    }
  }
`;

export const QuoteBlockFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
`;

export const Avatar = styled.picture`
  img {
    border-radius: 50%;
  }

  ${QuoteBlockFooter} & {
    margin-right: 1rem;
  }
`;

export const QuoteAddition = styled.div`
  font-weight: ${FONTS.bold};
`;

export const Cite = styled.cite`
  font-style: italic;
  display: block;

  ${QuoteAddition} & {
    font-weight: ${FONTS.regular};
  }
`;

/**
 * Grid Style Set
 ---------------------------------------------- */
export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

export const TextCenter = styled.div`
  text-align: center;
  font-size: ${FONTS.base};
`;

export const Number = styled.p`
  font-size: ${FONTS.xl};
  font-weight: ${FONTS.bold};
`;

export const TwoColumnsWithPic = styled.div`
  display: grid;
  grid-template:
    "content"
    "pic" / 1fr;
  gap: 3rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template:
      "pic content"
      "pic content" / 1fr 1fr;
  }
`;

export const ColumnContent = styled.div`
  grid-area: content;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const ColumnPic = styled.div`
  grid-area: pic;
`;
