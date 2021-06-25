// import styled from "styled-components";

import { SectionWithBg, SubTitle, Title, FlexColCenter } from "@/styles/shared";
import { ButtonLink } from "../Button";
import ToolsLogosGroup from "../ToolsLogosGroup";

const BuildWeb = () => {
  return (
    <SectionWithBg>
      <Title>Building the Web</Title>
      <SubTitle>Technologies We Use</SubTitle>
      <p>
        Every project is a new story, yet some things stay the same. We pick a
        dedicated set of tools for each one, for the best performance possible.
      </p>

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
