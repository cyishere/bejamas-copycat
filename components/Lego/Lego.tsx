import styled, { keyframes } from "styled-components";

import { QUERIES } from "@/styles/constants";

const Lego = () => {
  return (
    <Wrapper>
      <LegoImg
        src="/images/decorates/block-blue.svg"
        alt="Blue Block"
        loading="lazy"
        decoding="async"
      />
      <OrangeBlock
        src="/images/decorates/block-orange.svg"
        alt="Orange Block"
        loading="lazy"
        decoding="async"
      />
      <PurpleBlock
        src="/images/decorates/block-purple.svg"
        alt="Purple Block"
        loading="lazy"
        decoding="async"
      />
      <FillBlock
        src="/images/decorates/blue-fill.svg"
        alt="Fill Block for the blue one"
        loading="lazy"
        decoding="async"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.xxmdScreenAndLarger} {
    display: block;
    height: 150px;
    position: relative;
    opacity: 0.6;
  }
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  33% {
    opacity: 1;
    transform: translate(-50%, 25px);
  }
  67% {
    opacity: 1;
    transform: translate(-50%, 50px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 75px);
  }
`;

const LegoImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
  animation: ${slideDown} 4s ease-in-out infinite;
`;

const OrangeBlock = styled(LegoImg)`
  animation-delay: calc(4s / 3);
`;
const PurpleBlock = styled(LegoImg)`
  animation-delay: calc(4s / 3 * 2);
`;
const FillBlock = styled(LegoImg)`
  animation-delay: 4s;
`;

export default Lego;
