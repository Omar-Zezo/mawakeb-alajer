import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { getNewsDetails } from "../../store/slices/media cnter/newsDetails";
import { HeaderBg } from "../../images/imgs";
import ScrollToTop from "../../utils/ScrollToTop";
import UseLangDetection from "../../hooks/UseLangDetection";
import PageLoader from "../../utils/PageLoader";
import { Helmet } from "react-helmet";
import { t } from "i18next";

const NewsDetails = () => {
  const [pageContent, setPageContent] = useState(null);
  const { data } = useSelector((state) => state.newsDetails);

  const dispatch = useDispatch();
  const langDetection = UseLangDetection();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dispatch(getNewsDetails(slug));
    }
  }, [slug]);

  useEffect(() => {
    if (data?.data?.data?.news) {
      setPageContent(data?.data?.data?.news);
    }
  }, [data]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>{`${t("mawakeb Al-Ajer")} - ${pageContent?.title}`}</title>
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
            <h1 className="text-5xl max-xl:text-3xl leading-8 mb-10 text-secondryColor relative pb-5 text-center font-semibold">
              {pageContent?.title}
            </h1>
            <div className="mb-10 p-0 rounded-xl relative bg-gray-100">
              <div
                className={`rounded-t-full size-[70px] text-center absolute ${
                  langDetection === "en" ? "left-5" : "right-5"
                } bottom-0 bg-mainColor text-white font-semibold flex items-center`}
              >
                {pageContent?.created_at_human}
              </div>
              <img
                src={pageContent?.image}
                alt={pageContent?.title}
                className="size-full h-[400px] object-cover rounded-xl"
              />
            </div>
            <div className="container content">
              {pageContent ? parse(pageContent?.content) : null}
            </div>
          </div>
        </div>
      )}
    </ScrollToTop>
  );
};

export default NewsDetails;
