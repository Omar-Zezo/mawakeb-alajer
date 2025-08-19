import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { HeaderBg } from "../../images/imgs";
import { getService } from "../../store/slices/services/service";
import ScrollToTop from "../../utils/ScrollToTop";
import MediaSlider from "../../utils/MediaSlider";
import PopPhotoViwer from "../../utils/PopPhotoViwer";
import PageLoader from "../../utils/PageLoader";
import { Helmet } from "react-helmet";
import { t } from "i18next";

const ServicesDetails = () => {
  const [pageContent, setPageContent] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [showPopPhotoViwer, setShowPopPhotoViwer] = useState(null);
  const { data } = useSelector((state) => state.service);

  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dispatch(getService(slug));
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
        <title>{`${t("mawakeb Al-Ajer")} - ${pageContent?.service?.name}`}</title>
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
              {pageContent?.service?.name}
            </h1>
            <div className="flex justify-between">
              <ul className="w-[25%] h-full rounded-xl max-xl:hidden">
                {pageContent?.more_services?.map((item) => (
                  <li className="w-full">
                    <Link
                      to={`/services/${item?.slug}`}
                      className="block p-5 w-full mb-5 bg-gray-100 hover:bg-mainColor hover:text-white duration-300 rounded-xl text-xl text-secondryColor font-semibold"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-[70%] max-xl:w-full">
                <div className="mb-5 rounded-xl">
                  <img
                    src={pageContent?.service?.image}
                    alt={pageContent?.service?.name}
                    className="size-full h-[400px] object-cover rounded-xl"
                  />
                </div>
                <div className="container content text-lg text-secondryColor font-medium">
                  {pageContent ? parse(pageContent?.service?.content) : null}
                </div>
              </div>
            </div>
          </div>
          {pageContent?.service?.media?.length > 0 ? (
            <div className="container relative mx-auto mt-16">
              <MediaSlider
                media={pageContent?.service?.media}
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

export default ServicesDetails;
