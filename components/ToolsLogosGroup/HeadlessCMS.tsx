import Link from "next/link";

import {
  ToolsGroupWrapper,
  ToolsGroupTitle,
  ToolsGroup,
  ToolBox,
} from "./ToolsLogosGroup.styles";
import PartnerLabel from "../PartnerLabel";
import { headlessLogos as data } from "@/data/logos";
import { icon } from "./helper";

const HeadlessCMS = () => {
  return (
    <ToolsGroupWrapper>
      <ToolsGroupTitle>Headless CMS</ToolsGroupTitle>
      <ToolsGroup>
        {data.map((item) => {
          const { name, link, width, height, partner } = item;
          return (
            <ToolBox key={name}>
              <Link href={link!}>
                <a>
                  {icon({ name, width, height })}
                  {partner ? <PartnerLabel /> : null}
                </a>
              </Link>
            </ToolBox>
          );
        })}
      </ToolsGroup>
    </ToolsGroupWrapper>
  );
};

export default HeadlessCMS;
