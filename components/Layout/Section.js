import styled from "styled-components";

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.5rem;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .button-group {
    margin-bottom: 3rem;
  }
`;

export default Section;
