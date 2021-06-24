import styled from "styled-components";

import { COLORS, FONTS } from "./constants";

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
  background-image: linear-gradient(
    to bottom,
    ${COLORS.bgBlueLight},
    ${COLORS.bgBlueLighter} 85%
  );
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

  > * {
    margin-bottom: 1.5rem;
  }
`;
