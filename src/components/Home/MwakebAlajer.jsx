import React, { useEffect, useRef, useState } from "react";
import { AboutusBg, WaqfLogo } from "../../images/imgs";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { t } from "i18next";
import { motion } from "framer-motion";

const MwakebAlajer = ({ waqf }) => {
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
    <div className="w-full xl:h-[850px] h-[600px] overflow-hidden max-xl:mt-[650px] mt-10 relative">
      <motion.img
        animate={{ y: [0, 20, 20, 0], x: [-10, 0, 0, -10] }}
        transition={{ repeat: Infinity, duration: 2 }}
        src={AboutusBg}
        alt="aboutus-bg"
        className="w-full object-cover opacity-30 absolute z-[1] left-0 top-32"
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="container flex flex-col gap-10 absolute left-1/2 translate-x-[-50%] z-[2]"
      >
        <img src={WaqfLogo} alt="waqf" className="w-[200px] mb-20 max-xl:w-[150px]" />
        <motion.h2
          ref={ref}
          initial={{ x: "-100%" }}
          animate={{ x: inView ? 0 : "-100%" }}
          transition={{ duration: 1 }}
          className="text-[80px] max-xl:text-5xl text-mainColor font-bold"
        >
          {waqf?.title}
        </motion.h2>
        <h3 className="w-fit text-white/70 text-3xl max-xl:text-2xl font-medium pb-1 border-b-2 border-white/70">
          {t("about waqf")}
        </h3>
        <motion.div
          ref={ref}
          initial={{ x: "-100%" }}
          animate={{ x: inView ? 0 : "-100%" }}
          transition={{ duration: 1 }}
          className="text-xl xl:w-[60%] text-white/70 leading-8 font-medium"
        >
          {waqf ? parse(waqf?.content) : null}
        </motion.div>
        <Link
          to={"/get-to-know-us/who-are-we/okf_moakl_alagr"}
          className="w-fit py-2 px-6 mr-auto mt-5 text-white font-semibold rounded-lg bg-[#536f9e] hover:translate-x-1 hover:bg-mainColor duration-300"
        >
          {t("read more")}
        </Link>
      </motion.div>
    </div>
  );
};

export default MwakebAlajer;
