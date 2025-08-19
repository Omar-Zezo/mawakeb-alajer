import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { applyForJob } from "../store/slices/jobs/applyJob";
import BtnLoader from "./BtnLoader";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import UseLangDetection from "../hooks/UseLangDetection";

const JobPopup = ({ setShowJobPopup, jobId }) => {
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const applyJobData = useSelector((state) => state.applyJob);

  const dispatch = useDispatch()
  const langDetection = UseLangDetection()


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  //submit msg form
  const formSubmit = (data) => {
    setShowBtnLoader(true);
    // FormData
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("job_id", jobId);

    // if cv with data
    if (data.cv?.[0]) {
      formData.append("cv", data.cv[0]);
    }

    // if another_file with data
    if (data.another_file?.[0]) {
      formData.append("another_file", data.another_file[0]);
    }

    // dispatch data
    dispatch(applyForJob(formData));
  };

  //handel btn loader
  useEffect(() => {
    if (applyJobData.data) {
      setShowBtnLoader(false);
      setShowJobPopup(false);
    }
    if (applyJobData.error) {
      setShowBtnLoader(false);
    }
  }, [applyJobData]);

  return (
    <div
      onClick={() => setShowJobPopup(false)}
      className="size-full flex items-center bg-black/70 fixed top-0 left-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="container max-xl:h-full bg-gray-100 rounded-2xl p-10 overflow-y-auto"
      >
        <div
        onClick={()=> setShowJobPopup(false)}
        className="size-8 cursor-pointer mr-auto mb-10 flex justify-center items-center border border-black/30 rounded-md">
        <FontAwesomeIcon className="text-xl text-black/80" icon={faXmark} />
        </div>
        <form
          className="flex items-center justify-between flex-wrap gap-8"
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className="w-[48%] max-xl:w-full flex flex-col gap-4">
            <label
              htmlFor="first_name"
              className="px-4 text-lg text-secondryColor font-medium"
            >
              {t('first name')}
            </label>
            <input
              type="text"
              id="first_name"
              placeholder={t('first name')}
              className="p-4 outline-mainColor border border-secondryColor rounded-[50px]"
              {...register("first_name", {
                required: t('this field is required'),
                minLength: {
                  value: 3,
                  message: t('the name must be 3 letters or more'),
                },
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.full_name?.message}
            </p>
          </div>

          <div className="w-[48%] max-xl:w-full flex flex-col gap-4">
            <label
              htmlFor="last_name"
              className="px-4 text-lg text-secondryColor font-medium"
            >
              {t('last name')}
            </label>
            <input
              type="text"
              id="last_name"
              placeholder={t('last name')}
              className="p-4 outline-mainColor border border-secondryColor rounded-[50px]"
              {...register("last_name", {
                required: t('this field is required'),
                minLength: {
                  value: 3,
                  message: t('the name must be 3 letters or more'),
                },
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.last_name?.message}
            </p>
          </div>

          <div className="w-[48%] max-xl:w-full flex flex-col gap-4">
            <label
              htmlFor="phone"
              className="px-4 text-lg text-secondryColor font-medium"
            >
              {t('phone')}
            </label>
            <input
              type="tel"
              id="phone"
              placeholder={t('phone')}
              className={`p-4 ${langDetection === "en" ? 'text-left':'text-right'} outline-mainColor border border-secondryColor rounded-[50px]`}
              {...register("phone", {
                required: t('this field is required'),
                pattern: {
                  value: /^(05\d{8}|5\d{8})$/,
                  message: t('we accept Saudi numbers only'),
                },
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.phone?.message}
            </p>
          </div>

          <div className="w-[48%] max-xl:w-full flex flex-col gap-4">
            <label
              htmlFor="email"
              className="px-4 text-lg text-secondryColor font-medium"
            >
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t('email')}
              className={`p-4 ${langDetection === "en" ? 'text-left':'text-right'} outline-mainColor border border-secondryColor rounded-[50px]`}
              {...register("email", {
                required: t('this field is required'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('invalid email'),
                },
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.email?.message}
            </p>
          </div>

          <div className="w-[48%] max-xl:w-full flex flex-col gap-4">
            <label
              htmlFor="cv"
              className="px-4 text-lg text-secondryColor font-medium"
            >
              {t('cv')}
            </label>
            <input
              type="file"
              id="cv"
              className="p-4 text-right outline-mainColor border border-secondryColor rounded-[50px]"
              {...register("cv", {
                required: t('this field is required'),
                validate: (value) => {
                  if (value && value[0]?.type !== "application/pdf") {
                    return t('the file must be in PDF format');
                  }
                },
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.cv?.message}
            </p>
          </div>

          <div className="w-[48%] max-xl:w-full flex flex-col gap-4">
            <label
              htmlFor="another_file"
              className="px-4 text-lg text-secondryColor font-medium"
            >
              {t('another files')}
            </label>
            <input
              type="file"
              id="another_file"
              className="p-4 text-right outline-mainColor border border-secondryColor rounded-[50px]"
              {...register("another_file", {
                required: t('this field is required'),
                validate: (value) => {
                  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
                  if (value && !allowedTypes.includes(value[0]?.type)) {
                    return t('the file must be in JPG, JPEG or PNG format');
                  }
                },
              })}
            />
            <p className="mt-1 px-2 text-red-600 text-sm">
              {errors.another_file?.message}
            </p>
          </div>
          <div className="w-full mt-5">
            <button
              type="submit"
              className="w-1/2 h-[60px] block relative mx-auto bg-secondryColor hover:bg-mainColor duration-300 py-3 rounded-[50px] text-white text-base font-semibold"
            >
              {showBtnLoader ? <BtnLoader /> : t('send')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPopup;
