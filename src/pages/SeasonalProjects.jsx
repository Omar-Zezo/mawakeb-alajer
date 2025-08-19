import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderBg } from "../images/imgs";
import SeasonalProjectCard from "../components/Cards/SeasonalProjectCard";
import { getSeasonalProjects } from "../store/slices/seasonal projects/seasonalProjects";
import ScrollToTop from "../utils/ScrollToTop";
import { useSearchParams } from "react-router-dom";
import { t } from "i18next";
import PageLoader from "../utils/PageLoader";
import { Helmet } from "react-helmet";

const SeasonalProjects = () => {
  const [projects, setProjects] = useState(null);
  const { data } = useSelector((state) => state.seasonalProjects);

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const dispatch = useDispatch();

  useEffect(() => {
    if (type) {
      dispatch(getSeasonalProjects(type));
    }
  }, [type]);

  useEffect(() => {
    if (data?.data?.data) {
      setProjects(data.data.data);
    }
  }, [data]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>
          {`${t("mawakeb Al-Ajer")} - ${type === "charity"
                ? t("charitable programs")
                : t("community programs")}`}
        </title>
      </Helmet>
      {!projects ? (
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
              {type === "charity"
                ? t("charitable programs")
                : t("community programs")}
            </h1>
            <div className="container mt-[150px] flex gap-5 flex-wrap items-center">
              {projects?.map((project) => (
                <SeasonalProjectCard service={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </ScrollToTop>
  );
};

export default SeasonalProjects;
