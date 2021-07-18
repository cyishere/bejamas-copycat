import styled from "styled-components";
import Image from "next/image";

import { FONTS } from "@/styles/constants";

interface PlaceholderProps {
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  imageUrl,
  altText,
  width,
  height,
}) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={altText} width={width} height={height} />
      <PlaceText>This is a static picture.</PlaceText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const PlaceText = styled.div`
  position: absolute;
  height: 50%;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${FONTS.xl};
  font-weight: ${FONTS.bold};
  text-transform: uppercase;
  display: grid;
  place-items: center;
`;

export default Placeholder;
