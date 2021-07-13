import styled, { keyframes } from "styled-components";

const Lego = () => {
  return (
    <Wrapper>
      <LegoImg src="/images/decorates/block-blue.svg" alt="Blue Block" />
      <OrangeBlock
        src="/images/decorates/block-orange.svg"
        alt="Orange Block"
      />
      <PurpleBlock
        src="/images/decorates/block-purple.svg"
        alt="Purple Block"
      />
      <FillBlock
        src="/images/decorates/blue-fill.svg"
        alt="Fill Block for the blue one"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  position: relative;
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
  /* width: 54px; */
  animation: ${slideDown} 4s ease-in-out infinite;
`;

const OrangeBlock = styled(LegoImg)`
  animation-delay: 1.33s;
`;
const PurpleBlock = styled(LegoImg)`
  animation-delay: 2.66s;
`;
const FillBlock = styled(LegoImg)`
  animation-delay: 4s;
`;

export default Lego;
