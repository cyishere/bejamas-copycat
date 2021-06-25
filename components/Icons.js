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

export const PartnerIcon = () => (
  <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.758 283.971">
    <g fill="#FFF">
      <path d="M26.704 241.324C11.633 241.324 0 230.041 0 216.694V24.651C0 10.607 12.321 0 26.704 0h57.849c51.354 0 77.022 32.858 77.022 67.092 0 23.953-15.398 38.686-35.947 48.605 21.226 8.555 42.453 23.964 42.453 53.755 0 40.051-32.173 71.872-84.903 71.872H26.704zM87.292 94.483c11.981 0 26.365-8.218 26.365-26.704 0-13.009-6.166-24.642-23.966-24.642H47.918v51.346h39.374zm-39.374 43.816v59.562h38.348c22.6 0 33.883-11.295 33.883-29.095 0-19.513-13.693-30.467-31.832-30.467H47.918zM294.143 240.496c11.982 0 23.615 9.592 23.615 21.912 0 12.332-10.281 21.563-23.615 21.563h-91.166c-13.357 0-23.625-9.23-23.625-21.563 0-12.319 11.645-21.912 23.625-21.912h91.166z" />
    </g>
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
