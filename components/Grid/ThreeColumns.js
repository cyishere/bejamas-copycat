import styled from "styled-components";

const ThreeColumns = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ThreeColumns;
