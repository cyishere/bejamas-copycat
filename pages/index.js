import styled from "styled-components";

import SEO from "@/components/SEO";
import Header from "@/components/Header";
import {
  Hero,
  NeedForSpeed,
  SupportsBusiness,
  Covid,
  BuildWeb,
  Services,
  ClientsFrom,
  FeaturedBlog,
} from "@/components/Home";
import Footer from "@/components/Footer";
import { BREAKPOINTS } from "@/styles/constants";

export default function Home() {
  return (
    <>
      <SEO />
      <Wrapper>
        <Header />
        <Main>
          <Hero />
          <NeedForSpeed />
          <SupportsBusiness />
          <Covid />
          <BuildWeb />
          <Services />
          <ClientsFrom />
          <FeaturedBlog />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

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
