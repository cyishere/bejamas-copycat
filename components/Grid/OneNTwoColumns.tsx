import styled from "styled-components";
import { QUERIES } from "@/styles/constants";

const OneNTwoColumns: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media ${QUERIES.mdScreenAndLarger} {
    grid-template-columns: 1fr 2fr;
  }
`;

export default OneNTwoColumns;
