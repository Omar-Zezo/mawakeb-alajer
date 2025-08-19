import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../store/slices/services/services";
import ScrollToTop from "../../utils/ScrollToTop";
import ServiceCard from "../../components/Cards/ServiceCard";
import { t } from "i18next";
import PageLoader from "../../utils/PageLoader";
import { Helmet } from "react-helmet";

const OurServices = () => {
  const [services, setServices] = useState(null);
  const { data } = useSelector((state) => state.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  useEffect(() => {
    if (data?.data?.data) {
      setServices(data.data.data);
    }
  }, [data]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>{t('mawakeb Al-Ajer')} - {t('our services')}</title>
      </Helmet>
      {!services ? (
        <PageLoader />
      ) : (
        <div>
          <header className="h-[350px] max-xl:h-[100px] relative rounded-b-2xl xl:rounded-b-[150px]">
            <div
              className="size-full grayscale bg-fixed absolute top-0 left-0 z-[-1] rounded-b-2xl xl:rounded-b-[150px]"
              style={{
                background: `url('${HeaderBg}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="bg-gradient-to-r from-mainColor to-secondryColor opacity-90 size-full rounded-b-2xl xl:rounded-b-[150px]"></div>
          </header>

          <div className="pt-20">
            <h1 className="text-5xl max-xl:text-4xl mb-10 text-secondryColor title-line relative pb-5 text-center font-semibold">
              {t("our services")}
            </h1>
            <div className="container mt-[150px] flex gap-5 flex-wrap items-center">
              {services?.map((service) => (
                <ServiceCard service={service} />
              ))}
            </div>
          </div>
        </div>
      )}
    </ScrollToTop>
  );
};

export default OurServices;
