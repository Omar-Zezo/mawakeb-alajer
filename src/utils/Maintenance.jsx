import parse from "html-react-parser";
import { MaintenanceImg } from "../images/imgs";


const Maintenance = ({message}) => {
  return <div className="h-screen flex items-center justify-center">
    <div className="size-fit flex flex-col justify-center items-center gap-10">
    <img src={MaintenanceImg} alt="maintenance" className="w-full xl:w-[70%]"/>
    <p className="text-3xl text-secondryColor font-semibold">{message ? parse(message) : null}</p>
    </div>
  </div>
};

export default Maintenance;
