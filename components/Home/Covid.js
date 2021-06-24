// import styled from 'styled-components'
import {
  Section,
  Title,
  SubTitle,
  QuoteBlock,
  QuoteWrapper,
  QuoteAddition,
  QuoteBlockFooter,
  GridThree,
  Marker,
  Cite,
} from "@/styles/shared";

const Covid = () => {
  return (
    <Section>
      <SubTitle>Featured Jamstack Case Study</SubTitle>
      <Title>United Nations COVID-19 Response Creative Content Hub</Title>

      <QuoteWrapper>
        <QuoteBlock>
          Bejamas worked both responsively and collaboratively to{" "}
          <Marker>build and evolve</Marker> the hub functionality which has
          become an integral part of the UN&#39;s on-going Covid-19 response.
          <QuoteBlockFooter>
            <QuoteAddition>
              Clare McKeeve
              <Cite>CEO at TLNT Holdings SA</Cite>
            </QuoteAddition>
          </QuoteBlockFooter>
        </QuoteBlock>
      </QuoteWrapper>
    </Section>
  );
};

export default Covid;
