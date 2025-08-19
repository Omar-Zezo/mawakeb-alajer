import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { HeaderBg } from "../images/imgs";
import { getSeasonalProject } from "../store/slices/seasonal projects/seasonalProject";
import ScrollToTop from "../utils/ScrollToTop";
import PopPhotoViwer from "../utils/PopPhotoViwer";
import MediaSlider from "../utils/MediaSlider";
import PageLoader from "../utils/PageLoader";
import { Helmet } from "react-helmet";
import { t } from "i18next";

const SeasonalProject = () => {
  const [pageContent, setPageContent] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [showPopPhotoViwer, setShowPopPhotoViwer] = useState(null);
  const { data } = useSelector((state) => state.seasonalProject);

  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dispatch(getSeasonalProject(slug));
    }
  }, [slug]);

  useEffect(() => {
    if (data?.data?.data) {
      setPageContent(data.data.data);
    }
  }, [data]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>{`${t("mawakeb Al-Ajer")} - ${pageContent?.name}`}</title>
      </Helmet>
      {!pageContent ? (
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

          <div className="pt-20 container">
            <h1 className="text-5xl max-xl:text-4xl mb-10 text-secondryColor title-line relative pb-5 text-center font-semibold">
              {pageContent?.name}
            </h1>
            <div className="mb-10 p-0 rounded-xl bg-gray-100">
              <img
                src={pageContent?.image}
                alt={pageContent?.name}
                className="size-full h-[400px] object-cover rounded-xl"
              />
            </div>
            <div className="content text-lg text-secondryColor font-medium">
              {pageContent ? parse(pageContent?.content) : null}
            </div>
          </div>
          {pageContent?.media?.length > 0 ? (
            <div className="container relative mx-auto mt-16">
              <MediaSlider
                media={pageContent?.media}
                setShowPopPhotoViwer={setShowPopPhotoViwer}
                setPhoto={setPhoto}
              />
            </div>
          ) : null}

          {showPopPhotoViwer && (
            <PopPhotoViwer
              photo={photo}
              setShowPopPhotoViwer={setShowPopPhotoViwer}
            />
          )}
        </div>
      )}
    </ScrollToTop>
  );
};

export default SeasonalProject;
