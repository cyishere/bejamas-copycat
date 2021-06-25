import Image from "next/image";
import Link from "next/link";

import {
  ToolsGroupWrapper,
  ToolsGroupTitle,
  ToolsGroup,
  ToolBox,
} from "./styles";
import PartnerLabel from "../PartnerLabel";
import { staticLogos as data } from "./logos";

const StaticGenerator = () => {
  return (
    <ToolsGroupWrapper>
      <ToolsGroupTitle>Headless CMS</ToolsGroupTitle>
      <ToolsGroup>
        {data.map((item) => (
          <ToolBox key={item.name}>
            <Link href={item.link}>
              <a>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
                {item.partner ? <PartnerLabel /> : null}
              </a>
            </Link>
          </ToolBox>
        ))}
      </ToolsGroup>
    </ToolsGroupWrapper>
  );
};

export default StaticGenerator;
