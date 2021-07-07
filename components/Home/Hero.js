import styled from "styled-components";
import Image from "next/image";

import { TwoColumns, GridColumn } from "../Grid";
import { FlexStart } from "@/styles/shared";
import { SubTitle, Marker } from "../Typography";
import { Section, SectionHeader } from "../Layout";
import { ButtonLink } from "../Button";
import { BREAKPOINTS, FONTS } from "@/styles/constants";

const Hero = () => {
  return (
    <Section special>
      <TwoColumns>
        <GridColumn>
          <SectionHeader special>
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
            <ButtonLink href="/services">What we do</ButtonLink>
          </ButtonGroup>
          <SubTitle>Trusted by inovative companies</SubTitle>
          <LogoGroup>
            <Image
              src="/images/logos/backlinko.svg"
              alt="Backlinko"
              width={114}
              height={28}
            />
            <Image
              src="/images/logos/newfront.svg"
              alt="Newfront"
              width={100}
              height={21}
            />
            <Image
              src="/images/logos/mambu.svg"
              alt="MAMBU"
              width={100}
              height={20}
            />
            <Image
              src="/images/logos/armorblox.svg"
              alt="Armorblox"
              width={100}
              height={20}
            />
          </LogoGroup>
        </GridColumn>

        <GridColumn hidden>
          <Image
            src="/images/decorates/jar.jpg"
            alt="Bejamas"
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

  ${GridColumn} & {
    margin-bottom: 3rem;
  }
`;

const LogoGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
`;

export default Hero;
