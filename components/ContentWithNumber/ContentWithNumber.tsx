import { BenefitTypes } from "@/utils/types";
import { Wrapper, ContentTitle, ContentIcon } from "./ContentWithNumber.styles";

interface contentProps {
  data: BenefitTypes;
}

const ContentWithNumber: React.FC<contentProps> = ({ data }) => {
  return (
    <Wrapper>
      <ContentTitle>{data.title}</ContentTitle>
      <ContentIcon>
        <source srcSet={data.icons.avif} type="image/avif" />
        <img src={data.icons.img} alt={data.title} />
      </ContentIcon>
      <p>{data.content}</p>
    </Wrapper>
  );
};

export default ContentWithNumber;
