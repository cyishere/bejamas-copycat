import styled from "styled-components";

import { Section, SectionHeader } from "../Layout";
import { Title, SubTitle, Marker } from "../Typography";
import { ButtonLink } from "../Button";
import { FlexStart } from "@/styles/shared";
import { BREAKPOINTS } from "@/styles/constants";

const ClientsFrom = () => {
  return (
    <Section>
      <OneThirdWrapper>
        <SectionHeader>
          <SubTitle>
            <Marker>Jamstack Blog</Marker>
          </SubTitle>
          <Title>
            Guides.
            <br />
            Case Studies.
            <br />
            Backstage.
          </Title>
          <p>
            Worth a thousand words.
            <br />
            <strong>103,332</strong> to be precise.
          </p>
          <FlexStart>
            <ButtonLink variant="primary" href="/blog">
              Go to Blog
            </ButtonLink>
          </FlexStart>
        </SectionHeader>

        <TwoColumns></TwoColumns>
      </OneThirdWrapper>
    </Section>
  );
};

const OneThirdWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: 1fr 2fr;
  }
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ClientsFrom;
