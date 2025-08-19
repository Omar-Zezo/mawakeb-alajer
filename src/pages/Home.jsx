import { useDispatch, useSelector } from "react-redux";
import Aboutus from "../components/Home/Aboutus";
import Conatctus from "../components/Home/Conatctus";
import Hero from "../components/Home/Hero";
import MwakebAlajer from "../components/Home/MwakebAlajer";
import OurPartners from "../components/Home/OurPartners";
import Services from "../components/Home/Services";
import Statistics from "../components/Home/Statistics";
import SupportFields from "../components/Home/SupportFields";
import { useEffect, useState } from "react";
import { getHome } from "../store/slices/Home/home";
import ScrollToTop from "../utils/ScrollToTop";
import UseLangDetection from "../hooks/UseLangDetection";
import PageLoader from "../utils/PageLoader";
import { Helmet } from "react-helmet";
import UseSettings from "../hooks/UseSettings";
import { t } from "i18next";

const Home = () => {
  const [homeSections, setHomeSections] = useState(null);
  const homeData = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const settings = UseSettings()

  const langDetection = UseLangDetection();

  useEffect(() => {
    dispatch(getHome());
  }, []);

  useEffect(() => {
    if (homeData?.data?.data?.data) {
      setHomeSections(homeData?.data?.data?.data);
    }
  }, [homeData]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>{`${t('mawakeb Al-Ajer')} - ${t('home')}`}</title>
        <meta name="description" content={settings?.description} />
        <meta name="keywords" content={settings?.keywords} />
      </Helmet>
      {!homeSections ? (
        <PageLoader />
      ) : (
        <>
          <Hero slider={homeSections?.sliders} langDetection={langDetection}/>
          <Aboutus whoAreWe={homeSections?.who_are_we} />
          <Services services={homeSections?.services} />
          <MwakebAlajer waqf={homeSections?.waqf} />
          <SupportFields seasonalPrograms={homeSections?.seasonal_programs} />
          <Statistics statistics={homeSections?.statistics} />
          <OurPartners partners={homeSections?.partners} />
          <Conatctus langDetection={langDetection} />
        </>
      )}
    </ScrollToTop>
  );
};

export default Home;
