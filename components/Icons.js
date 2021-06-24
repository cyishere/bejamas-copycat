import styled from "styled-components";

export const MenuIcon = () => (
  <WrapperMd
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </WrapperMd>
);

export const CloseIcon = () => (
  <WrapperMd
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </WrapperMd>
);

export const SearchIcon = () => (
  <Wrapper
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </Wrapper>
);

const Wrapper = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const WrapperMd = styled.svg`
  width: 2rem;
  height: 1.75rem;
`;
