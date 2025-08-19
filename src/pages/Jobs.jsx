import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderBg } from "../images/imgs";
import { getJobs } from "../store/slices/jobs/jobs";
import ScrollToTop from "../utils/ScrollToTop";
import JobPopup from "../utils/JobPopup";
import { t } from "i18next";
import PageLoader from "../utils/PageLoader";
import { Helmet } from "react-helmet";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState(null);
  const [showJobPopup, setShowJobPopup] = useState(null);
  const [jobId, setJobId] = useState(null);
  const { data } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  useEffect(() => {
    if (data?.data?.data) {
      setAllJobs(data.data.data);
    }
  }, [data]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>{t('mawakeb Al-Ajer')} - {t('jobs')}</title>
      </Helmet>
      {!allJobs ? (
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
              {t("jobs")}
            </h1>
            <p className="text-xl text-center text-gray-500 font-medium">
              {t("we Are Pleased To Have You Join Mawakeb Al-Ajer")}
            </p>
            <div className="container mt-[150px] max-xl:mt-[100px] flex gap-5 flex-wrap items-center">
              {allJobs?.jobs?.map((job) => (
                <div className="w-[400px] p-5 bg-gray-100 shadow-xl rounded-xl border-b-[10px] border-t-[10px] border-t-mainColor border-b-secondryColor">
                  <ul className="flex flex-col gap-8">
                    <li className="flex flex-col gap-2 pb-8 border-b border-orange-300">
                      <span className="text-lg text-secondryColor font-semibold">
                        {t("job title")}:{" "}
                      </span>
                      <span className="text-lg text-secondryColor font-semibold">
                        {job?.title}
                      </span>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="text-lg text-secondryColor font-semibold">
                        {t("job description")}:{" "}
                      </span>
                      <span className="text-lg text-secondryColor font-semibold">
                        {job?.specialization}
                      </span>
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      setJobId(job?.id);
                      setShowJobPopup(true);
                    }}
                    className="w-fit block px-5 py-2 mt-10 mx-auto rounded-xl bg-mainColor hover:bg-secondryColor duration-300 text-white text-base font-bold"
                  >
                    {t("apply")}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {showJobPopup && (
            <JobPopup setShowJobPopup={setShowJobPopup} jobId={jobId} />
          )}
        </div>
      )}
    </ScrollToTop>
  );
};

export default Jobs;
