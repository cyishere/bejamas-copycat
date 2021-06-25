import HeadlessCMS from "./HeadlessCMS";
import StaticGenerator from "./StaticGenerator";
import Deployment from "./Deployment";

const index = () => {
  return (
    <>
      <HeadlessCMS />
      <StaticGenerator />
      <Deployment />
    </>
  );
};

export default index;
