import HeadlessCMS from "./HeadlessCMS";
import StaticGenerator from "./StaticGenerator";
import Deployment from "./Deployment";
import Lego from "../Lego";

const index = () => {
  return (
    <>
      <HeadlessCMS />
      <Lego />
      <StaticGenerator />
      <Lego />
      <Deployment />
    </>
  );
};

export default index;
