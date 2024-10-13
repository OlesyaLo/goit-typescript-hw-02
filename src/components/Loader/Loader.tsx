import { LineWave } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <LineWave
  visible={true}
  height="500"
  width="500"
  color="#4390aa"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass={css.loader}
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
  />
  );
};

export default Loader;