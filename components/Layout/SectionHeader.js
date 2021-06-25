import styled from "styled-components";

const SectionHeader = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;

  h3 {
    order: -1;
    margin-bottom: 1.5rem;
  }

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export default SectionHeader;
