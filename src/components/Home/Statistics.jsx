import React, { useEffect, useRef, useState } from "react";
import {
  StatIcon1,
  StatIcon2,
  StatIcon3,
  StatIcon4,
  StatisticsBg,
} from "../../images/imgs";
import StatisticCard from "../Cards/StatisticCard";
import { t } from "i18next";
import { motion } from "framer-motion";

const Statistics = ({ statistics }) => {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="xl:mt-20 mt-[60px]"
    >
      <h2 className="w-fit mx-auto pb-2 border-b-2 border-white text-5xl max-xl:text-4xl text-white font-semibold text-center">
        {t("mawakeb Al-Ajer statistics")}
      </h2>
      <div className="relative w-full h-[350px] xl:mt-16 mt-12">
        <img
          src={StatisticsBg}
          alt="statistics-bg"
          className="size-full absolute left-0 top-0 max-xl:hidden"
        />
        <div className="xl:w-[75%] max-xl:container xl:left-[8%] top-[10%] absolute z-10 flex flex-wrap items-center justify-between">
          {statistics?.map((statistic) => (
            <StatisticCard
              key={statistic?.id}
              statistic={statistic}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
