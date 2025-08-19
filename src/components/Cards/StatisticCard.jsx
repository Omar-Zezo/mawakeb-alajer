import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticCard = ({ statistic }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // effect one time only
    threshold: 0.5, // start count when appear 50% of element
  });
  return (
    <div 
    ref={ref} // to watch ref div
    className="size-[250px]  max-xl:w-[48%] max-xl:h-[200px] flex flex-col items-center justify-center max-xl:mb-5 xl:gap-6 gap-4 border-white border rounded-2xl">
      <img src={statistic?.icon} alt="icon" className="w-[80px] max-xl:w-[60px]" />
      <p className="text-3xl text-gray-200 font-semibold">
        {inView ? <CountUp start={0} end={statistic?.value} separator="" duration={3} /> : 0}
      </p>
      <p className="text-xl text-center text-white font-semibold">{statistic?.name}</p>
    </div>
  );
};

export default StatisticCard;
