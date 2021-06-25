import styled from "styled-components";
import Image from "next/image";

import { Section, SubTitle, Marker, FlexStart } from "@/styles/shared";
import { ButtonLink } from "../Button";
import { FONTS } from "@/styles/constants";

const Hero = () => {
  return (
    <Section>
      <Title>
        We build
        <br />
        <Marker>fast sites & apps.</Marker>
      </Title>
      <SubTitle>Jamstack developer for hire</SubTitle>
      <Text>
        Maximize your business potential with performant websites built with the
        latest, innovative technologies.
      </Text>
      <ButtonGroup>
        <ButtonLink variant="primary" href="/estimate-project">
          Get in touch
        </ButtonLink>
        <ButtonLink href="/services">What we do</ButtonLink>
      </ButtonGroup>
      <SubTitleWithoutOrder>
        Trusted by inovative companies
      </SubTitleWithoutOrder>
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
    </Section>
  );
};

const Title = styled.h1`
  font-size: ${FONTS.mbBig};
`;

const Text = styled.p`
  max-width: 30rem;
`;

const ButtonGroup = styled(FlexStart)`
  ${Section} & {
    margin-bottom: 3rem;
  }

  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const SubTitleWithoutOrder = styled(SubTitle)`
  order: unset;
`;

const LogoGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
`;

export default Hero;
