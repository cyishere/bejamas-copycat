import styled from "styled-components";

import CardWrapper from "./CardWrapper";
import { COLORS, FONTS } from "@/styles/constants";
import { urlFor } from "@/utils/sanity";

const CardRecTop = ({ item }) => {
  const { link, title, image, excerpt } = item;

  return (
    <CardWrapper href={link}>
      <Block>
        <Title>{title}</Title>
        <Cover src={urlFor(image).url()} alt={title} />
        <Text>{excerpt}</Text>
        <p>See more »</p>
      </Block>
    </CardWrapper>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem;
  overflow: hidden;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h3`
  font-size: ${FONTS.lg};
`;

const Cover = styled.img`
  width: 100%;
  height: auto;
  order: -1;
`;

const Text = styled.p`
  color: ${COLORS.textMain};
  font-size: ${FONTS.base};
`;

export default CardRecTop;
