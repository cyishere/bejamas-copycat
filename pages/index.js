import styled from "styled-components";

import SEO from "@/components/SEO";
import { Header } from "@/components/Header";
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

export default function Home() {
  return (
    <>
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
    </>
  );
}

const Main = styled.main`
  padding-left: 3rem;
  padding-right: 3rem;
`;
