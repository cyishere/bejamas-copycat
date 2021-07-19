import styled from "styled-components";

import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BREAKPOINTS } from "@/styles/constants";
import { StateProps } from "@/utils/types";

const BasicLayout: React.FC<StateProps> = ({
  children,
  isThemeLight,
  toggleTheme,
}) => {
  return (
    <>
      <SEO />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer isThemeLight={isThemeLight} toggleTheme={toggleTheme} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Main = styled.main`
  padding-left: 3rem;
  padding-right: 3rem;

  @media (min-width: ${BREAKPOINTS.xxmd}) {
    padding-top: 185px;
  }
`;

export default BasicLayout;
