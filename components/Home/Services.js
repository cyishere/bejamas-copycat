import { Section, SectionHeader } from "../Layout";
import { Title, SubTitle } from "../Typography";
import { CardRecTop } from "../Card";
import { ThreeColumns } from "../Grid";
// import services from "@/data/services";

const Services = ({ services }) => {
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

      <ThreeColumns>
        {services.map((service) => (
          <CardRecTop key={service._id} item={service} />
        ))}
      </ThreeColumns>
    </Section>
  );
};

export default Services;
