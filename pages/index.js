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

export default function Home() {
  return (
    <Wrapper>
      <SEO />
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
  );
}

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Main = styled.main`
  padding-left: 3rem;
  padding-right: 3rem;
`;
