import {
  QuoteWrapper,
  QuoteBlock,
  QuoteBlockFooter,
  QuoteAddition,
  Avatar,
  Cite,
  GridThree,
  FlexCenter,
  TextCenter,
  Number,
} from "@/styles/shared";
import { Section, SectionHeader } from "../Layout";
import { Title, SubTitle, Marker } from "../Typography";
import { ButtonLink } from "../Button";

const NeedForSpeed = () => {
  return (
    <Section>
      <SectionHeader>
        <SubTitle>Core Web Vitals</SubTitle>
        <Title>Need for Speed</Title>
        <p>
          New <strong>Google ranking factor starting May 2021</strong>.<br />
          Check if your website passes Core Web Vitals assessment.
        </p>
      </SectionHeader>

      <QuoteWrapper>
        <QuoteBlock>
          <p>
            We decided to work with Bejamas to help move us over to Next.js. The
            move made a <Marker>tremendous difference in our load times</Marker>{" "}
            and <Marker>Core Web Vitals scores.</Marker>
          </p>
          <QuoteBlockFooter>
            <Avatar>
              <source
                srcSet="/images/avatars/brian-dean-avatar-2.avif"
                type="image/avif"
              />
              <img
                src="/images/avatars/brian-dean-avatar-2.jpg"
                alt="Brian Dean"
              />
            </Avatar>
            <QuoteAddition>
              Brian Dean
              <Cite>SEO Expert, Founder of Backlinko.com</Cite>
            </QuoteAddition>
          </QuoteBlockFooter>
        </QuoteBlock>
      </QuoteWrapper>

      <GridThree>
        <TextCenter>
          <Number>3x</Number>
          <p>Faster loading</p>
        </TextCenter>
        <TextCenter>
          <Number>1.3M+</Number>
          <p>Monthly visits</p>
        </TextCenter>
        <TextCenter>
          <Number>450+</Number>
          <p>Static pages</p>
        </TextCenter>
      </GridThree>

      <FlexCenter>
        <ButtonLink variant="primary" href="/blog/backlinko-case-study">
          Read Backlinko Case Study
        </ButtonLink>
      </FlexCenter>
    </Section>
  );
};

export default NeedForSpeed;
