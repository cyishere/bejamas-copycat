import styled from "styled-components";

import CardWrapper from "./CardWrapper";
import { COLORS, FONTS } from "@/styles/constants";
import { urlFor } from "@/utils/sanity";
import { cardProps } from "@/utils/types";

const CardSquareTop: React.FC<cardProps> = ({ item }) => {
  const { link, image, title, excerpt, publishedAt } = item;

  return (
    <CardWrapper href={link}>
      <Cover>
        <img src={urlFor(image).url() as string} alt={title} />
      </Cover>

      <Title>{title}</Title>
      <DateZone>{new Date(publishedAt!).toDateString()}</DateZone>
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

const DateZone = styled.time`
  font-size: ${FONTS.small};
  margin-bottom: 1rem;
`;

const Text = styled.p`
  margin-bottom: 3rem;
  color: ${COLORS.textMain};
  font-size: ${FONTS.base};
`;

export default CardSquareTop;
