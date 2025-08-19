import { t } from "i18next";
import { Light, LightTitle, ShadowPartner } from "../../images/imgs";
import OurPartnerSlider from "./OurPartnerSlider";

const OurPartners = ({ partners }) => {
  return (
    <div className="mt-[100px] max-xl:mt-[200px] relative pb-[110px] max-xl:pb-[80px]">
      <div className="relative h-[200px] flex items-center">
        <h2 className="w-fit mx-auto pb-2 z-[12] absolute left-1/2 translate-x-[-50%] border-b-2 border-white text-5xl max-xl:text-4xl text-white font-semibold text-center">
          {t("our partners")}
        </h2>
        <img
          src={LightTitle}
          alt="shadow"
          className="absolute left-1/2 translate-x-[-50%] top-[-40px] max-xl:top-[-25px] opacity-20 z-[10]"
        />
      </div>
      <div className="w-full relative mt-20">
        <OurPartnerSlider partners={partners} />
      </div>
      <img
        src={ShadowPartner}
        alt="shadow"
        className="w-full absolute left-1/2 translate-x-[-50%] bottom-0"
      />
    </div>
  );
};

export default OurPartners;
