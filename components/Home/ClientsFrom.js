import styled from "styled-components";

import { SectionWithBg, SectionHeader } from "../Layout";
import { Title, SubTitle } from "../Typography";

const ClientsFrom = () => {
  return (
    <SectionWithBg>
      <SectionHeader>
        <SubTitle>Bettering the web for clients from</SubTitle>
        <Title>19 countries, 5 continents</Title>
        <p>
          We&#39;re an international-ready team.
          <br />
          Worked in sync with customers in 8 different time-zones.
        </p>
      </SectionHeader>
      <Pic>
        <source srcSet="/images/decorates/map-filled.avif" type="image/avif" />
        <Img
          src="/images/decorates/map-filled.png"
          alt="Clients all over the world"
        />
      </Pic>
    </SectionWithBg>
  );
};

const Pic = styled.picture`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

export default ClientsFrom;
