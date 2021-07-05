import styled from "styled-components";

import { FONTS, STYLES, BREAKPOINTS } from "@/styles/constants";
import { Wrapper as SectionWithBg } from "../Layout/SectionWithBg";

const ContentWithNumber = ({ data }) => {
  return (
    <Wrapper>
      <ContentTitle>{data.title}</ContentTitle>
      <ContentIcon>
        <source srcSet={data.icons.avif} type="image/avif" />
        <img src={data.icons.img} alt={data.title} />
      </ContentIcon>
      <p>{data.content}</p>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;

  ${SectionWithBg} & {
    margin-bottom: 3rem;
  }

  &::before {
    counter-increment: numbers;
    content: counter(numbers);
    position: absolute;
    top: -6rem;
    right: 0;
    font-size: 12rem;
    font-family: ${FONTS.heading};
    background-image: ${STYLES.linearGradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media (min-width: ${BREAKPOINTS.md}) {
      font-size: 16rem;
      top: -9rem;
    }
  }
`;

export const ContentIcon = styled.picture`
  order: -1;
`;

export const ContentTitle = styled.h4`
  font-size: ${FONTS.lg};
`;

export default ContentWithNumber;
