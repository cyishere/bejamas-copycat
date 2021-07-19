import styled from "styled-components";
import Image from "next/image";

import { TwoColumns, GridColumn, GridColumnWrapper } from "../Grid";
import { FlexStart } from "@/styles/shared";
import { SubTitle, Marker } from "../Typography";
import { Section, SectionHeader } from "../Layout";
import { ButtonLink } from "../Button";
import Placeholder from "../Placeholder";
import { BREAKPOINTS, FONTS } from "@/styles/constants";
import { Armorblox, Backlinko, Mambu, Newfront } from "../Logos";

const Hero = () => {
  return (
    <Section special={true}>
      <TwoColumns>
        <GridColumn>
          <SectionHeader special={true}>
            <SubTitle>Jamstack developer for hire</SubTitle>
            <Title>
              We build
              <br />
              <Marker>fast sites & apps.</Marker>
            </Title>
            <Text>
              Maximize your business potential with performant websites built
              with the latest, innovative technologies.
            </Text>
          </SectionHeader>
          <ButtonGroup className="button-group">
            <ButtonLink variant="primary" href="/estimate-project">
              Get in touch
            </ButtonLink>
            <ButtonLink variant="normal" href="/services">
              What we do
            </ButtonLink>
          </ButtonGroup>
          <SubTitle>Trusted by inovative companies</SubTitle>
          <LogoGroup>
            <Backlinko />
            <Newfront />
            <Mambu />
            <Armorblox />
          </LogoGroup>
        </GridColumn>

        <GridColumn hidden={true}>
          <Placeholder
            imageUrl="/images/decorates/jar.jpg"
            altText="Bejamas"
            width={668}
            height={620}
          />
        </GridColumn>
      </TwoColumns>
    </Section>
  );
};

const Title = styled.h1`
  font-size: ${FONTS.mbBig};

  @media (min-width: ${BREAKPOINTS.md}) {
    font-size: ${FONTS.big};
  }
`;

const Text = styled.p`
  max-width: 30rem;
`;

const ButtonGroup = styled(FlexStart)`
  > *:not(:last-child) {
    margin-right: 1rem;
  }

  a {
    margin-bottom: 3rem;
  }
`;

const LogoGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  color: ${({ theme }) => theme.styles.logo};

  svg {
    max-height: 28px;
    max-width: 120px;
  }
`;

export default Hero;
