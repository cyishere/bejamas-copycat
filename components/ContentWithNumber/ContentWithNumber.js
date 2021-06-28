import styled from "styled-components";

import { FONTS } from "@/styles/constants";
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

  ${SectionWithBg} & {
    margin-bottom: 3rem;
  }
`;

export const ContentIcon = styled.picture`
  order: -1;
`;

export const ContentTitle = styled.h4`
  font-size: ${FONTS.lg};
`;

export default ContentWithNumber;
