import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderBg } from "../../images/imgs";
import { getPhotos } from "../../store/slices/media cnter/photos";
import ScrollToTop from "../../utils/ScrollToTop";
import GalleryCard from "../../components/Cards/GalleryCard";
import PopPhotoViwer from "../../utils/PopPhotoViwer";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../utils/Pagination";
import { t } from "i18next";
import PageLoader from "../../utils/PageLoader";
import { Helmet } from "react-helmet";

const Photos = () => {
  const [allPhotos, setAllPhotos] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [showPopPhotoViwer, setShowPopPhotoViwer] = useState(null);
  const { data } = useSelector((state) => state.photos);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handlePageClick = (event) => {
    navigate(`?page=${event.selected + 1}`);
  };

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
      dispatch(getPhotos({ str: `page=${page}` }));
    } else {
      dispatch(getPhotos({ str: `page=${currentPage}` }));
    }
  }, [page]);

  useEffect(() => {
    if (data?.data?.data) {
      setAllPhotos(data.data.data);
      setTotal(data.data.data.pagination.total);
    }
  }, [data]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>{t('mawakeb Al-Ajer')} - {t('photo gallery')}</title>
      </Helmet>
      {!allPhotos ? (
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
              {t("photo gallery")}
            </h1>
            <div className="container mt-[150px]  max-xl:mt-[100px] flex gap-5 flex-wrap items-center">
              {allPhotos?.photos?.map((item) => (
                <div
                  className="overflow-hidden w-[380px]"
                  key={item?.id}
                  onClick={() => {
                    setPhoto(item);
                    setShowPopPhotoViwer(true);
                  }}
                >
                  <GalleryCard item={item} />
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              total={total}
              handlePageClick={handlePageClick}
            />
          </div>
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

export default Photos;
