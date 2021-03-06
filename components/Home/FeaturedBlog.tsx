import styled from "styled-components";

import { Section, SectionHeader } from "../Layout";
import { Title, SubTitle, Marker } from "../Typography";
import { ButtonLink } from "../Button";
import { CardSquareTop } from "../Card";
import { OneNTwoColumns, TwoColumns } from "../Grid";
import { FlexStart } from "@/styles/shared";
import { DataTypes } from "@/utils/types";

interface ClientsFromProps {
  blogs: DataTypes[];
}

const ClientsFrom: React.FC<ClientsFromProps> = ({ blogs: posts }) => {
  return (
    <Section>
      <OneNTwoColumns>
        <SectionHeader special>
          <StickyContainer>
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
          </StickyContainer>
        </SectionHeader>

        <TwoColumns break="small">
          {posts.map((post) => (
            <CardSquareTop key={post._id} item={post} />
          ))}
        </TwoColumns>
      </OneNTwoColumns>
    </Section>
  );
};

const StickyContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 120px;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export default ClientsFrom;
