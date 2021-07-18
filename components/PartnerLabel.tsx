import styled from "styled-components";

import { PartnerIcon } from "./Icons";

const PartnerLabel = () => {
  return (
    <Wrapper>
      <PartnerIcon />
      <span className="text">Partner</span>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 10%;
  right: 0;
  height: 1.5rem;
  border-radius: 50%;
  padding: 0px 6px;

  svg {
    width: 12px;
    height: 11px;
  }

  .text {
    display: none;
  }

  &:hover {
    border-radius: 24px;
    right: -36px;

    .text {
      display: inline-block;
    }
  }
`;

export default PartnerLabel;
