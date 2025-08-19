import React from "react";
import { CurveHero } from "../../images/imgs";
import HeroSlide from "./HeroSlide";

const Hero = ({slider, langDetection}) => {
  return (
    <div className="w-full max-md:h-[310px] h-[600px] xl:h-[800px] bg-secondryColor relative">
      <img
        src={CurveHero}
        alt="hero"
        className="w-full object-cover absolute left-0 bottom-[-11px] z-10"
      />
      <HeroSlide slider={slider} langDetection={langDetection}/>
    </div>
  );
};

export default Hero;
