import { Link } from "react-router-dom";
import { ShapImg } from "../../images/svg";
import { t } from "i18next";

const ServiceHomeCard = ({service}) => {
  return (
    <div className="service-card xl:w-[420px] h-[438px] relative rounded-xl p-3 pb-5 bg-gradient-to-l from-mainColor to-secondryColor hover:bg-gradient-to-l hover:from-white hover:to-white duration-300 shadow-lg">
      <div className="relative h-[250px] overflow-hidden">
        <Link to={`/services/${service?.slug}`}>
          <img
            src={service?.image}
            alt="service"
            className="w-full h-[250px] object-cover rounded-lg border-t-[5px] border-white"
          />
          <img src={ShapImg} alt="shap" className="absolute left-0 bottom-0" />
          <h3 className="w-full text-center text-2xl font-medium text-white absolute left-1/2 translate-x-[-50%] bottom-4">
            {service?.name}
          </h3>
        </Link>
      </div>
      <div className="details flex flex-col gap-12 mt-8">
        <p className="text-base text-white font-medium description2">
        {service?.content}
        </p>
        <Link to={`/services/${service?.slug}`} className="text-lg text-white font-medium">
          {t('read more')}
        </Link>
      </div>
      <div className="xl:w-[420px] div-border h-10 absolute bottom-[-12px] left-0 z-[-1] right-0 rounded-xl bg-gradient-to-l from-[#f2ab81] to-[#5d759c]"></div>
    </div>
  );
};

export default ServiceHomeCard;
