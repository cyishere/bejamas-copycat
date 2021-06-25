import styled from "styled-components";

import {
  ContentWithNo,
  ContentTitle,
  ContentIcon,
  FlexColCenter,
} from "@/styles/shared";
import { SectionWithBg, SectionHeader } from "../Layout";
import { SubTitle, Title } from "../Typography";
import { ButtonLink } from "../Button";

const SupportsBusiness = () => {
  return (
    <SectionWithBg>
      <SectionHeader>
        <Title>How Jamstack supports your business</Title>
        <SubTitle>Sites with benefits</SubTitle>
        <Text>
          We use the power of Jamstack and server-side rendering to ship value
          to our customers.
        </Text>
      </SectionHeader>

      <ContentWithNo>
        <ContentTitle>Swift</ContentTitle>
        <ContentIcon>
          <source
            srcSet="/images/decorates/icon-swift@2x.avif"
            type="image/avif"
          />
          <img src="/images/decorates/icon-swift@2x.jpg" alt="Swift" />
        </ContentIcon>
        <p>
          We don&#39;t use databases, so there&#39;s no time-consuming multiple
          queries. Static sites are even up to 10x faster, with benefits for the
          UX and SERP rankings.
        </p>
      </ContentWithNo>

      <ContentWithNo>
        <ContentTitle>Safe</ContentTitle>
        <ContentIcon>
          <source
            srcSet="/images/decorates/icon-safe@2x.avif"
            type="image/avif"
          />
          <img src="/images/decorates/icon-safe@2x.jpg" alt="Safe" />
        </ContentIcon>
        <p>
          73.2% of the most popular WordPress installations are opened to
          vulnerabilities. Statically rendered websites with no plugins are a
          fortress and let you save money on security.
        </p>
      </ContentWithNo>

      <ContentWithNo>
        <ContentTitle>Stable</ContentTitle>
        <ContentIcon>
          <source
            srcSet="/images/decorates/icon-stable@2x.avif"
            type="image/avif"
          />
          <img src="/images/decorates/icon-stable@2x.jpg" alt="Stable" />
        </ContentIcon>
        <p>
          Traffic bigger than usual? Not an issue with the Jamestack sites - you
          host your websites&#39; static files in a nulti-cloud environment on a
          CDN with no traffic limitations.
        </p>
      </ContentWithNo>

      <ContentWithNo>
        <ContentTitle>Scalable</ContentTitle>
        <ContentIcon>
          <source
            srcSet="/images/decorates/icon-scalable@2x.avif"
            type="image/avif"
          />
          <img src="/images/decorates/icon-scalable@2x.jpg" alt="Scalable" />
        </ContentIcon>
        <p>
          Implementing new features to your projects? Serverless architecture
          scales automatically as your usage or user base extends, so you can
          scale your app or site without hassle.
        </p>
      </ContentWithNo>

      <FlexColCenter>
        <p>Wonder how can we help your business grow with Jamstack?</p>
        <ButtonLink variant="primary" href="/estimate-project">
          Let&#39;s talk!
        </ButtonLink>
      </FlexColCenter>
    </SectionWithBg>
  );
};

const Text = styled.p`
  ${SectionWithBg} & {
    margin-bottom: 3rem;
  }
`;

export default SupportsBusiness;
