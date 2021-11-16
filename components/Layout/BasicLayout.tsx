import styled from "styled-components";

import { QUERIES } from "@/styles/constants";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Explanation from "../Explanation";

const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
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
