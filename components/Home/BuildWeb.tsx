import { FlexColCenter } from "@/styles/shared";
import { SectionWithBg, SectionHeader } from "../Layout";
import { SubTitle, Title } from "../Typography";
import { ButtonLink } from "../Button";
import ToolsLogosGroup from "../ToolsLogosGroup";

const BuildWeb = () => {
  return (
    <SectionWithBg>
      <SectionHeader>
        <SubTitle>Technologies We Use</SubTitle>
        <Title>Building the Web</Title>
        <p>
          Every project is a new story, yet some things stay the same. We pick a
          dedicated set of tools for each one, for the best performance
          possible.
        </p>
      </SectionHeader>

      <ToolsLogosGroup />

      <FlexColCenter>
        <p>Ready to build something cool togerther?</p>
        <ButtonLink variant="primary" href="/estimate-project">
          Let&#39;s talk!
        </ButtonLink>
      </FlexColCenter>
    </SectionWithBg>
  );
};

export default BuildWeb;
