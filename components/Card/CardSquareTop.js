import styled from "styled-components";

import CardWrapper from "./CardWrapper";
import { COLORS, FONTS } from "@/styles/constants";

const CardSquareTop = ({ item }) => {
  const { link, cover, title, excerpt, publishedAt } = item;

  return (
    <CardWrapper href={link}>
      <Cover>
        <picture>
          <source srcSet={cover.avif} type="image/avif" />
          <source srcSet={cover.webp} type="image/webp" />
          <img src={cover.img} alt={title} />
        </picture>
      </Cover>

      <Title>{title}</Title>
      <Date>{publishedAt}</Date>
      <Text>{excerpt}</Text>
      <p>Read article »</p>
    </CardWrapper>
  );
};

const Cover = styled.div`
  margin-bottom: 3rem;

  img,
  source {
    width: 100%;
    height: auto;
    border-radius: 0.625rem;
  }
`;

const Title = styled.h3`
  font-size: ${FONTS.xl};
  margin-bottom: 1rem;
`;

const Date = styled.time`
  font-size: ${FONTS.small};
  margin-bottom: 1rem;
`;

const Text = styled.p`
  margin-bottom: 3rem;
  color: ${COLORS.textMain};
`;

export default CardSquareTop;
