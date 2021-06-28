import styled from "styled-components";

import { Section, SectionHeader } from "../Layout";
import { Title, SubTitle } from "../Typography";
import { LinkCard } from "../Card";
import { COLORS, FONTS } from "@/styles/constants";

const services = [
  {
    title: "Progressive Web Applications",
    excerpt:
      "Save time and money with a progressive web app instead of native apps for multiple platforms. Jamstack PWA means great performance and low hosting costs.",
    link: "/services/progressive-web-app",
    image: "/images/services/product-pwa.png",
  },
  {
    title: "Jamstack websites",
    excerpt:
      "Ge new customers with a faster website with higher SEO chances. We build them with proven technologies: GatsbyJS, Hugo, Netlify, and many others.",
    link: "/services/jamstack-website",
    image: "/images/services/product-mw.png",
  },
  {
    title: "eCommerce",
    excerpt:
      "Every second matters for online shoppers. There are no trade-offs between security, performance and personalised experiences with Jamstack eCommerce solution.",
    link: "/services/ecommerce",
    image: "/images/services/product-ecom.png",
  },
];

const Services = () => {
  return (
    <Section>
      <SectionHeader>
        <SubTitle>Product We Craft</SubTitle>
        <Title>Perfect for SMBs and enterprise</Title>
        <p>
          Best things since sliced bread. Shaped with diligence and the highest
          software-craftsmanship.
        </p>
      </SectionHeader>

      <ColumnThree>
        {services.map((service) => (
          <LinkCard key={service.title} href={service.link}>
            <ServiceBlock>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceCover src={service.image} alt={service.title} />
              <Text>{service.excerpt}</Text>
              <p>See more »</p>
            </ServiceBlock>
          </LinkCard>
        ))}
      </ColumnThree>
    </Section>
  );
};

const ColumnThree = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  @media (min-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.625rem;
  overflow: hidden;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: ${FONTS.lg};
`;

const ServiceCover = styled.img`
  width: 100%;
  height: auto;
  order: -1;
`;

const Text = styled.p`
  color: ${COLORS.textMain};
`;

export default Services;
