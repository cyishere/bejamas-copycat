import styled from "styled-components";

import { FlexColCenter } from "@/styles/shared";
import { SectionWithBg, SectionHeader } from "../Layout";
import { SubTitle, Title } from "../Typography";
import { ButtonLink } from "../Button";
import ContentWithNumber from "../ContentWithNumber";
import benefits from "../ContentWithNumber/data";

const SupportsBusiness = () => {
  return (
    <SectionWithBg>
      <SectionHeader>
        <SubTitle>Sites with benefits</SubTitle>
        <Title>How Jamstack supports your business</Title>
        <Text>
          We use the power of Jamstack and server-side rendering to ship value
          to our customers.
        </Text>
      </SectionHeader>

      {benefits.map((data) => (
        <ContentWithNumber key={data.title} data={data} />
      ))}

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
  margin-bottom: 3rem;
`;

export default SupportsBusiness;
