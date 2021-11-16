import styled from "styled-components";

import { FONTS } from "@/styles/constants";
import { PartnerIcon } from "./Icons";

const PartnerLabel = () => {
  return (
    <Wrapper>
      <PartnerIcon />
      <Text>Partner</Text>
    </Wrapper>
  );
};

const Text = styled.span`
  font-size: ${FONTS.smaller};
  display: none;
`;

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

  &:hover {
    border-radius: 24px;
    right: -36px;

    ${Text} {
      display: inline-block;
    }
  }
`;

export default PartnerLabel;
