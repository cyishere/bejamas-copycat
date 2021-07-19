import Image from "next/image";
import Link from "next/link";

import {
  ToolsGroupWrapper,
  ToolsGroupTitle,
  ToolsGroup,
  ToolBox,
} from "./styles";
import PartnerLabel from "../PartnerLabel";
import { deployLogos as data } from "@/data/logos";
import { icon } from "./helper";

const Deployment = () => {
  return (
    <ToolsGroupWrapper>
      <ToolsGroupTitle>Headless CMS</ToolsGroupTitle>
      <ToolsGroup>
        {data.map((item) => {
          const { name, link, width, height, partner } = item;

          return (
            <ToolBox key={name}>
              <Link href={link}>
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

export default Deployment;
