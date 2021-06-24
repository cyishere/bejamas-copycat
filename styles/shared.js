import styled from "styled-components";

import { COLORS, FONTS, STYLES } from "./constants";

/**
 * FLEX Set
 */
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

/**
 * TYPEGRAPHY Set
 */
export const Title = styled.h2`
  font-size: ${FONTS.xxl};
`;

export const SubTitle = styled.h3`
  font-family: ${FONTS.main};
  font-size: ${FONTS.smaller};
  font-weight: ${FONTS.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Marker = styled.mark`
  background-image: linear-gradient(
    to bottom,
    ${COLORS.orange},
    ${COLORS.primary} 70%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

/**
 * QUOTE BLOCK Set
 */
export const QuoteWrapper = styled.div`
  padding-top: 4.5rem;
`;

export const QuoteBlock = styled.blockquote`
  padding: 1.5rem 4.75rem 1.5rem 1.75rem;
  background-image: ${STYLES.linearGradient};
  border-radius: 1rem;
  position: relative;

  &::before {
    content: "”";
    font-family: ui-serif;
    font-size: 18rem;
    position: absolute;
    top: -13rem;
    right: 1rem;
    color: ${COLORS.blueLight};
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
 * GRID Set
 */
export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const Number = styled.p`
  font-size: ${FONTS.xl};
  font-weight: ${FONTS.bold};
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template:
    "content"
    "pic";
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template:
      "pic content"
      "pic content";
  }
`;

export const GridContent = styled.div`
  grid-area: content;
`;

export const GridPic = styled.div`
  grid-area: pic;
`;

/**
 * WRAPPER & BASIC
 */
export const ButtonBase = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
`;

export const Section = styled.section`
  margin-bottom: 4.5rem;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const SectionWithBg = styled(Section)`
  background-color: ${COLORS.bgGrayLight};
  margin-left: -3rem;
  margin-right: -3rem;
  padding: 3rem;
`;

export const ContentWithNo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  ${SectionWithBg} & {
    margin-bottom: 3.5rem;
  }
`;

export const ContentIcon = styled.picture`
  order: -1;
`;

export const ContentTitle = styled.h4`
  font-size: ${FONTS.lg};
`;
