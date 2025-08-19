import { MainLogo } from "../images/svg";
import Spiner from "./Spinner";

const PageLoader = () => {
  return (
    <div className="size-full fixed flex flex-col items-center justify-center top-0 z-[9999] left-0 bg-[#223C66]">
      <img src={MainLogo} alt="logo" className="w-[200px]"/>
      <Spiner/>
    </div>
  );
};

export default PageLoader;
