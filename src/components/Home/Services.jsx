import { t } from "i18next";
import { ServiceBg } from "../../images/imgs";
import ServicesSlider from "./ServicesSlider";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Services = ({ services }) => {
  //motion
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setInView(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

  return (
    <div className="relative">
      <motion.h2 
      ref={ref}
      initial={{ x: "-100%" }}
      animate={{ x: inView ? 0 : "-100%" }}
      transition={{ duration: 1 }}
      className="w-fit mx-auto pb-2 border-b-2 mb-5 border-white text-5xl max-xl:text-4xl text-white font-semibold text-center">
        {t("our services")}
      </motion.h2>
      <img src={ServiceBg} alt="services-bg" className="w-full lg:h-[630px] max-xl:hidden" />
      <div className="container absolute z-10 left-1/2 translate-x-[-50%] top-[100px] xl:top-[168px]">
        <ServicesSlider services={services} />
      </div>
    </div>
  );
};

export default Services;
