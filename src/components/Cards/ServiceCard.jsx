import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({service}) => {
 
  return (
    <div className="flex flex-col items-center w-[416px] mb-20 h-[400px] bg-white shadow-xl border-b-[10px] border-mainColor rounded-[50px]">
      <Link to={`/services/${service?.slug}`} className="flex justify-center">
      <img
        src={service?.image}
        alt=""
        className="w-[90%] h-[250px] rounded-[50px] mt-[-50px]"
      />
      </Link>
      <div className="flex flex-col items-center gap-8 mt-10">
        <Link to={`/services/${service?.slug}`} className="text-secondryColor text-3xl font-semibold">
          {service?.name}
        </Link>
        <Link to={`/services/${service?.slug}`} className="flex items-center justify-center size-[50px] cursor-pointer bg-mainColor hover:bg-secondryColor duration-300 rounded-full">
          <FontAwesomeIcon
            className="text-2xl text-white"
            icon={faAnglesRight}
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
