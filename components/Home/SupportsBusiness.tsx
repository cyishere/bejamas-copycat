import styled from "styled-components";

import { FlexColCenter } from "@/styles/shared";
import { SectionWithBg, SectionHeader } from "../Layout";
import { SubTitle, Title } from "../Typography";
import { ButtonLink } from "../Button";
import ContentWithNumber from "../ContentWithNumber";
import { TwoColumns } from "../Grid";
import benefits from "@/data/benefits";
import { QUERIES } from "@/styles/constants";

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

      <ThisTwoColumns break="special" counter>
        {benefits.map((data) => (
          <ContentWithNumber key={data.title} data={data} />
        ))}
      </ThisTwoColumns>

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

const ThisTwoColumns = styled(TwoColumns)`
  @media ${QUERIES.xmdScreenAndLarger} {
    column-gap: 6rem;
  }
`;

export default SupportsBusiness;
