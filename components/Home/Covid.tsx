import styled from "styled-components";
import Link from "next/link";

import {
  TwoColumnsWithPic,
  ColumnContent,
  ColumnPic,
  QuoteBlock,
  QuoteWrapper,
  QuoteAddition,
  QuoteBlockFooter,
  GridThree,
  Cite,
  TextCenter,
  Number,
  FlexColCenter,
} from "@/styles/shared";
import { Section, SectionHeader } from "../Layout";
import { SubTitle, Title, Marker } from "../Typography";
import { FONTS, QUERIES } from "@/styles/constants";
import { ButtonLink } from "../Button";

const Covid = () => {
  return (
    <Section>
      <SectionHeader>
        <SubTitle>Featured Jamstack Case Study</SubTitle>
        <Title>United Nations COVID-19 Response Creative Content Hub</Title>
      </SectionHeader>

      <ThisTwoColumns>
        <ColumnContent>
          <QuoteWrapper>
            <QuoteBlock>
              <Text>
                Bejamas worked both responsively and collaboratively to{" "}
                <Marker>build and evolve</Marker> the hub functionality which
                has become an integral part of the UN&#39;s on-going Covid-19
                response.
              </Text>

              <QuoteBlockFooter>
                <QuoteAddition>
                  Clare McKeeve
                  <Cite>CEO at TLNT Holdings SA</Cite>
                </QuoteAddition>
              </QuoteBlockFooter>
            </QuoteBlock>
          </QuoteWrapper>

          <GridThree>
            <TextCenter>
              <Number>4494</Number>
              <p>artworks</p>
            </TextCenter>
            <TextCenter>
              <Number>20k+</Number>
              <p>likes</p>
            </TextCenter>
            <TextCenter>
              <Number>7 days</Number>
              <p>to launch the MVP</p>
            </TextCenter>
          </GridThree>
        </ColumnContent>

        <ColumnPic>
          <picture>
            <source
              srcSet="/images/blog/case-study-covid-response.avif"
              type="image/avif"
            />
            <Img
              src="/images/blog/case-study-covid-response.jpg"
              alt="Case Study Covid-19 Response"
            />
          </picture>
        </ColumnPic>
      </ThisTwoColumns>

      <FlexColCenterHelper>
        <ButtonLink variant="primary" href="/blog/case-study-united-nations/">
          Read full case study
        </ButtonLink>
        <Link href="/blog/case-studies/">
          <a>See 13 more case studies ??</a>
        </Link>
      </FlexColCenterHelper>
    </Section>
  );
};

const ThisTwoColumns = styled(TwoColumnsWithPic)`
  padding-top: 4.5rem;
`;

const Text = styled.p`
  font-size: ${FONTS.md};

  @media ${QUERIES.mdScreenAndLarger} {
    font-size: ${FONTS.lg};
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

const FlexColCenterHelper = styled(FlexColCenter)`
  margin-top: 3rem;
`;

export default Covid;
