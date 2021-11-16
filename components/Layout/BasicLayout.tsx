import styled from "styled-components";

import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QUERIES } from "@/styles/constants";
import { StateProps } from "@/utils/types";
import Explanation from "../Explanation";

const BasicLayout: React.FC<StateProps> = ({
  children,
  isThemeLight,
  toggleTheme,
}) => {
  return (
    <>
      <SEO />
      <Wrapper>
        <Header isThemeLight={isThemeLight} />
        <Main>{children}</Main>
        <Footer isThemeLight={isThemeLight} toggleTheme={toggleTheme} />
      </Wrapper>
      <Explanation />
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

  @media ${QUERIES.xxmdScreenAndLarger} {
    padding-top: 185px;
  }
`;

export default BasicLayout;
