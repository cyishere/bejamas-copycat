import styled from "styled-components";
import Link from "next/link";

interface cardProps {
  href: string;
}

const CardWrapper: React.FC<cardProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Wrapper>{children}</Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  border-radius: 0.625rem;
  padding: 1.5rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  &:hover {
    box-shadow: ${({ theme }) => theme.styles.redShadow};
  }
`;

export default CardWrapper;
