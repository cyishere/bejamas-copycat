import styled from "styled-components";

const Marker: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.mark`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.orange},
    ${({ theme }) => theme.colors.primary} 70%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default Marker;
