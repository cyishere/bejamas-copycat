import { Section, SectionHeader } from "../Layout";
import { Title, SubTitle, Marker } from "../Typography";
import { ButtonLink } from "../Button";
import { CardSquareTop } from "../Card";
import { OneNTwoColumns, TwoColumns } from "../Grid";
import { FlexStart } from "@/styles/shared";
import posts from "@/data/blogs";

const ClientsFrom = () => {
  return (
    <Section>
      <OneNTwoColumns>
        <SectionHeader special>
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

        <TwoColumns break="small">
          {posts.map((post) => (
            <CardSquareTop key={post.id} item={post} />
          ))}
        </TwoColumns>
      </OneNTwoColumns>
    </Section>
  );
};

export default ClientsFrom;
